/* =====================================================================
   cvdcloud · análises do painel admin: Semana e Clientes
   Carregado depois do script principal (usa secao, rankHtml, contar, esc, ic, CONTA...).
   ===================================================================== */
const DIA = 864e5;
const segDe = t => (t && (t.seconds ?? (t.toMillis ? t.toMillis() / 1000 : 0))) || 0;
const durFmt = s => { s = Math.round(s || 0); if(s < 60) return s + 's'; const m = Math.floor(s / 60); if(m < 60) return m + 'min' + (s % 60 ? ' ' + (s % 60) + 's' : ''); return Math.floor(m / 60) + 'h ' + (m % 60) + 'min'; };
const pctFmt = (a, b) => b ? Math.round(a / b * 100) + '%' : (a ? 'novo' : '—');
const nf = n => Number(n || 0).toLocaleString('pt-BR');
function delta(a, b){
  if(!b && !a) return '<span class="dl">—</span>';
  if(!b) return '<span class="dl up">novo</span>';
  const p = Math.round((a - b) / b * 100);
  return `<span class="dl ${p > 0 ? 'up' : p < 0 ? 'dn' : ''}">${p > 0 ? '▲' : p < 0 ? '▼' : '='} ${Math.abs(p)}%</span>`;
}
const kpi = (valor, rotulo, dl) => `<div class="kpi"><b>${valor}</b><small>${rotulo}</small>${dl ? `<div class="kd">${dl}</div>` : ''}</div>`;
function barras(valores, rotulos, destaque){
  const mx = Math.max(1, ...valores);
  return `<div class="barras">${valores.map((n, i) => `<span class="${i === destaque ? 'hj' : ''}" style="height:${Math.max(3, Math.round(n / mx * 100))}%" title="${esc(rotulos[i])}: ${n}"></span>`).join('')}</div>`
    + `<div class="barras-leg">${rotulos.map((r, i) => (i === 0 || i === rotulos.length - 1 || rotulos.length <= 8) ? `<span>${esc(r)}</span>` : '').join('')}</div>`;
}
function barraH(itens, vazioMsg){
  const total = itens.reduce((s, x) => s + x[1], 0);
  if(!total) return `<div class="rank"><div class="vz">${vazioMsg || 'Sem dados ainda.'}</div></div>`;
  return `<div class="rank">${itens.map(([nome, n]) => `<div class="r bh"><span class="t">${esc(nome)}</span><span class="bhb"><i style="width:${Math.round(n / total * 100)}%"></i></span><span class="v">${Math.round(n / total * 100)}%</span></div>`).join('')}</div>`;
}
const DIAS3 = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
function mapaCalor(evs, segFn){
  const m = Array.from({ length: 7 }, () => new Array(24).fill(0)); let mx = 0;
  evs.forEach(e => { const s = segFn(e); if(!s) return; const d = new Date(s * 1000); const v = ++m[(d.getDay() + 6) % 7][d.getHours()]; if(v > mx) mx = v; });
  const ordem = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  let melhor = { v: 0, d: 0, h: 0 }; m.forEach((l, d) => l.forEach((v, h) => { if(v > melhor.v) melhor = { v, d, h }; }));
  const html = `<div class="mapa">${m.map((l, d) => `<b>${ordem[d]}</b>${l.map((v, h) => `<i style="--v:${mx ? (v / mx).toFixed(2) : 0}" title="${ordem[d]} ${h}h: ${v}"></i>`).join('')}`).join('')}<span></span>${Array.from({ length: 24 }, (_, h) => `<em>${h % 6 === 0 ? h : ''}</em>`).join('')}</div>`;
  return { html, melhor: melhor.v ? `${ordem[melhor.d]} às ${melhor.h}h` : '' };
}
const nomeTz = tz => ({ 'America/Sao_Paulo': 'Brasília (SP, RJ, MG, sul…)', 'America/Manaus': 'Amazonas', 'America/Fortaleza': 'Nordeste (CE)', 'America/Recife': 'Nordeste (PE)', 'America/Bahia': 'Bahia', 'America/Belem': 'Pará', 'America/Cuiaba': 'Mato Grosso', 'America/Campo_Grande': 'Mato Grosso do Sul', 'America/Rio_Branco': 'Acre', 'America/Porto_Velho': 'Rondônia', 'America/Boa_Vista': 'Roraima', 'America/Noronha': 'Fernando de Noronha', 'America/Araguaina': 'Tocantins', 'America/Maceio': 'Alagoas', 'America/Argentina/Buenos_Aires': 'Argentina', 'America/Santiago': 'Chile', 'Europe/Lisbon': 'Portugal', 'America/New_York': 'EUA (leste)', 'America/Mexico_City': 'México', 'America/Bogota': 'Colômbia', 'America/Lima': 'Peru', 'America/Montevideo': 'Uruguai', 'America/Asuncion': 'Paraguai' }[tz] || tz || 'desconhecido');
const nomeRef = r => !r ? 'Direto / aplicativo de mensagem' : /whatsapp|wa\.me/i.test(r) ? 'WhatsApp' : /instagram/i.test(r) ? 'Instagram' : /facebook|fb\./i.test(r) ? 'Facebook' : /google/i.test(r) ? 'Google' : /mail|outlook|gmail/i.test(r) ? 'E-mail' : r;

/* ===================== SEMANA ===================== */
let semanaSel = 0;
const inicioSemana = off => { const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - ((d.getDay() + 6) % 7) - off * 7); return d.getTime(); };
const fmtDia = ms => new Date(ms).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
function statsEv(evs){
  const o = { total: evs.length, abrir: 0, baixar: 0, compartilhar: 0, buscar: 0, ativos: new Set(), dias: new Set() };
  evs.forEach(e => { if(o[e.tipo] !== undefined && typeof o[e.tipo] === 'number') o[e.tipo]++; o.ativos.add(e.uid); const s = segDe(e.criadoEm); if(s) o.dias.add(new Date(s * 1000).toDateString()); });
  return o;
}
async function carregarSemana(el){
  const C = CONTA(), ini = inicioSemana(semanaSel), fim = ini + 7 * DIA, iniAnt = ini - 7 * DIA;
  const semanas = Array.from({ length: 8 }, (_, i) => inicioSemana(7 - i));
  const [users, evs, evsAnt, vis, visAnt, cEv, cVis, cCom] = await Promise.all([
    C.todosUsuarios(), C.eventosEntre(ini, fim, 8000), C.eventosEntre(iniAnt, ini, 8000), C.visitas(ini, fim, 4000), C.visitas(iniAnt, ini, 4000),
    Promise.all(semanas.map(s => C.contarEntre('eventos', s, s + 7 * DIA).catch(() => 0))),
    Promise.all(semanas.map(s => C.contarEntre('visitas', s, s + 7 * DIA).catch(() => 0))),
    Promise.all(semanas.map(s => C.contarEntre('compartilhamentos', s, s + 7 * DIA).catch(() => 0))),
  ]);
  const a = statsEv(evs), b = statsEv(evsAnt), nUser = new Map(users.map(u => [u.uid, u]));
  const nomes = id => nomeCurto((nUser.get(id) || {}).nome);
  const vend = users.filter(u => u.status !== 'bloqueado');
  const novasContas = users.filter(u => { const s = segDe(u.criadoEm) * 1000; return s >= ini && s < fim; }).length;
  const porUsuario = evs => { const m = statsPorUsuario(evs, segDe); return m; };
  const pu = porUsuario(evs), puAnt = porUsuario(evsAnt);
  const rank = [...pu.entries()].map(([uid, o]) => ({ uid, o, p: pontosDe(o), pAnt: puAnt.get(uid) ? pontosDe(puAnt.get(uid)) : 0 })).sort((x, y) => y.p - x.p).slice(0, 10);
  const inativos = [...puAnt.keys()].filter(uid => !pu.has(uid) && nUser.has(uid) && nUser.get(uid).role !== 'admin').map(uid => nUser.get(uid));
  // conteúdo em alta
  const cont = (lst, tipo) => { const m = new Map(); lst.filter(e => e.tipo === tipo).forEach(e => { const o = m.get(e.chave) || [e.titulo, 0]; o[1]++; m.set(e.chave, o); }); return m; };
  const cAbr = cont(evs, 'abrir'), cAbrAnt = cont(evsAnt, 'abrir'), cCmp = cont(evs, 'compartilhar');
  const emAlta = [...cAbr.entries()].map(([k, [t, n]]) => [t, n, n - ((cAbrAnt.get(k) || [0, 0])[1])]).filter(x => x[2] > 1).sort((x, y) => y[2] - x[2]).slice(0, 5);
  const emQueda = [...cAbrAnt.entries()].map(([k, [t, n]]) => [t, n, ((cAbr.get(k) || [0, 0])[1]) - n]).filter(x => x[2] < -2).sort((x, y) => x[2] - y[2]).slice(0, 4);
  const topAbr = [...cAbr.values()].sort((x, y) => y[1] - x[1]).slice(0, 6), topCmp = [...cCmp.values()].sort((x, y) => y[1] - x[1]).slice(0, 6);
  const semRes = contar(evs.filter(e => e.tipo === 'buscar' && e.extra === '0'), e => (e.titulo || '').toLowerCase(), e => e.titulo).slice(0, 6);
  const mapa = mapaCalor(evs, e => segDe(e.criadoEm));
  const uni = v => new Set(v.map(x => x.vid)).size, tMed = v => { const l = v.filter(x => x.seg > 0); return l.length ? l.reduce((s, x) => s + x.seg, 0) / l.length : 0; };
  const atual = semanaSel === 0;
  const rot = semanas.map(s => fmtDia(s));
  // insights em texto
  const ins = [];
  if(a.compartilhar || b.compartilhar) ins.push(`Compartilhamentos: ${a.compartilhar} (${b.compartilhar ? (a.compartilhar >= b.compartilhar ? '+' : '') + Math.round((a.compartilhar - b.compartilhar) / b.compartilhar * 100) + '%' : 'sem base na semana anterior'}).`);
  if(mapa.melhor) ins.push(`Pico de uso: ${mapa.melhor}.`);
  if(a.ativos.size) ins.push(`${a.ativos.size} de ${vend.length} pessoas usaram o app (${Math.round(a.ativos.size / Math.max(1, vend.length) * 100)}%).`);
  if(rank[0]) ins.push(`Mais ativo: ${nomes(rank[0].uid)} (${rank[0].p} pontos).`);
  if(vis.length) ins.push(`Clientes abriram ${uni(vis) === 1 ? '1 visitante' : uni(vis) + ' visitantes'} em ${vis.length} acessos, tempo médio ${durFmt(tMed(vis))}.`);
  if(inativos.length) ins.push(`${inativos.length} ${inativos.length === 1 ? 'pessoa ativa' : 'pessoas ativas'} na semana anterior ficaram sem usar nesta.`);
  if(emAlta[0]) ins.push(`Em alta: ${emAlta[0][0]}.`);
  if(semRes[0]) ins.push(`Mais procurado sem resultado: “${semRes[0][0]}”.`);
  const resumo = `Resumo cvdcloud · ${fmtDia(ini)} a ${fmtDia(fim - DIA)}\n` + ins.map(x => '• ' + x).join('\n');
  window.__resumoSemana = resumo;
  el.innerHTML = `
    <div class="chips-f">${[[0, 'Esta semana'], [1, 'Semana passada'], [2, 'Há 2 semanas'], [3, 'Há 3 semanas']].map(([d, n]) => `<button class="${semanaSel === d ? 'on' : ''}" data-semana="${d}">${n}</button>`).join('')}</div>
    <p style="color:var(--sub);font-size:13px;margin:10px 0 0">${fmtDia(ini)} a ${fmtDia(fim - DIA)}${atual ? ' · em andamento' : ''} · comparado com a semana anterior</p>
    <div class="kpis">${kpi(nf(a.total), 'Ações no app', delta(a.total, b.total))}${kpi(`${a.ativos.size}<small style="font-size:14px;color:var(--sub)">/${vend.length}</small>`, 'Vendedores ativos', delta(a.ativos.size, b.ativos.size))}
      ${kpi(nf(a.compartilhar), 'Compartilhamentos', delta(a.compartilhar, b.compartilhar))}${kpi(nf(a.baixar), 'Downloads', delta(a.baixar, b.baixar))}
      ${kpi(nf(a.abrir), 'Aberturas', delta(a.abrir, b.abrir))}${kpi(nf(vis.length), 'Acessos de clientes', delta(vis.length, visAnt.length))}
      ${kpi(durFmt(tMed(vis)), 'Tempo médio do cliente', delta(tMed(vis), tMed(visAnt)))}${kpi(novasContas, 'Contas novas', '')}</div>
    ${secao('Resumo da semana')}
    <div class="cartao-c">${ins.length ? `<ul class="ins">${ins.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '<p>Ainda sem dados nesta semana.</p>'}<div class="acoes-c"><button class="ok" data-copiar-resumo>Copiar resumo</button></div></div>
    ${secao('Últimas 8 semanas', 'ações no app')}${barras(cEv, rot, 7)}
    ${secao('Links compartilhados por semana')}${barras(cCom, rot, 7)}
    ${secao('Acessos de clientes por semana')}${barras(cVis, rot, 7)}
    ${secao('Quando o time usa o app', mapa.melhor ? 'pico: ' + mapa.melhor : '')}${mapa.html}
    ${secao('Vendedores da semana', 'pontos · variação')}${rank.length ? `<div class="rank">${rank.map((x, i) => `<div class="r"><span class="n">${i + 1}</span><span class="t">${esc(nomes(x.uid))}<br><span class="quem" style="color:var(--fraco);font-size:12px;font-weight:500">${x.o.abrir} abertos · ${x.o.baixar} downloads · ${x.o.compartilhar} enviados</span></span><span class="v">${x.p} ${delta(x.p, x.pAnt)}</span></div>`).join('')}</div>` : rankHtml([], 'Sem atividade nesta semana.')}
    ${secao('Mais abertos na semana')}${rankHtml(topAbr, 'Nada aberto ainda.')}
    ${secao('Mais compartilhados na semana')}${rankHtml(topCmp, 'Nada compartilhado ainda.')}
    ${secao('Em alta', 'mais aberturas que na semana anterior')}${emAlta.length ? `<div class="rank">${emAlta.map(x => `<div class="r"><span class="t">${esc(x[0])}</span><span class="v">${x[1]} <span class="dl up">▲ ${x[2]}</span></span></div>`).join('')}</div>` : rankHtml([], 'Nenhuma alta clara.')}
    ${secao('Em queda')}${emQueda.length ? `<div class="rank">${emQueda.map(x => `<div class="r"><span class="t">${esc(x[0])}</span><span class="v">${x[1] + x[2]} <span class="dl dn">▼ ${Math.abs(x[2])}</span></span></div>`).join('')}</div>` : rankHtml([], 'Nenhuma queda relevante.')}
    ${secao('Ficaram sem usar nesta semana', inativos.length + ' ativas na anterior')}${inativos.length ? `<div class="rank">${inativos.slice(0, 10).map(u => `<div class="r"><span class="t">${esc(nomeCurto(u.nome))}<br><span class="quem" style="color:var(--fraco);font-size:12px;font-weight:500">${esc(u.email)}</span></span></div>`).join('')}</div>` : rankHtml([], 'Ninguém parou de usar.')}
    ${secao('Buscas sem resultado', 'o que adicionar')}${rankHtml(semRes, 'Nenhuma busca sem resultado.')}
    <p style="color:var(--fraco);font-size:12px;line-height:1.5;margin:16px 0 0">Semana de segunda a domingo. Gráficos de 8 semanas usam contagem total; listas e mapa usam até 8.000 eventos por semana.</p>`;
}

/* ===================== CLIENTES ===================== */
let periodoCli = 30;
async function carregarClientes(el){
  const C = CONTA(), agora = Date.now(), ini = agora - periodoCli * DIA;
  const [users, vis, shares] = await Promise.all([C.todosUsuarios(), C.visitas(ini, agora + 60000, 5000), C.listarCompartilhamentos(periodoCli, 3000)]);
  const nUser = new Map(users.map(u => [u.uid, u])), sh = new Map(shares.map(s => [s.id, s]));
  const abertos = new Set(vis.map(v => v.compId));
  const unicos = new Set(vis.map(v => v.vid));
  const porVid = new Map(); vis.forEach(v => { const o = porVid.get(v.vid) || []; o.push(v); porVid.set(v.vid, o); });
  const recorr = [...porVid.entries()].filter(([, l]) => l.length > 1);
  const comTempo = vis.filter(v => v.seg > 0), tMed = comTempo.length ? comTempo.reduce((s, v) => s + v.seg, 0) / comTempo.length : 0;
  const abriu = vis.filter(v => v.abriu).length, baixou = vis.filter(v => v.baixou).length;
  const comVideo = vis.filter(v => v.video > 0), vMed = comVideo.length ? comVideo.reduce((s, v) => s + v.video, 0) / comVideo.length : 0;
  // por vendedor
  const pv = new Map();
  shares.forEach(s => { const o = pv.get(s.criadoPor) || { env: 0, abertos: 0, visitas: 0, seg: 0, n: 0 }; o.env++; if(abertos.has(s.id)) o.abertos++; pv.set(s.criadoPor, o); });
  vis.forEach(v => { const s = sh.get(v.compId); if(!s) return; const o = pv.get(s.criadoPor); if(!o) return; o.visitas++; if(v.seg > 0){ o.seg += v.seg; o.n++; } });
  const vendRank = [...pv.entries()].map(([uid, o]) => ({ uid, ...o })).sort((x, y) => y.abertos - x.abertos || y.env - x.env).slice(0, 12);
  // por material
  const pm = new Map(); vis.forEach(v => { const s = sh.get(v.compId); const t = s ? s.titulo : 'Item removido'; const o = pm.get(t) || { v: 0, seg: 0, n: 0, abriu: 0 }; o.v++; if(v.seg > 0){ o.seg += v.seg; o.n++; } if(v.abriu) o.abriu++; pm.set(t, o); });
  const matRank = [...pm.entries()].sort((x, y) => y[1].v - x[1].v).slice(0, 8);
  const nunca = shares.filter(s => !abertos.has(s.id)).slice(0, 8);
  // distribuições
  const dist = (fn, n) => { const m = new Map(); vis.forEach(v => { const k = fn(v); m.set(k, (m.get(k) || 0) + 1); }); return [...m.entries()].sort((x, y) => y[1] - x[1]).slice(0, n || 6); };
  const horas = new Array(24).fill(0), sem = new Array(7).fill(0);
  vis.forEach(v => { const s = segDe(v.criadoEm); if(!s) return; const d = new Date(s * 1000); horas[d.getHours()]++; sem[(d.getDay() + 6) % 7]++; });
  const picoH = Math.max(...horas) ? horas.indexOf(Math.max(...horas)) : -1;
  const mapa = mapaCalor(vis, v => segDe(v.criadoEm));
  // por link compartilhado: quanto interesse cada envio gerou
  const porLink = new Map();
  vis.forEach(v => {
    const o = porLink.get(v.compId) || { n: 0, vids: new Set(), voltou: false, seg: 0, abriu: false, baixou: false, primeiro: Infinity, ultimo: 0 };
    o.n++; o.vids.add(v.vid); if(v.retorno) o.voltou = true; o.seg += v.seg || 0;
    if(v.abriu) o.abriu = true; if(v.baixou) o.baixou = true;
    const s = segDe(v.criadoEm); if(s){ o.primeiro = Math.min(o.primeiro, s); o.ultimo = Math.max(o.ultimo, s); }
    porLink.set(v.compId, o);
  });
  porLink.forEach(o => { if(o.vids.size < o.n) o.voltou = true; });   // mesmo aparelho abriu mais de uma vez
  const quentes = [...porLink.entries()].map(([id, o]) => ({ id, o, s: sh.get(id), pts: o.n + (o.voltou ? 3 : 0) + (o.abriu ? 2 : 0) + (o.baixou ? 4 : 0) + Math.min(5, o.seg / 60) }))
    .filter(x => x.s).sort((x, y) => y.pts - x.pts).slice(0, 8);
  const esperas = [...porLink.entries()].map(([id, o]) => { const s = sh.get(id); const env = s ? segDe(s.criadoEm) : 0; return env && o.primeiro !== Infinity ? Math.max(0, o.primeiro - env) : null; }).filter(x => x !== null).sort((a, b) => a - b);
  const espMed = esperas.length ? esperas[Math.floor(esperas.length / 2)] : 0;
  const esperaFmt = s => s < 90 ? 'na hora' : s < 3600 ? Math.round(s / 60) + ' min' : s < 86400 ? Math.round(s / 3600) + ' h' : Math.round(s / 86400) + ' d';
  const nuncaTodos = shares.filter(s => !abertos.has(s.id));
  const cortou = vis.length >= 5000 || shares.length >= 3000;
  const ult = vis.slice(0, 15);
  const sub = 'color:var(--fraco);font-size:12px;font-weight:500';
  el.innerHTML = `
    <div class="chips-f">${[[7, '7 dias'], [30, '30 dias'], [90, '90 dias']].map(([d, n]) => `<button class="${periodoCli === d ? 'on' : ''}" data-periodo-cli="${d}">${n}</button>`).join('')}</div>
    <div class="nota anima" style="margin-top:14px">${ic('info')}<div><b>Como funciona</b>Quando um cliente abre um link compartilhado, o cvdcloud registra de forma <b>anônima</b>: horário, tipo de aparelho, fuso horário, de onde veio, tempo na página e se abriu ou baixou o material. Um cookie do próprio site (sem nome, telefone ou e-mail) identifica se a pessoa volta. O registro começa assim que o link abre, sem pedir nada ao cliente; só não registra quem usa o "não rastrear" do navegador. Só administradores veem.</div></div>
    ${cortou ? `<div class="nota anima" style="margin-top:14px">${ic('info')}<div><b>Período grande demais</b>O painel lê no máximo 5.000 acessos e 3.000 links por vez, então os mais antigos podem ter ficado de fora. Escolha 7 ou 30 dias para ver tudo.</div></div>` : ''}
    <div class="kpis">${kpi(nf(shares.length), 'Links enviados', '')}${kpi(nf(abertos.size), 'Links abertos', `<span class="dl">${pctFmt(abertos.size, shares.length)} dos enviados</span>`)}
      ${kpi(nf(unicos.size), 'Clientes únicos', `<span class="dl">${vis.length} acessos</span>`)}${kpi(nf(recorr.length), 'Voltaram a abrir', '')}
      ${kpi(durFmt(tMed), 'Tempo médio na página', '')}${kpi(nf(abriu), 'Abriram o material', `<span class="dl">${pctFmt(abriu, vis.length)}</span>`)}
      ${kpi(nf(baixou), 'Baixaram', `<span class="dl">${pctFmt(baixou, vis.length)}</span>`)}${kpi(durFmt(vMed), 'Vídeo assistido (média)', '')}${kpi(esperas.length ? esperaFmt(espMed) : '—', 'Do envio à 1ª abertura', '<span class="dl">mediana</span>')}</div>
    ${secao('Funil dos links')}
    <div class="rank">${[['Enviados', shares.length], ['Abertos pelo cliente', abertos.size], ['Abriram ou tocaram o material', abriu], ['Baixaram', baixou]].map(([n, v]) => `<div class="r bh"><span class="t">${n}</span><span class="bhb"><i style="width:${shares.length ? Math.min(100, Math.round(v / shares.length * 100)) : 0}%"></i></span><span class="v">${v}</span></div>`).join('')}</div>
    ${secao('Links com mais interesse', 'quem vale ligar primeiro')}${quentes.length ? `<div class="rank">${quentes.map((x, i) => `<div class="r"><span class="n">${i + 1}</span><span class="t">${esc(x.s.titulo)}${x.s.cliente ? ' · ' + esc(x.s.cliente) : ''}<br><span class="quem" style="${sub}">${esc(nomeCurto((nUser.get(x.s.criadoPor) || {}).nome))} · ${x.o.n} acesso${x.o.n > 1 ? 's' : ''} · ${x.o.vids.size} aparelho${x.o.vids.size > 1 ? 's' : ''}${x.o.voltou ? ' · voltou' : ''}${x.o.abriu ? ' · abriu' : ''}${x.o.baixou ? ' · baixou' : ''} · ${durFmt(x.o.seg)} · último acesso: ${haQuanto({ seconds: x.o.ultimo })}</span></span><span class="v">${nf(Math.round(x.pts))}</span></div>`).join('')}</div>` : rankHtml([], 'Nenhum cliente abriu links neste período.')}
    ${secao('Qualidade dos envios por vendedor', 'abertos / enviados')}${vendRank.length ? `<div class="rank">${vendRank.map((x, i) => `<div class="r"><span class="n">${i + 1}</span><span class="t">${esc(nomeCurto((nUser.get(x.uid) || {}).nome))}<br><span class="quem" style="${sub}">${x.env} enviados · ${x.abertos} abertos · tempo médio ${durFmt(x.n ? x.seg / x.n : 0)}</span></span><span class="v">${pctFmt(x.abertos, x.env)}</span></div>`).join('')}</div>` : rankHtml([], 'Ninguém compartilhou ainda.')}
    ${secao('O que os clientes mais abrem')}${matRank.length ? `<div class="rank">${matRank.map(([t, o], i) => `<div class="r"><span class="n">${i + 1}</span><span class="t">${esc(t)}<br><span class="quem" style="${sub}">tempo médio ${durFmt(o.n ? o.seg / o.n : 0)} · ${pctFmt(o.abriu, o.v)} abriram o material</span></span><span class="v">${o.v}</span></div>`).join('')}</div>` : rankHtml([], 'Nenhum cliente abriu links ainda.')}
    ${secao('Enviados e nunca abertos', nuncaTodos.length + ' no total · vale reenviar ou ligar')}${nunca.length ? `<div class="rank">${nunca.map(s => `<div class="r"><span class="t">${esc(s.titulo)}${s.cliente ? ' · ' + esc(s.cliente) : ''}<br><span class="quem" style="${sub}">${esc(nomeCurto((nUser.get(s.criadoPor) || {}).nome))} · ${fmtData(s.criadoEm)} (${haQuanto(s.criadoEm)})</span></span></div>`).join('')}</div>` : rankHtml([], 'Todos os links enviados foram abertos.')}
    ${secao('Quando os clientes acessam', picoH >= 0 ? 'pico às ' + picoH + 'h' : '')}${barras(horas, Array.from({ length: 24 }, (_, h) => h + 'h'), picoH)}
    ${secao('Dia da semana e horário')}${mapa.html}
    ${secao('Aparelho')}${barraH(dist(v => v.disp === 'celular' ? 'Celular' : v.disp === 'tablet' ? 'Tablet' : 'Computador', 3), 'Sem acessos ainda.')}
    ${secao('Sistema')}${barraH(dist(v => v.so), 'Sem acessos ainda.')}
    ${secao('Navegador')}${barraH(dist(v => v.nav), 'Sem acessos ainda.')}
    ${secao('Região aproximada', 'pelo fuso horário')}${barraH(dist(v => nomeTz(v.tz), 6), 'Sem acessos ainda.')}
    ${secao('De onde vieram')}${barraH(dist(v => nomeRef(v.ref), 6), 'Sem acessos ainda.')}
    ${secao('Idioma do aparelho')}${barraH(dist(v => (v.idioma || '—').slice(0, 5), 5), 'Sem acessos ainda.')}
    ${secao('Clientes que voltaram', 'mesmo aparelho, mais de um acesso')}${recorr.length ? `<div class="rank">${recorr.sort((x, y) => y[1].length - x[1].length).slice(0, 8).map(([, l]) => { const mats = [...new Set(l.map(v => (sh.get(v.compId) || {}).titulo).filter(Boolean))]; return `<div class="r"><span class="t">${l.length} acessos · ${esc(l[0].disp)} ${esc(l[0].so)}<br><span class="quem" style="${sub}">${esc(mats.slice(0, 2).join(' · '))}${mats.length > 2 ? ' +' + (mats.length - 2) : ''}</span></span><span class="v">${haQuanto(l[0].criadoEm)}</span></div>`; }).join('')}</div>` : rankHtml([], 'Nenhum cliente voltou ainda.')}
    ${secao('Últimos acessos')}${ult.length ? `<div class="rank">${ult.map(v => { const s = sh.get(v.compId) || {}; return `<div class="r"><span class="t">${esc(s.titulo || 'Item removido')}<br><span class="quem" style="${sub}">${esc(nomeCurto((nUser.get(s.criadoPor) || {}).nome))} → ${s.cliente ? esc(s.cliente) : 'cliente'} · ${esc(v.disp)} · ${durFmt(v.seg)}${v.abriu ? ' · abriu' : ''}${v.baixou ? ' · baixou' : ''}${v.retorno ? ' · voltou' : ''}</span></span><span class="v">${haQuanto(v.criadoEm)}</span></div>`; }).join('')}</div>` : rankHtml([], 'Nenhum acesso de cliente ainda.')}
    <p style="color:var(--fraco);font-size:12px;line-height:1.5;margin:16px 0 0">Região é aproximada pelo fuso horário do aparelho (não usamos o IP). Quem usa o "não rastrear" do navegador não gera dados. Antes de 30/10/2026 só foram registrados os clientes que aceitaram o aviso, então os números anteriores a essa data são parciais.</p>`;
}
