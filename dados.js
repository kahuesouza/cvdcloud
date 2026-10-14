/* =====================================================================
   CVDentus · Central de Materiais — BASE DE DADOS
   ---------------------------------------------------------------------
   Este é o ÚNICO arquivo que precisa ser editado para gerir o conteúdo.
   Nada é hospedado no app: todo item é só um LINK (YouTube, FlipHTML5,
   Dropbox, site). Para adicionar um material, copie uma linha parecida
   e troque título / url. Para remover, apague a linha.

   Campos dos MATERIAIS:
     tipo     → catalogo | manual | video3d | instalacao | uso | bula |
                apoio | landing | marketing | treinamento | comparativo
     produto  → optymus | clinical-plus | dentsurg-pro | spray-control |
                pontas | brocas | acessorios | geral
     idioma   → pt | en | es
     novo     → true mostra o selo "Novo"
     aviso    → texto curto exibido em amarelo (ex.: versão antiga)

   DOWNLOAD (botão "Baixar"):
     • Links do Dropbox ganham o botão automaticamente (o app troca
       dl=0 por dl=1). Pastas baixam como .zip.
     • mb       → tamanho em MB, aparece no botão (ex.: "Baixar · 89 MB").
                  Itens acima de 1000 MB não mostram o botão.
     • pdf      → link de download do PDF quando o material abre em outro
                  lugar (ex.: catálogo no FlipHTML5 + PDF no Dropbox).
                  Ex.: pdf: 'https://www.dropbox.com/s/xxxx/Catalogo.pdf?dl=0'
     • baixarUrl → link de download quando o item abre em outro lugar (url = ver no navegador,
                  baixarUrl = baixar). Arquivos: github.com/kahuesouza/cvdentus-arquivos
                  (Pages = ver, releases = baixar).
     • semDownload: true → esconde o botão nesse item.
   ===================================================================== */

const DBX = 'https://www.dropbox.com/scl/fo/ocxrh0cmdonu5tssl44n9/';
const RK = '?rlkey=ox4i8mh6c3xjv926ll8ska3jw&dl=0';
const VP = 'V%C3%8DDEOS%20PROCEDIMENTOS/';

window.CVD = {

  atualizado: '14/10/2026',

  /* ---------------- PRODUTOS ---------------- */
  produtos: [
    { id: 'optymus', nome: 'Optymus', img: 'img/optymus.webp', cor: '#1D4ED8',
      resumo: 'Endodontia e profilaxia · portátil, autoclavável, pedal wireless' },
    { id: 'clinical-plus', nome: 'Clinical Plus', img: 'img/clinical-plus.webp', cor: '#0F7C8C',
      resumo: 'Multiespecialidade clínica · 2 peças de mão, kit 7 pontas' },
    { id: 'dentsurg-pro', nome: 'DentSurg Pro', img: 'img/dentsurg-pro.webp', cor: '#122B63',
      resumo: 'Todas as especialidades + cirurgia · touchscreen, corte ósseo seletivo' },
    { id: 'lupas', nome: 'Lupas', icone: 'busca',
      resumo: 'Galileu, Kepler, Ergo e Ergo CX · fotóforos',
      nota: 'Os preços e descontos seguem a política comercial. Antes de passar valores ao cliente, confira se a política vigente não teve alteração de sazonalidade.' },
    { id: 'spray-control', nome: 'Spray Control', icone: 'spray',
      resumo: 'Profilaxia com jato controlado' },
    { id: 'pontas', nome: 'Pontas CVD', icone: 'ponta',
      resumo: 'Catálogos, bula e instruções das pontas diamantadas' },
    { id: 'brocas', nome: 'Brocas', icone: 'broca',
      resumo: 'Linha de brocas CVDentus' },
    { id: 'acessorios', nome: 'Acessórios', icone: 'chave',
      resumo: 'Bomba peristáltica, chave catraca e afins' },
  ],

  /* ---------------- MATERIAIS (ex-Linktree) ---------------- */
  materiais: [
    // Catálogos gerais
    { titulo: 'Catálogo Equipamentos CVDentus', tipo: 'catalogo', produto: 'geral', idioma: 'pt', ano: 2023, url: 'https://online.fliphtml5.com/recpy/tijm/' },
    { titulo: 'Equipment Catalog CVDentus', tipo: 'catalogo', produto: 'geral', idioma: 'en', ano: 2023, url: 'https://online.fliphtml5.com/recpy/lbtj/' },
    { titulo: 'Catálogo Equipos CVDentus', tipo: 'catalogo', produto: 'geral', idioma: 'es', ano: 2020, url: 'https://online.fliphtml5.com/recpy/uags/#p=1', aviso: 'Versão 2020' },
    { titulo: 'Catálogo Representantes', tipo: 'catalogo', produto: 'geral', idioma: 'pt', url: 'http://online.fliphtml5.com/recpy/hvzp/?1612999894896', aviso: 'Versão 2021 — revisar' },
    { titulo: 'Tabela Comparativa dos Piezos', tipo: 'comparativo', produto: 'geral', idioma: 'pt', mb: 0.8, url: 'https://www.dropbox.com/s/7s7lk805t3kly3t/Tabela%20comparativa.jpg?dl=0' },
    { titulo: '3 Verdades sobre o Piezoelétrico', tipo: 'marketing', produto: 'geral', idioma: 'pt', mb: 0.9, url: 'https://www.dropbox.com/s/z8btmt174vazsqb/3%20Verdades%20sobre%20Piezoel%C3%A9trico.pdf?dl=0' },

    // Brocas
    { titulo: 'Catálogo Brocas CVDentus', tipo: 'catalogo', produto: 'brocas', idioma: 'pt', url: 'https://online.fliphtml5.com/recpy/puzl/' },

    // Pontas
    { titulo: 'Catálogo Pontas · Clinical Plus e DentSurg Pro', tipo: 'catalogo', produto: 'pontas', idioma: 'pt', ano: 2026, novo: true, url: 'https://online.fliphtml5.com/recpy/dhxf/' },
    { titulo: 'Catálogo Pontas · Optymus', tipo: 'catalogo', produto: 'pontas', idioma: 'pt', ano: 2025, url: 'https://online.fliphtml5.com/recpy/taio/' },
    { titulo: 'Tips Catalog · Clinical Plus & DentSurg Pro', tipo: 'catalogo', produto: 'pontas', idioma: 'en', ano: 2023, url: 'https://online.fliphtml5.com/recpy/eqzy/' },
    { titulo: 'Catálogo Puntas', tipo: 'catalogo', produto: 'pontas', idioma: 'es', ano: 2021, url: 'https://online.fliphtml5.com/recpy/xufg/#p=1', aviso: 'Versão 2021' },
    { titulo: 'Bula das pontas · Optymus (completa)', tipo: 'bula', produto: 'optymus', idioma: 'pt', ano: 2023, mb: 0.2, url: 'https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F59178%2F1693500441Bula_OPTYMUS_2023_v04.pdf', baixarUrl: 'https://github.com/kahuesouza/cvdentus-arquivos/releases/download/bulas/bula-pontas-optymus-2023-v04.pdf' },
    { titulo: 'Bula por procedimento · Clinical Plus (completa)', tipo: 'bula', produto: 'clinical-plus', idioma: 'pt', ano: 2022, mb: 0.2, url: 'https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F59178%2F1693500450Bula_por_procedimento_clnicas_DS_e_DS_PRO_V.05_2022.pdf', baixarUrl: 'https://github.com/kahuesouza/cvdentus-arquivos/releases/download/bulas/bula-procedimento-clinical-plus-ds-2022-v05.pdf' },
    { titulo: 'Bula cirúrgica e clínica · DentSurg Pro (completa)', tipo: 'bula', produto: 'dentsurg-pro', idioma: 'pt', ano: 2023, mb: 0.2, url: 'https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F59178%2F1693500463Bula_cirrgicas_e_clnica_DS_PRO_V04_2023.pdf', baixarUrl: 'https://github.com/kahuesouza/cvdentus-arquivos/releases/download/bulas/bula-cirurgica-clinica-dentsurg-pro-2023-v04.pdf' },
    { titulo: 'Bula das Pontas', tipo: 'bula', produto: 'pontas', idioma: 'pt', url: 'https://conteudo.cvdentus.com.br/bula-piezos' },
    { titulo: 'Instruções de Uso das Pontas', tipo: 'uso', produto: 'pontas', idioma: 'pt', url: 'https://youtu.be/tSEyNjEQnV4' },

    // Optymus
    { titulo: 'Vídeo 3D Optymus', tipo: 'video3d', produto: 'optymus', idioma: 'pt', url: 'https://youtu.be/PCFeRKehPDc' },
    { titulo: 'Optymus 3D Video', tipo: 'video3d', produto: 'optymus', idioma: 'en', url: 'https://youtu.be/3RYsJW9FTgI' },
    { titulo: 'Video 3D Optymus', tipo: 'video3d', produto: 'optymus', idioma: 'es', url: 'https://youtu.be/plRR_-HniZk' },
    { titulo: 'Instalação Optymus', tipo: 'instalacao', produto: 'optymus', idioma: 'pt', url: 'https://youtu.be/6YtLc8fd1bI' },
    { titulo: 'Optymus Installation', tipo: 'instalacao', produto: 'optymus', idioma: 'en', url: 'https://youtu.be/vt13Qi1JVfM' },
    { titulo: 'Instalación Optymus', tipo: 'instalacao', produto: 'optymus', idioma: 'es', url: 'https://youtu.be/s2lqKfn6PFg' },
    { titulo: 'Modo de Uso Optymus', tipo: 'uso', produto: 'optymus', idioma: 'pt', url: 'https://youtu.be/7lVcrUFfFlQ' },
    { titulo: 'How to Use Optymus', tipo: 'uso', produto: 'optymus', idioma: 'en', url: 'https://youtu.be/jIoGEZu3R3Q' },
    { titulo: 'Modo de Uso Optymus', tipo: 'uso', produto: 'optymus', idioma: 'es', url: 'https://youtu.be/wVuyZkZgaUw' },
    { titulo: 'Manual Optymus', tipo: 'manual', produto: 'optymus', idioma: 'pt', url: 'https://online.fliphtml5.com/recpy/lngp/' },

    // Clinical Plus
    { titulo: 'Vídeo 3D Clinical Plus', tipo: 'video3d', produto: 'clinical-plus', idioma: 'pt', url: 'https://youtu.be/eHURySio6Yo' },
    { titulo: 'Clinical Plus 3D Video', tipo: 'video3d', produto: 'clinical-plus', idioma: 'en', url: 'https://youtu.be/SJtAMp0_xhU' },
    { titulo: 'Video 3D Clinical Plus', tipo: 'video3d', produto: 'clinical-plus', idioma: 'es', url: 'https://youtu.be/OjYg2zspbS4' },
    { titulo: 'Instalação Clinical Plus', tipo: 'instalacao', produto: 'clinical-plus', idioma: 'pt', url: 'https://youtu.be/LmS7AfMrtyI' },
    { titulo: 'Clinical Plus Installation', tipo: 'instalacao', produto: 'clinical-plus', idioma: 'en', url: 'https://youtu.be/flVFjvdDu2E' },
    { titulo: 'Instalación Clinical Plus', tipo: 'instalacao', produto: 'clinical-plus', idioma: 'es', url: 'https://youtu.be/oSra1IOqGiI' },
    { titulo: 'Modo de Uso Clinical Plus', tipo: 'uso', produto: 'clinical-plus', idioma: 'pt', url: 'https://youtu.be/RMMw6dI8k90' },
    { titulo: 'How to Use Clinical Plus', tipo: 'uso', produto: 'clinical-plus', idioma: 'en', url: 'https://youtu.be/hIYBXrC0Rg0' },
    { titulo: 'Modo de Uso Clinical Plus', tipo: 'uso', produto: 'clinical-plus', idioma: 'es', url: 'https://youtu.be/pJWZx8l6IyU' },
    { titulo: 'Manual Clinical Plus', tipo: 'manual', produto: 'clinical-plus', idioma: 'pt', url: 'https://online.fliphtml5.com/recpy/zpna/' },
    { titulo: 'Clinical Plus Manual', tipo: 'manual', produto: 'clinical-plus', idioma: 'en', url: 'https://online.fliphtml5.com/recpy/hqhj/' },

    // DentSurg Pro
    { titulo: 'Vídeo 3D DentSurg Pro', tipo: 'video3d', produto: 'dentsurg-pro', idioma: 'pt', url: 'https://youtu.be/za1LrR-Jp0o' },
    { titulo: 'DentSurg Pro 3D Video', tipo: 'video3d', produto: 'dentsurg-pro', idioma: 'en', url: 'https://youtu.be/p4YLlH98ncQ' },
    { titulo: 'Video 3D DentSurg Pro', tipo: 'video3d', produto: 'dentsurg-pro', idioma: 'es', url: 'https://youtu.be/dJoAHEjT9UE' },
    { titulo: 'Instalação DentSurg Pro', tipo: 'instalacao', produto: 'dentsurg-pro', idioma: 'pt', url: 'https://youtu.be/_rkvwdZsHaE' },
    { titulo: 'DentSurg Pro Installation', tipo: 'instalacao', produto: 'dentsurg-pro', idioma: 'en', url: 'https://youtu.be/SvNvYGksd_k' },
    { titulo: 'Instalación DentSurg Pro', tipo: 'instalacao', produto: 'dentsurg-pro', idioma: 'es', url: 'https://www.youtube.com/watch?v=_vOhPcJwnVk&list=PLwi_3lSQGTZAGF823s4tTpp0iZa0k3XnW&index=11' },
    { titulo: 'Modo de Uso DentSurg Pro', tipo: 'uso', produto: 'dentsurg-pro', idioma: 'pt', url: 'https://youtu.be/9kBlbd_ZXd4' },
    { titulo: 'How to Use DentSurg Pro', tipo: 'uso', produto: 'dentsurg-pro', idioma: 'en', url: 'https://youtu.be/AzZOPpWdPy8' },
    { titulo: 'Modo de Uso DentSurg Pro', tipo: 'uso', produto: 'dentsurg-pro', idioma: 'es', url: 'https://youtu.be/OSFUZF5a02w' },
    { titulo: 'Manual DentSurg Pro', tipo: 'manual', produto: 'dentsurg-pro', idioma: 'pt', url: 'https://online.fliphtml5.com/recpy/iqwp/' },
    { titulo: 'DentSurg Pro Manual', tipo: 'manual', produto: 'dentsurg-pro', idioma: 'en', url: 'https://online.fliphtml5.com/recpy/phbk/' },
    { titulo: 'Manual DentSurg Pro', tipo: 'manual', produto: 'dentsurg-pro', idioma: 'es', url: 'https://online.fliphtml5.com/recpy/khjg/' },
    { titulo: 'DentSurg Pro Catalog', tipo: 'catalogo', produto: 'dentsurg-pro', idioma: 'en', mb: 2.1, url: 'https://kahuesouza.github.io/cvdentus-arquivos/catalogos/catalogo-dentsurg-pro-en.pdf', baixarUrl: 'https://github.com/kahuesouza/cvdentus-arquivos/releases/download/catalogos/english_CATALOG_DS_PRO_OK.pdf' },
    { titulo: 'Catálogo DentSurg Pro', tipo: 'catalogo', produto: 'dentsurg-pro', idioma: 'es', mb: 2.7, url: 'https://kahuesouza.github.io/cvdentus-arquivos/catalogos/catalogo-dentsurg-pro-es.pdf', baixarUrl: 'https://github.com/kahuesouza/cvdentus-arquivos/releases/download/catalogos/SPANISH_CATALOG_DS_PRO_OK.pdf' },
    { titulo: 'Folder DentSurg Pro Cirúrgico', tipo: 'catalogo', produto: 'dentsurg-pro', idioma: 'pt', ano: 2024, url: 'https://online.fliphtml5.com/recpy/flit/' },

    // Lupas
    { titulo: 'Catálogo de Lupas (online)', tipo: 'catalogo', produto: 'lupas', idioma: 'pt', ano: 2026, novo: true, url: 'https://catalogodelupas.cvdentus.com.br/', pdf: 'https://github.com/kahuesouza/cvdentus-arquivos/releases/download/catalogos/catalogo-lupas-oficial-2026.pdf', pdfMb: 49, aviso: 'Confira a política comercial vigente' },
    { titulo: 'Simulador de Lupas', tipo: 'landing', produto: 'lupas', idioma: 'pt', novo: true, url: 'https://simuladordelupas.cvdentus.com.br/' },

    // Spray Control
    { titulo: 'Página do Spray Control', tipo: 'landing', produto: 'spray-control', idioma: 'pt', url: 'https://conteudo.cvdentus.com.br/spray-control' },
    { titulo: 'Modo de Uso Spray Control', tipo: 'uso', produto: 'spray-control', idioma: 'pt', url: 'https://youtu.be/vdwjV-I9VZE' },

    // Acessórios
    { titulo: 'Catálogo de Acessórios', tipo: 'catalogo', produto: 'acessorios', idioma: 'pt', ano: 2026, novo: true, mb: 5.2, url: 'https://kahuesouza.github.io/cvdentus-arquivos/catalogos/catalogo-acessorios-cvdentus-2026.pdf', baixarUrl: 'https://github.com/kahuesouza/cvdentus-arquivos/releases/download/catalogos/CATALOGO_ACESSORIOS_CVDENTUS_2026_DIGITAL.pdf' },
    { titulo: 'Vídeo de apoio · Bomba Peristáltica', tipo: 'apoio', produto: 'acessorios', idioma: 'pt', mb: 13, url: 'https://www.dropbox.com/s/rvp2sy5947b9tzx/Instru%C3%A7%C3%A3o%20Bomba%20Perist%C3%A1ltica%20Whats.mp4?dl=0' },
    { titulo: 'Vídeo de apoio · Chave Catraca', tipo: 'apoio', produto: 'acessorios', idioma: 'pt', mb: 44, url: 'https://www.dropbox.com/s/bajdbolvyexwsm2/WhatsApp%20Video%202020-03-06%20at%2012.03.44.mp4?dl=0' },

    // Marketing (pastas do Dropbox)
    { titulo: 'Pasta geral · Artes Vendas / Representantes', tipo: 'marketing', produto: 'geral', idioma: 'pt', mb: 3319, url: 'https://www.dropbox.com/sh/8ymm3lkds58oduc/AABu67xU_bxbmAOt-oRAxfN-a?dl=0', pasta: true },
    { titulo: 'Peças de Divulgação', tipo: 'marketing', produto: 'geral', idioma: 'pt', mb: 102, url: DBX + 'AMwMgY5kw_f34BzgQG4t18o/PE%C3%87AS%20DE%20DIVULGA%C3%87%C3%83O' + RK, pasta: true },
    { titulo: 'Lançamento Adaptadores Optymus', tipo: 'marketing', produto: 'optymus', idioma: 'pt', mb: 12, url: DBX + 'ABlwWHy1x0HS8YHT-k3y94U/Lan%C3%A7amento%20Adaptadores%20OPTYMUS' + RK, pasta: true, novo: true },
    { titulo: 'CVDentus Members · artes feed e story', tipo: 'marketing', produto: 'geral', idioma: 'pt', mb: 17, url: DBX + 'AKQkR1xcZiHC032B_pPdNns/CVDentus%20Members' + RK, pasta: true, novo: true },
    { titulo: 'Kit Flapless · e-mail marketing', tipo: 'marketing', produto: 'dentsurg-pro', idioma: 'pt', mb: 2.1, url: DBX + 'ALVDFvM6sSfd1Ez_b7kbFf8/Kit%20Flapless' + RK, pasta: true },
    { titulo: 'Vídeos de Procedimentos · pasta completa', tipo: 'marketing', produto: 'geral', idioma: 'pt', mb: 3185, url: DBX + 'AHFJCoRVFArzy1nkpXBbN3M/' + VP.slice(0, -1) + RK, pasta: true },

    // Treinamentos
    { titulo: 'Piezo na Odontologia Moderna', tipo: 'treinamento', produto: 'geral', idioma: 'pt', url: 'https://www.dropbox.com/home/REDE01/MARKETING/EQUIPE%20MARKETING/CVDentus/COMERCIAL/TREINAMENTOS?preview=Piezo+na+Odontologia+Moderna.mp4', aviso: 'Exige login no Dropbox da equipe' },
  ],

  /* ---------------- MARCA (logos para download) ----------------
     pasta: release do GitHub onde estão os arquivos (padrão 'logos'; 'selos' p/ selos).
     fundo: 'claro' = logo colorido/escuro (tile branco) · 'escuro' = logo branco (tile navy)
     arquivos: formato + nome do arquivo no release "logos" + tamanho em MB */
  marcas: [
    { grupo: 'CVDentus', logos: [
      { nome: 'Padrão colorido', nota: 'Fundo transparente', img: 'cvdentus-padrao', fundo: 'claro',
        arquivos: [['PNG','cvdentus-padrao.png',0.05],['PDF vetor','cvdentus-vetor.pdf',0.7]] },
      { nome: 'Branco', nota: 'Para fundos escuros', img: 'cvdentus-fundo-branco', fundo: 'escuro',
        arquivos: [['PNG','cvdentus-fundo-branco.png',0.05]] },
      { nome: 'Fundo preto', nota: 'Quadrado 1080 px', img: 'cvdentus-preto', fundo: 'neutro',
        arquivos: [['PNG','cvdentus-preto.png',0.04]] },
      { nome: 'Perfil Google', nota: 'Quadrado 1080 px', img: 'cvdentus-google', fundo: 'neutro',
        arquivos: [['PNG','cvdentus-google.png',0.03]] },
      { nome: 'Alta resolução', nota: 'Web e impressão grande · 21020 px', img: 'cvdentus-padrao', fundo: 'claro',
        arquivos: [['PNG','cvdentus-web.png',2.1]] },
    ]},
    { grupo: 'Selos e certificações', pasta: 'selos', logos: [
      { nome: 'ISO 13485', nota: 'Dispositivos médicos', img: 'iso-13485', fundo: 'claro',
        arquivos: [['PNG','iso-13485.png',0.04],['PDF','iso-13485.pdf',0.3]] },
      { nome: 'ISO 9001', nota: 'Gestão da qualidade', img: 'iso-9001', fundo: 'claro',
        arquivos: [['PNG','iso-9001.png',0.04]] },
      { nome: 'ISO 9001 + 13485', nota: 'Selo conjunto em PDF', doc: true, fundo: 'neutro',
        arquivos: [['PDF','iso-9001-e-13485.pdf',0.3]] },
      { nome: 'Padronização ISO', nota: 'Documento de padronização', doc: true, fundo: 'neutro',
        arquivos: [['PDF','padronizacao-iso.pdf',0.26]] },
      { nome: '+25 anos', nota: 'Selo comemorativo', img: '25-anos', fundo: 'claro',
        arquivos: [['PNG','25-anos.png',0.05],['PDF','25-anos-identidade.pdf',0.54],['Editável .ai','25-anos-identidade-editavel.ai',1.95]] },
      { nome: '+25 anos · padrão', nota: 'Arquivo editável', doc: true, fundo: 'neutro',
        arquivos: [['Editável .ai','25-anos-padrao.ai',3.0]] },
    ]},
    { grupo: 'Patentes e prêmios', pasta: 'selos', logos: [
      { nome: '+7 patentes', nota: '+100 artigos publicados · branco', img: '7-patentes', fundo: 'escuro',
        arquivos: [['PNG','7-patentes.png',0.03]] },
      { nome: 'Melhor Invento do Mundo', nota: 'WIPO 2011 · branco', img: 'melhor-invento', fundo: 'escuro',
        arquivos: [['PNG','melhor-invento.png',0.03]] },
    ]},
    { grupo: 'Equipamentos', logos: [
      { nome: 'Optymus', nota: 'Branco', img: 'optymus', fundo: 'escuro', arquivos: [['PNG','optymus.png',0.01]] },
      { nome: 'Clinical Plus', nota: 'Branco', img: 'clinical-plus', fundo: 'escuro', arquivos: [['PNG','clinical-plus.png',0.05]] },
      { nome: 'DentSurg Pro', nota: 'Branco', img: 'dentsurg-pro', fundo: 'escuro', arquivos: [['PNG','dentsurg-pro.png',0.02]] },
      { nome: 'Spray Control', nota: 'Branco', img: 'spray-control', fundo: 'escuro', arquivos: [['PNG','spray-control.png',0.04]] },
    ]},
    { grupo: 'Outras marcas do grupo', logos: [
      { nome: 'CVD Lupas', nota: 'Branco', img: 'cvdlupas', fundo: 'escuro',
        arquivos: [['PNG','cvdlupas.png',0.02],['PDF vetor','cvdlupas-vetor.pdf',0.7]] },
      { nome: 'CVD Vale', nota: 'Colorido', img: 'cvdvale', fundo: 'claro',
        arquivos: [['PNG','cvdvale.png',0.04],['PDF vetor','cvdvale-vetor.pdf',0.7]] },
      { nome: 'CVD Vale branco', nota: 'Para fundos escuros', img: 'cvdvale-branco', fundo: 'escuro',
        arquivos: [['PNG','cvdvale-branco.png',0.04]] },
      { nome: 'CVD Coating', nota: 'Colorido', img: 'cvdcoating', fundo: 'claro',
        arquivos: [['PNG','cvdcoating.png',0.05],['PDF vetor','cvdcoating-vetor.pdf',0.7]] },
      { nome: 'Linha ELO', nota: 'Colorido', img: 'linha-elo', fundo: 'claro',
        arquivos: [['PNG','linha-elo.png',0.04],['PDF vetor','linha-elo-vetor.pdf',0.1]] },
    ]},
  ],
  marcasBase: 'https://github.com/kahuesouza/cvdentus-arquivos/releases/download/',

  /* ---------------- ESPECIALIDADES ---------------- */
  especialidades: [
    { id: 'cirurgia', nome: 'Cirurgia e Implantodontia', curto: 'Cirurgia' },
    { id: 'periodontia', nome: 'Periodontia', curto: 'Perio' },
    { id: 'endodontia', nome: 'Endodontia', curto: 'Endo' },
    { id: 'dentistica', nome: 'Dentística e Prótese', curto: 'Dentística' },
    { id: 'profilaxia', nome: 'Profilaxia', curto: 'Profilaxia' },
    { id: 'orto-odontoped', nome: 'Ortodontia e Odontopediatria', curto: 'Orto/Odontoped.' },
    { id: 'demonstracao', nome: 'Demonstrações e Redes Sociais', curto: 'Demonstrações' },
  ],

  /* ---------------- PROCEDIMENTOS (vídeos no Dropbox) ----------------
     esp = id da especialidade · prof = quem executa · ponta = código */
  procedimentos: [
    // Cirurgia e Implantodontia
    { titulo: 'Sinus Lift', esp: 'cirurgia', prof: 'Prof. Renato Lavezo', ponta: 'SR9', mb: 15, url: DBX + 'AA8XaLTtI-BaQe2PMKNiwAk/' + VP + 'Sinuslift%20Ponta%20SR9%20-%20Prof.%20Renato%20Lavezo.mp4' + RK },
    { titulo: 'Descolamento da Membrana Sinusal', esp: 'cirurgia', prof: 'Prof. Renato Lavezo', mb: 3.3, url: DBX + 'AAcnABuX_4F3BvICbNmKA2I/' + VP + 'Descolamento%20da%20Membrana%20Sinusal%20-%20Prof.%20Renato%20Lavezo.mp4' + RK },
    { titulo: 'Flapless', esp: 'cirurgia', prof: 'Dr. Diego Bazan', mb: 213, url: DBX + 'AD0NPybeWVZwtJGbYl5FHJc/' + VP + 'Flapless%20-%20Dr.%20Diego%20Bazan.mp4' + RK },
    { titulo: 'Descolamento', esp: 'cirurgia', prof: 'Prof. Diego Bazan', ponta: 'SL1-0', mb: 242, url: DBX + 'AD-nwQRMdWifvFLeXvfIO0g/' + VP + 'Descolamento%20SL1-0%20-%20Prof.%20Digeo%20Bazan.mp4' + RK },
    { titulo: 'Descolamento de Torus', esp: 'cirurgia', prof: 'Prof. Diego Bazan', mb: 74, url: DBX + 'ANBhOlNPxKFa4PKUXyGnGfU/' + VP + 'Descolamento%20Torus%20-%20Prof.%20Diego%20Bazan.mp4' + RK },
    { titulo: 'Osteotomia de Torus', esp: 'cirurgia', prof: 'Prof. Diego Bazan', mb: 74, url: DBX + 'AOaj-Rfno-fEunG37eZbfMw/' + VP + 'Osteotomia%20Torus%20-%20Prof.%20Diego%20Bazan.mp4' + RK },
    { titulo: 'Osteotomia', esp: 'cirurgia', mb: 5.0, url: DBX + 'AETAHnQzUvMUcV9iAWVV4hY/' + VP + 'Osteotomia.mp4' + RK },
    { titulo: 'Descolamento', esp: 'cirurgia', mb: 5.2, url: DBX + 'AK0i_ZBKNua1s6ZFKdwwGLs/' + VP + 'Descolamento.MOV' + RK },
    { titulo: 'Cirurgia do Mento', esp: 'cirurgia', prof: 'Ricardo Scotton', mb: 170, url: DBX + 'AC6kRbuzyAaJnVR2UqAiTY0/' + VP + 'Cirurgia%20do%20Mento%20-%20Ricardo%20Scotton.mp4' + RK },
    { titulo: 'Sindesmotomia', esp: 'cirurgia', mb: 62, url: DBX + 'AHQDTqYlmY8JD3fxNOqdHgc/' + VP + 'Sindesmotomia.mp4' + RK },

    // Periodontia
    { titulo: 'Aumento de Coroa e Regularização Radicular', esp: 'periodontia', prof: 'Prof. Diego Bazan', mb: 94, url: DBX + 'AHT_gvrMNBfNjmxOtgvVMDE/' + VP + 'Aumento%20de%20Coroa%20e%20Regulariza%C3%A7%C3%A3o%20Radicular%20-%20Prof.%20Diego%20Bazan.mp4' + RK },
    { titulo: 'Raspagem e Alisamento Radicular', esp: 'periodontia', prof: 'Prof. Diego Bazan', mb: 209, url: DBX + 'ABEg0U88Wyk52dJE7G5RK_M/' + VP + 'Raspgaem%20e%20Alisamento%20Radicular%20-%20Prof.%20Diego%20Bazan.mp4' + RK },
    { titulo: 'Gengivoplastia com Osteotomia', esp: 'periodontia', mb: 195, url: DBX + 'ALf4JuBtHxK8qaDN7fayHm8/' + VP + 'Gengivoplastia%20com%20Osteotomia.mp4' + RK },
    { titulo: 'Peeling Gengival', esp: 'periodontia', mb: 190, url: DBX + 'AL4_pzdQWmq0NsK6PwQF73Y/' + VP + 'Peeling%20Gengival.mp4' + RK },

    // Endodontia
    { titulo: 'Cirurgia de Retropreparo', esp: 'endodontia', prof: 'Prof. Eduardo Santini', mb: 75, url: DBX + 'ANP13EjE3uXRBAhI2OuyRgc/' + VP + 'Cirurgia%20de%20Retropreparo%20-%20Prof.%20Eduardo%20Santini.mp4' + RK },
    { titulo: 'Irrigação do Conduto e Corte de Guta-Percha', esp: 'endodontia', prof: 'Prof. Rodrigo Villagra', mb: 16, url: DBX + 'AOAomgr4Z9S0Bh93ligCcgI/' + VP + 'Irriga%C3%A7%C3%A3o%20do%20Conduto%2C%20Corte%20Guta-Percha%20-%20Prof.%20Rodrigo%20Villagra.mp4' + RK },
    { titulo: 'Limpeza da Câmara Pulpar', esp: 'endodontia', prof: 'Prof. Rodrigo Villagra', mb: 238, url: DBX + 'AM4VcJPjHh0gfjmYLWJCtxs/' + VP + 'Limpeza%20Camara%20Pulpar%20-%20Prof.%20Rodrigo%20Villagra.mp4' + RK },
    { titulo: 'Compactação da Guta-Percha', esp: 'endodontia', ponta: 'CR2T-E', mb: 6.0, url: DBX + 'AMsN0mIh9UxhTdhL8qBGekE/' + VP + 'Compacta%C3%A7%C3%A3o%20da%20Guta%20Percha%20-%20CR2T-E.mp4' + RK },
    { titulo: 'Remoção de Guta-Percha para Pino de Fibra', esp: 'endodontia', ponta: 'T0S-E2', mb: 7.0, url: DBX + 'AOIYfEmNz3qgQham-BLBZN0/' + VP + 'Remo%C3%A7%C3%A3o%20de%20guta-percha%20para%20cimenta%C3%A7%C3%A3o%20de%20pino%20de%20fibra%20de%20vidro%20-%20Ponta%20T0S-E2.mp4' + RK },
    { titulo: 'Remoção de Pino', esp: 'endodontia', mb: 10, url: DBX + 'AJ8GjrK6_-9s8EkYhr5szPA/' + VP + 'Remo%C3%A7%C3%A3o%20de%20Pino.mp4' + RK },

    // Dentística e Prótese
    { titulo: 'Término de Preparo', esp: 'dentistica', prof: 'Dr. Rodrigo Bucker', mb: 39, url: DBX + 'AFqDlJEzcJJpI6uu8PTL6Qg/' + VP + 'T%C3%A9rmino%20de%20Preparo%20-%20Dr.%20Rodrigo%20Bucker.mp4' + RK },
    { titulo: 'Término de Preparo', esp: 'dentistica', prof: 'Dr. Shizuma Shibata', mb: 40, url: DBX + 'ADYcre1nRuIrlaNyL0l7iyI/' + VP + 'T%C3%A9rmino%20de%20Preparo%20-%20Dr.%20Shizuma%20Shibata.mp4' + RK },
    { titulo: 'Término de Preparo', esp: 'dentistica', ponta: 'T1F', mb: 43, url: DBX + 'ANqpKdhzrsCQizfLrICQps4/' + VP + 'T%C3%A9rmino%20T1F.mp4' + RK },
    { titulo: 'Acabamento Cervical de Restauros em Resina', esp: 'dentistica', prof: 'Prof. Renato Voss', mb: 11, url: DBX + 'ACgbkm5OoMj0zD1WevHz0sA/' + VP + 'Acabamento%20cervical%20de%20restauros%20em%20resina%20composta%20-%20Prof.%20Renato%20Voss.mp4' + RK },
    { titulo: 'Acabamento Cervical de Restauros em Resina', esp: 'dentistica', prof: 'Prof. Renato Voss', ponta: 'TR1F-RV', mb: 7.1, url: DBX + 'AH9TA9UO-NaresQtZyF0Ewk/' + VP + 'Acabamento%20cervical%20de%20restauros%20em%20resina%20composta%20TR1F-RV%20-%20Prof.%20Renato%20Voss.mp4' + RK },
    { titulo: 'Remoção de Facetas', esp: 'dentistica', prof: 'Gustavo Greco, Alexandre Greco e Ricardo Oliveira', mb: 109, url: DBX + 'AAKCS54l11FDIBIbWzCFVFY/' + VP + 'Remo%C3%A7%C3%A3o%20de%20Facetas%20-%20Gustavo%20Greco%2C%20Alexandre%20Greco%20e%20Ricardo%20Oliveira.mp4' + RK },
    { titulo: 'Remoção de Facetas', esp: 'dentistica', prof: 'Dr. Clébio Domingues', mb: 31, url: DBX + 'ANit-P09cRQzxPCX2_jctd8/' + VP + 'Remo%C3%A7%C3%A3o%20e%20Facetas%20-%20Dr.%20Cl%C3%A9bio%20Domingues.mp4' + RK },
    { titulo: 'Remoção de Amálgama', esp: 'dentistica', mb: 188, url: DBX + 'AB2Qpan5f-DDbg131Pl7yCI/' + VP + 'Remo%C3%A7%C3%A3o%20de%20Am%C3%A1lgama.mp4' + RK },
    { titulo: 'Preparo Interproximal', esp: 'dentistica', mb: 10, url: DBX + 'AL3d4L0eWf6Cs_ZaQeK8-54/' + VP + 'Preparo%20Interproximal.mp4' + RK },
    { titulo: 'Slice', esp: 'dentistica', prof: 'Dra. Elizabeth Yassuda', mb: 2.2, url: DBX + 'AGRD5tEZ7iJReZQ0BpSZso8/' + VP + 'Slice_Dra%20Elizabeth%20Yassuda.mp4' + RK },
    { titulo: 'Slice', esp: 'dentistica', mb: 7.0, url: DBX + 'AOBDuk5d7dPQ2RVaf0LpDHQ/' + VP + 'Slice.mp4' + RK },
    { titulo: 'Cimentação', esp: 'dentistica', mb: 29, url: DBX + 'AO5GLJurY0UKH3g_hKW7wLo/' + VP + 'Cimenta%C3%A7%C3%A3o.mov' + RK },

    // Profilaxia
    { titulo: 'Profilaxia com Spray Control', esp: 'profilaxia', prof: 'Dr. Danilo Cioffi', mb: 64, url: DBX + 'ADwaMxDQ2RVmgc1sA8Nsgqo/' + VP + 'Profilaxia%20com%20Spray%20Contro%20-%20Dr.%20Danilo%20Cioffi.mp4' + RK },
    { titulo: 'Profilaxia com Spray Control', esp: 'profilaxia', mb: 21, url: DBX + 'AOtlp9RrjMRNmnzHUzOviF0/' + VP + 'Profilaxia%20com%20Spray%20Control.mp4' + RK },
    { titulo: 'Limpeza com Ponta T1T-P', esp: 'profilaxia', prof: 'Ricardo Scotton', ponta: 'T1T-P', mb: 12, url: DBX + 'AOjGxQnEKtwOXt9dDG0fSKw/' + VP + 'Limpeza%20T1T-P%20Ricardo%20Scotton.mp4' + RK },
    { titulo: 'Modo de Uso da Ponta T1T-P', esp: 'profilaxia', ponta: 'T1T-P', mb: 50, url: DBX + 'APrB46y5ZIrcPqbQYrvdzC0/' + VP + 'Modo%20de%20uso%20T1T-P.mp4' + RK },
    { titulo: 'Ponta T1T-P em ação', esp: 'profilaxia', ponta: 'T1T-P', mb: 25, url: DBX + 'AI2QaSBLfBwRPqzs_cev5mQ/' + VP + 'Ponta%20T1T-P.mp4' + RK },

    // Ortodontia e Odontopediatria
    { titulo: 'Remoção de Resina de Bracket', esp: 'orto-odontoped', mb: 144, url: DBX + 'AMr0jqRQNnLhUOKx3-phKjE/' + VP + 'Remo%C3%A7%C3%A3o%20Resina%20Bracket.mp4' + RK },
    { titulo: 'Odontopediatria', esp: 'orto-odontoped', mb: 229, url: DBX + 'AIA2j8UZky2cbzqbvXKNgSs/' + VP + 'Odontopediatria.mp4' + RK },

    // Demonstrações e Redes Sociais
    { titulo: 'Simulação no Ovo · seletividade do corte', esp: 'demonstracao', prof: 'Dr. Danilo Cioffi', mb: 17, url: DBX + 'AIQG_rAFoOLoukoE4nf002E/' + VP + 'Simula%C3%A7%C3%A3o%20Ovo%20-%20Dr.%20Danilo%20Cioffi.mp4' + RK },
    { titulo: 'Minimamente Invasivo', esp: 'demonstracao', prof: 'Dr. Danilo Cioffi', formato: 'Feed', mb: 14, url: DBX + 'AMx80IdJCQUuIfCAOSYpBkA/' + VP + '11.10_CVDentus_Danilo_MinimamenteInvasivo_Feed_2.mp4' + RK },
    { titulo: 'Minimamente Invasivo', esp: 'demonstracao', prof: 'Dr. Danilo Cioffi', formato: 'Story', mb: 22, url: DBX + 'ADijKN300GdpQKAgH5-Bo8c/' + VP + '11.10_CVDentus_Danilo_MinimamenteInvasivo_Story_2.mp4' + RK },
    { titulo: 'Profilaxia', esp: 'demonstracao', formato: 'Post', mb: 64, url: DBX + 'AGsmLVd_rHXqscyzFleMtSw/' + VP + '22.11_CVDentus_Profilaxia_11.11%20-%20Post_3.mp4' + RK },
    { titulo: 'Caso Clínico · Paciente Samuel', esp: 'demonstracao', prof: 'Dra. Liete Yassuda', mb: 8.6, url: DBX + 'AEGIxjpiv2dVX-I86sqSu5A/' + VP + 'Paciente%20Samuel%20-%20Dra.%20Liete%20Yassuda.mp4' + RK },
    { titulo: 'Broca em Rotação', esp: 'demonstracao', mb: 83, url: DBX + 'APmQVcUbxLmzKDKtQ8DB_K4/' + VP + 'Broca%20Rota%C3%A7%C3%A3o.mp4' + RK },
    { titulo: 'Vídeo sem título (26/07/2022)', esp: 'demonstracao', aviso: 'Renomear no Dropbox', mb: 13, url: DBX + 'ADSGmxRpLNpWG8KrlEoVtWI/' + VP + 'WhatsApp%20Video%202022-07-26%20at%2012.41.54.mp4' + RK },
  ],
};
