/**
 * aiCompare
 */

export const html = `
<div class="watermark">Sempi<span>tecno</span></div>
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
`;

export function initialize() {
  // Sin inicialización especial
}

export function cleanup() {
  // Sin limpieza especial
}
