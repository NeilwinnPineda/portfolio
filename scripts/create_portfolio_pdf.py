from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle,
    Image, KeepTogether, PageBreak, HRFlowable
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "n-pineda-technical-portfolio.pdf"
IMAGES = ROOT / "public" / "assets" / "images" / "portfolio"

PAGE_W, PAGE_H = A4
MARGIN_X = 18 * mm
MARGIN_Y = 16 * mm
ACCENT = colors.HexColor("#4EC9B0")
INK = colors.HexColor("#13212A")
MUTED = colors.HexColor("#5E6B73")
PALE = colors.HexColor("#EFF6F4")
LINE = colors.HexColor("#D7E1DE")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Eyebrow", fontName="Helvetica-Bold", fontSize=8.5, leading=11, textColor=ACCENT, spaceAfter=6, uppercase=True))
styles.add(ParagraphStyle(name="Hero", fontName="Helvetica-Bold", fontSize=31, leading=35, textColor=INK, spaceAfter=10))
styles.add(ParagraphStyle(name="Deck", fontName="Helvetica", fontSize=14, leading=20, textColor=MUTED, spaceAfter=14))
styles.add(ParagraphStyle(name="Section", fontName="Helvetica-Bold", fontSize=17, leading=22, textColor=INK, spaceBefore=2, spaceAfter=10))
styles.add(ParagraphStyle(name="CardTitle", fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=INK, spaceAfter=4))
styles.add(ParagraphStyle(name="Body", fontName="Helvetica", fontSize=9.5, leading=14, textColor=MUTED))
styles.add(ParagraphStyle(name="Small", fontName="Helvetica", fontSize=8, leading=10.5, textColor=MUTED))
styles.add(ParagraphStyle(name="Foot", fontName="Helvetica", fontSize=7.5, leading=9, textColor=MUTED))
styles.add(ParagraphStyle(name="BigQuote", fontName="Helvetica-Bold", fontSize=18, leading=25, textColor=INK, spaceAfter=8))


def p(text, style="Body"):
    return Paragraph(text, styles[style])


def pill(text):
    table = Table([[p(text, "Small")]], colWidths=[None], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE),
        ("BOX", (0, 0), (-1, -1), 0.4, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    return table


def card(title, body):
    content = [p(title, "CardTitle"), p(body)]
    table = Table([[content]], colWidths=[82 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.white),
        ("BOX", (0, 0), (-1, -1), 0.45, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
    ]))
    return table


def image_card(filename, caption):
    im = Image(str(IMAGES / filename), width=82 * mm, height=46 * mm, kind="proportional")
    card = Table([[im], [p(caption, "Small")]], colWidths=[82 * mm], rowHeights=[46 * mm, 12 * mm])
    card.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.white),
        ("BOX", (0, 0), (-1, -1), 0.45, LINE),
        ("LEFTPADDING", (0, 0), (-1, 0), 0),
        ("RIGHTPADDING", (0, 0), (-1, 0), 0),
        ("TOPPADDING", (0, 0), (-1, 0), 0),
        ("BOTTOMPADDING", (0, 0), (-1, 0), 0),
        ("LEFTPADDING", (0, 1), (-1, 1), 7),
        ("RIGHTPADDING", (0, 1), (-1, 1), 7),
        ("TOPPADDING", (0, 1), (-1, 1), 5),
        ("BOTTOMPADDING", (0, 1), (-1, 1), 4),
    ]))
    return card


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.4)
    canvas.line(MARGIN_X, 11 * mm, PAGE_W - MARGIN_X, 11 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(MARGIN_X, 7 * mm, "N. PINEDA  /  TECHNICAL PORTFOLIO")
    canvas.drawRightString(PAGE_W - MARGIN_X, 7 * mm, f"{doc.page}")
    canvas.restoreState()


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(str(OUT), pagesize=A4, leftMargin=MARGIN_X, rightMargin=MARGIN_X,
                          topMargin=MARGIN_Y, bottomMargin=18 * mm)
    frame = Frame(MARGIN_X, 18 * mm, PAGE_W - 2 * MARGIN_X, PAGE_H - 34 * mm, id="body")
    doc.addPageTemplates(PageTemplate(id="portfolio", frames=[frame], onPage=footer))

    story = []
    # Page 1
    story += [Spacer(1, 19 * mm), p("Technical Portfolio  /  2026", "Eyebrow"),
              p("N. Pineda", "Hero"),
              p("3D visualization, full stack delivery, workflow automation, and runtime-focused tools.", "Deck"),
              HRFlowable(width="100%", thickness=1, color=ACCENT, spaceBefore=10, spaceAfter=16)]
    story += [p("A systems-minded practitioner who moves between visual production and software delivery. The work is grounded in reducing operational friction: building useful utilities, production-ready visuals, and interactive technical experiments.", "BigQuote")]
    tags = [pill(x) for x in ["3D / Rendering", "MEAN / MERN", "Automation", "Runtime Tools", "AI Workflows"]]
    story += [Spacer(1, 10), Table([tags], colWidths=[31 * mm, 31 * mm, 29 * mm, 31 * mm, 31 * mm], hAlign="LEFT"), Spacer(1, 20 * mm)]
    story += [p("Core focus", "Eyebrow"),
              p("Practical technical environments that hold up under production pressure - from high-volume visualization pipelines to internal dashboards and prototype-first rendering research.", "Body")]
    story.append(PageBreak())

    # Page 2
    story += [p("Selected Visual Work", "Section"),
              p("A selection from architectural visualization output. Images emphasize modeling, rendering, material detail, composition, and production-ready presentation.", "Body"), Spacer(1, 8)]
    grid = [[image_card("4.jpg", "Architectural visualization - exterior composition"), image_card("29.jpg", "Architectural visualization - commercial interior")],
            [image_card("39.jpg", "Architectural visualization - material and lighting study"), image_card("45.jpg", "Architectural visualization - finished scene")]]
    story += [Table(grid, colWidths=[82 * mm, 82 * mm], rowHeights=[64 * mm, 64 * mm], hAlign="LEFT", style=[("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 7), ("TOPPADDING", (0,0), (-1,-1), 0), ("BOTTOMPADDING", (0,0), (-1,-1), 8)])]
    story.append(PageBreak())

    # Page 3
    story += [p("Capabilities", "Section"), p("Cross-domain work built around production needs, iteration speed, and clarity of execution.", "Body"), Spacer(1, 9)]
    cards = [[card("Production 3D Visualization", "High-volume modeling, rendering, post-processing, and visual QA across studio pipelines. Tools include SketchUp, VRay, AutoCAD, Lumion, and Enscape."),
              card("Full Stack Web Development", "Web applications, REST APIs, dashboards, browser extensions, and dynamic interfaces using JavaScript/TypeScript, Angular, React, Node.js, and Express.")],
             [card("Workflow Automation", "Custom reporting surfaces, scraping helpers, spreadsheet automation, and operational utilities designed to reduce repetitive effort and improve team visibility."),
              card("Runtime and Tool Development", "Exploration of reusable rendering infrastructure, interaction behavior, editor/runtime separation, and prototype-first technical direction with C++, C#, DirectX, HLSL, and CMake.")],
             [card("AI-Assisted Execution", "LLM-enabled workflows for rapid prototyping, debugging support, code generation, and iterative technical problem-solving."),
              card("Data and Operations", "Structured data workflows with MongoDB, Google Apps Script, Excel, Google Sheets, and practical dashboard/reporting surfaces.")]]
    story += [Table(cards, colWidths=[82 * mm, 82 * mm], rowHeights=[48 * mm, 48 * mm, 42 * mm], style=[("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 7), ("TOPPADDING", (0,0), (-1,-1), 0), ("BOTTOMPADDING", (0,0), (-1,-1), 7)])]
    story.append(PageBreak())

    # Page 4
    story += [p("Experience and Research", "Section"), Spacer(1, 2)]
    roles = [
        ("3D Modeling Team Lead  /  EMAPTA", "2025 - 2026", "Led high-volume architectural visualization delivery, coordinating production, quality standards, and technical problem-solving across client work."),
        ("3D Modeling and Rendering  /  SHORE360", "2023 - 2025", "Delivered architectural modeling, rendering, and post-processing within demanding turnaround schedules while maintaining consistent quality across large production batches."),
        ("Unity Production Internship  /  Prodigal Developers", "2023", "Contributed to Unity-oriented asset preparation, geometry optimization, and game-ready production structures.")]
    for title, period, desc in roles:
        story += [p(title, "CardTitle"), p(period, "Eyebrow"), p(desc), Spacer(1, 8)]
    story += [Spacer(1, 5), HRFlowable(width="100%", thickness=0.7, color=LINE, spaceBefore=6, spaceAfter=12),
              p("Flagship R&amp;D: Engine-Chili2.0", "CardTitle"),
              p("A C++ rendering and interaction environment for investigating reusable graphics infrastructure, scene stability, camera/input behavior, entity flow, and editor/runtime separation. Current stack: C++, DirectX, HLSL, and CMake.", "Body"),
              Spacer(1, 14), p("Work-first, privacy-minimized profile", "Eyebrow"),
              p("Full project galleries and code repositories are available through the public portfolio and GitHub profile. Direct contact details intentionally omitted from this document.", "Body")]
    doc.build(story)


if __name__ == "__main__":
    build()
    print(OUT)
