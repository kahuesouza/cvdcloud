/* Pós-venda: "Como instalar e usar" de cada equipamento (conteúdo das antigas páginas conteudo.cvdentus.com.br/pos-venda-*).
   Usado pelo app (tela Pós-venda) e pela página do cliente (v.html). Só links do YouTube + o diagrama dos itens autoclaváveis.
   Para atualizar textos, vídeos ou contato, edite este arquivo. */
window.CVD_POSVENDA = {
  whats: '5512996873542',
  comum: {
    intro: 'Passo a passo simples e rápido para você concluir a instalação do seu novo Piezo, aprender a manusear o equipamento e também as pontas CVDentus. Na sequência, não deixe de ver as 4 dicas importantes.',
    dicas: [
      { id: 'catraca', n: 'Chave catraca', txt: [
        'É importante utilizar este acessório para o torque (encaixe) adequado e não danificar a peça de mão e ponta.',
        'Utilize a chave catraca do <b>lado correto</b> para evitar danos na ponta ou peça de mão. Observe a etiqueta autoclavável na cor amarela indicativa na peça.'] },
      { id: 'clean', n: 'Função Clean', txt: [
        'É importante ser realizado no equipamento no <b>início</b> e no <b>final do dia</b>.',
        '<b>Início do dia:</b> esta função leva o líquido que será utilizado no procedimento até a extremidade da peça de mão, garantindo que a ponta não sofra superaquecimento, pois o líquido também tem a função de refrigeração.',
        '<b>Final do dia:</b> esta função evita a obstrução das mangueiras de irrigação e deve ser realizada com a mangueira fora do reservatório, para que todo o líquido seja ejetado.'] },
      { id: 'bomba', n: 'Bomba peristáltica', txt: [
        'Tem a função de conduzir o líquido presente no reservatório pela mangueira até a extremidade da ponta, através de movimentos peristálticos.',
        'O espigão, conforme apontado no vídeo, deve sempre permanecer acima da bomba peristáltica.'] }
    ],
    esterilizacao: {
      equip: 'No gabinete do equipamento, utilize álcool 70º e uma flanela macia e limpa.',
      passos: [
        'Nos acessórios, inicie a limpeza com uma escova e utilize <b>apenas</b> o autoclave.',
        'Antes de iniciar o ciclo de esterilização, certifique-se de que as peças estejam completamente secas e livres de resíduos.',
        'Esterilize utilizando um dos seguintes parâmetros: <b>121 °C a 127 °C</b> (1 atm de pressão) por <b>15 a 30 minutos</b>; ou <b>132 °C a 134 °C</b> (2 atm de pressão) por <b>4 a 7 minutos</b>.'],
      atencao: 'A bomba peristáltica não deve ir no autoclave. Não utilize cuba ultrassônica, estufa, glutaraldeído ou qualquer outra solução enzimática ou química.'
    },
    duvida: 'Solicite uma ligação ou videochamada: o time exclusivo de pós-venda está pronto para atender.'
  },
  equipamentos: [
    {
      id: 'dentsurg-pro', nome: 'DentSurg Pro', produto: 'dentsurg-pro', img: 'img/dentsurg-pro.webp',
      passos: [
        { t: 'Instalação', yt: '_rkvwdZsHaE' },
        { t: 'Modo de uso', yt: '9kBlbd_ZXd4' },
        { t: 'Manuseio das pontas', yt: 'tSEyNjEQnV4' }
      ],
      dicas: { catraca: 'fynCI9KjGkE', clean: 'AVftjR-sXBI', bomba: 'IBdzd3sckdc' },
      itens: 'arquivos/posvenda/dentsurg-pro-itens.webp',
      manual: 'manual-dentsurg-pro.pdf',
      catalogo: 'catalogo-pontas-clinical-plus-dentsurg-pro-2026.pdf',
      acesse: [
        { t: 'Manual do equipamento', u: 'https://cloud.cvdentus.com.br/arquivos/livros/manual-dentsurg-pro.pdf' },
        { t: 'Catálogo de pontas', u: 'https://cloud.cvdentus.com.br/arquivos/livros/catalogo-pontas-clinical-plus-dentsurg-pro-2026.pdf' }
      ],
      msg: 'Olá! Ainda estou com dúvidas, e preciso do suporte de pós-venda do DentSurg Pro.'
    },
    {
      id: 'clinical-plus', nome: 'Clinical Plus', produto: 'clinical-plus', img: 'img/clinical-plus.webp',
      passos: [
        { t: 'Instalação', yt: 'LmS7AfMrtyI' },
        { t: 'Modo de uso', yt: 'RMMw6dI8k90' },
        { t: 'Manuseio das pontas', yt: 'tSEyNjEQnV4' }
      ],
      dicas: { catraca: 'FqsHfthpJjE', clean: '4-nS7N78AD0', bomba: 'lBaE4Pswy14' },
      itens: 'arquivos/posvenda/clinical-plus-itens.webp',
      manual: 'manual-clinical-plus.pdf',
      catalogo: 'catalogo-pontas-clinical-plus-dentsurg-pro-2026.pdf',
      acesse: [
        { t: 'Manual do equipamento', u: 'https://cloud.cvdentus.com.br/arquivos/livros/manual-clinical-plus.pdf' },
        { t: 'Catálogo de pontas', u: 'https://cloud.cvdentus.com.br/arquivos/livros/catalogo-pontas-clinical-plus-dentsurg-pro-2026.pdf' }
      ],
      msg: 'Olá! Ainda estou com dúvidas, e preciso do suporte de pós-venda do Clinical Plus.'
    },
    {
      id: 'optymus', nome: 'Optymus', produto: 'optymus', img: 'img/optymus.webp',
      passos: [
        { t: 'Instalação', yt: '6YtLc8fd1bI' },
        { t: 'Modo de uso', yt: 'MgsHkB_raDA' },
        { t: 'Manuseio das pontas', yt: 'tSEyNjEQnV4' }
      ],
      dicas: { catraca: '6YDsJbb8hhk', clean: 'E6Whr5otGoY', bomba: 'wJ6SSjd8iI4' },
      itens: 'arquivos/posvenda/optymus-itens.webp',
      manual: 'manual-optymus.pdf',
      catalogo: 'catalogo-pontas-optymus-2025.pdf',
      acesse: [
        { t: 'Manual do equipamento', u: 'https://cloud.cvdentus.com.br/arquivos/livros/manual-optymus.pdf' },
        { t: 'Catálogo de pontas', u: 'https://cloud.cvdentus.com.br/arquivos/livros/catalogo-pontas-optymus-2025.pdf' }
      ],
      msg: 'Olá! Estou com dúvidas, e preciso do suporte de pós-venda do OPTYMUS.'
    }
  ]
};
