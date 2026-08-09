// SSMA Questions Dataset (Saúde Ocupacional, Segurança no Trabalho e Meio Ambiente)
// Cada pergunta inclui:
// - id: identificador
// - category: 'SST' | 'SAUDE' | 'MA'
// - categoryName: Nome exibido
// - question: Pergunta / Dica apresentada
// - word: Palavra secreta (letras maiúsculas sem acento para o jogo)
// - wordDisplay: Palavra formatada com acentos para exibição
// - why: Explicação técnica do PORQUÊ da regra/norma
// - how: Orientação prática de COMO EXECUTAR CORRETAMENTE com segurança

export const QUESTIONS_DATABASE = [
  // --- SEGURANÇA NO TRABALHO (SST) ---
  {
    id: 'sst_1',
    category: 'SST',
    categoryName: 'Segurança no Trabalho',
    question: 'Equipamento de Proteção Individual essencial para a proteção das vias respiratórias contra poeiras e vapores tóxicos.',
    word: 'MASCARA',
    wordDisplay: 'MÁSCARA / RESPIRADOR',
    why: 'A inalação prolongada de particulados e produtos químicos no ambiente de trabalho pode causar pneumoconiose, silicose e graves doenças respiratórias irreversíveis.',
    how: 'Realize o teste de vedação antes de entrar na área de risco, substitua os filtros conforme a validade e mantenha o equipamento limpo e guardado em local protegido.'
  },
  {
    id: 'sst_2',
    category: 'SST',
    categoryName: 'Segurança no Trabalho',
    question: 'Documento prévio obrigatório que analisa e autoriza a execução de serviços com riscos adicionais (como trabalho em altura ou a quente).',
    word: 'PERMISSAO DE TRABALHO',
    wordDisplay: 'PERMISSÃO DE TRABALHO (PT)',
    why: 'Garante que todos os perigos da atividade sejam identificados e controlados por profissionais qualificados antes do início do serviço.',
    how: 'Preencha a PT no local da atividade junto com a equipe, verifique todas as medidas de bloqueio e assinaturas antes de ligar máquinas ou iniciar a tarefa.'
  },
  {
    id: 'sst_3',
    category: 'SST',
    categoryName: 'Segurança no Trabalho',
    question: 'Dispositivo utilizado em trabalhos acima de 2 metros de altura para retenção de quedas do trabalhador.',
    word: 'CINTO DE SEGURANCA',
    wordDisplay: 'CINTO DE SEGURANÇA TIPO PARAQUEDISTA',
    why: 'Quedas em altura representam uma das principais causas de acidentes fatais na indústria e construção civil.',
    how: 'Inspecione costuras e fivelas do cinto diariamente, e conecte obrigatoriamente os talabartes em pontos de ancoragem certificados e homologados.'
  },
  {
    id: 'sst_4',
    category: 'SST',
    categoryName: 'Segurança no Trabalho',
    question: 'Procedimento que isola fontes de energia perigosa em máquinas durante manutenção, conhecido como Lockout/Tagout.',
    word: 'BLOQUEIO E ETIQUETAGEM',
    wordDisplay: 'BLOQUEIO E ETIQUETAGEM (LOTO)',
    why: 'Impede a energização acidental de equipamentos enquanto técnicos realizam intervenções físicas e mecânicas internas.',
    how: 'Aplique o cadeado pessoal e etiqueta de identificação no ponto de seccionamento da fonte de energia e teste o ponto de energia zero antes de tocar nas peças.'
  },
  {
    id: 'sst_5',
    category: 'SST',
    categoryName: 'Segurança no Trabalho',
    question: 'Equipamento de Proteção Coletiva instalado para evitar quedas em aberturas de pisos e varandas.',
    word: 'GUARDA CORPO',
    wordDisplay: 'GUARDA-CORPO E RODAPÉ',
    why: 'Protege não apenas o trabalhador contra quedas, mas também impede a queda acidental de ferramentas em níveis inferiores sobre outras pessoas.',
    how: 'Instale estruturas rígidas com travessão superior a 1,20m do piso, travessão intermediário e rodapé de no mínimo 15cm sem improvisos.'
  },
  {
    id: 'sst_6',
    category: 'SST',
    categoryName: 'Segurança no Trabalho',
    question: 'Documento legal de análise técnica de risco de uma tarefa passo a passo.',
    word: 'ANALISE PRELIMINAR DE RISCO',
    wordDisplay: 'ANÁLISE PRELIMINAR DE RISCO (APR)',
    why: 'Mapeia os riscos específicos de cada etapa do trabalho e estabelece controles mitigadores antes que ocorra um evento indesejado.',
    how: 'Reúna toda a equipe executante no Diálogo Diário de Segurança (DDS) para revisar a APR, tirar dúvidas e validar se as proteções estão instaladas.'
  },

  // --- SAÚDE OCUPACIONAL ---
  {
    id: 'sau_1',
    category: 'SAUDE',
    categoryName: 'Saúde Ocupacional',
    question: 'Ciência que estuda a adaptação do trabalho ao homem, promovendo conforto e prevenindo lesões por esforço repetitivo.',
    word: 'ERGONOMIA',
    wordDisplay: 'ERGONOMIA (NR-17)',
    why: 'Posturas inadequadas e manuseio incorreto de cargas provocam Distúrbios Osteomusculares Relacionados ao Trabalho (DORT/LER) e dores crônicas na coluna.',
    how: 'Ajuste a altura da cadeira e do monitor, mantenha os pés apoiados no chão, utilize técnicas corretas de levantamento de peso e faça pausas ativas regulares.'
  },
  {
    id: 'sau_2',
    category: 'SAUDE',
    categoryName: 'Saúde Ocupacional',
    question: 'Exame de saúde realizado obrigatoriamente antes de o empregado assumir suas atividades na empresa.',
    word: 'EXAME ADMISSIONAL',
    wordDisplay: 'EXAME ADMISSIONAL (PCMSO)',
    why: 'Avalia a aptidão física e mental do trabalhador para a função pretendida, garantindo que a atividade não agrave condições pré-existentes.',
    how: 'Realize o exame clínico e os exames complementares específicos previstos no PCMSO da empresa antes de iniciar o trabalho operacional.'
  },
  {
    id: 'sau_3',
    category: 'SAUDE',
    categoryName: 'Saúde Ocupacional',
    question: 'Doença ocupacional caracterizada pela perda progressiva da audição provocada por ruído excessivo.',
    word: 'PERDA AUDITIVA',
    wordDisplay: 'PERDA AUDITIVA INDUZIDA POR RUÍDO (PAIR)',
    why: 'O ruído contínuo sem proteção destrói irreversivelmente as células sensoriais da cóclea na orelha interna.',
    how: 'Utilize protetores auditivos tipo plugue ou abafador corretamente higienizados e ajustados em áreas com nível de ruído acima do limite de tolerância.'
  },
  {
    id: 'sau_4',
    category: 'SAUDE',
    categoryName: 'Saúde Ocupacional',
    question: 'Medida essencial para prevenção da fadiga física e lesões musculares em tarefas intensas ou repetitivas.',
    word: 'PAUSA ATIVA',
    wordDisplay: 'PAUSA ATIVA E GINÁSTICA LABORAL',
    why: 'Restabelece a circulação sanguínea, reduz a tensão muscular acumulada e melhora a oxigenação nos tecidos musculares e articulares.',
    how: 'Realize pequenas pausas programadas ao longo da jornada para alongamento direcionado dos braços, ombros, costas e membros inferiores.'
  },
  {
    id: 'sau_5',
    category: 'SAUDE',
    categoryName: 'Saúde Ocupacional',
    question: 'Fator de risco ocupacional relacionado a ansiedade, estresse severo e esgotamento profissional no trabalho.',
    word: 'RISCO PSICOSSOCIAL',
    wordDisplay: 'RISCOS PSICOSSOCIAIS E BURNOUT',
    why: 'Ambientes com sobrecarga de trabalho, assédio ou falta de suporte afetam diretamente a saúde mental e aumentam a ocorrência de acidentes.',
    how: 'Promova uma comunicação respeitosa, distribua metas de forma realista, ofereça apoio psicológico corporativo e incentive o equilíbrio vida-trabalho.'
  },

  // --- MEIO AMBIENTE (MA) ---
  {
    id: 'ma_1',
    category: 'MA',
    categoryName: 'Meio Ambiente',
    question: 'Separação e recolhimento de resíduos em lixeiras coloridas padronizadas para reciclagem.',
    word: 'COLETA SELETIVA',
    wordDisplay: 'COLETA SELETIVA DE RESÍDUOS',
    why: 'Evita que resíduos reaproveitáveis sejam destinados desnecessariamente a aterros sanitários e reduz a extração de novas matérias-primas na natureza.',
    how: 'Descarte os resíduos na lixeira com a cor correspondente: Azul (Papel), Vermelho (Plástico), Verde (Vidro), Amarelo (Metal) e Laranja (Perigosos).'
  },
  {
    id: 'ma_2',
    category: 'MA',
    categoryName: 'Meio Ambiente',
    question: 'Documento técnico que acompanha o transporte e destinação final de produtos químicos perigosos (FISPQ/FDS).',
    word: 'FICHA DE SEGURANCA',
    wordDisplay: 'FICHA DE SEGURANÇA DE PRODUTO QUÍMICO (FISPQ / FDS)',
    why: 'Fornece informações cruciais de emergência sobre manuseio seguro, riscos à saúde, ao meio ambiente e medidas em caso de vazamento.',
    how: 'Consulte sempre a FISPQ/FDS antes de manipular qualquer produto químico e mantenha uma cópia acessível no local de armazenamento.'
  },
  {
    id: 'ma_3',
    category: 'MA',
    categoryName: 'Meio Ambiente',
    question: 'Conjunto de materiais e mantas absorventes para contenção imediata de derramamento de óleo ou produtos químicos.',
    word: 'KIT DE MITIGACAO',
    wordDisplay: 'KIT DE MITIGAÇÃO / CONTENÇÃO DE VAZAMENTOS',
    why: 'Impede que fluidos contaminantes atinjam o solo, galerias de águas pluviais, corpos hídricos ou a rede pública de esgoto.',
    how: 'Posicione barreiras absorventes ao redor da poça de vazamento, estanque a fonte do vazamento e recolha o material contaminado em tambores identificados.'
  },
  {
    id: 'ma_4',
    category: 'MA',
    categoryName: 'Meio Ambiente',
    question: 'Processo que transforma resíduos orgânicos e industriais em novos produtos e matérias-primas secundárias.',
    word: 'RECICLAGEM',
    wordDisplay: 'RECICLAGEM E ECONOMIA CIRCULAR',
    why: 'Diminui a pegada de carbono, reduz a poluição ambiental e fomenta a sustentabilidade no ciclo de vida dos produtos.',
    how: 'Higienize embalagens antes do descarte seletivo, reduza a geração na fonte e priorize a compra de insumos reciclados ou sustentáveis.'
  },
  {
    id: 'ma_5',
    category: 'MA',
    categoryName: 'Meio Ambiente',
    question: 'Licença emitida pelo órgão ambiental autorizando a operação sustentável de um empreendimento industrial.',
    word: 'LICENCA AMBIENTAL',
    wordDisplay: 'LICENÇA AMBIENTAL DE OPERAÇÃO (LO)',
    why: 'Atesta que a empresa atende a todas as condicionantes ambientais e limites de emissão de poluentes exigidos pela legislação.',
    how: 'Monitore e cumpra rigorosamente os relatórios ambientais de efluentes, emissões atmosféricas e resíduos dentro dos prazos da licença.'
  }
];
