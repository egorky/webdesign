# Guía de Modificación de Contenido y Gráficos

Esta guía te ayudará a entender cómo y dónde modificar los textos y las imágenes o gráficos de la página web de Sempitecno, específicamente en la página principal (`Home.jsx`) y la sección de Soluciones.

## 1. Modificación de Textos (Traducciones)

El proyecto utiliza **react-i18next** para manejar múltiples idiomas (Español e Inglés). Esto significa que los textos **no están directamente en el código fuente (HTML/JSX)**, sino que se referencian mediante "llaves" o "keys" de traducción.

### ¿Dónde encontrar los textos?
Los textos se encuentran en archivos JSON dentro de la carpeta `src/locales`:
- **Español:** `src/locales/es/translation.json`
- **Inglés:** `src/locales/en/translation.json`

### Ejemplo de modificación:
Si deseas cambiar la descripción del Agente de IA Nivel 1 en español, debes abrir `src/locales/es/translation.json` y buscar la sección `home.solutions.level1`:

```json
"level1": {
    "badge": "SOPORTE 24/7",
    "title": "Agente IA Nivel 1",
    "description": "NUEVA DESCRIPCIÓN AQUÍ.",
    // ...
}
```

Asegúrate de modificar siempre tanto el archivo de Español (`es`) como el de Inglés (`en`) para mantener la consistencia en el sitio web cuando el usuario cambie de idioma.

## 2. Modificación de Imágenes y Gráficos

Las imágenes y representaciones gráficas se encuentran directamente en los componentes de React, principalmente en `src/pages/Home.jsx`.

Existen dos tipos de gráficos en la página web: **Imágenes (etiquetas `<img>`)** y **Gráficos hechos con código (CSS/Tailwind y Material Symbols)**.

### a) Cambiar Imágenes (`<img>`)
Para cambiar las fotos reales que aparecen en la página (como la del Dashboard en el Hero, o la imagen de fondo del Bot de IA de Voz):
1. Abre `src/pages/Home.jsx`.
2. Busca la etiqueta `<img ... />` correspondiente.
3. Reemplaza el atributo `src="..."` por el enlace de tu nueva imagen, o una ruta a tu imagen local si la subes a la carpeta `src/assets/`.

**Ejemplo de código actual en `Home.jsx`:**
```jsx
<img alt="Voice AI Bot Visualization" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/..." />
```

### b) Cambiar Gráficos de Código e Íconos
En las nuevas secciones (On Premise y Level 1 AI Agent), hemos utilizado **Material Symbols** (íconos de Google) y elementos de Tailwind CSS para crear interfaces atractivas que cargan rápido sin necesidad de imágenes pesadas.

Si deseas cambiar un ícono, busca la etiqueta `<span>` con la clase `material-symbols-outlined` en `Home.jsx`.

**Ejemplo para cambiar el ícono de Zabbix:**
```jsx
{/* Código en Home.jsx */}
<span className="material-symbols-outlined font-bold text-4xl text-red-600">
    monitoring
</span>
```
Si deseas usar otro ícono, puedes buscar su nombre en [Google Fonts - Material Symbols](https://fonts.google.com/icons) y reemplazar la palabra `monitoring` por la del nuevo ícono (ejemplo: `router`).

### c) Reemplazar Gráficos de Código por Imágenes Reales
Si prefieres no usar el gráfico hecho con código (como el panel del "Level 1 AI Agent" que simula un ticket y una alerta), y quieres usar una imagen real de tu producto:

1. Localiza el bloque `<div className="relative bg-sky-900 b-solid aspect-video overflow-hidden">` dentro de la tarjeta correspondiente en `Home.jsx`.
2. Borra todo el contenido de ese `<div>`.
3. Reemplázalo con tu etiqueta `<img>`:
```jsx
<div className="relative b-solid aspect-video overflow-hidden">
    <img src="/ruta-a-tu-imagen.jpg" alt="Demostración" className="w-full h-full object-cover" />
</div>
```

Mantener las clases `aspect-video` y `object-cover` asegura que tu nueva imagen encaje perfectamente en el diseño sin deformarse.
