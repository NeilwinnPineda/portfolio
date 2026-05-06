Add-Type -AssemblyName System.Drawing

$sourceDir = Join-Path $PSScriptRoot '..\public\assets\images\portfolio'
$thumbDir = Join-Path $sourceDir 'thumbs'

New-Item -ItemType Directory -Force -Path $thumbDir | Out-Null

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }

$encoder = [System.Drawing.Imaging.Encoder]::Quality
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, [long]82)

$extensions = @('.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp')
$count = 0

Get-ChildItem -Path $sourceDir -File | Where-Object { $extensions -contains $_.Extension.ToLower() } | ForEach-Object {
  $inputPath = $_.FullName
  $outputPath = Join-Path $thumbDir $_.Name

  $image = [System.Drawing.Image]::FromFile($inputPath)

  try {
    $targetWidth = 640
    $scale = $targetWidth / $image.Width
    if ($scale -gt 1) { $scale = 1 }

    $thumbWidth = [int][Math]::Round($image.Width * $scale)
    $thumbHeight = [int][Math]::Round($image.Height * $scale)

    $bitmap = New-Object System.Drawing.Bitmap $thumbWidth, $thumbHeight
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)

    try {
      $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
      $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      $graphics.DrawImage($image, 0, 0, $thumbWidth, $thumbHeight)

      $bitmap.Save($outputPath, $jpegCodec, $encoderParams)
      $count++
    }
    finally {
      $graphics.Dispose()
      $bitmap.Dispose()
    }
  }
  finally {
    $image.Dispose()
  }
}

Write-Output "Thumbnail manifest: $count images written."
