#!/usr/bin/env python3
"""Trim the brand logos and write web icons.

Usage: python3 tools/brand/export-logos.py MARK.png FULL.png

MARK is the symbol without the Persian name. FULL is the lockup with that name.
Both outputs keep transparency. Square icons use a white plate so the mark
stays visible on dark browser chrome.
"""

from __future__ import annotations

import base64
import io
import struct
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
BRAND = ROOT / "public" / "brand"
PUBLIC = ROOT / "public"
MARK_MAX = 480
PAD = 4


def trim(image: Image.Image, pad: int = PAD) -> Image.Image:
    rgba = image.convert("RGBA")
    pixels = rgba.load()
    width, height = rgba.size
    for y in range(height):
        for x in range(width):
            red, green, blue, alpha = pixels[x, y]
            if alpha and red >= 250 and green >= 250 and blue >= 250:
                pixels[x, y] = (red, green, blue, 0)
    box = rgba.getbbox()
    if not box:
        return rgba
    cropped = rgba.crop(box)
    if pad <= 0:
        return cropped
    canvas = Image.new(
        "RGBA",
        (cropped.width + pad * 2, cropped.height + pad * 2),
        (0, 0, 0, 0),
    )
    canvas.paste(cropped, (pad, pad))
    return canvas


def fit(image: Image.Image, longest: int) -> Image.Image:
    if max(image.size) <= longest:
        return image
    copy = image.copy()
    copy.thumbnail((longest, longest), Image.Resampling.LANCZOS)
    return copy


def save_pair(image: Image.Image, stem: str) -> None:
    BRAND.mkdir(parents=True, exist_ok=True)
    png = BRAND / f"{stem}.png"
    webp = BRAND / f"{stem}.webp"
    image.save(png, format="PNG", optimize=True)
    image.save(webp, format="WEBP", quality=90, method=6)
    print(f"{stem}: {image.size[0]}x{image.size[1]} png={png.stat().st_size} webp={webp.stat().st_size}")


def plate(mark: Image.Image, size: int, padding_ratio: float = 0.12) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    inner = max(1, int(size * (1 - padding_ratio * 2)))
    fitted = mark.copy()
    fitted.thumbnail((inner, inner), Image.Resampling.LANCZOS)
    x = (size - fitted.width) // 2
    y = (size - fitted.height) // 2
    canvas.alpha_composite(fitted, (x, y))
    return canvas


def png_to_ico(png: bytes) -> bytes:
    header = struct.pack("<HHH", 0, 1, 1)
    entry = struct.pack("<BBBBHHII", 32, 32, 0, 0, 1, 32, len(png), 22)
    return header + entry + png


def main() -> None:
    if len(sys.argv) != 3:
        print("usage: export-logos.py MARK.png FULL.png", file=sys.stderr)
        sys.exit(1)
    mark_full = trim(Image.open(sys.argv[1]))
    full = trim(Image.open(sys.argv[2]))
    mark = fit(mark_full, MARK_MAX)
    save_pair(mark, "logo-mark")
    save_pair(full, "logo-full")

    for size, name in (
        (512, "icon-512.png"),
        (192, "icon-192.png"),
        (180, "apple-touch-icon.png"),
    ):
        path = PUBLIC / name
        plate(mark_full, size).save(path, format="PNG", optimize=True)
        print(f"{name}: {path.stat().st_size}")

    icon32 = plate(mark_full, 32)
    buffer = io.BytesIO()
    icon32.save(buffer, format="PNG", optimize=True)
    png = buffer.getvalue()
    (PUBLIC / "favicon.ico").write_bytes(png_to_ico(png))

    icon64 = io.BytesIO()
    plate(mark_full, 64).save(icon64, format="PNG", optimize=True)
    encoded = base64.b64encode(icon64.getvalue()).decode("ascii")
    svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
        f'<image width="64" height="64" href="data:image/png;base64,{encoded}"/>'
        "</svg>\n"
    )
    (PUBLIC / "favicon.svg").write_text(svg)
    print(f"favicon.svg: {(PUBLIC / 'favicon.svg').stat().st_size}")


if __name__ == "__main__":
    main()
