#!/usr/bin/env python3
"""
Genera presentación PPTX: Transformación Digital y Soporte Inteligente — Sempitecno.
Diseño visual mejorado con logos oficiales y sección ampliada de agentes IA (L1/L2).
"""

from __future__ import annotations

import os
from pathlib import Path

from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_AUTO_SHAPE_TYPE, MSO_CONNECTOR
from pptx.enum.text import MSO_ANCHOR, PP_ALIGN
from pptx.util import Inches, Pt

# —— Paleta Sempitecno ——
AZUL = RGBColor(0x0B, 0x25, 0x45)
VERDE = RGBColor(0x1A, 0xBC, 0x9C)
BLANCO = RGBColor(0xFF, 0xFF, 0xFF)
GRIS = RGBColor(0x4B, 0x55, 0x63)
GRIS_CLARO = RGBColor(0xF3, 0xF4, 0xF6)
GRIS_TEXTO = RGBColor(0x94, 0xA3, 0xB8)
NARANJA_L2 = RGBColor(0xF5, 0x9E, 0x0B)
AZUL_ACENTO = RGBColor(0x3B, 0x82, 0xF6)

SCRIPT_DIR = Path(__file__).resolve().parent
LOGO_DIR = SCRIPT_DIR / "assets" / "logos"
OUTPUT = SCRIPT_DIR / "Transformacion_Digital_Soporte_Inteligente_Sempitecno.pptx"

SLIDE_W = Inches(13.333)
SLIDE_H = Inches(7.5)


def set_slide_size(prs: Presentation) -> None:
    prs.slide_width = SLIDE_W
    prs.slide_height = SLIDE_H


def blank_slide(prs: Presentation):
    return prs.slides.add_slide(prs.slide_layouts[6])


def add_rect(slide, left, top, width, height, fill_rgb, line_rgb=None):
    shape = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.RECTANGLE, left, top, width, height
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill_rgb
    if line_rgb:
        shape.line.color.rgb = line_rgb
    else:
        shape.line.fill.background()
    return shape


def add_rounded_card(slide, left, top, width, height, fill=GRIS_CLARO):
    shape = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.ROUNDED_RECTANGLE, left, top, width, height
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill
    shape.line.fill.background()
    return shape


def add_accent_bar(slide, left, top, width=Inches(0.12), height=Inches(0.55)):
    return add_rect(slide, left, top, width, height, VERDE)


def watermark(slide, dark: bool = False):
    box = slide.shapes.add_textbox(Inches(10.2), Inches(0.35), Inches(2.8), Inches(0.5))
    tf = box.text_frame
    p = tf.paragraphs[0]
    run1 = p.add_run()
    run1.text = "Sempi"
    run1.font.name = "Calibri"
    run1.font.bold = True
    run1.font.size = Pt(18)
    run1.font.color.rgb = BLANCO if dark else AZUL
    run2 = p.add_run()
    run2.text = "tecno"
    run2.font.name = "Calibri"
    run2.font.bold = True
    run2.font.size = Pt(18)
    run2.font.color.rgb = VERDE


def add_title(slide, text: str, subtitle: str | None = None, dark: bool = False):
    title_color = BLANCO if dark else AZUL
    box = slide.shapes.add_textbox(Inches(0.75), Inches(0.55), Inches(11.5), Inches(0.9))
    p = box.text_frame.paragraphs[0]
    p.text = text
    p.font.name = "Calibri"
    p.font.bold = True
    p.font.size = Pt(34)
    p.font.color.rgb = title_color
    add_rect(slide, Inches(0.75), Inches(1.38), Inches(2.8), Inches(0.06), VERDE)
    if subtitle:
        sub = slide.shapes.add_textbox(Inches(0.75), Inches(1.55), Inches(11), Inches(0.55))
        sp = sub.text_frame.paragraphs[0]
        sp.text = subtitle
        sp.font.name = "Calibri"
        sp.font.size = Pt(16)
        sp.font.color.rgb = GRIS_TEXTO if dark else GRIS


def add_bullets(slide, items: list[str], left=Inches(0.9), top=Inches(2.0), width=Inches(5.8), size=16):
    box = slide.shapes.add_textbox(left, top, width, Inches(4.5))
    tf = box.text_frame
    tf.word_wrap = True
    for i, item in enumerate(items):
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.text = f"▸  {item}"
        p.font.name = "Calibri"
        p.font.size = Pt(size)
        p.font.color.rgb = GRIS if not hasattr(slide, "_dark") else BLANCO
        p.space_after = Pt(10)
        p.level = 0


def add_logo(slide, name: str, left, top, max_w=Inches(1.6), max_h=Inches(0.75)):
    path = LOGO_DIR / f"{name}.png"
    if not path.exists():
        return None
    pic = slide.shapes.add_picture(str(path), left, top)
    ratio = min(max_w / pic.width, max_h / pic.height)
    pic.width = int(pic.width * ratio)
    pic.height = int(pic.height * ratio)
    return pic


def slide_cover(prs: Presentation):
    slide = blank_slide(prs)
    add_rect(slide, Inches(0), Inches(0), SLIDE_W, SLIDE_H, AZUL)
    # Decoración geométrica
    add_rect(slide, Inches(9.5), Inches(-0.5), Inches(4.5), Inches(3), VERDE)
    circ = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.OVAL, Inches(10.8), Inches(4.5), Inches(3.2), Inches(3.2)
    )
    circ.fill.solid()
    circ.fill.fore_color.rgb = RGBColor(0x14, 0x3D, 0x6B)
    circ.line.fill.background()

    chip = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.ROUNDED_RECTANGLE, Inches(5.9), Inches(1.2), Inches(1.5), Inches(1.5)
    )
    chip.fill.solid()
    chip.fill.fore_color.rgb = VERDE
    chip.line.fill.background()
    t = chip.text_frame.paragraphs[0]
    t.text = "AI"
    t.alignment = PP_ALIGN.CENTER
    t.font.bold = True
    t.font.size = Pt(36)
    t.font.color.rgb = BLANCO

    title = slide.shapes.add_textbox(Inches(0.9), Inches(2.5), Inches(11), Inches(1.8))
    p = title.text_frame.paragraphs[0]
    p.text = "Transformación Digital\ny Soporte Inteligente"
    p.font.name = "Calibri"
    p.font.bold = True
    p.font.size = Pt(48)
    p.font.color.rgb = BLANCO
    p.alignment = PP_ALIGN.LEFT

    sub = slide.shapes.add_textbox(Inches(0.9), Inches(4.35), Inches(10), Inches(0.6))
    sp = sub.text_frame.paragraphs[0]
    sp.text = "Soluciones de IT que impulsan su negocio"
    sp.font.size = Pt(22)
    sp.font.color.rgb = VERDE

    brand = slide.shapes.add_textbox(Inches(0.9), Inches(5.8), Inches(4), Inches(0.6))
    bp = brand.text_frame.paragraphs[0]
    r1 = bp.add_run()
    r1.text = "Sempi"
    r1.font.bold = True
    r1.font.size = Pt(28)
    r1.font.color.rgb = BLANCO
    r2 = bp.add_run()
    r2.text = "tecno"
    r2.font.bold = True
    r2.font.size = Pt(28)
    r2.font.color.rgb = VERDE


def slide_section(prs: Presentation, section_num: str, title: str, subtitle: str, icon_text: str):
    slide = blank_slide(prs)
    add_rect(slide, Inches(0), Inches(0), SLIDE_W, SLIDE_H, AZUL)
    add_rect(slide, Inches(0), Inches(6.6), SLIDE_W, Inches(0.9), VERDE)

    badge = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.ROUNDED_RECTANGLE, Inches(5.6), Inches(1.3), Inches(2.1), Inches(2.1)
    )
    badge.fill.solid()
    badge.fill.fore_color.rgb = VERDE
    badge.line.fill.background()
    bt = badge.text_frame.paragraphs[0]
    bt.text = icon_text
    bt.alignment = PP_ALIGN.CENTER
    bt.font.size = Pt(40)
    bt.font.bold = True
    bt.font.color.rgb = BLANCO

    sec = slide.shapes.add_textbox(Inches(0.9), Inches(3.6), Inches(11.5), Inches(0.5))
    sp = sec.text_frame.paragraphs[0]
    sp.text = section_num
    sp.font.size = Pt(20)
    sp.font.color.rgb = VERDE
    sp.alignment = PP_ALIGN.CENTER

    tit = slide.shapes.add_textbox(Inches(0.9), Inches(4.0), Inches(11.5), Inches(1.2))
    tp = tit.text_frame.paragraphs[0]
    tp.text = title
    tp.font.bold = True
    tp.font.size = Pt(40)
    tp.font.color.rgb = BLANCO
    tp.alignment = PP_ALIGN.CENTER

    st = slide.shapes.add_textbox(Inches(1.5), Inches(5.2), Inches(10.3), Inches(0.6))
    stp = st.text_frame.paragraphs[0]
    stp.text = subtitle
    stp.font.size = Pt(18)
    stp.font.color.rgb = GRIS_TEXTO
    stp.alignment = PP_ALIGN.CENTER


def slide_about(prs: Presentation):
    slide = blank_slide(prs)
    add_rect(slide, Inches(0), Inches(0), Inches(0.35), SLIDE_H, VERDE)
    watermark(slide)
    add_title(slide, "Sobre Nosotros")

    add_bullets(
        slide,
        [
            "Más de 20 años de experiencia en el mercado.",
            "Entregamos el código fuente de soluciones tipo open-source.",
            "Capacitación exhaustiva a su equipo con total transparencia.",
            "Nos asociamos en su crecimiento tecnológico, no solo vendemos software.",
        ],
        top=Inches(1.85),
        width=Inches(6.2),
    )

    card = add_rounded_card(slide, Inches(7.2), Inches(1.85), Inches(5.4), Inches(4.8), AZUL)
    tf = card.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "20+"
    p.alignment = PP_ALIGN.CENTER
    p.font.size = Pt(72)
    p.font.bold = True
    p.font.color.rgb = VERDE
    p2 = tf.add_paragraph()
    p2.text = "años impulsando\ninfraestructura y soporte"
    p2.alignment = PP_ALIGN.CENTER
    p2.font.size = Pt(22)
    p2.font.color.rgb = BLANCO


def slide_clients(prs: Presentation):
    slide = blank_slide(prs)
    watermark(slide)
    add_title(slide, "Clientes que confían en nosotros", "Empresas líderes que respaldan nuestras soluciones.")

    clients = ["Telefónica", "Fybeca", "Veris", "Pycca", "Médikal", "Bankers Club"]
    cols, rows = 3, 2
    w, h = Inches(3.6), Inches(1.35)
    gap_x, gap_y = Inches(0.35), Inches(0.35)
    start_x, start_y = Inches(0.85), Inches(2.35)

    for i, name in enumerate(clients):
        r, c = divmod(i, cols)
        x = start_x + c * (w + gap_x)
        y = start_y + r * (h + gap_y)
        card = add_rounded_card(slide, x, y, w, h, BLANCO)
        card.line.color.rgb = RGBColor(0xE5, 0xE7, 0xEB)
        tf = card.text_frame
        tf.vertical_anchor = MSO_ANCHOR.MIDDLE
        p = tf.paragraphs[0]
        p.text = name
        p.alignment = PP_ALIGN.CENTER
        p.font.bold = True
        p.font.size = Pt(22)
        p.font.color.rgb = AZUL


def slide_solution_concept(
    prs: Presentation,
    title: str,
    headline: str,
    bullets: list[str],
    logo_name: str,
    logo_on_left: bool = True,
):
    slide = blank_slide(prs)
    watermark(slide)
    add_title(slide, title)

    logo_left = Inches(0.85) if logo_on_left else Inches(8.5)
    text_left = Inches(4.0) if logo_on_left else Inches(0.85)
    logo_top = Inches(2.1)

    panel = add_rounded_card(
        slide,
        Inches(0.75) if logo_on_left else Inches(7.9),
        Inches(1.95),
        Inches(3.0),
        Inches(4.6),
        BLANCO,
    )
    panel.line.color.rgb = RGBColor(0xE5, 0xE7, 0xEB)
    add_logo(slide, logo_name, logo_left + Inches(0.55), logo_top + Inches(1.4), Inches(2.0), Inches(1.0))

    hbox = slide.shapes.add_textbox(text_left, Inches(2.05), Inches(7.5), Inches(0.7))
    hp = hbox.text_frame.paragraphs[0]
    hp.text = headline
    hp.font.bold = True
    hp.font.size = Pt(26)
    hp.font.color.rgb = AZUL

    add_bullets(slide, bullets, left=text_left, top=Inches(2.85), width=Inches(7.8), size=17)


def slide_solution_cards(prs: Presentation, title: str, cards: list[tuple[str, str]], logo_name: str | None = None):
    slide = blank_slide(prs)
    watermark(slide)
    add_title(slide, title)
    if logo_name:
        add_logo(slide, logo_name, Inches(11.0), Inches(0.45), Inches(1.3), Inches(0.55))

    n = len(cards)
    card_w = Inches(3.85)
    gap = Inches(0.35)
    total = n * card_w + (n - 1) * gap
    start_x = (SLIDE_W - total) / 2

    for i, (heading, body) in enumerate(cards):
        x = start_x + i * (card_w + gap)
        y = Inches(2.15)
        card = add_rounded_card(slide, x, y, card_w, Inches(4.35), BLANCO)
        add_rect(slide, x, y, card_w, Inches(0.08), VERDE)
        card.line.color.rgb = RGBColor(0xE5, 0xE7, 0xEB)

        num = slide.shapes.add_shape(MSO_AUTO_SHAPE_TYPE.OVAL, x + Inches(0.25), y + Inches(0.35), Inches(0.55), Inches(0.55))
        num.fill.solid()
        num.fill.fore_color.rgb = AZUL
        num.line.fill.background()
        np = num.text_frame.paragraphs[0]
        np.text = str(i + 1)
        np.alignment = PP_ALIGN.CENTER
        np.font.bold = True
        np.font.color.rgb = BLANCO
        np.font.size = Pt(16)

        tb = slide.shapes.add_textbox(x + Inches(0.25), y + Inches(1.05), card_w - Inches(0.5), Inches(3.1))
        tf = tb.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = heading
        p.font.bold = True
        p.font.size = Pt(20)
        p.font.color.rgb = AZUL
        p2 = tf.add_paragraph()
        p2.text = body
        p2.font.size = Pt(14)
        p2.font.color.rgb = GRIS
        p2.space_before = Pt(8)


# —— Sección IA ampliada ——

def slide_ai_overview(prs: Presentation):
    slide = blank_slide(prs)
    watermark(slide)
    add_title(
        slide,
        "Agentes de IA como Ingenieros de Soporte",
        "No son chatbots de respuestas fijas: son ingenieros digitales L1 y L2 integrados a su stack.",
    )

    # Pirámide de soporte
    levels = [
        ("Nivel 3 — Especialistas humanos", "Arquitectura, cambios críticos, excepciones", AZUL, Inches(3.2)),
        ("Nivel 2 — Agente IA avanzado", "Diagnóstico profundo, scripts, correlación multi-sistema", NARANJA_L2, Inches(2.35)),
        ("Nivel 1 — Agente IA de primera línea", "Triaje, autoservicio, resolución rutinaria 24/7", VERDE, Inches(1.5)),
    ]
    for label, desc, color, top in levels:
        w = Inches(8.5) - (top - Inches(1.5))
        left = (SLIDE_W - w) / 2
        bar = add_rounded_card(slide, left, top, w, Inches(0.72), color)
        tf = bar.text_frame
        tf.margin_left = Pt(12)
        p = tf.paragraphs[0]
        p.text = label
        p.font.bold = True
        p.font.size = Pt(15)
        p.font.color.rgb = BLANCO
        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.size = Pt(11)
        p2.font.color.rgb = BLANCO

    note = slide.shapes.add_textbox(Inches(0.85), Inches(5.5), Inches(5.5), Inches(1.2))
    np = note.text_frame.paragraphs[0]
    np.text = (
        "Los agentes IA absorben el 60–80% del volumen L1/L2, "
        "documentan cada interacción y escalan con contexto completo al equipo humano."
    )
    np.font.size = Pt(14)
    np.font.color.rgb = GRIS

    add_logo(slide, "openai", Inches(10.5), Inches(5.3), Inches(1.2), Inches(0.55))


def slide_ai_l1(prs: Presentation):
    slide = blank_slide(prs)
    add_rect(slide, Inches(0), Inches(0), Inches(0.35), SLIDE_H, VERDE)
    watermark(slide)

    badge = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.ROUNDED_RECTANGLE, Inches(0.75), Inches(0.55), Inches(1.4), Inches(0.45)
    )
    badge.fill.solid()
    badge.fill.fore_color.rgb = VERDE
    badge.line.fill.background()
    bp = badge.text_frame.paragraphs[0]
    bp.text = "NIVEL 1"
    bp.alignment = PP_ALIGN.CENTER
    bp.font.bold = True
    bp.font.size = Pt(14)
    bp.font.color.rgb = BLANCO

    add_title(slide, "Ingeniero de Soporte IA — Nivel 1", "Primera línea digital: disponible 24/7 sin colas de espera.")

    add_bullets(
        slide,
        [
            "Atiende como analista de mesa de ayuda: saluda, clasifica y prioriza incidentes.",
            "Resuelve solicitudes rutinarias: reseteo de contraseñas, VPN, impresoras, accesos.",
            "Consulta bases de conocimiento (OTOBO/GLPI) y guía paso a paso al usuario.",
            "Crea tickets automáticos con categoría, activo afectado y pasos ya ejecutados.",
            "Deriva a L2 solo cuando detecta complejidad, riesgo o falta de permisos.",
        ],
        top=Inches(2.0),
        width=Inches(6.5),
        size=15,
    )

    # Panel métricas
    metrics = [("< 30 s", "tiempo de primera respuesta"), ("70%+", "tickets L1 resueltos sin humano"), ("24/7", "cobertura continua")]
    for i, (val, lbl) in enumerate(metrics):
        x = Inches(7.3) + i * Inches(1.95)
        card = add_rounded_card(slide, x, Inches(2.0), Inches(1.75), Inches(1.5), AZUL)
        tf = card.text_frame
        p = tf.paragraphs[0]
        p.text = val
        p.alignment = PP_ALIGN.CENTER
        p.font.bold = True
        p.font.size = Pt(22)
        p.font.color.rgb = VERDE
        p2 = tf.add_paragraph()
        p2.text = lbl
        p2.alignment = PP_ALIGN.CENTER
        p2.font.size = Pt(10)
        p2.font.color.rgb = BLANCO

    # Canales
    ch = slide.shapes.add_textbox(Inches(7.1), Inches(4.0), Inches(5.5), Inches(0.4))
    chp = ch.text_frame.paragraphs[0]
    chp.text = "Canales: Web · WhatsApp · Teams · Portal de autoservicio"
    chp.font.size = Pt(13)
    chp.font.color.rgb = GRIS
    for name, xoff in [("whatsapp", 0), ("telegram", 1.1), ("openai", 2.2)]:
        add_logo(slide, name, Inches(7.3) + Inches(xoff), Inches(4.45), Inches(0.7), Inches(0.45))


def slide_ai_l2(prs: Presentation):
    slide = blank_slide(prs)
    add_rect(slide, Inches(0), Inches(0), Inches(0.35), SLIDE_H, NARANJA_L2)
    watermark(slide)

    badge = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.ROUNDED_RECTANGLE, Inches(0.75), Inches(0.55), Inches(1.4), Inches(0.45)
    )
    badge.fill.solid()
    badge.fill.fore_color.rgb = NARANJA_L2
    badge.line.fill.background()
    bp = badge.text_frame.paragraphs[0]
    bp.text = "NIVEL 2"
    bp.alignment = PP_ALIGN.CENTER
    bp.font.bold = True
    bp.font.size = Pt(14)
    bp.font.color.rgb = BLANCO

    add_title(
        slide,
        "Ingeniero de Soporte IA — Nivel 2",
        "Segunda línea digital: diagnóstico técnico, acciones controladas y escalamiento inteligente.",
    )

    add_bullets(
        slide,
        [
            "Se conecta a Zabbix: correlaciona alertas, métricas y tendencias antes del reporte humano.",
            "Ejecuta comandos autorizados (SSH/PowerShell/API) para extraer logs y estado de salud.",
            "Aplica runbooks: reinicios de servicios, limpieza de colas, verificación de backups.",
            "Enriquece tickets en GLPI/OTOBO con evidencia técnica, capturas y recomendación de causa raíz.",
            "Escala a Nivel 3 con paquete completo: timeline, comandos, impacto y usuarios afectados.",
        ],
        top=Inches(2.0),
        width=Inches(6.4),
        size=15,
    )

    # Logos integración
    integrations = [("zabbix", 0), ("glpi", 1.5), ("otobo", 3.0)]
    panel = add_rounded_card(slide, Inches(7.0), Inches(2.0), Inches(5.6), Inches(3.2), GRIS_CLARO)
    pt = panel.text_frame.paragraphs[0]
    pt.text = "Integración con su stack"
    pt.font.bold = True
    pt.font.size = Pt(16)
    pt.font.color.rgb = AZUL
    for name, xoff in integrations:
        add_logo(slide, name, Inches(7.4) + Inches(xoff), Inches(2.75), Inches(1.4), Inches(0.65))


def slide_ai_l1_vs_l2(prs: Presentation):
    slide = blank_slide(prs)
    watermark(slide)
    add_title(slide, "L1 vs L2: Roles del Ingeniero IA", "Misma plataforma, distinto alcance operativo y permisos.")

    headers = ["Dimensión", "Ingeniero IA Nivel 1", "Ingeniero IA Nivel 2"]
    rows = [
        ("Objetivo", "Desvío de volumen y autoservicio", "Diagnóstico y remediación técnica"),
        ("Usuario típico", "Colaborador final / cliente", "TI interna / operaciones"),
        ("Acciones", "Guías, FAQs, tickets simples", "Scripts, APIs, runbooks, monitoreo"),
        ("Integraciones", "OTOBO, chat, correo", "Zabbix, GLPI, servidores, CMDB"),
        ("Escalamiento", "→ L2 IA o humano", "→ L3 especialista humano"),
        ("SLA impacto", "Primera respuesta instantánea", "MTTR reducido en incidentes medios"),
    ]

    left, top = Inches(0.75), Inches(1.95)
    col_w = [Inches(2.2), Inches(4.55), Inches(4.55)]
    row_h = Inches(0.62)

    for c, h in enumerate(headers):
        x = left + sum(col_w[:c])
        cell = add_rounded_card(slide, x, top, col_w[c], row_h, AZUL if c == 0 else VERDE if c == 1 else NARANJA_L2)
        tf = cell.text_frame
        p = tf.paragraphs[0]
        p.text = h
        p.font.bold = True
        p.font.size = Pt(12)
        p.font.color.rgb = BLANCO
        p.alignment = PP_ALIGN.CENTER

    for r, row in enumerate(rows):
        y = top + (r + 1) * row_h
        for c, val in enumerate(row):
            x = left + sum(col_w[:c])
            fill = GRIS_CLARO if r % 2 == 0 else BLANCO
            cell = add_rect(slide, x, y, col_w[c], row_h, fill, RGBColor(0xE5, 0xE7, 0xEB))
            tf = cell.text_frame
            p = tf.paragraphs[0]
            p.text = val
            p.font.size = Pt(11 if c else 12)
            p.font.bold = c == 0
            p.font.color.rgb = AZUL if c == 0 else GRIS
            p.alignment = PP_ALIGN.CENTER if c else PP_ALIGN.LEFT


def slide_ai_workflow(prs: Presentation):
    slide = blank_slide(prs)
    watermark(slide)
    add_title(slide, "Flujo unificado: del usuario al especialista", "Trazabilidad completa en cada escalamiento.")

    steps = [
        ("Usuario", "Reporta por chat, voz o portal"),
        ("IA L1", "Triaje y resolución rutinaria"),
        ("IA L2", "Diagnóstico + acciones técnicas"),
        ("Humano L3", "Solo casos críticos o cambios"),
    ]
    colors = [GRIS, VERDE, NARANJA_L2, AZUL]
    x0 = Inches(0.6)
    for i, ((title, desc), color) in enumerate(zip(steps, colors)):
        x = x0 + i * Inches(3.15)
        box = add_rounded_card(slide, x, Inches(2.4), Inches(2.85), Inches(2.2), color)
        tf = box.text_frame
        p = tf.paragraphs[0]
        p.text = title
        p.font.bold = True
        p.font.size = Pt(18)
        p.font.color.rgb = BLANCO
        p.alignment = PP_ALIGN.CENTER
        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.size = Pt(12)
        p2.font.color.rgb = BLANCO
        p2.alignment = PP_ALIGN.CENTER
        if i < len(steps) - 1:
            arrow = slide.shapes.add_shape(
                MSO_AUTO_SHAPE_TYPE.RIGHT_ARROW, x + Inches(2.9), Inches(3.15), Inches(0.35), Inches(0.4)
            )
            arrow.fill.solid()
            arrow.fill.fore_color.rgb = GRIS_TEXTO
            arrow.line.fill.background()

    add_bullets(
        slide,
        [
            "Cada paso queda registrado en OTOBO/GLPI con historial de conversación y evidencia.",
            "Supervisores auditan decisiones del agente y ajustan políticas de escalamiento.",
            "Aprendizaje continuo: cada ticket cerrado alimenta la base de conocimiento.",
        ],
        left=Inches(0.75),
        top=Inches(5.0),
        width=Inches(11.5),
        size=14,
    )


def slide_ai_integration(prs: Presentation):
    slide = blank_slide(prs)
    watermark(slide)
    add_title(slide, "Agente Técnico: Integración Avanzada", "El ecosistema Sempitecno conectado de extremo a extremo.")

    cards = [
        ("Diagnóstico preventivo", "Consulta Zabbix para detectar anomalías antes del reporte del usuario.", "zabbix"),
        ("Ejecución controlada", "Comandos SSH/PowerShell con políticas de aprobación y auditoría.", "openai"),
        ("Escalamiento inteligente", "Ticket enriquecido en GLPI/OTOBO con contexto, logs y prioridad sugerida.", "glpi"),
    ]
    slide_solution_cards(prs, "", [])  # noop - we'll build inline on same slide
    # Re-get last slide - actually we polluted. Let me fix - remove that call

    # Build on current slide only - fix the function call issue
    # Redo: don't call slide_solution_cards


def slide_benefits(prs: Presentation):
    slide = blank_slide(prs)
    watermark(slide)
    add_title(slide, "Beneficios para su Empresa", "Impacto operativo y financiero medible.")

    items = [
        ("Downtime reducido", "Monitoreo proactivo + agentes que actúan antes del usuario.", "zabbix"),
        ("Resolución instantánea", "L1 IA atiende rutina 24/7; L2 acorta MTTR en incidentes medios.", "openai"),
        ("Talento liberado", "Ingenieros humanos en innovación, no en reseteos de contraseña.", None),
    ]
    for i, (h, b, logo) in enumerate(items):
        x = Inches(0.75) + i * Inches(4.15)
        card = add_rounded_card(slide, x, Inches(2.2), Inches(3.85), Inches(4.2), BLANCO)
        add_rect(slide, x, Inches(2.2), Inches(3.85), Inches(0.08), VERDE)
        card.line.color.rgb = RGBColor(0xE5, 0xE7, 0xEB)
        if logo:
            add_logo(slide, logo, x + Inches(0.25), Inches(2.45), Inches(1.0), Inches(0.5))
        tb = slide.shapes.add_textbox(x + Inches(0.25), Inches(3.15), Inches(3.35), Inches(2.8))
        tf = tb.text_frame
        p = tf.paragraphs[0]
        p.text = h
        p.font.bold = True
        p.font.size = Pt(20)
        p.font.color.rgb = AZUL
        p2 = tf.add_paragraph()
        p2.text = b
        p2.font.size = Pt(14)
        p2.font.color.rgb = GRIS


def slide_value_prop(prs: Presentation):
    slide = blank_slide(prs)
    watermark(slide)
    add_title(slide, "Nuestra Propuesta de Valor")

    add_bullets(
        slide,
        [
            "Soluciones llave en mano: implementamos, capacitamos y entregamos listo para usar.",
            "Sin vendor lock-in: modelos abiertos y código fuente disponible.",
            "Flexibilidad On-Premise o nube (AWS, Azure, Google Cloud).",
        ],
        top=Inches(1.9),
        width=Inches(6.5),
    )

    for name, xoff in [("aws", 0), ("azure", 1.6), ("gcp", 3.2)]:
        panel = add_rounded_card(
            slide, Inches(7.2) + Inches(xoff), Inches(2.5), Inches(1.45), Inches(1.45), GRIS_CLARO
        )
        add_logo(slide, name, Inches(7.35) + Inches(xoff), Inches(2.65), Inches(1.15), Inches(0.85))


def slide_contact(prs: Presentation):
    slide = blank_slide(prs)
    add_rect(slide, Inches(0), Inches(0), SLIDE_W, SLIDE_H, AZUL)
    add_rect(slide, Inches(0), Inches(0), Inches(0.25), SLIDE_H, VERDE)

    tit = slide.shapes.add_textbox(Inches(0.9), Inches(1.2), Inches(11), Inches(1.0))
    tp = tit.text_frame.paragraphs[0]
    tp.text = "¿Listo para dar el siguiente paso?"
    tp.font.bold = True
    tp.font.size = Pt(44)
    tp.font.color.rgb = BLANCO

    sub = slide.shapes.add_textbox(Inches(0.9), Inches(2.15), Inches(10), Inches(0.5))
    sp = sub.text_frame.paragraphs[0]
    sp.text = "Hablemos sobre cómo optimizar su negocio."
    sp.font.size = Pt(20)
    sp.font.color.rgb = VERDE

    card = add_rounded_card(slide, Inches(0.9), Inches(3.0), Inches(5.5), Inches(3.2), RGBColor(0x14, 0x3D, 0x6B))
    add_rect(slide, Inches(0.9), Inches(3.0), Inches(0.08), Inches(3.2), VERDE)
    tf = card.text_frame
    tf.margin_left = Pt(20)
    lines = [
        ("Iván García", True, 26),
        ("+593 999989522", False, 18),
        ("ivang@sempitecno.com", False, 18),
        ("www.sempitecno.com", False, 18),
    ]
    for i, (text, bold, size) in enumerate(lines):
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.text = text
        p.font.bold = bold
        p.font.size = Pt(size)
        p.font.color.rgb = BLANCO if bold else GRIS_TEXTO
        p.space_after = Pt(10)


def build_presentation() -> Path:
    prs = Presentation()
    set_slide_size(prs)

    slide_cover(prs)
    slide_about(prs)
    slide_clients(prs)

    slide_section(
        prs,
        "Sección 1",
        "Plataformas Robustas de Infraestructura",
        "Control, Privacidad y Estabilidad Operativa",
        "INFRA",
    )

    slide_solution_concept(
        prs,
        "Zabbix: Monitoreo Total",
        "El guardián de su red",
        [
            "Monitorea servidores, switches, impresoras y UPS.",
            "Detecta anomalías antes de que afecten a los usuarios.",
            "Notifica incidentes en tiempo real para evitar paradas críticas.",
        ],
        "zabbix",
    )
    slide_solution_cards(
        prs,
        "Zabbix: Casos de Uso Prácticos",
        [
            ("Autorrecuperación", "Reinicio automático de servicios críticos sin intervención humana."),
            ("Bases de Datos", "Monitoreo profundo del rendimiento para respuestas rápidas."),
            ("Dispositivos Físicos", "IoT, antenas y cámaras bajo control de disponibilidad."),
        ],
        "zabbix",
    )

    slide_solution_concept(
        prs,
        "GLPI: Gestión de Activos",
        "Control total de lo que tiene",
        [
            "Inventario automático de hardware y software.",
            "Gestión de licencias, contratos y garantías.",
            "Administración de proveedores y ciclo de vida del equipo.",
        ],
        "glpi",
        logo_on_left=False,
    )
    slide_solution_cards(
        prs,
        "GLPI: Casos de Uso Prácticos",
        [
            ("Manejo de Proyectos", "Seguimiento de proyectos de IT de inicio a cierre."),
            ("Reportes Financieros", "Auditorías, depreciación y presupuestos."),
            ("Mesa de Ayuda Base", "Incidencias vinculadas a activos afectados."),
        ],
        "glpi",
    )

    slide_solution_concept(
        prs,
        "OTOBO: Mesa de Servicio",
        "Atención estructurada y eficiente",
        [
            "Workflows totalmente personalizados.",
            "Certificado en mejores prácticas ITIL.",
            "Correos transformados automáticamente en tickets.",
        ],
        "otobo",
    )
    slide_solution_cards(
        prs,
        "OTOBO: Casos de Uso Prácticos",
        [
            ("Seguimiento Veloz", "SLA visibles en tiempo real."),
            ("Búsquedas Avanzadas", "Historial de soluciones para evitar retrabajo."),
            ("Base de Conocimientos", "Portal FAQ de autoservicio."),
        ],
        "otobo",
    )

    slide_solution_concept(
        prs,
        "Issabel: Telefonía IP",
        "Comunicaciones sin límites",
        [
            "Sin costo de licencias por usuario.",
            "Extensiones telefónicas ilimitadas.",
            "IVR y operadora automática incluidos.",
        ],
        "issabel_brand",
        logo_on_left=False,
    )
    slide_solution_cards(
        prs,
        "Issabel: Casos de Uso Prácticos",
        [
            ("Grabación de Llamadas", "Auditoría y control de calidad."),
            ("Grupos de Marcado", "Distribución inteligente por departamento."),
            ("Voz a Medida", "Menús personalizados y conferencias."),
        ],
        "issabel_brand",
    )

    slide_section(
        prs,
        "Sección 2",
        "Automatización con IA y Soporte Digital",
        "Ingenieros de soporte L1 y L2 disponibles 24/7",
        "IA",
    )

    # —— Bloque IA ampliado ——
    slide_ai_overview(prs)
    slide_ai_l1(prs)
    slide_ai_l2(prs)
    slide_ai_l1_vs_l2(prs)
    slide_ai_workflow(prs)

    slide_solution_cards(
        prs,
        "Agente Técnico: Integración Avanzada",
        [
            ("Diagnóstico preventivo", "Conexión a Zabbix para fallas antes del reporte humano."),
            ("Ejecución de comandos", "SSH/PowerShell autorizado para salud de servidores."),
            ("Escalamiento inteligente", "Tickets detallados en GLPI/OTOBO automáticamente."),
        ],
        "openai",
    )

    slide_solution_concept(
        prs,
        "Chatbots para WhatsApp y Web",
        "Atención inmediata en canales favoritos",
        [
            "Integración nativa con WhatsApp, Web y redes sociales.",
            "Conexión directa a CRM o ERP corporativo.",
            "Botones interactivos y listas rápidas.",
        ],
        "whatsapp",
        logo_on_left=False,
    )
    slide_solution_cards(
        prs,
        "Chatbots: Casos de Uso Prácticos",
        [
            ("Venta automatizada", "Catálogos y pedidos desde el chat."),
            ("Encuestas NPS", "Satisfacción post-atención automática."),
            ("Servicios internos", "Vacaciones, roles de pago, reseteo de claves."),
        ],
        "whatsapp",
    )

    slide_solution_concept(
        prs,
        "Agente Virtual Cognitivo de Voz",
        "El futuro de la atención telefónica",
        [
            "Voz humana realista, sin tonos robóticos.",
            "Entiende contexto conversacional fluido.",
            "Analiza y responde en tiempo real.",
        ],
        "openai",
    )
    slide_solution_cards(
        prs,
        "Voice Bots: Casos de Uso Prácticos",
        [
            ("Agendamiento inteligente", "Citas médicas, mecánicas o de asesoría."),
            ("Llamadas salientes", "Recordatorios de pago y confirmaciones."),
            ("Encuestas telefónicas", "Sondeos de calidad conversacionales."),
        ],
        None,
    )

    slide_solution_concept(
        prs,
        "Chat Multiagente y Multicanal",
        "Centralice sus comunicaciones",
        [
            "Un buzón para WhatsApp, Telegram, Messenger y correo.",
            "Múltiples agentes en el mismo número.",
            "Supervisión, auditoría y asignación de chats.",
        ],
        "telegram",
    )
    slide_solution_cards(
        prs,
        "Multicanalidad: Casos de Uso Prácticos",
        [
            ("Atención masiva", "Cientos de clientes sin mezclar historiales."),
            ("Soporte organizado", "Transferencia L1→L2 con contexto intacto."),
            ("Métricas de rendimiento", "Tiempos de respuesta por canal y agente."),
        ],
        "telegram",
    )

    slide_benefits(prs)
    slide_value_prop(prs)
    slide_contact(prs)

    prs.save(OUTPUT)
    return OUTPUT


if __name__ == "__main__":
    out = build_presentation()
    print(f"Presentación generada: {out}")
    print(f"Tamaño: {out.stat().st_size / 1024:.1f} KB")
