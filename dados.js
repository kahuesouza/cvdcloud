/* =====================================================================
   CVDentus · Central de Materiais — BASE DE DADOS
   ---------------------------------------------------------------------
   Este é o ÚNICO arquivo que precisa ser editado para gerir o conteúdo.
   Nada é hospedado no app: todo item é só um LINK (YouTube, FlipHTML5,
   GitHub, site). Para adicionar um material, copie uma linha parecida
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
window.CVD = {
 "atualizado": "14/10/2026",
 "produtos": [
  {
   "id": "optymus",
   "nome": "Optymus",
   "img": "img/optymus.webp",
   "cor": "#1D4ED8",
   "resumo": "Endodontia e profilaxia · portátil, autoclavável, pedal wireless"
  },
  {
   "id": "clinical-plus",
   "nome": "Clinical Plus",
   "img": "img/clinical-plus.webp",
   "cor": "#0F7C8C",
   "resumo": "Multiespecialidade clínica · 2 peças de mão, kit 7 pontas"
  },
  {
   "id": "dentsurg-pro",
   "nome": "DentSurg Pro",
   "img": "img/dentsurg-pro.webp",
   "cor": "#122B63",
   "resumo": "Todas as especialidades + cirurgia · touchscreen, corte ósseo seletivo"
  },
  {
   "id": "lupas",
   "nome": "Lupas",
   "icone": "busca",
   "resumo": "Galileu, Kepler, Ergo e Ergo CX · fotóforos",
   "nota": "Os preços e descontos seguem a política comercial. Antes de passar valores ao cliente, confira se a política vigente não teve alteração de sazonalidade."
  },
  {
   "id": "spray-control",
   "nome": "Spray Control",
   "icone": "spray",
   "resumo": "Profilaxia com jato controlado"
  },
  {
   "id": "pontas",
   "nome": "Pontas CVD",
   "icone": "ponta",
   "resumo": "Catálogos, bula e instruções das pontas diamantadas"
  },
  {
   "id": "brocas",
   "nome": "Brocas",
   "icone": "broca",
   "resumo": "Linha de brocas CVDentus"
  },
  {
   "id": "acessorios",
   "nome": "Acessórios",
   "icone": "chave",
   "resumo": "Bomba peristáltica, chave catraca e afins"
  }
 ],
 "materiais": [
  {
   "titulo": "Catálogo Equipamentos CVDentus",
   "tipo": "catalogo",
   "produto": "geral",
   "idioma": "pt",
   "ano": 2023,
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/catalogo-equipamentos-cvdentus.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/catalogo-equipamentos-cvdentus.pdf",
   "mb": 1.9
  },
  {
   "titulo": "Equipment Catalog CVDentus",
   "tipo": "catalogo",
   "produto": "geral",
   "idioma": "en",
   "ano": 2023,
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/equipment-catalog-cvdentus-en.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/equipment-catalog-cvdentus-en.pdf",
   "mb": 1.8
  },
  {
   "titulo": "Catálogo Equipos CVDentus",
   "tipo": "catalogo",
   "produto": "geral",
   "idioma": "es",
   "ano": 2020,
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/catalogo-equipos-cvdentus-es.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/catalogo-equipos-cvdentus-es.pdf",
   "mb": 1.8,
   "aviso": "Versão 2020"
  },
  {
   "titulo": "Catálogo Representantes",
   "tipo": "catalogo",
   "produto": "geral",
   "idioma": "pt",
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/catalogo-representantes.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/catalogo-representantes.pdf",
   "mb": 9.1,
   "aviso": "Versão 2021 — revisar"
  },
  {
   "titulo": "Tabela Comparativa dos Piezos",
   "tipo": "comparativo",
   "produto": "geral",
   "idioma": "pt",
   "mb": 0.8,
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/arte/mat-tabela-comparativa-dos-piezos.jpg",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/mat-tabela-comparativa-dos-piezos.jpg"
  },
  {
   "titulo": "3 Verdades sobre o Piezoelétrico",
   "tipo": "marketing",
   "produto": "geral",
   "idioma": "pt",
   "mb": 0.9,
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/arte/mat-3-verdades-sobre-o-piezoeletrico.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/mat-3-verdades-sobre-o-piezoeletrico.pdf"
  },
  {
   "titulo": "Catálogo Brocas CVDentus",
   "tipo": "catalogo",
   "produto": "brocas",
   "idioma": "pt",
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/catalogo-brocas-cvdentus.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/catalogo-brocas-cvdentus.pdf",
   "mb": 1.9
  },
  {
   "titulo": "Catálogo Pontas · Clinical Plus e DentSurg Pro",
   "tipo": "catalogo",
   "produto": "pontas",
   "idioma": "pt",
   "ano": 2026,
   "novo": true,
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/catalogo-pontas-clinical-plus-dentsurg-pro-2026.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/catalogo-pontas-clinical-plus-dentsurg-pro-2026.pdf",
   "mb": 12.1
  },
  {
   "titulo": "Catálogo Pontas · Optymus",
   "tipo": "catalogo",
   "produto": "pontas",
   "idioma": "pt",
   "ano": 2025,
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/catalogo-pontas-optymus-2025.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/catalogo-pontas-optymus-2025.pdf",
   "mb": 4.4
  },
  {
   "titulo": "Tips Catalog · Clinical Plus & DentSurg Pro",
   "tipo": "catalogo",
   "produto": "pontas",
   "idioma": "en",
   "ano": 2023,
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/tips-catalog-clinical-plus-dentsurg-pro-en.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/tips-catalog-clinical-plus-dentsurg-pro-en.pdf",
   "mb": 8.7
  },
  {
   "titulo": "Catálogo Puntas",
   "tipo": "catalogo",
   "produto": "pontas",
   "idioma": "es",
   "ano": 2021,
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/catalogo-puntas-es.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/catalogo-puntas-es.pdf",
   "mb": 4.7,
   "aviso": "Versão 2021"
  },
  {
   "titulo": "Bula das pontas · Optymus (completa)",
   "tipo": "bula",
   "produto": "optymus",
   "idioma": "pt",
   "ano": 2023,
   "mb": 0.2,
   "url": "https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F59178%2F1693500441Bula_OPTYMUS_2023_v04.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/bulas/bula-pontas-optymus-2023-v04.pdf"
  },
  {
   "titulo": "Bula por procedimento · Clinical Plus (completa)",
   "tipo": "bula",
   "produto": "clinical-plus",
   "idioma": "pt",
   "ano": 2022,
   "mb": 0.2,
   "url": "https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F59178%2F1693500450Bula_por_procedimento_clnicas_DS_e_DS_PRO_V.05_2022.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/bulas/bula-procedimento-clinical-plus-ds-2022-v05.pdf"
  },
  {
   "titulo": "Bula cirúrgica e clínica · DentSurg Pro (completa)",
   "tipo": "bula",
   "produto": "dentsurg-pro",
   "idioma": "pt",
   "ano": 2023,
   "mb": 0.2,
   "url": "https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F59178%2F1693500463Bula_cirrgicas_e_clnica_DS_PRO_V04_2023.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/bulas/bula-cirurgica-clinica-dentsurg-pro-2023-v04.pdf"
  },
  {
   "titulo": "Bula das Pontas",
   "tipo": "bula",
   "produto": "pontas",
   "idioma": "pt",
   "url": "https://conteudo.cvdentus.com.br/bula-piezos"
  },
  {
   "titulo": "Instruções de Uso das Pontas",
   "tipo": "uso",
   "produto": "pontas",
   "idioma": "pt",
   "url": "https://youtu.be/tSEyNjEQnV4"
  },
  {
   "titulo": "Vídeo 3D Optymus",
   "tipo": "video3d",
   "produto": "optymus",
   "idioma": "pt",
   "url": "https://youtu.be/PCFeRKehPDc"
  },
  {
   "titulo": "Optymus 3D Video",
   "tipo": "video3d",
   "produto": "optymus",
   "idioma": "en",
   "url": "https://youtu.be/3RYsJW9FTgI"
  },
  {
   "titulo": "Video 3D Optymus",
   "tipo": "video3d",
   "produto": "optymus",
   "idioma": "es",
   "url": "https://youtu.be/plRR_-HniZk"
  },
  {
   "titulo": "Instalação Optymus",
   "tipo": "instalacao",
   "produto": "optymus",
   "idioma": "pt",
   "url": "https://youtu.be/6YtLc8fd1bI"
  },
  {
   "titulo": "Optymus Installation",
   "tipo": "instalacao",
   "produto": "optymus",
   "idioma": "en",
   "url": "https://youtu.be/vt13Qi1JVfM"
  },
  {
   "titulo": "Instalación Optymus",
   "tipo": "instalacao",
   "produto": "optymus",
   "idioma": "es",
   "url": "https://youtu.be/s2lqKfn6PFg"
  },
  {
   "titulo": "Modo de Uso Optymus",
   "tipo": "uso",
   "produto": "optymus",
   "idioma": "pt",
   "url": "https://youtu.be/7lVcrUFfFlQ"
  },
  {
   "titulo": "How to Use Optymus",
   "tipo": "uso",
   "produto": "optymus",
   "idioma": "en",
   "url": "https://youtu.be/jIoGEZu3R3Q"
  },
  {
   "titulo": "Modo de Uso Optymus",
   "tipo": "uso",
   "produto": "optymus",
   "idioma": "es",
   "url": "https://youtu.be/wVuyZkZgaUw"
  },
  {
   "titulo": "Manual Optymus",
   "tipo": "manual",
   "produto": "optymus",
   "idioma": "pt",
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/manual-optymus.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/manual-optymus.pdf",
   "mb": 13.5
  },
  {
   "titulo": "Vídeo 3D Clinical Plus",
   "tipo": "video3d",
   "produto": "clinical-plus",
   "idioma": "pt",
   "url": "https://youtu.be/eHURySio6Yo"
  },
  {
   "titulo": "Clinical Plus 3D Video",
   "tipo": "video3d",
   "produto": "clinical-plus",
   "idioma": "en",
   "url": "https://youtu.be/SJtAMp0_xhU"
  },
  {
   "titulo": "Video 3D Clinical Plus",
   "tipo": "video3d",
   "produto": "clinical-plus",
   "idioma": "es",
   "url": "https://youtu.be/OjYg2zspbS4"
  },
  {
   "titulo": "Instalação Clinical Plus",
   "tipo": "instalacao",
   "produto": "clinical-plus",
   "idioma": "pt",
   "url": "https://youtu.be/LmS7AfMrtyI"
  },
  {
   "titulo": "Clinical Plus Installation",
   "tipo": "instalacao",
   "produto": "clinical-plus",
   "idioma": "en",
   "url": "https://youtu.be/flVFjvdDu2E"
  },
  {
   "titulo": "Instalación Clinical Plus",
   "tipo": "instalacao",
   "produto": "clinical-plus",
   "idioma": "es",
   "url": "https://youtu.be/oSra1IOqGiI"
  },
  {
   "titulo": "Modo de Uso Clinical Plus",
   "tipo": "uso",
   "produto": "clinical-plus",
   "idioma": "pt",
   "url": "https://youtu.be/RMMw6dI8k90"
  },
  {
   "titulo": "How to Use Clinical Plus",
   "tipo": "uso",
   "produto": "clinical-plus",
   "idioma": "en",
   "url": "https://youtu.be/hIYBXrC0Rg0"
  },
  {
   "titulo": "Modo de Uso Clinical Plus",
   "tipo": "uso",
   "produto": "clinical-plus",
   "idioma": "es",
   "url": "https://youtu.be/pJWZx8l6IyU"
  },
  {
   "titulo": "Manual Clinical Plus",
   "tipo": "manual",
   "produto": "clinical-plus",
   "idioma": "pt",
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/manual-clinical-plus.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/manual-clinical-plus.pdf",
   "mb": 16.3
  },
  {
   "titulo": "Clinical Plus Manual",
   "tipo": "manual",
   "produto": "clinical-plus",
   "idioma": "en",
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/clinical-plus-manual-en.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/clinical-plus-manual-en.pdf",
   "mb": 13.9
  },
  {
   "titulo": "Vídeo 3D DentSurg Pro",
   "tipo": "video3d",
   "produto": "dentsurg-pro",
   "idioma": "pt",
   "url": "https://youtu.be/za1LrR-Jp0o"
  },
  {
   "titulo": "DentSurg Pro 3D Video",
   "tipo": "video3d",
   "produto": "dentsurg-pro",
   "idioma": "en",
   "url": "https://youtu.be/p4YLlH98ncQ"
  },
  {
   "titulo": "Video 3D DentSurg Pro",
   "tipo": "video3d",
   "produto": "dentsurg-pro",
   "idioma": "es",
   "url": "https://youtu.be/dJoAHEjT9UE"
  },
  {
   "titulo": "Instalação DentSurg Pro",
   "tipo": "instalacao",
   "produto": "dentsurg-pro",
   "idioma": "pt",
   "url": "https://youtu.be/_rkvwdZsHaE"
  },
  {
   "titulo": "DentSurg Pro Installation",
   "tipo": "instalacao",
   "produto": "dentsurg-pro",
   "idioma": "en",
   "url": "https://youtu.be/SvNvYGksd_k"
  },
  {
   "titulo": "Instalación DentSurg Pro",
   "tipo": "instalacao",
   "produto": "dentsurg-pro",
   "idioma": "es",
   "url": "https://www.youtube.com/watch?v=_vOhPcJwnVk&list=PLwi_3lSQGTZAGF823s4tTpp0iZa0k3XnW&index=11"
  },
  {
   "titulo": "Modo de Uso DentSurg Pro",
   "tipo": "uso",
   "produto": "dentsurg-pro",
   "idioma": "pt",
   "url": "https://youtu.be/9kBlbd_ZXd4"
  },
  {
   "titulo": "How to Use DentSurg Pro",
   "tipo": "uso",
   "produto": "dentsurg-pro",
   "idioma": "en",
   "url": "https://youtu.be/AzZOPpWdPy8"
  },
  {
   "titulo": "Modo de Uso DentSurg Pro",
   "tipo": "uso",
   "produto": "dentsurg-pro",
   "idioma": "es",
   "url": "https://youtu.be/OSFUZF5a02w"
  },
  {
   "titulo": "Manual DentSurg Pro",
   "tipo": "manual",
   "produto": "dentsurg-pro",
   "idioma": "pt",
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/manual-dentsurg-pro.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/manual-dentsurg-pro.pdf",
   "mb": 15.3
  },
  {
   "titulo": "DentSurg Pro Manual",
   "tipo": "manual",
   "produto": "dentsurg-pro",
   "idioma": "en",
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/dentsurg-pro-manual-en.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/dentsurg-pro-manual-en.pdf",
   "mb": 14.2
  },
  {
   "titulo": "Manual DentSurg Pro",
   "tipo": "manual",
   "produto": "dentsurg-pro",
   "idioma": "es",
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/manual-dentsurg-pro-es.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/manual-dentsurg-pro-es.pdf",
   "mb": 13.5
  },
  {
   "titulo": "DentSurg Pro Catalog",
   "tipo": "catalogo",
   "produto": "dentsurg-pro",
   "idioma": "en",
   "mb": 2.1,
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/catalogos/catalogo-dentsurg-pro-en.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/catalogos/english_CATALOG_DS_PRO_OK.pdf"
  },
  {
   "titulo": "Catálogo DentSurg Pro",
   "tipo": "catalogo",
   "produto": "dentsurg-pro",
   "idioma": "es",
   "mb": 2.7,
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/catalogos/catalogo-dentsurg-pro-es.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/catalogos/SPANISH_CATALOG_DS_PRO_OK.pdf"
  },
  {
   "titulo": "Folder DentSurg Pro Cirúrgico",
   "tipo": "catalogo",
   "produto": "dentsurg-pro",
   "idioma": "pt",
   "ano": 2024,
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/livros/folder-dentsurg-pro-cirurgico-2024.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/livros/folder-dentsurg-pro-cirurgico-2024.pdf",
   "mb": 1.4
  },
  {
   "titulo": "Catálogo de Lupas (online)",
   "tipo": "catalogo",
   "produto": "lupas",
   "idioma": "pt",
   "ano": 2026,
   "novo": true,
   "url": "https://catalogodelupas.cvdentus.com.br/",
   "pdf": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/catalogos/catalogo-lupas-oficial-2026.pdf",
   "pdfMb": 49,
   "aviso": "Confira a política comercial vigente"
  },
  {
   "titulo": "Simulador de Lupas",
   "tipo": "landing",
   "produto": "lupas",
   "idioma": "pt",
   "novo": true,
   "url": "https://simuladordelupas.cvdentus.com.br/"
  },
  {
   "titulo": "Página do Spray Control",
   "tipo": "landing",
   "produto": "spray-control",
   "idioma": "pt",
   "url": "https://conteudo.cvdentus.com.br/spray-control"
  },
  {
   "titulo": "Modo de Uso Spray Control",
   "tipo": "uso",
   "produto": "spray-control",
   "idioma": "pt",
   "url": "https://youtu.be/vdwjV-I9VZE"
  },
  {
   "titulo": "Catálogo de Acessórios",
   "tipo": "catalogo",
   "produto": "acessorios",
   "idioma": "pt",
   "ano": 2026,
   "novo": true,
   "mb": 5.2,
   "url": "https://kahuesouza.github.io/cvdentus-arquivos/catalogos/catalogo-acessorios-cvdentus-2026.pdf",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/catalogos/CATALOGO_ACESSORIOS_CVDENTUS_2026_DIGITAL.pdf"
  },
  {
   "titulo": "Vídeo de apoio · Bomba Peristáltica",
   "tipo": "apoio",
   "produto": "acessorios",
   "idioma": "pt",
   "mb": 11,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/mat-video-de-apoio-bomba-peristaltica.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/mat-video-de-apoio-bomba-peristaltica.mp4"
  },
  {
   "titulo": "Vídeo de apoio · Chave Catraca",
   "tipo": "apoio",
   "produto": "acessorios",
   "idioma": "pt",
   "mb": 43,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/mat-video-de-apoio-chave-catraca.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/mat-video-de-apoio-chave-catraca.mp4"
  },
  {
   "titulo": "Peças de divulgação",
   "tipo": "marketing",
   "produto": "geral",
   "idioma": "pt",
   "mb": 102,
   "url": "#/galeria/pecas",
   "galeria": "pecas",
   "semDownload": true
  },
  {
   "titulo": "Lançamento Adaptadores Optymus",
   "tipo": "marketing",
   "produto": "optymus",
   "idioma": "pt",
   "mb": 12,
   "url": "#/galeria/adaptadores",
   "novo": true,
   "galeria": "adaptadores",
   "semDownload": true
  },
  {
   "titulo": "CVDentus Members · artes feed e story",
   "tipo": "marketing",
   "produto": "geral",
   "idioma": "pt",
   "mb": 17,
   "url": "#/galeria/members",
   "novo": true,
   "galeria": "members",
   "semDownload": true
  },
  {
   "titulo": "Kit Flapless · e-mail marketing",
   "tipo": "marketing",
   "produto": "dentsurg-pro",
   "idioma": "pt",
   "mb": 1,
   "url": "#/galeria/flapless",
   "galeria": "flapless",
   "semDownload": true
  },
  {
   "titulo": "Piezo na Odontologia Moderna",
   "tipo": "treinamento",
   "produto": "geral",
   "idioma": "pt",
   "url": "https://www.dropbox.com/home/REDE01/MARKETING/EQUIPE%20MARKETING/CVDentus/COMERCIAL/TREINAMENTOS?preview=Piezo+na+Odontologia+Moderna.mp4",
   "aviso": "Exige login no Dropbox da equipe"
  }
 ],
 "marcas": [
  {
   "grupo": "CVDentus",
   "logos": [
    {
     "nome": "Padrão colorido",
     "nota": "Fundo transparente",
     "img": "cvdentus-padrao",
     "fundo": "claro",
     "arquivos": [
      [
       "PNG",
       "cvdentus-padrao.png",
       0.05
      ],
      [
       "PDF vetor",
       "cvdentus-vetor.pdf",
       0.7
      ]
     ]
    },
    {
     "nome": "Branco",
     "nota": "Para fundos escuros",
     "img": "cvdentus-fundo-branco",
     "fundo": "escuro",
     "arquivos": [
      [
       "PNG",
       "cvdentus-fundo-branco.png",
       0.05
      ]
     ]
    },
    {
     "nome": "Fundo preto",
     "nota": "Quadrado 1080 px",
     "img": "cvdentus-preto",
     "fundo": "neutro",
     "arquivos": [
      [
       "PNG",
       "cvdentus-preto.png",
       0.04
      ]
     ]
    },
    {
     "nome": "Perfil Google",
     "nota": "Quadrado 1080 px",
     "img": "cvdentus-google",
     "fundo": "neutro",
     "arquivos": [
      [
       "PNG",
       "cvdentus-google.png",
       0.03
      ]
     ]
    },
    {
     "nome": "Alta resolução",
     "nota": "Web e impressão grande · 21020 px",
     "img": "cvdentus-padrao",
     "fundo": "claro",
     "arquivos": [
      [
       "PNG",
       "cvdentus-web.png",
       2.1
      ]
     ]
    }
   ]
  },
  {
   "grupo": "Selos e certificações",
   "pasta": "selos",
   "logos": [
    {
     "nome": "ISO 13485",
     "nota": "Dispositivos médicos",
     "img": "iso-13485",
     "fundo": "claro",
     "arquivos": [
      [
       "PNG",
       "iso-13485.png",
       0.04
      ],
      [
       "PDF",
       "iso-13485.pdf",
       0.3
      ]
     ]
    },
    {
     "nome": "ISO 9001",
     "nota": "Gestão da qualidade",
     "img": "iso-9001",
     "fundo": "claro",
     "arquivos": [
      [
       "PNG",
       "iso-9001.png",
       0.04
      ]
     ]
    },
    {
     "nome": "ISO 9001 + 13485",
     "nota": "Selo conjunto em PDF",
     "doc": true,
     "fundo": "neutro",
     "arquivos": [
      [
       "PDF",
       "iso-9001-e-13485.pdf",
       0.3
      ]
     ]
    },
    {
     "nome": "Padronização ISO",
     "nota": "Documento de padronização",
     "doc": true,
     "fundo": "neutro",
     "arquivos": [
      [
       "PDF",
       "padronizacao-iso.pdf",
       0.26
      ]
     ]
    },
    {
     "nome": "+25 anos",
     "nota": "Selo comemorativo",
     "img": "25-anos",
     "fundo": "claro",
     "arquivos": [
      [
       "PNG",
       "25-anos.png",
       0.05
      ],
      [
       "PDF",
       "25-anos-identidade.pdf",
       0.54
      ],
      [
       "Editável .ai",
       "25-anos-identidade-editavel.ai",
       1.95
      ]
     ]
    },
    {
     "nome": "+25 anos · padrão",
     "nota": "Arquivo editável",
     "doc": true,
     "fundo": "neutro",
     "arquivos": [
      [
       "Editável .ai",
       "25-anos-padrao.ai",
       3
      ]
     ]
    }
   ]
  },
  {
   "grupo": "Patentes e prêmios",
   "pasta": "selos",
   "logos": [
    {
     "nome": "+7 patentes",
     "nota": "+100 artigos publicados · branco",
     "img": "7-patentes",
     "fundo": "escuro",
     "arquivos": [
      [
       "PNG",
       "7-patentes.png",
       0.03
      ]
     ]
    },
    {
     "nome": "Melhor Invento do Mundo",
     "nota": "WIPO 2011 · branco",
     "img": "melhor-invento",
     "fundo": "escuro",
     "arquivos": [
      [
       "PNG",
       "melhor-invento.png",
       0.03
      ]
     ]
    }
   ]
  },
  {
   "grupo": "Equipamentos",
   "logos": [
    {
     "nome": "Optymus",
     "nota": "Branco",
     "img": "optymus",
     "fundo": "escuro",
     "arquivos": [
      [
       "PNG",
       "optymus.png",
       0.01
      ]
     ]
    },
    {
     "nome": "Clinical Plus",
     "nota": "Branco",
     "img": "clinical-plus",
     "fundo": "escuro",
     "arquivos": [
      [
       "PNG",
       "clinical-plus.png",
       0.05
      ]
     ]
    },
    {
     "nome": "DentSurg Pro",
     "nota": "Branco",
     "img": "dentsurg-pro",
     "fundo": "escuro",
     "arquivos": [
      [
       "PNG",
       "dentsurg-pro.png",
       0.02
      ]
     ]
    },
    {
     "nome": "Spray Control",
     "nota": "Branco",
     "img": "spray-control",
     "fundo": "escuro",
     "arquivos": [
      [
       "PNG",
       "spray-control.png",
       0.04
      ]
     ]
    }
   ]
  },
  {
   "grupo": "Outras marcas do grupo",
   "logos": [
    {
     "nome": "CVD Lupas",
     "nota": "Branco",
     "img": "cvdlupas",
     "fundo": "escuro",
     "arquivos": [
      [
       "PNG",
       "cvdlupas.png",
       0.02
      ],
      [
       "PDF vetor",
       "cvdlupas-vetor.pdf",
       0.7
      ]
     ]
    },
    {
     "nome": "CVD Vale",
     "nota": "Colorido",
     "img": "cvdvale",
     "fundo": "claro",
     "arquivos": [
      [
       "PNG",
       "cvdvale.png",
       0.04
      ],
      [
       "PDF vetor",
       "cvdvale-vetor.pdf",
       0.7
      ]
     ]
    },
    {
     "nome": "CVD Vale branco",
     "nota": "Para fundos escuros",
     "img": "cvdvale-branco",
     "fundo": "escuro",
     "arquivos": [
      [
       "PNG",
       "cvdvale-branco.png",
       0.04
      ]
     ]
    },
    {
     "nome": "CVD Coating",
     "nota": "Colorido",
     "img": "cvdcoating",
     "fundo": "claro",
     "arquivos": [
      [
       "PNG",
       "cvdcoating.png",
       0.05
      ],
      [
       "PDF vetor",
       "cvdcoating-vetor.pdf",
       0.7
      ]
     ]
    },
    {
     "nome": "Linha ELO",
     "nota": "Colorido",
     "img": "linha-elo",
     "fundo": "claro",
     "arquivos": [
      [
       "PNG",
       "linha-elo.png",
       0.04
      ],
      [
       "PDF vetor",
       "linha-elo-vetor.pdf",
       0.1
      ]
     ]
    }
   ]
  }
 ],
 "marcasBase": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/",
 "especialidades": [
  {
   "id": "cirurgia",
   "nome": "Cirurgia e Implantodontia",
   "curto": "Cirurgia"
  },
  {
   "id": "periodontia",
   "nome": "Periodontia",
   "curto": "Perio"
  },
  {
   "id": "endodontia",
   "nome": "Endodontia",
   "curto": "Endo"
  },
  {
   "id": "dentistica",
   "nome": "Dentística e Prótese",
   "curto": "Dentística"
  },
  {
   "id": "profilaxia",
   "nome": "Profilaxia",
   "curto": "Profilaxia"
  },
  {
   "id": "orto-odontoped",
   "nome": "Ortodontia e Odontopediatria",
   "curto": "Orto/Odontoped."
  },
  {
   "id": "demonstracao",
   "nome": "Demonstrações e Redes Sociais",
   "curto": "Demonstrações"
  }
 ],
 "procedimentos": [
  {
   "titulo": "Sinus Lift",
   "esp": "cirurgia",
   "prof": "Prof. Renato Lavezo",
   "ponta": "SR9",
   "mb": 15,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-01-sinus-lift-prof-renato-lavezo.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-01-sinus-lift-prof-renato-lavezo.mp4",
   "topico": "sinus-lift",
   "pontas": [
    "SR9"
   ]
  },
  {
   "titulo": "Descolamento da Membrana Sinusal",
   "esp": "cirurgia",
   "prof": "Prof. Renato Lavezo",
   "mb": 3.5,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-02-descolamento-da-membrana-sinusal-prof-renato-lavezo.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-02-descolamento-da-membrana-sinusal-prof-renato-lavezo.mp4",
   "topico": "sinus-lift"
  },
  {
   "titulo": "Flapless",
   "esp": "cirurgia",
   "prof": "Dr. Diego Bazan",
   "mb": 213,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-03-flapless-dr-diego-bazan.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-03-flapless-dr-diego-bazan.mp4",
   "topico": "flapless"
  },
  {
   "titulo": "Descolamento",
   "esp": "cirurgia",
   "prof": "Prof. Diego Bazan",
   "ponta": "SL1-0",
   "mb": 241,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-04-descolamento-prof-diego-bazan.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-04-descolamento-prof-diego-bazan.mp4",
   "topico": "descolamento",
   "pontas": [
    "SL1-0"
   ]
  },
  {
   "titulo": "Descolamento de Torus",
   "esp": "cirurgia",
   "prof": "Prof. Diego Bazan",
   "mb": 74,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-05-descolamento-de-torus-prof-diego-bazan.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-05-descolamento-de-torus-prof-diego-bazan.mp4",
   "topico": "osteotomia-torus"
  },
  {
   "titulo": "Osteotomia de Torus",
   "esp": "cirurgia",
   "prof": "Prof. Diego Bazan",
   "mb": 74,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-06-osteotomia-de-torus-prof-diego-bazan.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-06-osteotomia-de-torus-prof-diego-bazan.mp4",
   "topico": "osteotomia-torus"
  },
  {
   "titulo": "Osteotomia",
   "esp": "cirurgia",
   "mb": 5,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-07-osteotomia.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-07-osteotomia.mp4",
   "topico": "osteotomia-torus"
  },
  {
   "titulo": "Descolamento",
   "esp": "cirurgia",
   "mb": 6.2,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-08-descolamento.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-08-descolamento.mp4",
   "topico": "descolamento"
  },
  {
   "titulo": "Cirurgia do Mento",
   "esp": "cirurgia",
   "prof": "Ricardo Scotton",
   "mb": 170,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-09-cirurgia-do-mento-ricardo-scotton.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-09-cirurgia-do-mento-ricardo-scotton.mp4",
   "topico": "outras-cirurgias"
  },
  {
   "titulo": "Sindesmotomia",
   "esp": "cirurgia",
   "mb": 61,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-10-sindesmotomia.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-10-sindesmotomia.mp4",
   "topico": "outras-cirurgias"
  },
  {
   "titulo": "Aumento de Coroa e Regularização Radicular",
   "esp": "periodontia",
   "prof": "Prof. Diego Bazan",
   "mb": 93,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-11-aumento-de-coroa-e-regularizacao-radicular-prof-diego-bazan.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-11-aumento-de-coroa-e-regularizacao-radicular-prof-diego-bazan.mp4",
   "topico": "flapless"
  },
  {
   "titulo": "Raspagem e Alisamento Radicular",
   "esp": "periodontia",
   "prof": "Prof. Diego Bazan",
   "mb": 209,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-12-raspagem-e-alisamento-radicular-prof-diego-bazan.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-12-raspagem-e-alisamento-radicular-prof-diego-bazan.mp4",
   "topico": "raspagem"
  },
  {
   "titulo": "Gengivoplastia com Osteotomia",
   "esp": "periodontia",
   "mb": 195,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-13-gengivoplastia-com-osteotomia.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-13-gengivoplastia-com-osteotomia.mp4",
   "topico": "gengivoplastia-peeling"
  },
  {
   "titulo": "Peeling Gengival",
   "esp": "periodontia",
   "mb": 190,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-14-peeling-gengival.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-14-peeling-gengival.mp4",
   "topico": "gengivoplastia-peeling"
  },
  {
   "titulo": "Cirurgia de Retropreparo",
   "esp": "endodontia",
   "prof": "Prof. Eduardo Santini",
   "mb": 71,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-15-cirurgia-de-retropreparo-prof-eduardo-santini.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-15-cirurgia-de-retropreparo-prof-eduardo-santini.mp4",
   "topico": "apicectomia"
  },
  {
   "titulo": "Irrigação do Conduto e Corte de Guta-Percha",
   "esp": "endodontia",
   "prof": "Prof. Rodrigo Villagra",
   "mb": 15,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-16-irrigacao-do-conduto-e-corte-de-guta-percha-prof-rodrigo-vil.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-16-irrigacao-do-conduto-e-corte-de-guta-percha-prof-rodrigo-vil.mp4",
   "topico": "pui"
  },
  {
   "titulo": "Limpeza da Câmara Pulpar",
   "esp": "endodontia",
   "prof": "Prof. Rodrigo Villagra",
   "mb": 238,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-17-limpeza-da-camara-pulpar-prof-rodrigo-villagra.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-17-limpeza-da-camara-pulpar-prof-rodrigo-villagra.mp4",
   "topico": "endodontia"
  },
  {
   "titulo": "Compactação da Guta-Percha",
   "esp": "endodontia",
   "ponta": "CR2T-E",
   "mb": 6.3,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-18-compactacao-da-guta-percha.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-18-compactacao-da-guta-percha.mp4",
   "topico": "guta-percha",
   "pontas": [
    "CR2T-E"
   ]
  },
  {
   "titulo": "Remoção de Guta-Percha para Pino de Fibra",
   "esp": "endodontia",
   "ponta": "T0S-E2",
   "mb": 7.3,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-19-remocao-de-guta-percha-para-pino-de-fibra.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-19-remocao-de-guta-percha-para-pino-de-fibra.mp4",
   "topico": "guta-percha",
   "pontas": [
    "T0S-E2"
   ]
  },
  {
   "titulo": "Remoção de Pino",
   "esp": "endodontia",
   "mb": 9,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-20-remocao-de-pino.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-20-remocao-de-pino.mp4",
   "topico": "pinos"
  },
  {
   "titulo": "Término de Preparo",
   "esp": "dentistica",
   "prof": "Dr. Rodrigo Bucker",
   "mb": 39,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-21-termino-de-preparo-dr-rodrigo-bucker.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-21-termino-de-preparo-dr-rodrigo-bucker.mp4",
   "topico": "preparo-termino"
  },
  {
   "titulo": "Término de Preparo",
   "esp": "dentistica",
   "prof": "Dr. Shizuma Shibata",
   "mb": 40,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-22-termino-de-preparo-dr-shizuma-shibata.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-22-termino-de-preparo-dr-shizuma-shibata.mp4",
   "topico": "preparo-termino"
  },
  {
   "titulo": "Término de Preparo",
   "esp": "dentistica",
   "ponta": "T1F",
   "mb": 43,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-23-termino-de-preparo.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-23-termino-de-preparo.mp4",
   "topico": "preparo-termino",
   "pontas": [
    "T1F"
   ]
  },
  {
   "titulo": "Acabamento Cervical de Restauros em Resina",
   "esp": "dentistica",
   "prof": "Prof. Renato Voss",
   "mb": 12,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-24-acabamento-cervical-de-restauros-em-resina-prof-renato-voss.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-24-acabamento-cervical-de-restauros-em-resina-prof-renato-voss.mp4",
   "topico": "preparo-termino"
  },
  {
   "titulo": "Acabamento Cervical de Restauros em Resina",
   "esp": "dentistica",
   "prof": "Prof. Renato Voss",
   "ponta": "TR1F-RV",
   "mb": 7.7,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-25-acabamento-cervical-de-restauros-em-resina-prof-renato-voss.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-25-acabamento-cervical-de-restauros-em-resina-prof-renato-voss.mp4",
   "topico": "preparo-termino",
   "pontas": [
    "TR1F-RV"
   ]
  },
  {
   "titulo": "Remoção de Facetas",
   "esp": "dentistica",
   "prof": "Gustavo Greco, Alexandre Greco e Ricardo Oliveira",
   "mb": 109,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-26-remocao-de-facetas-gustavo-greco-alexandre-greco-e-ricardo-o.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-26-remocao-de-facetas-gustavo-greco-alexandre-greco-e-ricardo-o.mp4",
   "topico": "facetas"
  },
  {
   "titulo": "Remoção de Facetas",
   "esp": "dentistica",
   "prof": "Dr. Clébio Domingues",
   "mb": 31,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-27-remocao-de-facetas-dr-clebio-domingues.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-27-remocao-de-facetas-dr-clebio-domingues.mp4",
   "topico": "facetas"
  },
  {
   "titulo": "Remoção de Amálgama",
   "esp": "dentistica",
   "mb": 187,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-28-remocao-de-amalgama.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-28-remocao-de-amalgama.mp4",
   "topico": "amalgama-resina"
  },
  {
   "titulo": "Preparo Interproximal",
   "esp": "dentistica",
   "mb": 9.3,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-29-preparo-interproximal.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-29-preparo-interproximal.mp4",
   "topico": "preparo-termino"
  },
  {
   "titulo": "Slice",
   "esp": "dentistica",
   "prof": "Dra. Elizabeth Yassuda",
   "mb": 2.3,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-30-slice-dra-elizabeth-yassuda.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-30-slice-dra-elizabeth-yassuda.mp4",
   "topico": "slice"
  },
  {
   "titulo": "Slice",
   "esp": "dentistica",
   "mb": 7.3,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-31-slice.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-31-slice.mp4",
   "topico": "slice"
  },
  {
   "titulo": "Cimentação",
   "esp": "dentistica",
   "mb": 29,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-32-cimentacao.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-32-cimentacao.mp4",
   "topico": "cimentacao"
  },
  {
   "titulo": "Profilaxia com Spray Control",
   "esp": "profilaxia",
   "prof": "Dr. Danilo Cioffi",
   "mb": 62,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-33-profilaxia-com-spray-control-dr-danilo-cioffi.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-33-profilaxia-com-spray-control-dr-danilo-cioffi.mp4",
   "topico": "profilaxia"
  },
  {
   "titulo": "Profilaxia com Spray Control",
   "esp": "profilaxia",
   "mb": 20,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-34-profilaxia-com-spray-control.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-34-profilaxia-com-spray-control.mp4",
   "topico": "profilaxia"
  },
  {
   "titulo": "Limpeza com Ponta T1T-P",
   "esp": "profilaxia",
   "prof": "Ricardo Scotton",
   "ponta": "T1T-P",
   "mb": 13,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-35-limpeza-com-ponta-t1t-p-ricardo-scotton.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-35-limpeza-com-ponta-t1t-p-ricardo-scotton.mp4",
   "topico": "t1tp-implantes",
   "pontas": [
    "T1T-P"
   ]
  },
  {
   "titulo": "Modo de Uso da Ponta T1T-P",
   "esp": "profilaxia",
   "ponta": "T1T-P",
   "mb": 50,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-36-modo-de-uso-da-ponta-t1t-p.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-36-modo-de-uso-da-ponta-t1t-p.mp4",
   "topico": "t1tp-implantes",
   "pontas": [
    "T1T-P"
   ]
  },
  {
   "titulo": "Ponta T1T-P em ação",
   "esp": "profilaxia",
   "ponta": "T1T-P",
   "mb": 24,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-37-ponta-t1t-p-em-acao.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-37-ponta-t1t-p-em-acao.mp4",
   "topico": "t1tp-implantes",
   "pontas": [
    "T1T-P"
   ]
  },
  {
   "titulo": "Remoção de Resina de Bracket",
   "esp": "orto-odontoped",
   "mb": 144,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-38-remocao-de-resina-de-bracket.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-38-remocao-de-resina-de-bracket.mp4",
   "topico": "odontopediatria"
  },
  {
   "titulo": "Odontopediatria",
   "esp": "orto-odontoped",
   "mb": 228,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-39-odontopediatria.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-39-odontopediatria.mp4",
   "topico": "odontopediatria"
  },
  {
   "titulo": "Simulação no Ovo · seletividade do corte",
   "esp": "demonstracao",
   "prof": "Dr. Danilo Cioffi",
   "mb": 17,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-40-simulacao-no-ovo-seletividade-do-corte-dr-danilo-cioffi.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-40-simulacao-no-ovo-seletividade-do-corte-dr-danilo-cioffi.mp4",
   "topico": "demonstracoes"
  },
  {
   "titulo": "Minimamente Invasivo",
   "esp": "demonstracao",
   "prof": "Dr. Danilo Cioffi",
   "formato": "Feed",
   "mb": 13,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-41-minimamente-invasivo-dr-danilo-cioffi.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-41-minimamente-invasivo-dr-danilo-cioffi.mp4",
   "topico": "demonstracoes"
  },
  {
   "titulo": "Minimamente Invasivo",
   "esp": "demonstracao",
   "prof": "Dr. Danilo Cioffi",
   "formato": "Story",
   "mb": 21,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-42-minimamente-invasivo-dr-danilo-cioffi.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-42-minimamente-invasivo-dr-danilo-cioffi.mp4",
   "topico": "demonstracoes"
  },
  {
   "titulo": "Profilaxia",
   "esp": "demonstracao",
   "formato": "Post",
   "mb": 61,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-43-profilaxia.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-43-profilaxia.mp4",
   "topico": "profilaxia"
  },
  {
   "titulo": "Caso Clínico · Paciente Samuel",
   "esp": "demonstracao",
   "prof": "Dra. Liete Yassuda",
   "mb": 9,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-44-caso-clinico-paciente-samuel-dra-liete-yassuda.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-44-caso-clinico-paciente-samuel-dra-liete-yassuda.mp4",
   "topico": "demonstracoes"
  },
  {
   "titulo": "Broca em Rotação",
   "esp": "demonstracao",
   "mb": 83,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-45-broca-em-rotacao.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-45-broca-em-rotacao.mp4",
   "topico": "demonstracoes"
  },
  {
   "titulo": "Vídeo sem título (26/07/2022)",
   "esp": "demonstracao",
   "aviso": "Renomear no Dropbox",
   "mb": 13,
   "url": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-46-video-sem-titulo-26-07-2022.mp4",
   "baixarUrl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/procedimentos/proc-46-video-sem-titulo-26-07-2022.mp4",
   "topico": "demonstracoes"
  },
  {
   "titulo": "Aumento de Coroa · Flapless com DentSurg",
   "esp": "cirurgia",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=wi9IzQrBXxo",
   "topico": "flapless"
  },
  {
   "titulo": "Aumento de Coroa Clínica · Flap",
   "esp": "cirurgia",
   "prof": "Dra. Thayane Furtado",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=fbNMSDdVj3o",
   "topico": "flapless"
  },
  {
   "titulo": "Cirurgia Flapless",
   "esp": "cirurgia",
   "prof": "Dr. Paulo Kano",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=UAydlOoTFLA",
   "topico": "flapless"
  },
  {
   "titulo": "Cirurgia Flapless",
   "esp": "cirurgia",
   "prof": "Dr. Alexandre Teixeira Neto",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=YXHPTtstu6g",
   "topico": "flapless"
  },
  {
   "titulo": "Cirurgia Flapless",
   "esp": "cirurgia",
   "prof": "Dr. Boanerges Araújo",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=iwImNKu3nqM",
   "topico": "flapless"
  },
  {
   "titulo": "Como a CVDentus auxilia na osteotomia?",
   "esp": "cirurgia",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=yTyNztoidJg",
   "topico": "osteotomia-torus"
  },
  {
   "titulo": "Descolamento de Retalho com o Piezo DentSurg Pro",
   "esp": "cirurgia",
   "prof": "Dr. Diego Bazan",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=RyiRHUvYIC0",
   "topico": "descolamento"
  },
  {
   "titulo": "Entrevista · Pontas na Cirurgia Estética",
   "esp": "cirurgia",
   "prof": "Eduardo Santini",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=vPVzbfGDsmc",
   "topico": "outras-cirurgias"
  },
  {
   "titulo": "Enxerto Anterior com o Piezo DentSurg Pro",
   "esp": "cirurgia",
   "prof": "Dr. Rodrigo Bucker do Instituto Bucker",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=-ZoqziA4DDI",
   "topico": "outras-cirurgias"
  },
  {
   "titulo": "Flapless em ação",
   "esp": "cirurgia",
   "prof": "Florin Cofar",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=F4d6g_AsSc0",
   "topico": "flapless"
  },
  {
   "titulo": "Gengivoplastia Flapless realizada com o Piezo DentSurg Pro",
   "esp": "cirurgia",
   "prof": "Dr. Diego Bazan",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=svU3vsmquz4",
   "topico": "flapless"
  },
  {
   "titulo": "Instalação de implantes para protocolo inferior",
   "esp": "cirurgia",
   "prof": "Dra. Thayane Furtado",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=Uy3suGWv0Rs",
   "topico": "outras-cirurgias"
  },
  {
   "titulo": "Nova técnica de extração",
   "esp": "cirurgia",
   "prof": "Liete Yassuda",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=2goQJsDpkzY",
   "topico": "outras-cirurgias",
   "pontas": [
    "VR1T"
   ],
   "ponta": "VR1T"
  },
  {
   "titulo": "Osteotomias",
   "esp": "cirurgia",
   "prof": "Heitor Consenza",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=2GXanb3J4u8",
   "topico": "osteotomia-torus"
  },
  {
   "titulo": "Ponta SR9 · Levantamento de seio via crista alveolar",
   "esp": "cirurgia",
   "ponta": "SR9",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=M9AxPO2OCUo",
   "topico": "sinus-lift",
   "pontas": [
    "SR9"
   ]
  },
  {
   "titulo": "Preservando os nervos durante o procedimento",
   "esp": "cirurgia",
   "prof": "Renato Maluta",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=Why3JVWDAFc",
   "topico": "outras-cirurgias"
  },
  {
   "titulo": "Remoção de Tórus",
   "esp": "cirurgia",
   "prof": "Renato Lavezo",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=Sci1bIBlc5U",
   "topico": "osteotomia-torus",
   "pontas": [
    "SFR4"
   ],
   "ponta": "SFR4"
  },
  {
   "titulo": "Remoção de Tórus · Ponta SFR4",
   "esp": "cirurgia",
   "ponta": "SFR4",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=qNwljFxBCJM",
   "topico": "osteotomia-torus",
   "pontas": [
    "SFR4"
   ]
  },
  {
   "titulo": "Sinus Lift",
   "esp": "cirurgia",
   "prof": "Dr. Fernando Almeida",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=ygIANwe7gdc",
   "topico": "sinus-lift"
  },
  {
   "titulo": "Sinus Lift com SFR4 e SLO-2",
   "esp": "cirurgia",
   "prof": "Diego Bazan",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=Hm8O3Air--Y",
   "topico": "sinus-lift",
   "pontas": [
    "SFR4",
    "SLO-2"
   ],
   "ponta": "SFR4 e SLO-2"
  },
  {
   "titulo": "Sinus Lift",
   "esp": "cirurgia",
   "prof": "Prof. Diego Bazan",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=3eVEs0TMViU",
   "topico": "sinus-lift"
  },
  {
   "titulo": "Técnica Flapless em ação",
   "esp": "cirurgia",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=T7yo7_mWkoI",
   "topico": "flapless"
  },
  {
   "titulo": "Técnica Flapless",
   "esp": "cirurgia",
   "prof": "Prof. Eduardo Santini de Almeida",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=WM02wTTFUEs",
   "topico": "flapless"
  },
  {
   "titulo": "Acabamento em Facetas",
   "esp": "dentistica",
   "prof": "Dr. Rogério Marcondes",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=OEWJfrRT8ZA",
   "topico": "facetas"
  },
  {
   "titulo": "Cimentação",
   "esp": "dentistica",
   "prof": "Dr. Rogério Marcondes",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=tVIl2BaL2Ok",
   "topico": "cimentacao"
  },
  {
   "titulo": "Como realizar o refinamento dos limites do preparo com ponta CR4XR?",
   "esp": "dentistica",
   "prof": "Dr. Danilo Cioffi",
   "ponta": "CR4XR",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=mQv82kDRaAE",
   "topico": "preparo-termino",
   "pontas": [
    "CR4XR"
   ]
  },
  {
   "titulo": "Como remover excessos com a ponta T1?",
   "esp": "dentistica",
   "prof": "Dr. Danilo Cioffi",
   "ponta": "T1",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=UQVEKl6995w",
   "topico": "amalgama-resina",
   "pontas": [
    "T1"
   ]
  },
  {
   "titulo": "Remoção de Facetas com o DentSurg Pro",
   "esp": "dentistica",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=Dg6QHEydf9g",
   "topico": "facetas",
   "pontas": [
    "W1-O"
   ],
   "ponta": "W1-O"
  },
  {
   "titulo": "Ponta T1F",
   "esp": "dentistica",
   "prof": "Shizuma Shibata",
   "ponta": "T1F",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=NbJVzW6k3KY",
   "topico": "preparo-termino",
   "pontas": [
    "T1F"
   ]
  },
  {
   "titulo": "Preparo Cavitário",
   "esp": "dentistica",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=pHJiCuKc0lA",
   "topico": "preparo-termino"
  },
  {
   "titulo": "Preparo Classe V",
   "esp": "dentistica",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=r2CjynOgDHg",
   "topico": "preparo-termino",
   "pontas": [
    "CR1XR"
   ],
   "ponta": "CR1XR"
  },
  {
   "titulo": "Preparo da caixa distal com ponta CH1-D",
   "esp": "dentistica",
   "prof": "Dr. Danilo Cioffi",
   "ponta": "CH1-D",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=bQnnFLvqtNY",
   "topico": "preparo-termino",
   "pontas": [
    "CH1-D"
   ]
  },
  {
   "titulo": "Preparo em área de difícil acesso",
   "esp": "dentistica",
   "prof": "Danilo Cioffi",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=Leq3te44KJM",
   "topico": "preparo-termino"
  },
  {
   "titulo": "Refinamento de Preparo",
   "esp": "dentistica",
   "prof": "João Maurício",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=DbLVt4iYBcM",
   "topico": "preparo-termino"
  },
  {
   "titulo": "Remoção de Cárie",
   "esp": "dentistica",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=aDlzRV2Mr6Q",
   "topico": "amalgama-resina"
  },
  {
   "titulo": "Remoção de Restauração e Amálgama",
   "esp": "dentistica",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=Z6wIFwkUvr0",
   "topico": "amalgama-resina"
  },
  {
   "titulo": "Remoção de Amálgama",
   "esp": "dentistica",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=xiqvklQ99Yk",
   "topico": "amalgama-resina"
  },
  {
   "titulo": "Remoção de Amálgama",
   "esp": "dentistica",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=ReZj1xzwGNE",
   "topico": "amalgama-resina"
  },
  {
   "titulo": "Remoção de Amálgama · Ponta W1",
   "esp": "dentistica",
   "ponta": "W1",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=VycZdDqYGJw",
   "topico": "amalgama-resina",
   "pontas": [
    "W1"
   ]
  },
  {
   "titulo": "Remoção de Excesso · Restauração em classe V",
   "esp": "dentistica",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=HGT0MTH9tcg",
   "topico": "amalgama-resina"
  },
  {
   "titulo": "Remoção de Faceta com o DentSurg Pro",
   "esp": "dentistica",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=QFQw8-qMvHQ",
   "topico": "facetas",
   "pontas": [
    "W1-O"
   ],
   "ponta": "W1-O"
  },
  {
   "titulo": "Remoção de Faceta com o DentSurg Pro",
   "esp": "dentistica",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=XPg2iS2iEX8",
   "topico": "facetas",
   "pontas": [
    "W1-O"
   ],
   "ponta": "W1-O"
  },
  {
   "titulo": "Remoção de Material Restaurador · Ponta CR4XR",
   "esp": "dentistica",
   "ponta": "CR4XR",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=BSZx2n7So8A",
   "topico": "amalgama-resina",
   "pontas": [
    "CR4XR"
   ]
  },
  {
   "titulo": "Remoção de amálgama (Ponta T1)",
   "esp": "dentistica",
   "prof": "Dr. Danilo Cioffi",
   "ponta": "T1",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=Vet9LgFfKKk",
   "topico": "amalgama-resina",
   "pontas": [
    "T1"
   ]
  },
  {
   "titulo": "Remoção de amálgama com alta precisão!",
   "esp": "dentistica",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=Bq0HXG9DOvk",
   "topico": "amalgama-resina"
  },
  {
   "titulo": "Remoção de resina composta em restauração de classe V (Ponta CR4XR)",
   "esp": "dentistica",
   "prof": "Dr. Danilo Cioffi",
   "ponta": "CR4XR",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=joAze665sdI",
   "topico": "amalgama-resina",
   "pontas": [
    "CR4XR"
   ]
  },
  {
   "titulo": "Restauração de resina composta · Ultrassom e ponta CR1",
   "esp": "dentistica",
   "ponta": "CR1",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=udHMN0oxmKA",
   "topico": "amalgama-resina",
   "pontas": [
    "CR1"
   ]
  },
  {
   "titulo": "Tratamento Dentário Proximal",
   "esp": "dentistica",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=JwLscRDSXQQ",
   "topico": "preparo-termino"
  },
  {
   "titulo": "Apicectomia",
   "esp": "endodontia",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=znT__3AL7S8",
   "topico": "apicectomia"
  },
  {
   "titulo": "Corte de Guta-Percha",
   "esp": "endodontia",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=55JhfcB5xOU",
   "topico": "guta-percha"
  },
  {
   "titulo": "Endodontia Completa",
   "esp": "endodontia",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=hO2ye44zmng",
   "topico": "endodontia"
  },
  {
   "titulo": "Endodontia",
   "esp": "endodontia",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=Ds0KJXNyGOk",
   "topico": "endodontia"
  },
  {
   "titulo": "Endodontia · Cone + PUI + Guta",
   "esp": "endodontia",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=bJdKR-V781U",
   "topico": "pui"
  },
  {
   "titulo": "Fases operatórias na Endodontia",
   "esp": "endodontia",
   "prof": "Marco Aurélio",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=D4djpKMMT5k",
   "topico": "endodontia"
  },
  {
   "titulo": "Irrigação do Conduto, Corte e Termoplastificação da Guta-Percha",
   "esp": "endodontia",
   "prof": "Dr. Rodrigo Villagra",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=yo4N3xLUACo",
   "topico": "pui"
  },
  {
   "titulo": "PUI · Irrigação Ultrassônica Passiva",
   "esp": "endodontia",
   "prof": "Dr. Rodrigo Villagra",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=5N_-cOotnU8",
   "topico": "pui"
  },
  {
   "titulo": "PUI · Irrigação Ultrassônica Passiva",
   "esp": "endodontia",
   "prof": "Danilo Cioffi",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=BPDngu0dJFU",
   "topico": "pui",
   "pontas": [
    "T0T-E2"
   ],
   "ponta": "T0T-E2"
  },
  {
   "titulo": "Remoção de Pinos",
   "esp": "endodontia",
   "prof": "Dr. Marco Aurélio",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=Vxc-1fRuOhk",
   "topico": "pinos"
  },
  {
   "titulo": "Corte da Guta-Percha e Limpeza com Optymus",
   "esp": "endodontia",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=D9dZqa_bJvI",
   "topico": "guta-percha"
  },
  {
   "titulo": "Remoção de Pinos",
   "esp": "endodontia",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=xPEsVMswMmQ",
   "topico": "pinos",
   "pontas": [
    "C2S"
   ],
   "ponta": "C2S"
  },
  {
   "titulo": "Remoção de pinos",
   "esp": "endodontia",
   "prof": "Dr. Marco Aurélio",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=JvM-5vOW0Qk",
   "topico": "pinos"
  },
  {
   "titulo": "Aplicação da ponta R,05 na Odontopediatria",
   "esp": "orto-odontoped",
   "prof": "Dra. Liete Yassuda",
   "ponta": "R0,5",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=8BznPFgACwc",
   "topico": "odontopediatria",
   "pontas": [
    "R0,5"
   ]
  },
  {
   "titulo": "Odontopediatria",
   "esp": "orto-odontoped",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=s2Yi1R5jRJM",
   "topico": "odontopediatria"
  },
  {
   "titulo": "Procedimento Slice",
   "esp": "dentistica",
   "prof": "Monique Bazan",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=7Wct-hj7TTQ",
   "topico": "slice"
  },
  {
   "titulo": "Procedimento Slice",
   "esp": "dentistica",
   "prof": "Prof. Monique Bazan",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=ANK4d91w9tI",
   "topico": "slice"
  },
  {
   "titulo": "Realização de procedimento na Odontopediatria com Clinical Plus e Ponta R4",
   "esp": "orto-odontoped",
   "ponta": "R4",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=YSq-bzXXVXo",
   "topico": "odontopediatria",
   "pontas": [
    "R4"
   ]
  },
  {
   "titulo": "Flapless e Peeling Gengival",
   "esp": "periodontia",
   "prof": "Prof. Paulo Kano",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=1bL--HkhMU8",
   "topico": "flapless"
  },
  {
   "titulo": "Limpeza de implantes com DentSurg Pro e ponta T1T-P",
   "esp": "periodontia",
   "prof": "Dr. Helder Pavanelli",
   "ponta": "T1T-P",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=obRPyPdOT1E",
   "topico": "t1tp-implantes",
   "pontas": [
    "T1T-P"
   ]
  },
  {
   "titulo": "Limpeza com a ponta T1T-P",
   "esp": "periodontia",
   "prof": "Dr. Ricardo Scotton",
   "ponta": "T1T-P",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=e2r1BbeteK0",
   "topico": "t1tp-implantes",
   "pontas": [
    "T1T-P"
   ]
  },
  {
   "titulo": "Modo de uso da ponta T1T-P",
   "esp": "periodontia",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=k6myHF4cnxs",
   "topico": "t1tp-implantes",
   "pontas": [
    "T1T-P"
   ],
   "ponta": "T1T-P"
  },
  {
   "titulo": "Peeling Gengival",
   "esp": "periodontia",
   "prof": "Dra. Débora Ayala",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=1xdHV_EWobk",
   "topico": "gengivoplastia-peeling"
  },
  {
   "titulo": "Raspagem",
   "esp": "periodontia",
   "prof": "Prof. Diego Bazan",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=N49aEd9JBOQ",
   "topico": "raspagem"
  },
  {
   "titulo": "Raspagem",
   "esp": "periodontia",
   "prof": "Dra. Analice Giovani Pereira",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=WcJRg_2HL8s",
   "topico": "raspagem"
  },
  {
   "titulo": "Raspagem/ Remoção de Cálculo",
   "esp": "periodontia",
   "prof": "Dr. Leonardo Costa",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=VITipyNfzX8",
   "topico": "raspagem"
  },
  {
   "titulo": "Remoção de Cálculo com a Ponta T1U-2",
   "esp": "periodontia",
   "prof": "Dr. Maurício Castello",
   "ponta": "T1U-2",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=DVzTjQB1U5s",
   "topico": "raspagem",
   "pontas": [
    "T1U-2"
   ]
  },
  {
   "titulo": "Retracão Gengival",
   "esp": "periodontia",
   "prof": "Dr. Rodrigo Bucker do Instituto Bucker",
   "formato": "YouTube",
   "url": "https://www.youtube.com/watch?v=bbhINtRRQeM",
   "topico": "gengivoplastia-peeling"
  }
 ],
 "galerias": {
  "dl": "https://github.com/kahuesouza/cvdentus-arquivos/releases/download/marketing/",
  "prev": "https://kahuesouza.github.io/cvdentus-arquivos/arte/",
  "lista": {
   "members": {
    "titulo": "CVDentus Members · artes",
    "itens": [
     {
      "id": "members-01-arte-1-feed",
      "titulo": "Arte 1 · Feed",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.2
     },
     {
      "id": "members-02-arte-1-story",
      "titulo": "Arte 1 · Story",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.9
     },
     {
      "id": "members-03-arte-2-feed",
      "titulo": "Arte 2 · Feed",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1
     },
     {
      "id": "members-04-arte-2-story",
      "titulo": "Arte 2 · Story",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.8
     },
     {
      "id": "members-05-arte-3-feed",
      "titulo": "Arte 3 · Feed",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.1
     },
     {
      "id": "members-06-arte-3-story",
      "titulo": "Arte 3 · Story",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.8
     },
     {
      "id": "members-07-arte-4-feed",
      "titulo": "Arte 4 · Feed",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.1
     },
     {
      "id": "members-08-arte-4-story",
      "titulo": "Arte 4 · Story",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.9
     },
     {
      "id": "members-09-arte-5-feed",
      "titulo": "Arte 5 · Feed",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 0.9
     },
     {
      "id": "members-10-arte-5-story",
      "titulo": "Arte 5 · Story",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.6
     },
     {
      "id": "members-11-arte-6-feed",
      "titulo": "Arte 6 · Feed",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.3
     },
     {
      "id": "members-12-arte-6-story",
      "titulo": "Arte 6 · Story",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.5
     }
    ]
   },
   "adaptadores": {
    "titulo": "Lançamento Adaptadores Optymus",
    "itens": [
     {
      "id": "adaptadores-01-criativo-feed",
      "titulo": "Criativo · Feed",
      "grupo": "Criativos",
      "tipo": "img",
      "ext": "png",
      "mb": 1.1
     },
     {
      "id": "adaptadores-02-criativo-story",
      "titulo": "Criativo · Story",
      "grupo": "Criativos",
      "tipo": "img",
      "ext": "png",
      "mb": 1.7
     },
     {
      "id": "adaptadores-03-carrossel-1",
      "titulo": "Carrossel · 1",
      "grupo": "Carrossel",
      "tipo": "img",
      "ext": "png",
      "mb": 0.8
     },
     {
      "id": "adaptadores-04-carrossel-2",
      "titulo": "Carrossel · 2",
      "grupo": "Carrossel",
      "tipo": "img",
      "ext": "png",
      "mb": 0.9
     },
     {
      "id": "adaptadores-05-carrossel-3",
      "titulo": "Carrossel · 3",
      "grupo": "Carrossel",
      "tipo": "img",
      "ext": "png",
      "mb": 0.9
     },
     {
      "id": "adaptadores-06-carrossel-4",
      "titulo": "Carrossel · 4",
      "grupo": "Carrossel",
      "tipo": "img",
      "ext": "png",
      "mb": 0.8
     },
     {
      "id": "adaptadores-07-carrossel-story",
      "titulo": "Carrossel · Story",
      "grupo": "Carrossel",
      "tipo": "img",
      "ext": "png",
      "mb": 1.5
     },
     {
      "id": "adaptadores-08-blog-feed",
      "titulo": "Blog · Feed",
      "grupo": "Blog",
      "tipo": "img",
      "ext": "png",
      "mb": 0.9
     },
     {
      "id": "adaptadores-09-blog-story",
      "titulo": "Blog · Story",
      "grupo": "Blog",
      "tipo": "img",
      "ext": "png",
      "mb": 1.5
     },
     {
      "id": "adaptadores-10-banner-do-site-horizontal",
      "titulo": "Banner do site · horizontal",
      "grupo": "Site",
      "tipo": "img",
      "ext": "png",
      "mb": 0.9
     },
     {
      "id": "adaptadores-11-banner-do-site-vertical",
      "titulo": "Banner do site · vertical",
      "grupo": "Site",
      "tipo": "img",
      "ext": "png",
      "mb": 1.4
     }
    ]
   },
   "flapless": {
    "titulo": "Kit Flapless · e-mail marketing",
    "itens": [
     {
      "id": "flapless-01-chamada-para-compra",
      "titulo": "Chamada para compra",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 0.1
     },
     {
      "id": "flapless-02-e-mail-marketing-dezembro-2018",
      "titulo": "E-mail marketing · dezembro 2018",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 0.6
     }
    ]
   },
   "pecas": {
    "titulo": "Peças de divulgação",
    "itens": [
     {
      "id": "pecas-01-video-do-instagram",
      "titulo": "Vídeo do Instagram",
      "grupo": "Vídeos",
      "tipo": "video",
      "ext": "mp4",
      "mb": 0.4
     },
     {
      "id": "pecas-02-video-do-instagram",
      "titulo": "Vídeo do Instagram",
      "grupo": "Vídeos",
      "tipo": "video",
      "ext": "mp4",
      "mb": 6.5
     },
     {
      "id": "pecas-03-video-do-instagram",
      "titulo": "Vídeo do Instagram",
      "grupo": "Vídeos",
      "tipo": "video",
      "ext": "mp4",
      "mb": 1.9
     },
     {
      "id": "pecas-04-cv-dentus-lancamento-3pontas-05052022-feed-v3",
      "titulo": "Cv dentus lançamento 3pontas 05052022 FEED v3",
      "grupo": "Vídeos",
      "tipo": "video",
      "ext": "mp4",
      "mb": 19.4
     },
     {
      "id": "pecas-05-cv-dentus-lancamento-3pontas-05052022-story-v2",
      "titulo": "Cv dentus lançamento 3pontas 05052022 STORY v2",
      "grupo": "Vídeos",
      "tipo": "video",
      "ext": "mp4",
      "mb": 25.1
     },
     {
      "id": "pecas-06-cv-dentus-profilaxia-spray-28042022-v1",
      "titulo": "Cv dentus profilaxia spray 28042022 v1",
      "grupo": "Vídeos",
      "tipo": "video",
      "ext": "mp4",
      "mb": 20.9
     },
     {
      "id": "pecas-07-story-video-post-3-optymus",
      "titulo": "Story vídeo post 3 optymus",
      "grupo": "Vídeos",
      "tipo": "video",
      "ext": "mp4",
      "mb": 2.4
     },
     {
      "id": "pecas-08-03-081-story-cvdentus",
      "titulo": "03 081 story cvdentus",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.2
     },
     {
      "id": "pecas-09-abross-23",
      "titulo": "ABROSS 23",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0
     },
     {
      "id": "pecas-10-cdventus-03-06-facebook-story",
      "titulo": "CDVentus 03.06 facebook story",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.9
     },
     {
      "id": "pecas-11-cdventus-2-1-facebook-story",
      "titulo": "CDVentus 2 1 facebook story",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.4
     },
     {
      "id": "pecas-12-cdventus-2-2-video-faceinsta-2-story",
      "titulo": "CDVentus 2 2 video faceinsta 2 story",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 0.8
     },
     {
      "id": "pecas-13-cdventus-2-3-faceinta-story",
      "titulo": "CDVentus 2 3 faceinta story",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.5
     },
     {
      "id": "pecas-14-cdventus-3-20-06-face-insta-story-copy",
      "titulo": "CDVentus 3 20 06 face insta story copy",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.6
     },
     {
      "id": "pecas-15-cdventus-3-20-06-face-insta",
      "titulo": "CDVentus 3 20 06 face insta",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.1
     },
     {
      "id": "pecas-16-capa-facebook-cvdentus",
      "titulo": "Capa facebook cvdentus",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0
     },
     {
      "id": "pecas-17-card-1",
      "titulo": "Card 1",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.1
     },
     {
      "id": "pecas-18-ds-pro-video-bazan-stories",
      "titulo": "Ds pro video bazan stories",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.6
     },
     {
      "id": "pecas-19-ds-pro-video-bazan",
      "titulo": "Ds pro video bazan",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1
     },
     {
      "id": "pecas-20-semana4-22-07-story",
      "titulo": "Semana4 22 07 story",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.7
     },
     {
      "id": "pecas-21-semana5-2-story",
      "titulo": "Semana5 2 story",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.3
     },
     {
      "id": "pecas-22-story-2",
      "titulo": "Story 2",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.3
     },
     {
      "id": "pecas-23-story-5",
      "titulo": "Story 5",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 3
     },
     {
      "id": "pecas-24-upgrade-1",
      "titulo": "Upgrade 1",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1.6
     },
     {
      "id": "pecas-25-upgrade-2",
      "titulo": "Upgrade 2",
      "grupo": "Artes",
      "tipo": "img",
      "ext": "png",
      "mb": 1
     },
     {
      "id": "pecas-26-post-do-instagram-01",
      "titulo": "Post do Instagram · 01",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.2
     },
     {
      "id": "pecas-27-post-do-instagram-02",
      "titulo": "Post do Instagram · 02",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.2
     },
     {
      "id": "pecas-28-post-do-instagram-03",
      "titulo": "Post do Instagram · 03",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.3
     },
     {
      "id": "pecas-29-post-do-instagram-04",
      "titulo": "Post do Instagram · 04",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0
     },
     {
      "id": "pecas-30-post-do-instagram-05",
      "titulo": "Post do Instagram · 05",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     },
     {
      "id": "pecas-31-post-do-instagram-06",
      "titulo": "Post do Instagram · 06",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     },
     {
      "id": "pecas-32-post-do-instagram-07",
      "titulo": "Post do Instagram · 07",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.2
     },
     {
      "id": "pecas-33-post-do-instagram-08",
      "titulo": "Post do Instagram · 08",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     },
     {
      "id": "pecas-34-post-do-instagram-09",
      "titulo": "Post do Instagram · 09",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     },
     {
      "id": "pecas-35-post-do-instagram-10",
      "titulo": "Post do Instagram · 10",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     },
     {
      "id": "pecas-36-post-do-instagram-11",
      "titulo": "Post do Instagram · 11",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     },
     {
      "id": "pecas-37-post-do-instagram-12",
      "titulo": "Post do Instagram · 12",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0
     },
     {
      "id": "pecas-38-post-do-instagram-13",
      "titulo": "Post do Instagram · 13",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     },
     {
      "id": "pecas-39-post-do-instagram-14",
      "titulo": "Post do Instagram · 14",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     },
     {
      "id": "pecas-40-post-do-instagram-15",
      "titulo": "Post do Instagram · 15",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     },
     {
      "id": "pecas-41-post-do-instagram-16",
      "titulo": "Post do Instagram · 16",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     },
     {
      "id": "pecas-42-post-do-instagram-17",
      "titulo": "Post do Instagram · 17",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     },
     {
      "id": "pecas-43-post-do-instagram-18",
      "titulo": "Post do Instagram · 18",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0
     },
     {
      "id": "pecas-44-post-do-instagram-19",
      "titulo": "Post do Instagram · 19",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     },
     {
      "id": "pecas-45-post-do-instagram-20",
      "titulo": "Post do Instagram · 20",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     },
     {
      "id": "pecas-46-post-do-instagram-21",
      "titulo": "Post do Instagram · 21",
      "grupo": "Posts do Instagram",
      "tipo": "img",
      "ext": "jpg",
      "mb": 0.1
     }
    ]
   }
  }
 },
 "topicos": [
  {
   "id": "flapless",
   "nome": "Flapless e Aumento de Coroa"
  },
  {
   "id": "sinus-lift",
   "nome": "Sinus Lift"
  },
  {
   "id": "gengivoplastia-peeling",
   "nome": "Gengivoplastia, Peeling e Retração Gengival"
  },
  {
   "id": "osteotomia-torus",
   "nome": "Osteotomia e Tórus"
  },
  {
   "id": "descolamento",
   "nome": "Descolamento de Retalho"
  },
  {
   "id": "raspagem",
   "nome": "Raspagem e Remoção de Cálculo"
  },
  {
   "id": "t1tp-implantes",
   "nome": "Ponta T1T-P e Limpeza de Implantes"
  },
  {
   "id": "profilaxia",
   "nome": "Profilaxia e Spray Control"
  },
  {
   "id": "pui",
   "nome": "PUI e Irrigação do Conduto"
  },
  {
   "id": "guta-percha",
   "nome": "Guta-Percha"
  },
  {
   "id": "pinos",
   "nome": "Remoção de Pinos"
  },
  {
   "id": "apicectomia",
   "nome": "Apicectomia e Retropreparo"
  },
  {
   "id": "endodontia",
   "nome": "Endodontia · Procedimentos completos"
  },
  {
   "id": "facetas",
   "nome": "Facetas"
  },
  {
   "id": "odontopediatria",
   "nome": "Odontopediatria e Ortodontia"
  },
  {
   "id": "preparo-termino",
   "nome": "Preparo, Término e Refinamento"
  },
  {
   "id": "amalgama-resina",
   "nome": "Remoção de Amálgama, Resina e Cárie"
  },
  {
   "id": "cimentacao",
   "nome": "Cimentação"
  },
  {
   "id": "slice",
   "nome": "Slice (desgaste interproximal)"
  },
  {
   "id": "outras-cirurgias",
   "nome": "Implantes, Enxerto, Extração e outras cirurgias"
  },
  {
   "id": "demonstracoes",
   "nome": "Demonstrações e casos clínicos"
  }
 ]
};
