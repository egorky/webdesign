#!/usr/bin/env python3
"""Genera módulos SlidePilot para la presentación Sempitecno."""

from pathlib import Path

SLIDES_DIR = Path(__file__).parent / "js" / "slides"

LOGOS = {
    "zabbix": "https://cdn.simpleicons.org/zabbix/D40000",
    "glpi": "https://raw.githubusercontent.com/glpi-project/glpi/main/public/pics/logos/logo-GLPI-250-black.png",
    "otobo": "https://cdn.simpleicons.org/znuny/1B998B",
    "whatsapp": "https://cdn.simpleicons.org/whatsapp/25D366",
    "telegram": "https://cdn.simpleicons.org/telegram/26A5E4",
    "aws": "https://cdn.simpleicons.org/amazonaws/232F3E",
    "azure": "https://cdn.simpleicons.org/microsoftazure/0078D4",
    "gcp": "https://cdn.simpleicons.org/googlecloud/4285F4",
    "openai": "https://cdn.simpleicons.org/openai/412991",
    "issabel": "https://cdn.simpleicons.org/asterisk/FF6600",
    "facebook": "https://cdn.simpleicons.org/facebook/0866FF",
}


def logo_img(key: str, alt: str = "") -> str:
    url = LOGOS.get(key, "")
    alt = alt or key
    return f'<img src="{url}" alt="{alt}" />'


def logo_row(*keys: str) -> str:
    imgs = "".join(logo_img(k) for k in keys)
    return f'<div class="logo-row">{imgs}</div>'


def wm() -> str:
    return '<div class="watermark">Sempi<span>tecno</span></div>'


def slide_module(name: str, html: str, init: str = "", cleanup: str = "") -> str:
    init_body = init or "  // Sin inicialización especial"
    cleanup_body = cleanup or "  // Sin limpieza especial"
    return f'''/**
 * {name}
 */

export const html = `
{html.strip()}
`;

export function initialize() {{
{init_body}
}}

export function cleanup() {{
{cleanup_body}
}}
'''


SLIDES = []

# --- Portada ---
SLIDES.append(
    (
        "title",
        """
  <h1>Transformación Digital<br>y Soporte Inteligente</h1>
  <p class="brand-accent">Soluciones de IT que impulsan su negocio</p>
  <p style="margin-top: 2rem; font-weight: 700;">Sempi<span class="brand-accent">tecno</span></p>
  <aside class="notes">
    Bienvenida. Presentar a Sempitecno como socio tecnológico, no solo proveedor de software.
    Mencionar que cubriremos infraestructura on-premise e IA para soporte L1/L2.
  </aside>
""",
    )
)

SLIDES.append(
    (
        "about",
        f"""
  {wm()}
  <h2>Sobre Nosotros</h2>
  <div class="split">
    <ul>
      <li class="fragment"><strong>Más de 20 años</strong> de experiencia en el mercado.</li>
      <li class="fragment">Entregamos el <strong>código fuente</strong> de soluciones tipo open-source.</li>
      <li class="fragment"><strong>Capacitación exhaustiva</strong> a su equipo.</li>
      <li class="fragment">Asociación transparente en su crecimiento tecnológico.</li>
    </ul>
    <div style="text-align: center;">
      <p style="font-size: 3em; margin: 0; color: #1abc9c; font-weight: 700;">20+</p>
      <p>años impulsando infraestructura y soporte</p>
    </div>
  </div>
  <aside class="notes">Enfatizar transparencia, código fuente y capacitación como diferenciadores.</aside>
""",
    )
)

SLIDES.append(
    (
        "clients",
        f"""
  {wm()}
  <h2>Clientes que confían en nosotros</h2>
  <p>Empresas líderes que respaldan la calidad de nuestras soluciones.</p>
  <div class="client-grid">
    <div class="client-box fragment">Telefónica</div>
    <div class="client-box fragment">Fybeca</div>
    <div class="client-box fragment">Veris</div>
    <div class="client-box fragment">Pycca</div>
    <div class="client-box fragment">Médikal</div>
    <div class="client-box fragment">Bankers Club</div>
  </div>
  <aside class="notes">Mencionar sectores: telecom, retail, salud, financiero.</aside>
""",
    )
)

SLIDES.append(
    (
        "sectionInfra",
        """
  <h2>Sección 1</h2>
  <h1>Plataformas Robustas de Infraestructura</h1>
  <p class="brand-accent">Control, Privacidad y Estabilidad Operativa</p>
  <aside class="notes">Transición a bloque on-premise: Zabbix, GLPI, OTOBO, Issabel.</aside>
""",
    )
)

# Zabbix
SLIDES.append(
    (
        "zabbixIntro",
        f"""
  {wm()}
  <h2>Zabbix: Monitoreo Total</h2>
  <div class="split">
    {logo_row("zabbix")}
    <div>
      <h3>El guardián de su red</h3>
      <ul>
        <li class="fragment">Monitorea servidores, switches, impresoras y UPS.</li>
        <li class="fragment">Detecta anomalías antes de que afecten a los usuarios.</li>
        <li class="fragment">Notifica incidentes en tiempo real.</li>
      </ul>
    </div>
  </div>
  <aside class="notes">Zabbix como base del monitoreo proactivo; conectar con agentes IA L2 más adelante.</aside>
""",
    )
)

SLIDES.append(
    (
        "zabbixUseCases",
        f"""
  {wm()}
  <h2>Zabbix: Casos de Uso</h2>
  {logo_row("zabbix")}
  <div class="card-grid">
    <div class="card fragment"><h4>Autorrecuperación</h4><p>Reinicio automático de servicios críticos sin intervención humana.</p></div>
    <div class="card fragment"><h4>Bases de Datos</h4><p>Monitoreo profundo del rendimiento para respuestas rápidas.</p></div>
    <div class="card fragment"><h4>Dispositivos Físicos</h4><p>IoT, antenas y cámaras bajo control de disponibilidad.</p></div>
  </div>
""",
    )
)

# GLPI
SLIDES.append(
    (
        "glpiIntro",
        f"""
  {wm()}
  <h2>GLPI: Gestión de Activos</h2>
  <div class="split">
    <div>
      <h3>Control total de lo que tiene</h3>
      <ul>
        <li class="fragment">Inventario automático de hardware y software.</li>
        <li class="fragment">Licencias, contratos y garantías.</li>
        <li class="fragment">Proveedores y ciclo de vida del equipo.</li>
      </ul>
    </div>
    {logo_row("glpi")}
  </div>
""",
    )
)

SLIDES.append(
    (
        "glpiUseCases",
        f"""
  {wm()}
  <h2>GLPI: Casos de Uso</h2>
  {logo_row("glpi")}
  <div class="card-grid">
    <div class="card fragment"><h4>Proyectos IT</h4><p>Organización y seguimiento de inicio a cierre.</p></div>
    <div class="card fragment"><h4>Reportes Financieros</h4><p>Auditorías, depreciación y presupuestos.</p></div>
    <div class="card fragment"><h4>Mesa de Ayuda</h4><p>Incidencias vinculadas a activos afectados.</p></div>
  </div>
""",
    )
)

# OTOBO
SLIDES.append(
    (
        "otoboIntro",
        f"""
  {wm()}
  <h2>OTOBO: Mesa de Servicio</h2>
  <div class="split">
    {logo_row("otobo")}
    <div>
      <h3>Atención estructurada y eficiente</h3>
      <ul>
        <li class="fragment">Workflows totalmente personalizados.</li>
        <li class="fragment">Certificado en mejores prácticas <strong>ITIL</strong>.</li>
        <li class="fragment">Correos transformados automáticamente en tickets.</li>
      </ul>
    </div>
  </div>
""",
    )
)

SLIDES.append(
    (
        "otoboUseCases",
        f"""
  {wm()}
  <h2>OTOBO: Casos de Uso</h2>
  {logo_row("otobo")}
  <div class="card-grid">
    <div class="card fragment"><h4>Seguimiento Veloz</h4><p>SLA visibles en tiempo real.</p></div>
    <div class="card fragment"><h4>Búsquedas Avanzadas</h4><p>Historial de soluciones para evitar retrabajo.</p></div>
    <div class="card fragment"><h4>Base de Conocimientos</h4><p>Portal FAQ de autoservicio.</p></div>
  </div>
""",
    )
)

# Issabel
SLIDES.append(
    (
        "issabelIntro",
        f"""
  {wm()}
  <h2>Issabel: Telefonía IP</h2>
  <div class="split">
    <div>
      <h3>Comunicaciones sin límites</h3>
      <ul>
        <li class="fragment">Sin costo de licencias por usuario.</li>
        <li class="fragment">Extensiones telefónicas ilimitadas.</li>
        <li class="fragment">IVR y operadora automática incluidos.</li>
      </ul>
    </div>
    {logo_row("issabel")}
  </div>
""",
    )
)

SLIDES.append(
    (
        "issabelUseCases",
        f"""
  {wm()}
  <h2>Issabel: Casos de Uso</h2>
  {logo_row("issabel")}
  <div class="card-grid">
    <div class="card fragment"><h4>Grabación</h4><p>Auditoría y control de calidad de llamadas.</p></div>
    <div class="card fragment"><h4>Grupos de Marcado</h4><p>Distribución por departamento.</p></div>
    <div class="card fragment"><h4>Voz a Medida</h4><p>Menús, buzones a correo y conferencias.</p></div>
  </div>
""",
    )
)

# --- IA ---
SLIDES.append(
    (
        "sectionAI",
        """
  <h2>Sección 2</h2>
  <h1>Automatización con IA y Soporte Digital</h1>
  <p class="brand-accent">Ingenieros de soporte L1 y L2 disponibles 24/7</p>
  <aside class="notes">Bloque estrella: agentes IA como ingenieros de mesa de ayuda, no simples bots.</aside>
""",
    )
)

SLIDES.append(
    (
        "aiOverview",
        f"""
  {wm()}
  <h2>Agentes de IA como Ingenieros de Soporte</h2>
  <p>No son bots de respuestas fijas: son <strong>ingenieros digitales L1 y L2</strong> integrados a su stack.</p>
  <div class="pyramid">
    <div class="level l3 fragment">Nivel 3 — Especialistas humanos (cambios críticos)</div>
    <div class="level l2 fragment">Nivel 2 — Agente IA: diagnóstico, scripts, correlación</div>
    <div class="level l1 fragment">Nivel 1 — Agente IA: triaje y resolución rutinaria 24/7</div>
  </div>
  {logo_row("openai")}
  <aside class="notes">
    La pirámide muestra cómo IA absorbe 60-80% del volumen L1/L2.
    Solo excepciones llegan al humano L3 con contexto completo.
  </aside>
""",
    )
)

SLIDES.append(
    (
        "aiL1",
        f"""
  {wm()}
  <h2><span class="badge-l1">NIVEL 1</span> Ingeniero de Soporte IA</h2>
  <p>Primera línea digital: disponible <strong>24/7</strong> sin colas de espera.</p>
  <ul>
    <li class="fragment">Atiende como analista de mesa: saluda, clasifica y prioriza.</li>
    <li class="fragment">Resuelve rutina: contraseñas, VPN, impresoras, accesos.</li>
    <li class="fragment">Consulta base de conocimiento (OTOBO/GLPI) paso a paso.</li>
    <li class="fragment">Crea tickets con categoría, activo y pasos ya ejecutados.</li>
    <li class="fragment">Deriva a L2 solo si detecta complejidad o falta de permisos.</li>
  </ul>
  {logo_row("whatsapp", "telegram", "openai")}
  <aside class="notes">Métricas a mencionar: primera respuesta &lt;30s, 70%+ L1 sin humano.</aside>
""",
    )
)

SLIDES.append(
    (
        "aiL2",
        f"""
  {wm()}
  <h2><span class="badge-l2">NIVEL 2</span> Ingeniero de Soporte IA</h2>
  <p>Segunda línea digital: diagnóstico técnico y remediación controlada.</p>
  <ul>
    <li class="fragment">Se conecta a <strong>Zabbix</strong>: correlaciona alertas y tendencias.</li>
    <li class="fragment">Ejecuta comandos autorizados (SSH/PowerShell/API).</li>
    <li class="fragment">Aplica runbooks: reinicios, colas, verificación de backups.</li>
    <li class="fragment">Enriquece tickets en GLPI/OTOBO con evidencia y causa raíz sugerida.</li>
    <li class="fragment">Escala a L3 con timeline, comandos e impacto documentado.</li>
  </ul>
  {logo_row("zabbix", "glpi", "otobo")}
  <aside class="notes">Diferenciar L2 de L1: permisos técnicos e integración con infraestructura.</aside>
""",
    )
)

SLIDES.append(
    (
        "aiCompare",
        f"""
  {wm()}
  <h2>L1 vs L2: Roles del Ingeniero IA</h2>
  <table class="compare-table">
    <thead>
      <tr><th>Dimensión</th><th class="l1">IA Nivel 1</th><th class="l2">IA Nivel 2</th></tr>
    </thead>
    <tbody>
      <tr class="fragment"><td>Objetivo</td><td>Desvío de volumen y autoservicio</td><td>Diagnóstico y remediación</td></tr>
      <tr class="fragment"><td>Usuario</td><td>Colaborador / cliente final</td><td>TI interna / operaciones</td></tr>
      <tr class="fragment"><td>Acciones</td><td>Guías, FAQs, tickets simples</td><td>Scripts, APIs, runbooks</td></tr>
      <tr class="fragment"><td>Integraciones</td><td>OTOBO, chat, correo</td><td>Zabbix, GLPI, servidores</td></tr>
      <tr class="fragment"><td>Escalamiento</td><td>→ L2 IA o humano</td><td>→ L3 especialista</td></tr>
    </tbody>
  </table>
""",
    )
)

# aiWorkflow - will use custom init in separate file
SLIDES.append(("aiWorkflow", None))
SLIDES.append(
    (
        "aiIntegration",
        f"""
  {wm()}
  <h2>Agente Técnico: Integración Avanzada</h2>
  {logo_row("zabbix", "openai", "glpi")}
  <div class="card-grid">
    <div class="card fragment"><h4>Diagnóstico preventivo</h4><p>Consulta Zabbix antes del reporte humano.</p></div>
    <div class="card fragment"><h4>Ejecución controlada</h4><p>SSH/PowerShell con políticas y auditoría.</p></div>
    <div class="card fragment"><h4>Escalamiento inteligente</h4><p>Tickets enriquecidos en GLPI/OTOBO.</p></div>
  </div>
""",
    )
)

SLIDES.append(
    (
        "chatbotsIntro",
        f"""
  {wm()}
  <h2>Chatbots para WhatsApp y Web</h2>
  <div class="split">
    <div>
      <h3>Atención inmediata en canales favoritos</h3>
      <ul>
        <li class="fragment">WhatsApp, Web y redes sociales.</li>
        <li class="fragment">Integración a CRM o ERP.</li>
        <li class="fragment">Botones interactivos y listas rápidas.</li>
      </ul>
    </div>
    {logo_row("whatsapp", "telegram")}
  </div>
""",
    )
)

SLIDES.append(
    (
        "chatbotsUseCases",
        f"""
  {wm()}
  <h2>Chatbots: Casos de Uso</h2>
  <div class="card-grid">
    <div class="card fragment"><h4>Venta automatizada</h4><p>Catálogos y pedidos desde el chat.</p></div>
    <div class="card fragment"><h4>Encuestas NPS</h4><p>Satisfacción post-atención.</p></div>
    <div class="card fragment"><h4>Servicios internos</h4><p>Vacaciones, roles de pago, reseteo de claves.</p></div>
  </div>
""",
    )
)

SLIDES.append(
    (
        "voiceIntro",
        f"""
  {wm()}
  <h2>Agente Virtual Cognitivo de Voz</h2>
  <div class="split">
    {logo_row("openai", "issabel")}
    <ul>
      <li class="fragment">Voz humana realista, sin tonos robóticos.</li>
      <li class="fragment">Entiende contexto conversacional fluido.</li>
      <li class="fragment">Analiza y responde en tiempo real.</li>
    </ul>
  </div>
""",
    )
)

SLIDES.append(
    (
        "voiceUseCases",
        f"""
  {wm()}
  <h2>Voice Bots: Casos de Uso</h2>
  <div class="card-grid">
    <div class="card fragment"><h4>Agendamiento</h4><p>Citas médicas, mecánicas o de asesoría.</p></div>
    <div class="card fragment"><h4>Llamadas salientes</h4><p>Recordatorios y confirmaciones.</p></div>
    <div class="card fragment"><h4>Encuestas telefónicas</h4><p>Sondeos conversacionales de calidad.</p></div>
  </div>
""",
    )
)

SLIDES.append(
    (
        "omniIntro",
        f"""
  {wm()}
  <h2>Chat Multiagente y Multicanal</h2>
  <div class="split">
    <ul>
      <li class="fragment">Un buzón para WhatsApp, Telegram, Messenger y correo.</li>
      <li class="fragment">Múltiples agentes en el mismo número.</li>
      <li class="fragment">Supervisión, auditoría y asignación de chats.</li>
    </ul>
    {logo_row("whatsapp", "telegram", "facebook")}
  </div>
""",
    )
)


SLIDES.append(
    (
        "omniUseCases",
        f"""
  {wm()}
  <h2>Multicanalidad: Casos de Uso</h2>
  <div class="card-grid">
    <div class="card fragment"><h4>Atención masiva</h4><p>Cientos de clientes sin mezclar historiales.</p></div>
    <div class="card fragment"><h4>Soporte organizado</h4><p>Transferencia L1→L2 con contexto intacto.</p></div>
    <div class="card fragment"><h4>Métricas</h4><p>Tiempos de respuesta por canal y agente.</p></div>
  </div>
""",
    )
)

SLIDES.append(
    (
        "benefits",
        f"""
  {wm()}
  <h2>Beneficios para su Empresa</h2>
  <div class="card-grid">
    <div class="card fragment"><h4>Downtime reducido</h4><p>Monitoreo proactivo y alertas tempranas.</p></div>
    <div class="card fragment"><h4>Resolución instantánea</h4><p>IA L1/L2 atiende rutina y acorta MTTR.</p></div>
    <div class="card fragment"><h4>Talento liberado</h4><p>Humanos en innovación, no en reseteos.</p></div>
  </div>
""",
    )
)

SLIDES.append(
    (
        "valueProp",
        f"""
  {wm()}
  <h2>Nuestra Propuesta de Valor</h2>
  <ul>
    <li class="fragment"><strong>Llave en mano:</strong> implementamos, capacitamos y entregamos listo.</li>
    <li class="fragment"><strong>Sin vendor lock-in:</strong> modelos abiertos y código fuente.</li>
    <li class="fragment"><strong>Flexibilidad:</strong> On-Premise o nube.</li>
  </ul>
  {logo_row("aws", "azure", "gcp")}
""",
    )
)

SLIDES.append(
    (
        "contact",
        """
  <h1>¿Listo para dar el siguiente paso?</h1>
  <p class="brand-accent">Hablemos sobre cómo optimizar su negocio.</p>
  <div style="text-align: left; display: inline-block; margin-top: 1.5rem; padding: 1.5rem 2rem; border-left: 4px solid #1abc9c; background: rgba(11,37,69,0.08); border-radius: 8px;">
    <h3>Iván García</h3>
    <p>+593 999989522</p>
    <p>ivang@sempitecno.com</p>
    <p>www.sempitecno.com</p>
  </div>
  <aside class="notes">Cierre con llamada a la acción. Ofrecer demo o assessment gratuito si aplica.</aside>
""",
    )
)


AI_WORKFLOW_JS = '''/**
 * Flujo de escalamiento L1 → L2 → L3
 */

export const html = `
  <div class="watermark">Sempi<span>tecno</span></div>
  <h2>Flujo: del usuario al especialista</h2>
  <p>Trazabilidad completa en cada escalamiento.</p>
  <div id="support-flow-container" style="width: 90%; height: 280px; margin: 20px auto; position: relative; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;"></div>
  <svg width="0" height="0" style="position: absolute;">
    <defs>
      <marker id="arrowhead-support" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#1abc9c" />
      </marker>
    </defs>
  </svg>
  <ul style="font-size: 0.75em;">
    <li class="fragment">Registro en OTOBO/GLPI con historial y evidencia.</li>
    <li class="fragment">Supervisores auditan decisiones del agente IA.</li>
    <li class="fragment">Cada cierre alimenta la base de conocimiento.</li>
  </ul>
  <aside class="notes">Recorrer el flujo de izquierda a derecha. Destacar que L3 solo recibe paquetes completos.</aside>
`;

let resizeHandler = null;

export function initialize() {
  initSupportFlow();
  resizeHandler = debounce(initSupportFlow, 250);
  window.addEventListener('resize', resizeHandler);
}

export function cleanup() {
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler);
    resizeHandler = null;
  }
  const container = document.getElementById('support-flow-container');
  if (container) container.innerHTML = '';
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

function initSupportFlow() {
  const container = document.getElementById('support-flow-container');
  if (!container) return;
  container.innerHTML = '';

  const w = container.offsetWidth;
  const h = container.offsetHeight;
  const y = h / 2;

  const nodes = [
    { id: 'user', text: 'Usuario', x: w * 0.12, y, width: 100, height: 44, color: '#e2e8f0', border: '#64748b', textColor: '#334155' },
    { id: 'l1', text: 'IA L1', x: w * 0.32, y, width: 90, height: 44, color: '#d1fae5', border: '#1abc9c', textColor: '#065f46' },
    { id: 'l2', text: 'IA L2', x: w * 0.52, y, width: 90, height: 44, color: '#fef3c7', border: '#f59e0b', textColor: '#92400e' },
    { id: 'l3', text: 'Humano L3', x: w * 0.72, y, width: 110, height: 44, color: '#dbeafe', border: '#0b2545', textColor: '#0b2545' },
  ];

  const connections = [
    { from: 'user', to: 'l1' },
    { from: 'l1', to: 'l2' },
    { from: 'l2', to: 'l3' },
  ];

  const nodeEls = {};
  nodes.forEach((node) => {
    const el = document.createElement('div');
    el.textContent = node.text;
    el.style.cssText = `
      position: absolute;
      left: ${node.x - node.width / 2}px;
      top: ${node.y - node.height / 2}px;
      width: ${node.width}px;
      height: ${node.height}px;
      background: ${node.color};
      border: 2px solid ${node.border};
      color: ${node.textColor};
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      z-index: 2;
    `;
    container.appendChild(el);
    nodeEls[node.id] = el;
  });

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.style.position = 'absolute';
  svg.style.top = '0';
  svg.style.left = '0';
  svg.style.pointerEvents = 'none';
  container.appendChild(svg);

  connections.forEach((conn) => {
    const fromNode = nodes.find((n) => n.id === conn.from);
    const toNode = nodes.find((n) => n.id === conn.to);
    const fromPoint = { x: fromNode.x + fromNode.width / 2, y: fromNode.y };
    const toPoint = { x: toNode.x - toNode.width / 2, y: toNode.y };
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${fromPoint.x},${fromPoint.y} L ${toPoint.x},${toPoint.y}`);
    path.setAttribute('stroke', '#1abc9c');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('fill', 'none');
    path.setAttribute('marker-end', 'url(#arrowhead-support)');
    svg.appendChild(path);
  });
}
'''


def build_index(slide_ids: list[str]) -> str:
    dark_sections = {"title", "sectionInfra", "sectionAI", "contact"}
    sections = []
    for sid in slide_ids:
        attrs = []
        if sid in dark_sections:
            attrs.append('data-background-color="#0b2545"')
            if sid != "contact":
                attrs.append('class="has-dark-watermark"')
        attr_str = " ".join(attrs)
        sections.append(f'      <section id="{sid}" {attr_str}></section>')
    sections_html = "\n".join(sections)
    ids_js = ", ".join(f"'{s}'" for s in slide_ids)

    return f'''<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Transformación Digital y Soporte Inteligente — Sempitecno</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.3.1/dist/reveal.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.3.1/dist/theme/white.css" id="theme">
  <link rel="stylesheet" href="css/custom.css">
  <style media="print">
    .reveal.print-pdf .slides > section {{ page-break-after: always; min-height: 800px; }}
  </style>
</head>
<body>
  <div class="reveal">
    <div class="slides">
{sections_html}
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.3.1/dist/reveal.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.3.1/plugin/notes/notes.js"></script>
  <script type="module">
    import {{
      renderSlide,
      initializeSlide,
      cleanupSlide,
      preloadAllSlides
    }} from './js/slideModule.js';

    const slideIds = [{ids_js}];
    let currentSlideId = null;

    Reveal.initialize({{
      hash: true,
      center: true,
      history: true,
      transition: 'slide',
      plugins: [ RevealNotes ]
    }});

    preloadAllSlides(slideIds).then(() => {{
      slideIds.forEach(id => {{
        const container = document.getElementById(id);
        if (container) renderSlide(id, container);
      }});
      const idx = Reveal.getIndices().h;
      if (idx >= 0 && idx < slideIds.length) {{
        currentSlideId = slideIds[idx];
        initializeSlide(currentSlideId);
      }}
    }});

    Reveal.addEventListener('slidechanged', (event) => {{
      const indices = Reveal.getIndices();
      if (indices.h >= 0 && indices.h < slideIds.length) {{
        const newSlideId = slideIds[indices.h];
        if (currentSlideId && currentSlideId !== newSlideId) cleanupSlide(currentSlideId);
        currentSlideId = newSlideId;
        initializeSlide(currentSlideId);
      }} else if (currentSlideId) {{
        cleanupSlide(currentSlideId);
        currentSlideId = null;
      }}
    }});
  </script>
</body>
</html>
'''


def main():
    SLIDES_DIR.mkdir(parents=True, exist_ok=True)
    slide_ids = []

    for item in SLIDES:
        sid = item[0]
        slide_ids.append(sid)
        if sid == "aiWorkflow":
            (SLIDES_DIR / "aiWorkflow.js").write_text(AI_WORKFLOW_JS, encoding="utf-8")
            continue
        html = item[1]
        (SLIDES_DIR / f"{sid}.js").write_text(slide_module(sid, html), encoding="utf-8")

    (Path(__file__).parent / "index.html").write_text(build_index(slide_ids), encoding="utf-8")
    print(f"Generadas {len(slide_ids)} diapositivas en {SLIDES_DIR}")


if __name__ == "__main__":
    main()
