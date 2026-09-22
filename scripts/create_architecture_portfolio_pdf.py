from pathlib import Path
import hashlib
import sys
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white
from reportlab.lib.utils import ImageReader

ROOT = Path(__file__).resolve().parents[1]
COMPRESSED = "--compressed" in sys.argv
OUT = ROOT / "output" / "pdf" / (
    "n-pineda-technical-portfolio-compressed.pdf"
    if COMPRESSED else "n-pineda-technical-portfolio.pdf"
)
RENDERS = ROOT / "public" / "assets" / "images" / "portfolio"
CERTS = ROOT / "public" / "assets" / "images" / "certificates"
PLANFORGE = ROOT / "tmp" / "planforge"
COMPRESSED_IMAGES = ROOT / "tmp" / "compressed-portfolio-images"
PREPARED_IMAGES = {}
W, H = A4
MM = 2.83465
INK = HexColor("#152129")
ACCENT = HexColor("#36BCA4")
PAPER = HexColor("#F8FAF9")


def prepared_image(path):
    """Make a smaller JPEG copy only for the optional compressed PDF export."""
    path = Path(path)
    if not COMPRESSED:
        return path
    key = str(path.resolve())
    if key in PREPARED_IMAGES:
        return PREPARED_IMAGES[key]
    COMPRESSED_IMAGES.mkdir(parents=True, exist_ok=True)
    destination = COMPRESSED_IMAGES / f"{hashlib.sha1(key.encode()).hexdigest()}.jpg"
    if not destination.exists() or destination.stat().st_mtime < path.stat().st_mtime:
        with Image.open(path) as source:
            image = source.convert("RGB")
            image.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
            image.save(destination, "JPEG", quality=84, optimize=True, progressive=True)
    PREPARED_IMAGES[key] = destination
    return destination


def draw_image(c, path, x, y, width, height, align_y=0.5):
    image = ImageReader(str(prepared_image(path)))
    iw, ih = image.getSize()
    scale = max(width / iw, height / ih)
    dw, dh = iw * scale, ih * scale
    clip = c.beginPath()
    clip.rect(x, y, width, height)
    c.saveState()
    c.clipPath(clip, stroke=0, fill=0)
    c.drawImage(image, x + (width - dw) / 2, y + (height - dh) * align_y,
                width=dw, height=dh, mask="auto")
    c.restoreState()


def draw_image_fit(c, path, x, y, width, height):
    """Place the full image inside a frame without cutting off its composition."""
    image = ImageReader(str(prepared_image(path)))
    iw, ih = image.getSize()
    scale = min(width / iw, height / ih)
    dw, dh = iw * scale, ih * scale
    c.drawImage(image, x + (width - dw) / 2, y + (height - dh) / 2,
                width=dw, height=dh, mask="auto")


def page_header(c, label, number):
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    margin = 20 * MM
    header_y, header_h = H - 24 * MM, 9 * MM
    # A consistent exterior-image strip makes the content pages read as one set.
    draw_image(c, RENDERS / "3.jpg", margin, header_y, W - margin * 2, header_h)
    c.setFont("Helvetica-Bold", 8)
    label_text = label.upper()
    label_w = min(W - margin * 2 - 26 * MM, c.stringWidth(label_text) + 10 * MM)
    c.setFillColor(PAPER)
    c.rect(margin, header_y, label_w, header_h, fill=1, stroke=0)
    c.setFillColor(ACCENT)
    c.drawString(margin + 4 * MM, header_y + 3.2 * MM, label_text)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 8)
    c.drawRightString(W - margin - 4 * MM, header_y + 3.2 * MM, f"{number:02d}")


def footer(c, number):
    c.setStrokeColor(HexColor("#D6DFDC"))
    c.setLineWidth(0.5)
    c.line(20 * MM, 12 * MM, W - 20 * MM, 12 * MM)
    c.setFillColor(INK)
    c.setFont("Helvetica", 7.5)
    c.drawString(20 * MM, 7 * MM, "SELECTED WORK")
    c.drawRightString(W - 20 * MM, 7 * MM, str(number))


def gallery(c, number, section, files):
    page_header(c, section, number)
    margin, gap = 20 * MM, 7 * MM
    top = H - 32 * MM
    cell_w = W - margin * 2
    cell_h = (top - margin - gap) / 2
    for i, filename in enumerate(files):
        x = margin
        y = top - (i + 1) * cell_h - i * gap
        c.setFillColor(white)
        c.rect(x, y, cell_w, cell_h, fill=1, stroke=0)
        if section == "Exterior Work":
            draw_image_fit(c, RENDERS / filename, x, y, cell_w, cell_h)
        else:
            draw_image(c, RENDERS / filename, x, y, cell_w, cell_h)
    footer(c, number)
    c.showPage()


def certificates(c, number, files):
    page_header(c, "Certificates", number)
    margin, gap = 20 * MM, 10 * MM
    cell_w = W - margin * 2
    cell_h = (H - 60 * MM - gap) / 2
    y_positions = [H - 32 * MM - cell_h, 20 * MM]
    for filename, y in zip(files, y_positions):
        c.setFillColor(white)
        c.rect(margin, y, cell_w, cell_h, fill=1, stroke=0)
        draw_image(c, CERTS / filename, margin, y, cell_w, cell_h)
    footer(c, number)
    c.showPage()


def planforge(c, number, section, filename):
    page_header(c, section, number)
    margin = 20 * MM
    draw_image(c, PLANFORGE / filename, margin, 20 * MM,
               W - margin * 2, H - 54 * MM, align_y=1)
    footer(c, number)
    c.showPage()


def section_divider(c, title, filename, number):
    """Use a complete exterior image as a quiet visual pause between sections."""
    c.setFillColor(INK)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    margin = 14 * MM
    image = ImageReader(str(prepared_image(RENDERS / filename)))
    image_w = W - margin * 2
    image_h = image_w * image.getSize()[1] / image.getSize()[0]
    draw_image_fit(c, RENDERS / filename, margin, H - 48 * MM - image_h, image_w, image_h)
    c.setFillColor(ACCENT)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(22 * MM, H - 22 * MM, "SELECTED WORK")
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 9)
    c.drawRightString(W - 22 * MM, H - 22 * MM, f"{number:02d}")
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 27)
    c.drawString(22 * MM, 52 * MM, title)
    c.setFillColor(ACCENT)
    c.rect(22 * MM, 40 * MM, 31 * MM, 1.5, fill=1, stroke=0)
    c.showPage()


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)

    # Cover - a deliberate close crop, used only here as the visual lead.
    draw_image(c, RENDERS / "45.jpg", 0, 0, W, H, align_y=0.55)
    c.saveState()
    c.setFillColor(HexColor("#0D161C"))
    c.setFillAlpha(0.48)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.restoreState()
    c.setFillColor(ACCENT)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(22 * MM, H - 28 * MM, "SELECTED WORK")
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 27)
    c.drawString(22 * MM, 47 * MM, "Selected Work")
    c.setFillColor(ACCENT)
    c.rect(22 * MM, 34 * MM, 31 * MM, 1.5, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica", 9)
    c.drawString(22 * MM, 21 * MM, "N. PINEDA")
    c.showPage()

    groups = [
        ("Exterior Work", ["21.jpg", "24.jpg"]),
        ("Exterior Work", ["22.jpg", "28.jpg"]),
        ("Exterior Work", ["31.jpg", "32.jpg"]),
        ("Exterior Work", ["34.jpg", "17.jpg"]),
        ("Exterior Work", ["5.jpg", "26.jpg"]),
        ("Interior Work", ["7.jpg", "12.jpg"]),
        ("Interior Work", ["18.jpg", "36.jpg"]),
        ("Commercial Work", ["13.jpg", "23.jpg"]),
        ("Commercial Work", ["27.jpg", "29.jpg"]),
    ]
    # Cover is unnumbered; following labels match the physical PDF page numbers.
    page_number = 2
    divider_images = {
        "Interior Work": "28.jpg",
        "Commercial Work": "14.jpg",
    }
    started_sections = set()
    for section, images in groups:
        if section in divider_images and section not in started_sections:
            section_divider(c, section, divider_images[section], page_number)
            page_number += 1
        gallery(c, page_number, section, images)
        page_number += 1
        started_sections.add(section)
    section_divider(c, "Planforge", "34.jpg", page_number)
    page_number += 1
    planforge(c, page_number, "Planforge - Workflow", "planforge-program-setup.png")
    page_number += 1
    planforge(c, page_number, "Planforge - Candidate Gallery", "planforge-candidate-gallery.png")
    page_number += 1
    certificates(c, page_number, ["cert-1.png", "cert-2.png"])
    certificates(c, page_number + 1, ["cert-3.png", "cert-4.png"])
    c.save()
    print(OUT)


if __name__ == "__main__":
    build()
