/**
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
