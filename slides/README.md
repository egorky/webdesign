# Presentación Sempitecno (SlidePilot)

Presentación web basada en [SlidePilot / cursor_slides](https://github.com/grapeot/cursor_slides) y [Reveal.js](https://revealjs.com/).

## Vista previa

```bash
cd slides
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python start-server.py
```

Abre el navegador en `http://localhost:8000`. Durante la presentación, pulsa **S** para la vista de ponente (notas).

## Regenerar contenido

Tras editar `build_sempitecno_slides.py`:

```bash
python3 build_sempitecno_slides.py
```

## Exportar a PDF

En la URL del servidor, añade `?print-pdf` y usa Imprimir → Guardar como PDF desde el navegador.

## Estructura

- `index.html` — contenedor Reveal.js
- `js/slides/*.js` — un módulo por diapositiva (`html`, `initialize`, `cleanup`)
- `css/custom.css` — acentos de marca Sempitecno
