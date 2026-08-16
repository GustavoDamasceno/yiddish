/* ============================================================
   Yidish Velt Brasil · Dados do site
   Edite textos, poetas, links e imagens aqui.

   Imagens: pasta img/  (ex.: img/Kadia.png) · caminhos relativos à raiz
   Vídeos:  pasta video/ (ex.: video/Kadia.mp4) · campo "video" em cada poeta
   Músicas: array songs em data.js · página pages/musica.html?id=...
   Páginas HTML: pasta pages/ · scripts: js/ · estilos: css/
   ============================================================ */

const siteContent = {
  name: "Yiddish Velt Brasil",
  tagline: "Anotações pessoais de estudo",

  hero: {
    eyebrow: "Estudo · Anotações · Pesquisa",
    title: "Meu caderno de estudo yiddish",
    text: "Aqui guardo poetas, músicas, textos e conexões que estudo entre o mundo Yiddish e a cultura brasileira: minhas anotações, no meu ritmo.",
    btnPrimary: "Explorar anotações",
    btnSecondary: "Aprender Yiddish",
  },

  categories: {
    title: "Explore as anotações",
    subtitle: "Navegue pelas categorias e veja o que venho reunindo sobre o mundo Yiddish, em português.",
  },

  poets: {
    title: "Escritores e Poetas em destaque",
    subtitle: "Vozes da poesia Yiddish moderna que estudo e anoto. Clique em um perfil para ver biografia, obras e contexto.",
    btnLabel: "Ver perfil",
    viewAllBtn: "Ver todos",
    backLabel: "← Voltar aos poetas",
  },

  poetsPage: {
    title: "Escritores e Poetas",
    subtitle: "Biografias, obras e contexto das vozes que acompanho no estudo da literatura Yiddish. Use a busca para encontrar um nome.",
    searchPlaceholder: "Buscar por nome…",
    noResults: "Nenhum poeta encontrado com esse nome.",
    backLabel: "← Voltar ao início",
  },

  songsPage: {
    title: "Músicas",
    subtitle: "Canções em Yiddish que estudo: para ouvir, ler e anotar letra, tradução e vocabulário.",
    searchPlaceholder: "Buscar por nome…",
    noResults: "Nenhuma música encontrada com esse nome.",
    backLabel: "← Voltar ao início",
    btnLabel: "Ouvir e ler",
  },

  songPage: {
    backLabel: "← Voltar às músicas",
    videoTitle: "Ouça a música",
    translitTitle: "Transliteração (YIVO)",
    yiddishTitle: "Letra em Yiddish",
    portugueseTitle: "Em português",
    vocabTitle: "Palavras aprendidas",
    printedLabel: "Letra impressa",
    cursiveLabel: "Letra cursiva",
    vocabHeaders: {
      yiddish: "Yiddish",
      translit: "Transliteração",
      meaning: "Significado",
    },
    notFoundTitle: "Música não encontrada",
    notFoundText: "A música que você procura não existe ou foi removida.",
    notFoundBtn: "Ver todas as músicas",
  },

  brazil: {
    title: "Yiddish no Brasil",
    lead: "Além da literatura, registro aqui conexões que estudo entre a cultura Yiddish e a história judaica no Brasil, passando por comunidades como Curitiba, São Paulo e Porto Alegre.",
    comingSoon: "Em breve",
  },

  beginners: {
    title: "Para iniciantes",
    subtitle: "Uma trilha gentil com o que uso para dar (e revisitar) os primeiros passos no idioma e na cultura Yiddish.",
  },

  grammarPage: {
    title: "Gramática",
    subtitle: "Tópicos de gramática Yiddish que estudo e anoto. Clique em um card para abrir as anotações.",
    backLabel: "← Voltar aos iniciantes",
    comingSoon: "Em breve",
  },

  culturePage: {
    title: "Cultura e contexto",
    subtitle: "Filmes, histórias e outras referências que ajudam a situar a língua e o mundo Yiddish.",
    backLabel: "← Voltar aos iniciantes",
    comingSoon: "Em breve",
  },

  filmsPage: {
    title: "Filmes",
    subtitle: "Cinema em Yiddish ou sobre o mundo ashkenazim que estou reunindo neste caderno.",
    backLabel: "← Voltar à cultura",
    watchBtn: "Assistir",
    closeLabel: "Fechar",
    fileProtocolHint:
      "O player não funciona bem quando a página é aberta como arquivo local (file://). Abra o site por um servidor, por exemplo: npx serve .",
  },

  pronounsPage: {
    title: "Pronomes",
    subtitle: "Pronomes pessoais em Yiddish: tabela, frases de exemplo e um treino rápido.",
    backLabel: "← Voltar à gramática",
    tableTitle: "Pronomes pessoais",
    tableHeaders: {
      yiddish: "Yiddish",
      translit: "Transliteração",
      meaning: "Português",
      person: "Pessoa",
    },
    phrasesTitle: "Frases de exemplo",
    practiceBtn: "Treinar pronomes",
    quiz: {
      title: "Treino de pronomes",
      closeLabel: "Fechar",
      progressLabel: "Pergunta {current} de {total}",
      checkLabel: "Verificar",
      nextLabel: "Próxima",
      resultLabel: "Ver resultado",
      correctLabel: "Correto!",
      wrongLabel: "Quase! A resposta certa é:",
      finishTitle: "Treino concluído",
      finishText: "Você acertou {score} de {total}.",
      restartLabel: "Treinar de novo",
      closeResultLabel: "Fechar",
    },
  },

  verbsPage: {
    title: "Verbos",
    subtitle: "Conjugação no presente: verbos regulares, irregulares e um treino rápido.",
    backLabel: "← Voltar à gramática",
    regularTitle: "Verbos regulares",
    regularNote:
      "No presente, tire o -n / -en do infinitivo para achar o radical e acrescente a terminação da pessoa.",
    endingsTitle: "Terminações do presente",
    endingsHeaders: {
      person: "Pessoa",
      ending: "Terminação",
      example: "Exemplo (lernen)",
      rule: "Regra",
    },
    exampleTitle: "Exemplo completo: lernen (aprender / estudar)",
    irregularTitle: "Verbos irregulares",
    irregularNote: "Alguns verbos mudam o radical ou têm formas próprias. Os mais importantes são zayn (ser/estar) e hobn (ter).",
    otherIrregularTitle: "Outros irregulares frequentes",
    otherHeaders: {
      yiddish: "Yiddish",
      translit: "Transliteração",
      meaning: "Português",
      note: "Observação",
    },
    phrasesTitle: "Frases de exemplo",
    practiceBtn: "Treinar verbos",
    quiz: {
      title: "Treino de verbos",
      closeLabel: "Fechar",
      progressLabel: "Pergunta {current} de {total}",
      checkLabel: "Verificar",
      nextLabel: "Próxima",
      resultLabel: "Ver resultado",
      correctLabel: "Correto!",
      wrongLabel: "Quase! A resposta certa é:",
      finishTitle: "Treino concluído",
      finishText: "Você acertou {score} de {total}.",
      restartLabel: "Treinar de novo",
      closeResultLabel: "Fechar",
    },
  },

  about: {
    title: "Sobre",
    subtitle: "O que é este espaço e para que ele existe.",
    backLabel: "← Voltar ao início",
    author: "Gustavo Damasceno",
    paragraphs: [
      "O Yiddish Velt Brasil é o meu lugar de armazenar estudo e pesquisa sobre a língua, a literatura e a cultura Yiddish.",
      "Não é um acervo institucional nem um portal oficial. É um caderno digital pessoal: anotações, leituras, músicas, ferramentas e caminhos que vou reunindo enquanto aprendo.",
      "Tudo o que está aqui reflete o meu processo de estudo: incompleto, em construção e aberto a revisão. Se você passou por aqui, seja bem-vindo a acompanhar esse percurso.",
    ],
  },

  alefbeys: {
    title: "Alef-beys",
    subtitle: "O alfabeto Yiddish organizado por grupos, com letra e nome na tradição YIVO.",
    backLabel: "← Voltar aos iniciantes",
    printedLabel: "Letra impressa",
    cursiveLabel: "Letra cursiva",
  },

  transliteration: {
    title: "Teclado Fonético de Yiddish",
    subtitle: "Digite usando a transliteração YIVO.",
    helpLink: "Veja como funciona",
    inputPlaceholder: "Digite aqui em transliteração YIVO…",
    printedLabel: "Letra impressa",
    cursiveLabel: "Letra cursiva",
    copyLabel: "Copiar resultado",
    copiedLabel: "Copiado!",
    backLabel: "← Voltar aos iniciantes",
    tutorial: {
      title: "Como usar o teclado fonético",
      closeLabel: "Fechar",
      sections: [
        {
          heading: "O que é este teclado?",
          paragraphs: [
            "Este teclado permite digitar em Yiddish sem instalar nenhum software ou layout adicional no computador.",
            "Basta escrever a transliteração YIVO com o teclado latino, e as letras corretas em Yiddish aparecem automaticamente.",
          ],
        },
        {
          heading: "Como digitar",
          paragraphs: [
            "Digite no campo de cima usando a transliteração YIVO. O resultado em Yiddish aparece no campo de baixo, da direita para a esquerda.",
          ],
          examples: [
            { input: "sh", output: "ש" },
            { input: "ay", output: "ײַ" },
            { input: "kh", output: "כ / ך" },
            { input: "sholem-aleykhem", output: "שאָלעם־אַלײכעם" },
          ],
        },
        {
          heading: "O que o teclado faz sozinho",
          paragraphs: [
            "O shtumer-alef e as formas finais de khof, mem, nun, fey e tsadek são produzidos automaticamente e corretamente.",
            "Você também pode alternar entre letra impressa e letra cursiva (Nachlaot), e copiar o resultado com um clique.",
          ],
        },
        {
          heading: "Importante: é Yiddish, não hebraico",
          paragraphs: [
            "A saída segue a ortografia YIVO do Yiddish. Mesmo palavras de origem hebraica (lashon kodesh) aparecem escritas segundo a tradição Yiddish, e não na grafia do hebraico moderno.",
            "Por exemplo: digite shabbes e você verá שאַבעס, e não שבת, como no hebraico.",
            "Por isso, o resultado pode diferir do que você veria em um teclado hebraico comum. Isso é esperado: o objetivo aqui é escrever em Yiddish.",
          ],
        },
        {
          heading: "Dica rápida",
          paragraphs: [
            "Experimente digitar sholem-aleykhem no campo de entrada e observe o resultado. Depois, teste palavras do seu interesse e alterne entre letra impressa e cursiva.",
          ],
        },
      ],
    },
  },

  footer: {
    desc: "Caderno pessoal de estudo e pesquisa sobre língua, literatura e cultura Yiddish, em português.",
    mission: "Anotações de Gustavo Damasceno · em construção e em constante revisão.",
    copy: "© 2025 Yiddish Velt Brasil. Conteúdos pessoais de estudo.",
  },

  theme: {
    toDark: "Ativar modo escuro",
    toLight: "Ativar modo claro",
  },

  profile: {
    notFoundTitle: "Poeta não encontrado",
    notFoundText: "O perfil que você procura não existe ou foi removido.",
    notFoundBtn: "Ver todos os poetas",
    videoTitle: "Vídeo sobre o poeta",
  },
};

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Poetas", href: "pages/poetas.html" },
  { label: "Músicas", href: "pages/musicas.html" },
  { label: "Livros", href: "#inicio" },
  { label: "Yiddish no Brasil", href: "#brasil" },
  { label: "Sobre", href: "pages/sobre.html" },
];

const footerLinks = [
  { label: "Sobre", href: "pages/sobre.html" },
  { label: "Contribuir", href: "#" },
  { label: "Bibliografia", href: "#" },
  { label: "Contato", href: "#" },
  { label: "Créditos", href: "#" },
];

const categories = [
  {
    icon: "✒",
    title: "Poetas",
    description: "Biografias, poemas e contexto de grandes vozes da literatura Yiddish.",
    href: "pages/poetas.html",
  },
  {
    icon: "♪",
    href: "pages/musicas.html",
  },
  {
    icon: "📖",
    title: "Histórias",
    description: "Contos, memórias e narrativas que guardam a experiência judaica europeia e diasporica.",
    href: "#categorias",
  },
  {
    icon: "📚",
    title: "Livros",
    description: "Romances, antologias e obras de referência disponíveis ou traduzidas.",
    href: "#categorias",
  },
  {
    icon: "🇧🇷",
    title: "Cultura Brasileira & Yiddish",
    description: "Encontros entre tradições ashkenazim e a experiência judaica no Brasil.",
    href: "#brasil",
  },
  {
    icon: "🌱",
    title: "Dicas para iniciantes",
    description: "Primeiros passos no idioma, expressões úteis e materiais introdutórios.",
    href: "#iniciantes",
  },
];

const poets = [
  {
    id: "kadia-molodowsky",
    name: "Kadia Molodowsky",
    years: "1894–1975",
    image: "img/Kadia.png",
    featured: true,
    initials: "KM",
    description: "Poetisa, educadora e uma das grandes vozes da literatura Yiddish.",
    biography: `Por Gustavo Damasceno
Introdução
Quando comecei a estudar yiddish no curso de extensão vinculado ao IPEL (Instituto de Pesquisas e Ensino de Língua) e ao projeto "Viver com Yiddish" da PUC-RIO, um nome aparecia repetidamente durante as aulas: Kadia Molodowsky. Inicialmente, era apenas mais uma autora entre tantas da literatura yiddish. Mas, certo dia foi passado um hermabet para pesquisar sobre a kadia e ela acabou se tornando a primeira escritora cuja biografia resolvi pesquisar por conta própria e a primeira cujas obras procurei ler além do que era apresentado em sala.
Foi justamente essa curiosidade que me levou a descobrir uma personalidade muito maior do que imaginava.
Molodowsky não foi apenas uma das maiores poetas da literatura yiddish do século XX. Foi professora, editora, cronista, romancista, autora de literatura infantil, intelectual pública e defensora da continuidade da cultura judaica através da educação. Em uma época marcada por guerras, migrações forçadas e pelo desaparecimento de comunidades inteiras, ela enxergava no ensino da língua e da literatura uma forma de preservar a memória coletiva do povo judeu.[^1][^2]
Ao conhecer sua trajetória, percebi que talvez seu maior legado não seja apenas aquilo que escreveu, mas aquilo que ajudou outras pessoas a continuar lendo.

Uma infância entre dois mundos
Kadia Molodowsky nasceu em 10 de maio de 1894, em um shtetl chamado Bereze (Bereza Kartuska), então pertencente ao Império Russo e atualmente localizada em Belarus.[^1]
Sua formação reuniu influências que poderiam parecer contraditórias, mas que moldariam toda a sua obra.
Sua avó paterna ensinou-lhe a ler em yiddish. Seu pai lhe ensinou Torá, história judaica, hebraico moderno e Guemará. Paralelamente, recebeu educação secular, prestou exames oficiais e obteve certificado de professora.[^1]
Essa convivência entre tradição judaica e educação moderna aparece repetidamente em sua literatura.
Ao contrário de muitos intelectuais de sua época, Molodowsky nunca pareceu enxergar esses mundos como incompatíveis. Em sua trajetória, tradição e modernidade convivem lado a lado.

A professora antes da poeta
É comum encontrar Kadia Molodowsky descrita apenas como poeta. Embora isso seja verdadeiro, a definição é incompleta.
Durante anos ela lecionou yiddish nas escolas da TSYSHO (Central Yiddish School Organization), uma das principais redes de escolas laicas em língua yiddish da Polônia, e ensinou hebraico em cursos noturnos da comunidade judaica de Varsóvia.[^1]
Esse talvez seja o aspecto de sua vida que mais me chamou atenção. Quando pensamos em grandes escritores, normalmente imaginamos alguém isolado, dedicado apenas à produção literária.
Kadia fazia exatamente o oposto, passava o dia cercada por crianças: Ensinava, observava, escutava e depois escrevia. Não parece exagero dizer que sua sala de aula era também seu laboratório literário. Essa ligação entre educação e literatura explica boa parte de sua produção infantil.
Segundo Jordan Kutzik, antes da Segunda Guerra Mundial, Molodowsky era conhecida por muitos leitores justamente por seus poemas destinados às crianças, inspirados diretamente nos alunos que ensinava diariamente.[^3]

A literatura infantil como preservação cultural
Existe um equívoco relativamente comum quando se fala da obra de Kadia, sua literatura infantil costuma ser vista como um capítulo secundário de sua produção. Na realidade, ela ocupa posição central. Molodowsky chamava muitos desses textos de "histórias em versos". São poemas repletos de humor, musicalidade, ironia e imagens do cotidiano judaico da Europa Oriental.
Ao lê-los hoje, percebe-se que eles fazem muito mais do que entreter crianças. Eles preservam um universo inteiro: As roupas, as casas, os animais, o modo de falar, as brincadeiras, os pequenos gestos da vida cotidiana. Depois da Shoá, boa parte desse mundo desapareceu fisicamente. Os poemas permaneceram.
A tradutora Yaira Singer observa que essas obras fazem reviver o universo do judaísmo do Leste Europeu com seu humor, sua ironia e sua profunda Yidishkayt.[^3]
Talvez essa seja uma das maiores contribuições de Kadia: registrar um modo de viver antes que ele desaparecesse.

Uma escritora impossível de rotular
Ao estudar sua biografia, uma característica aparece repetidamente... Molodowsky recusava classificações simples.
Era defensora da cultura yiddish e, ao mesmo tempo, sionista. Acreditava que a literatura precisava dialogar com a realidade social, mas rejeitava transformá-la em instrumento partidário.
Escrevia intensamente sobre a experiência das mulheres judias, mas combatia a ideia de que deveria ser lida apenas como uma "poeta feminina".[^1]
Esse posicionamento aparece também em seus ensaios publicados na revista Literarishe Bleter, nos quais criticou tanto o paternalismo dirigido às escritoras quanto a pressão para que os autores se submetessem às ideologias políticas do período.[^1]
Essa independência intelectual talvez explique por que sua obra continua despertando interesse até hoje.

Guerra, exílio e memória
A Primeira Guerra Mundial alterou profundamente sua vida. Molodowsky trabalhou com crianças refugiadas na Ucrânia, viveu deslocamentos constantes e sobreviveu ao pogrom de Kiev.
Em 1920 publicou seus primeiros poemas na revista Eygns.[^1] No ano seguinte estabeleceu-se em Varsóvia, onde viveu um dos períodos mais férteis de sua carreira.
Entre 1927 e 1935 publicou quatro importantes livros de poesia e participou ativamente da vida literária yiddish da Polônia.[^1]
Em 1935 viajou para Nova York a convite do editor Lipe Lehrer.
A visita, inicialmente temporária, acabou transformando-se em exílio permanente diante da ascensão do nazismo e da destruição das comunidades judaicas da Europa.[^1]
Após a Shoá, sua poesia adquiriu novos contornos. Obras como Der Melekh Dovid Aleyn Iz Geblibn ("Somente o Rei Davi Permaneceu"), publicada em 1946, figuram entre os testemunhos poéticos mais importantes escritos em yiddish sobre o Holocausto.[^2]

O legado de Kadia
Em 1971, Molodowsky recebeu o Prêmio Itzik Manger, um dos maiores reconhecimentos da literatura em língua yiddish.[^1]
Faleceu em 1975, na Filadélfia.
Entretanto, sua obra continua sendo publicada, traduzida e estudada em diversos países.
Nas últimas décadas, novas traduções para o inglês, como Through an Endless Stretch of Land, organizada e traduzida por Yaira Singer, aproximaram sua poesia infantil de um público que antes praticamente não tinha acesso a essa parte de sua produção.[^3]
Isso demonstra que seu legado continua em expansão.

Considerações pessoais
Entre todos os aspectos da trajetória de Kadia Molodowsky, aquele que mais me marcou não foi necessariamente sua poesia. Foi sua dedicação ao ensino. Talvez porque eu a tenha conhecido justamente em uma sala de aula.
Se hoje continuo estudando yiddish, pesquisando autores e construindo um acervo sobre essa língua, parte desse caminho começou quando ouvi seu nome pela primeira vez durante o curso da PUC-RIO.
Quanto mais leio sua obra, mais difícil fica enxergá-la apenas como poeta.
Vejo uma educadora, uma intelectual e uma mulher que compreendeu que preservar uma língua significava preservar uma forma inteira de enxergar o mundo.
A Shoá destruiu inúmeras comunidades judaicas. Mas, não conseguiu destruir completamente sua memória.
Essa memória continua viva em documentos, fotografias, canções e poemas. Também continua viva em professoras como Kadia Molodowsky. Talvez seja esse seu maior legado.
Ela não apenas escreveu em yiddish… Ela ajudou a garantir que ainda existissem pessoas capazes de lê-lo.

Referências
[^1]: HELLERSTEIN, Kathryn. Kadya Molodowsky. Jewish Women's Archive. Biografia de referência sobre a autora, abrangendo sua formação, carreira, obras e atuação intelectual.
[^2]: HELLERSTEIN, Kathryn (org. e trad.). Paper Bridges: Selected Poems of Kadya Molodowsky. Detroit: Wayne State University Press, 1999.
[^3]: KUTZIK, Jordan. A new bilingual edition of Kadya Molodowsky's enchanting Yiddish children's poetry. The Forward, 2 dez. 2020. Artigo sobre a poesia infantil de Molodowsky e a tradução de Yaira Singer.
Bibliografia complementar
GONSHOR, Anna Fishman. Kadye Molodowsky in Literarishe Bleter, 1925–1935: Annotated Bibliography. McGill University, 1997.
KLEPFISZ, Irena. The Mothers, the Language: Feminism, Yidishkayt, and the Politics of Memory. Bridges, v. 4, n. 1, 1994.
Obras de Kadia Molodowsky:
Kheshvndike Nekht (1927)
Geyen Shikhlekh Avek (1930)
Dzhike Gas (1933)
Freydke (1935)
In Land Fun Mayn Gebeyn (1937)
Der Melekh Dovid Aleyn Iz Geblibn (1946)
Likht Fun Dornboym (1965)`,
  },
  {
    id: "itzik-manger",
    name: "Itzik Manger",
    years: "1901–1969",
    image: "img/Itzik.png",
    featured: true,
    initials: "IM",
    description: "Poeta e contista, celebrado por reinventar temas bíblicos com humor e lirismo popular.",
    biography:
      "Itzik Manger nasceu na Bucovina e viveu entre a Romênia, a Inglaterra e Israel. Suas obras misturam tradição oral, fantasia e ironia, tornando personagens bíblicos personagens de um vilarejo yiddish imaginário.",
    works: ["Khumesh Lider", "Megile Lider", "Shtern afn Dakh"],
    themes: ["Bíblia", "humor", "tradição oral", "vida shtetl", "lirismo popular"],
    context:
      "Um dos poetas mais lidos e cantados do Yiddish moderno. Suas adaptações bíblicas aproximam o sagrado do cotidiano e influenciaram teatro, música e educação cultural ashkenazim.",
  },
  {
    id: "avrom-sutzkever",
    name: "Avrom Sutzkever",
    years: "1913–2010",
    image: "img/Avrom.png",
    featured: true,
    initials: "AS",
    description: "Poeta de Vilna, testemunha do Holocausto e guardião da língua Yiddish no pós-guerra.",
    biography:
      "Sutzkever sobreviveu ao gueto de Vilna e participou da resistência cultural durante a ocupação nazista. Após a guerra, emigrou para Israel, onde continuou escrevendo poesia de extraordinária densidade visual e ética.",
    works: ["Lider fun Geto", "Di Fidlroyz", "Ode to the Dove"],
    themes: ["Holocausto", "Vilna", "natureza", "resistência", "memória"],
    context:
      "Considerado um dos maiores poetas em Yiddish do século XX. Suas obras documentam a destruição e, ao mesmo tempo, afirmam a continuidade da cultura yiddish como forma de sobrevivência espiritual.",
  },
  {
    id: "moyshe-kulbak",
    name: "Moyshe Kulbak",
    years: "1896–1937",
    image: "img/Moyshe.png",
    featured: true,
    initials: "MK",
    description: "Romancista e poeta de Minsk, mestre do realismo lírico e da paisagem urbana yiddish.",
    biography:
      "Kulbak cresceu em Vilna e desenvolveu carreira literária em Minsk. Suas narrativas capturam a vida judaica moderna com sensibilidade cómica e melancólica, entre shtetl e cidade soviética.",
    works: ["Montog", "Zelmenyaner", "Disner Tshayld Harold"],
    themes: ["modernidade", "cidade", "família", "humor", "identidade judaica"],
    context:
      "Sua carreira foi interrompida durante os expurgos stalinistas. Hoje é relido como um dos grandes cronistas da transformação social do mundo ashkenazim no início do século XX.",
  },
];

const brazilCards = [
  {
    icon: "🏙",
    title: "Curitiba",
    description: "Memória de imigração, instituições comunitárias e tradições culturais ashkenazim no Paraná.",
  },
  {
    icon: "🌆",
    title: "São Paulo",
    description: "Centro urbano com editoras, clubes, teatros e forte presença da cultura judaica em português e yiddish.",
  },
  {
    icon: "🌊",
    title: "Porto Alegre",
    description: "Comunidade histórica no Rio Grande do Sul e vínculos entre memória local e herança yiddish.",
  },
  {
    icon: "🤝",
    title: "Comunidades",
    description: "Sinagogas, centros culturais e associações que mantiveram vivas língua, música e costumes.",
  },
  {
    icon: "🎙",
    title: "Memória oral",
    description: "Entrevistas, relatos de família e registros de falantes que conectam gerações.",
  },
  {
    icon: "📕",
    title: "Livros e histórias locais",
    description: "Publicações, crônicas e arquivos que documentam a experiência judaica brasileira.",
  },
];

const learningPath = [
  {
    icon: "אָ",
    title: "Alef-beys",
    description: "Conheça o alfabeto yiddish e os sons básicos da língua escrita.",
    href: "pages/alef-beys.html",
  },
  {
    icon: "⌨",
    title: "Transliterações",
    description: "Digite em YIVO e veja o Yiddish correto aparecer, sem instalar teclado.",
    href: "pages/transliteracao.html",
  },
  {
    icon: "☀",
    title: "Expressões do dia a dia",
    description: "Frases úteis e modismos que aparecem em conversas e canções.",
  },
  {
    icon: "🎵",
    title: "Músicas",
    description: "Canções simples para fixar ritmo, pronúncia e vocabulário.",
    href: "pages/musicas.html",
  },
  {
    icon: "✎",
    title: "Gramática",
    description: "Pronomes, verbos e outros tópicos essenciais para montar frases em Yiddish.",
    href: "pages/gramatica.html",
  },
  {
    icon: "🌍",
    title: "Cultura e contexto",
    description: "Filmes, histórias, tradições e outras referências que ajudam a compreender o idioma.",
    href: "pages/cultura.html",
  },
];

// ---- Gramática (tópicos) ----
// Adicione novos cards aqui. Depois: href: "pages/seu-topico.html"
const grammarTopics = [
  {
    id: "pronomes",
    icon: "איר",
    title: "Pronomes",
    description: "Pessoais, possessivos e demonstrativos: ikh, du, er, zi, mir, ir, zey…",
    href: "pages/pronomes.html",
  },
  {
    id: "verbos",
    icon: "זײַן",
    title: "Verbos",
    description: "Conjugação no presente, passado e futuro; verbos auxiliares e irregulares.",
    href: "pages/verbos.html",
  },
  {
    id: "artigos",
    icon: "דער",
    title: "Artigos",
    description: "Der, di, dos e o artigo indefinido; gênero e número do substantivo.",
  },
  {
    id: "substantivos",
    icon: "הױז",
    title: "Substantivos",
    description: "Gênero, plural e formação de palavras no Yiddish.",
  },
  {
    id: "adjetivos",
    icon: "שײן",
    title: "Adjetivos",
    description: "Concordância, graus e posição do adjetivo na frase.",
  },
  {
    id: "preposicoes",
    icon: "אין",
    title: "Preposições",
    description: "In, af, mit, fun, tsu e outras preposições frequentes.",
  },
  {
    id: "negacao",
    icon: "נישט",
    title: "Negação e perguntas",
    description: "Nisht, keyn, vos, vu, ven e a ordem das palavras nas perguntas.",
  },
  {
    id: "numeros",
    icon: "1",
    title: "Números",
    description: "Cardinais, ordinais e usos no dia a dia.",
  },
];

// ---- Cultura e contexto (tópicos) ----
const cultureTopics = [
  {
    id: "filmes",
    title: "Filmes",
    description: "Cinema em Yiddish ou sobre o mundo ashkenazim: títulos, notas e recomendações.",
    href: "pages/filmes.html",
  },
  {
    id: "historias",
    title: "Histórias",
    description: "Contos, narrativas e trechos que ajudam a sentir o idioma em contexto.",
  },
  {
    id: "teatro",
    title: "Teatro",
    description: "Peças, companhias e a tradição do teatro Yiddish.",
  },
  {
    id: "tradicoes",
    title: "Tradições",
    description: "Costumes, festas e práticas culturais ligadas à vida judaica ashkenazim.",
  },
  {
    id: "historia",
    title: "História",
    description: "Contextos históricos que atravessam a língua e a literatura Yiddish.",
  },
  {
    id: "livros",
    title: "Livros",
    description: "Leituras, antologias e obras de referência para estudar com calma.",
  },
];

// ---- Filmes ----
const films = [
  {
    id: "tevya",
    title: "Tevya",
    year: "1939",
    image: "img/tevya.png",
    driveId: "1OYYtZ3LNIpA3NFT-5j2i-aDHKhqoHMXy",
    description:
      "Criado em 1939 por Maurice Schwartz, Miriam Risselle & Rebecca Weintraub.",
  },
  {
    id: "the-dybbuk",
    title: "The Dybbuk",
    year: "1937",
    image: "img/dybbuk.png",
    youtubeId: "nmvKuukW-I8",
    description:
      "Dirigido em 1937 por Michał Waszyński e coreografado por Judith Berg.",
  },
  {
    id: "der-golem",
    title: "Der Golem",
    year: "1920",
    image: "img/golem.png",
    youtubeId: "Ni_0ehzcZ64",
    description:
      "Em meados do século 19, uma comunidade judaica da cidade de Praga é ameaçada por um decreto do imperador. Na tentativa de salvar seu povo da desgraça, o Rabino Loew dá vida a um Golem.",
  },
];

// ---- Pronomes ----
const pronounsTable = [
  { person: "1ª sing.", yiddish: "איך", translit: "ikh", meaning: "eu" },
  { person: "2ª sing.", yiddish: "דו", translit: "du", meaning: "você / tu" },
  { person: "3ª sing. m.", yiddish: "ער", translit: "er", meaning: "ele" },
  { person: "3ª sing. f.", yiddish: "זי", translit: "zi", meaning: "ela" },
  { person: "3ª sing. n.", yiddish: "עס", translit: "es", meaning: "isso / ele (neutro)" },
  { person: "1ª plur.", yiddish: "מיר", translit: "mir", meaning: "nós" },
  { person: "2ª plur.", yiddish: "איר", translit: "ir", meaning: "vocês" },
  { person: "3ª plur.", yiddish: "זיי", translit: "zey", meaning: "eles / elas" },
];

const pronounsPhrases = [
  {
    yiddish: "איך בין אַ סטודענט.",
    translit: "Ikh bin a student.",
    portuguese: "Eu sou um estudante.",
  },
  {
    yiddish: "דו לערנסט ייִדיש.",
    translit: "Du lernst yidish.",
    portuguese: "Você estuda Yiddish.",
  },
  {
    yiddish: "ער לייענט אַ בוך.",
    translit: "Er leyent a bukh.",
    portuguese: "Ele lê um livro.",
  },
  {
    yiddish: "זי שרײַבט אַ בריוו.",
    translit: "Zi shraybt a briv.",
    portuguese: "Ela escreve uma carta.",
  },
  {
    yiddish: "מיר זײַנען גוטע פֿרײַנד.",
    translit: "Mir zaynen gute fraynd.",
    portuguese: "Nós somos bons amigos.",
  },
  {
    yiddish: "זיי קומען פֿון בראַזיל.",
    translit: "Zey kumen fun brazil.",
    portuguese: "Eles vêm do Brasil.",
  },
];

const pronounsQuiz = [
  {
    prompt: "O que significa este pronome?",
    yiddish: "איך",
    translit: "ikh",
    options: ["eu", "você", "ele", "nós"],
    answer: "eu",
  },
  {
    prompt: "Como se diz \"você\" em Yiddish (transliteração)?",
    options: ["du", "ikh", "er", "mir"],
    answer: "du",
  },
  {
    prompt: "Qual é o pronome para \"ela\"?",
    yiddish: "?",
    options: ["זי", "ער", "מיר", "דו"],
    answer: "זי",
  },
  {
    prompt: "O que significa \"mir\"?",
    options: ["nós", "eu", "eles", "você"],
    answer: "nós",
  },
  {
    prompt: "Qual transliteração corresponde a זיי?",
    options: ["zey", "zi", "er", "ir"],
    answer: "zey",
  },
  {
    prompt: "Na frase \"Er leyent a bukh\", quem lê o livro?",
    options: ["ele", "ela", "eu", "nós"],
    answer: "ele",
  },
  {
    prompt: "Como se diz \"vocês\" em Yiddish (transliteração)?",
    options: ["ir", "mir", "zey", "du"],
    answer: "ir",
  },
  {
    prompt: "Qual pronome completa: \"___ bin a student\" (eu sou…)?",
    options: ["Ikh", "Du", "Zi", "Zey"],
    answer: "Ikh",
  },
];

// ---- Verbos ----
const regularVerbEndings = [
  {
    person: "ikh",
    ending: "(radical)",
    example: "ikh lern",
    rule: "Usa o radical",
  },
  {
    person: "du",
    ending: "-st",
    example: "du lernst",
    rule: "Radical + -st",
  },
  {
    person: "er / zi / es",
    ending: "-t",
    example: "er lernt",
    rule: "Radical + -t",
  },
  {
    person: "mir",
    ending: "-n / -en",
    example: "mir lernen",
    rule: "Como o infinitivo",
  },
  {
    person: "ir",
    ending: "-t",
    example: "ir lernt",
    rule: "Igual à 3ª pessoa do singular",
  },
  {
    person: "zey",
    ending: "-n / -en",
    example: "zey lernen",
    rule: "Como o infinitivo / mir",
  },
];

const regularVerbExample = [
  { person: "ikh", yiddish: "איך לערן", translit: "ikh lern", meaning: "eu estudo" },
  { person: "du", yiddish: "דו לערנסט", translit: "du lernst", meaning: "você estuda" },
  { person: "er / zi / es", yiddish: "ער לערנט", translit: "er lernt", meaning: "ele estuda" },
  { person: "mir", yiddish: "מיר לערנען", translit: "mir lernen", meaning: "nós estudamos" },
  { person: "ir", yiddish: "איר לערנט", translit: "ir lernt", meaning: "vocês estudam" },
  { person: "zey", yiddish: "זיי לערנען", translit: "zey lernen", meaning: "eles estudam" },
];

const irregularVerbTables = [
  {
    id: "zayn",
    title: "זײַן · zayn · ser / estar",
    rows: [
      { person: "ikh", yiddish: "איך בין", translit: "ikh bin", meaning: "eu sou / estou" },
      { person: "du", yiddish: "דו ביסט", translit: "du bist", meaning: "você é / está" },
      { person: "er / zi / es", yiddish: "ער איז", translit: "er iz", meaning: "ele é / está" },
      { person: "mir", yiddish: "מיר זײַנען", translit: "mir zaynen", meaning: "nós somos / estamos" },
      { person: "ir", yiddish: "איר זײַט", translit: "ir zayt", meaning: "vocês são / estão" },
      { person: "zey", yiddish: "זיי זײַנען", translit: "zey zaynen", meaning: "eles são / estão" },
    ],
  },
  {
    id: "hobn",
    title: "האָבן · hobn · ter",
    rows: [
      { person: "ikh", yiddish: "איך האָב", translit: "ikh hob", meaning: "eu tenho" },
      { person: "du", yiddish: "דו האָסט", translit: "du host", meaning: "você tem" },
      { person: "er / zi / es", yiddish: "ער האָט", translit: "er hot", meaning: "ele tem" },
      { person: "mir", yiddish: "מיר האָבן", translit: "mir hobn", meaning: "nós temos" },
      { person: "ir", yiddish: "איר האָט", translit: "ir hot", meaning: "vocês têm" },
      { person: "zey", yiddish: "זיי האָבן", translit: "zey hobn", meaning: "eles têm" },
    ],
  },
];

const otherIrregularVerbs = [
  { yiddish: "גײן", translit: "geyn", meaning: "ir", note: "ikh gey, du geyst, er geyt…" },
  { yiddish: "קומען", translit: "kumen", meaning: "vir", note: "ikh kum, du kumst, er kumt…" },
  { yiddish: "װיסן", translit: "visn", meaning: "saber", note: "ikh veys, du veyst, er veyst…" },
  { yiddish: "טאָן", translit: "ton", meaning: "fazer", note: "ikh tu, du tust, er tut…" },
  { yiddish: "געבן", translit: "gebn", meaning: "dar", note: "ikh gib, du gibst, er git…" },
  { yiddish: "עסן", translit: "esn", meaning: "comer", note: "ikh es, du est, er est…" },
];

const verbsPhrases = [
  {
    yiddish: "איך לערן ייִדיש.",
    translit: "Ikh lern yidish.",
    portuguese: "Eu estudo Yiddish.",
  },
  {
    yiddish: "דו לערנסט גוט.",
    translit: "Du lernst gut.",
    portuguese: "Você estuda bem.",
  },
  {
    yiddish: "ער איז אַ לערער.",
    translit: "Er iz a lerer.",
    portuguese: "Ele é um professor.",
  },
  {
    yiddish: "זי האָט אַ בוך.",
    translit: "Zi hot a bukh.",
    portuguese: "Ela tem um livro.",
  },
  {
    yiddish: "מיר גײען אין שול.",
    translit: "Mir geyn in shul.",
    portuguese: "Nós vamos à escola.",
  },
  {
    yiddish: "זיי קומען מאָרגן.",
    translit: "Zey kumen morgn.",
    portuguese: "Eles vêm amanhã.",
  },
];

const verbsQuiz = [
  {
    prompt: "Qual é a terminação de \"du\" no presente?",
    options: ["-st", "-t", "-n", "-e"],
    answer: "-st",
  },
  {
    prompt: "Como fica \"lernen\" com \"er\"?",
    options: ["lernt", "lernst", "lernen", "lern"],
    answer: "lernt",
  },
  {
    prompt: "Qual forma corresponde a \"eu sou\"?",
    options: ["ikh bin", "ikh hob", "ikh lern", "ikh gey"],
    answer: "ikh bin",
  },
  {
    prompt: "Complete: du ___ (hobn).",
    options: ["host", "hot", "hob", "hobn"],
    answer: "host",
  },
  {
    prompt: "A 1ª pessoa do plural (mir) nos regulares fica como o…",
    options: ["infinitivo", "radical sozinho", "mesmo que du", "mesmo que er"],
    answer: "infinitivo",
  },
  {
    prompt: "O que significa \"er iz\"?",
    options: ["ele é / está", "ele tem", "ele vai", "ele come"],
    answer: "ele é / está",
  },
  {
    prompt: "Qual é a forma de \"ir\" (vocês) com lernen?",
    options: ["lernt", "lernst", "lernen", "lern"],
    answer: "lernt",
  },
  {
    prompt: "\"ikh hob\" significa:",
    options: ["eu tenho", "eu sou", "eu vou", "eu sei"],
    answer: "eu tenho",
  },
];

// ---- Alef-beys (alfabeto Yiddish por grupos) ----
// Edite títulos e itens aqui. Cada item: { letter, name, translit }
const alefBeysSections = [
  {
    id: "consonants",
    title: "Consoantes Yiddish",
    items: [
      { letter: "ב", name: "beys", translit: "b" },
      { letter: "ג", name: "gimel", translit: "g" },
      { letter: "ד", name: "daled", translit: "d" },
      { letter: "ה", name: "hey", translit: "h" },
      { letter: "װ", name: "tsvey vovn", translit: "v" },
      { letter: "ז", name: "zayin", translit: "z" },
      { letter: "ט", name: "tes", translit: "t" },
      { letter: "י", name: "yud", translit: "y" },
      { letter: "כ", name: "khof", translit: "kh" },
      { letter: "ל", name: "lamed", translit: "l" },
      { letter: "מ", name: "mem", translit: "m" },
      { letter: "נ", name: "nun", translit: "n" },
      { letter: "ס", name: "samekh", translit: "s" },
      { letter: "פּ", name: "pey", translit: "p" },
      { letter: "פֿ", name: "fey", translit: "f" },
      { letter: "צ", name: "tsadek", translit: "ts" },
      { letter: "ק", name: "kuf", translit: "k" },
      { letter: "ר", name: "reysh", translit: "r" },
      { letter: "ש", name: "shin", translit: "sh" },
    ],
  },
  {
    id: "vowels",
    title: "Vogais Yiddish",
    items: [
      { letter: "אַ", name: "pasekh alef", translit: "a" },
      { letter: "אָ", name: "komets alef", translit: "o" },
      { letter: "ײ", name: "tsvey yudn", translit: "ey" },
      { letter: "ײַ", name: "pasekh tsvey yudn", translit: "ay" },
      { letter: "ו", name: "vov", translit: "u" },
      { letter: "י", name: "yud", translit: "i" },
      { letter: "ױ", name: "vov yud", translit: "oy" },
      { letter: "ע", name: "ayin", translit: "e" },
    ],
  },
  {
    id: "courtesy",
    title: "Vogais de cortesia",
    note: "Usadas para dar mais clareza à leitura.",
    items: [
      { letter: "וּ", name: "melupm vov", translit: "u" },
      { letter: "יִ", name: "khirek yud", translit: "i" },
      { letter: "א", name: "shtumer alef", translit: "(mudo)" },
    ],
  },
  {
    id: "finals",
    title: "Formas finais das consoantes",
    note: "Usadas no fim das palavras.",
    items: [
      { letter: "ך", name: "langer khof", translit: "kh" },
      { letter: "ן", name: "langer nun", translit: "n" },
      { letter: "ף", name: "langer fey", translit: "f" },
      { letter: "ץ", name: "langer tsadek", translit: "ts" },
      { letter: "ם", name: "shlos mem", translit: "m" },
    ],
  },
  {
    id: "clusters",
    title: "Grupos consonantais",
    items: [
      { letter: "זש", name: "zayin shin", translit: "zh" },
      { letter: "דזש", name: "daled zayin shin", translit: "dzh" },
      { letter: "טש", name: "tes shin", translit: "tsh" },
    ],
  },
  {
    id: "obsolete",
    title: "Letras obsoletas",
    note: "Usadas principalmente em palavras de origem hebraica (lashon kodesh).",
    items: [
      { letter: "בֿ", name: "veys", translit: "v" },
      { letter: "ח", name: "khes", translit: "kh" },
      { letter: "כּ", name: "kaf", translit: "k" },
      { letter: "שׂ", name: "sin", translit: "s" },
      { letter: "תּ", name: "tof", translit: "t" },
      { letter: "ת", name: "sof", translit: "s" },
    ],
  },
];

// ---- Músicas ----
// Adicione novas músicas neste array. Página: pages/musica.html?id=seu-id
const songs = [
  {
    id: "yome-yome",
    title: "Yome Yome",
    subtitle: "Canção tradicional infantil",
    description: "Uma menina diz à mãe o que deseja, até revelar o que realmente quer.",
    youtubeId: "InrSN76Yxog",
    image: "img/yume.png",
    featured: true,
    transliteration: `- Yome, Yome, shpil mir a lidele,
Vos dos meydele vil;
- Dos meydele vil a hitele hobn,
Muz men geyn dem putserke zogn!

- Neyn, mameshi, neyn!
Du kenst mikh nisht farshteyn,
Du veyst nisht, vos ikh meyn!

Yome, Yome, shpil mir a lidele,
Vos dos meydele vil;
Dos meydele vil a por shikhelekh hobn,
Muz men geyn dem shuster zogn!

- Neyn, mameshi, neyn!
Du kenst mikh nisht farshteyn,
Du veyst nisht, vos ikh meyn!

- Yome, Yome, shpil mir a lidele,
Vos dos meydele vil;
- Dos meydele vil a khosndl hobn,
Muz men geyn dem shadkhn zogn!

- Yo, mameshi, yo!
Du veyst shoyn vos ikh meyn,
Du kenst mikh shoyn farshteyn!`,
    yiddish: `- יאָמע, יאָמע, שפּיל מיר אַ לידעלע,
װאָס דאָס מײדעלע װיל;
- דאָס מײדעלע װיל אַ היטעלע האָבן,
מוז מען גײן דעם פּוצערקע זאָגן!

- נײן, מאַמעשי, נײן!
דו קענסט מיך נישט פֿאַרשטײן,
דו װײסט נישט, װאָס איך מײן!

יאָמע, יאָמע, שפּיל מיר אַ לידעלע,
װאָס דאָס מײדעלע װיל;
דאָס מײדעלע װיל אַ פּאָר שיכעלעך האָבן,
מוז מען גײן דעם שוסטער זאָגן!

- נײן, מאַמעשי, נײן!
דו קענסט מיך נישט פֿאַרשטײן,
דו װײסט נישט, װאָס איך מײן!

- יאָמע, יאָמע, שפּיל מיר אַ לידעלע,
װאָס דאָס מײדעלע װיל;
- דאָס מײדעלע װיל אַ כאָסנדל האָבן,
מוז מען גײן דעם שאַדכן זאָגן!

- יאָ, מאַמעשי, יאָ!
דו װײסט שוין װאָס איך מײן,
דו קענסט מיך שוין פֿאַרשטײן!`,
    portuguese: `- Yome, Yome, toca para mim uma cançãozinha
sobre o que a menininha quer;
- A menininha quer ter um chapeuzinho,
é preciso ir dizer ao chapeleiro!

- Não, mãezinha, não!
Você não consegue me entender,
você não sabe o que eu quero dizer!

Yome, Yome, toca para mim uma cançãozinha
sobre o que a menininha quer;
A menininha quer ter um par de sapatinhos,
é preciso ir dizer ao sapateiro!

- Não, mãezinha, não!
Você não consegue me entender,
você não sabe o que eu quero dizer!

- Yome, Yome, toca para mim uma cançãozinha
sobre o que a menininha quer;
- A menininha quer ter um noivinho,
é preciso ir dizer ao casamenteiro!

- Sim, mãezinha, sim!
Agora você já sabe o que eu quero dizer,
agora você já consegue me entender!`,
    vocabulary: [
      { yiddish: "לידעלע", translit: "lidele", meaning: "cançãozinha" },
      { yiddish: "מײדעלע", translit: "meydele", meaning: "menininha" },
      { yiddish: "װיל", translit: "vil", meaning: "quer" },
      { yiddish: "היטעלע", translit: "hitele", meaning: "chapeuzinho" },
      { yiddish: "שיכעלעך", translit: "shikhelekh", meaning: "sapatinhos" },
      { yiddish: "כאָסנדל", translit: "khosndl", meaning: "noivinho" },
      { yiddish: "מאַמעשי", translit: "mameshi", meaning: "mãezinha" },
      { yiddish: "נײן", translit: "neyn", meaning: "não" },
      { yiddish: "יאָ", translit: "yo", meaning: "sim" },
      { yiddish: "פֿאַרשטײן", translit: "farshteyn", meaning: "entender" },
      { yiddish: "מײן", translit: "meyn", meaning: "querer dizer / significar" },
      { yiddish: "שפּיל", translit: "shpil", meaning: "toca / toque" },
      { yiddish: "שוסטער", translit: "shuster", meaning: "sapateiro" },
      { yiddish: "שאַדכן", translit: "shadkhn", meaning: "casamenteiro" },
    ],
  },
  {
    id: "zol-shoyn-kumen-di-geule",
    title: "Zol Shoyn Kumen di Geule",
    subtitle: "Canção tradicional",
    description: "Um pedido de redenção e esperança: que a geule venha logo, e que Moshiekh não demore.",
    youtubeId: "qy3lztcX8Es",
    image: "img/zolshoyn.png",
    featured: true,
    transliteration: `Ongezolyet oyfn hartsn,
makht men a lekhayim,
Oyb der umes lozt nit ruen,
zingen mir a lid.
Iz nito keyn bisl bronfn,
lomir trinken mayim.
Mayim-khayim iz dokh khayim,
vos darf nokh der yid?

Zol shoyn kumen di geule,
Zol shoyn kumen di geule,
Zol shoyn kumen di geule,
Moshiekh kumt shoyn bald!

S'iz a dor fun kule-khayev,
zayt nit keyn naronim,
Un fun zindikn
Moshiekh gikher kumen vet!
Akh, du tatele in himl,
s'betn bney rakhmonim;
Ze, Moshiekh zol nit kumen
a bisele tsu shpet.

Zol shoyn kumen di geule,
Zol shoyn kumen di geule,
Zol shoyn kumen di geule,
Moshiekh kumt shoyn bald!

S'tantsn beymer in di velder,
shtern oyfn himl.
Reb Yisroel, der mekhutn,
dreyt zikh in der mit.
S'vet zikh oyfvekn Moshiekh
fun zayn tifn driml,
Ven er vet derhern
undzer tfiledike lid.

Zol shoyn kumen di geule,
Zol shoyn kumen di geule,
Zol shoyn kumen di geule,
Moshiekh kumt shoyn bald!`,
    yiddish: `אָנגעזאָליעט אויפֿן האַרצן,
מאַכט מען אַ לחיים,
אויב דער אומעט לאָזט ניט רוען,
זינגען מיר אַ ליד.
איז ניטאָ קײן ביסל בראָנפֿן,
לאָמיר טרינקען מים.
מים־חיים איז דאָך חיים,
װאָס דאַרף נאָך דער ייִד?

זאָל שוין קומען די גאולה,
זאָל שוין קומען די גאולה,
זאָל שוין קומען די גאולה,
משיח קומט שוין באַלד!

ס׳איז אַ דור פֿון כּולע־חייב,
זײַט ניט קײן נאַראָנים,
און פֿון זינדיקן
משיח גיכער קומען װעט!
אַך, דו טאַטעלע אין הימל,
ס׳בעטן בני־רחמנים;
זע, משיח זאָל ניט קומען
אַ ביסעלע צו שפּעט.

זאָל שוין קומען די גאולה,
זאָל שוין קומען די גאולה,
זאָל שוין קומען די גאולה,
משיח קומט שוין באַלד!

ס׳טאַנצן בײמער אין די װעלדער,
שטערן אויפֿן הימל.
רב ישׂראל, דער מחותן,
דרײט זיך אין דער מיט.
ס׳װעט זיך אויפֿװעקן משיח
פֿון זײַן טיפֿן דרימל,
װען ער װעט דערהערן
אונדזער תּפֿילהדיקע ליד.

זאָל שוין קומען די גאולה,
זאָל שוין קומען די גאולה,
זאָל שוין קומען די גאולה,
משיח קומט שוין באַלד!`,
    portuguese: `Com o coração aflito,
fazemos um lekhayim.
Se a tristeza não nos deixa em paz,
cantamos uma canção.
Se não há um pouco de cachaça,
vamos beber água.
Água da vida também é vida:
o que mais precisa o judeu?

Que venha logo a redenção,
Que venha logo a redenção,
Que venha logo a redenção,
Moshiekh já vem logo!

É uma geração em que todos são culpados,
não sejam tolos,
e por causa do pecado
Moshiekh virá mais depressa!
Ah, Paizinho no céu,
pedem os filhos compassivos;
vê, que Moshiekh não venha
um pouquinho tarde demais.

Que venha logo a redenção,
Que venha logo a redenção,
Que venha logo a redenção,
Moshiekh já vem logo!

As árvores dançam nas florestas,
estrelas no céu.
Reb Yisroel, o sogro,
gira bem no meio.
Moshiekh vai despertar
do seu sono profundo
quando ouvir
nossa canção cheia de oração.

Que venha logo a redenção,
Que venha logo a redenção,
Que venha logo a redenção,
Moshiekh já vem logo!`,
    vocabulary: [
      { yiddish: "גאולה", translit: "geule", meaning: "redenção" },
      { yiddish: "משיח", translit: "Moshiekh", meaning: "Messias" },
      { yiddish: "לחיים", translit: "lekhayim", meaning: "brinde / à vida" },
      { yiddish: "אומעט", translit: "umes / umet", meaning: "tristeza" },
      { yiddish: "בראָנפֿן", translit: "bronfn", meaning: "cachaça / bebida forte" },
      { yiddish: "מים", translit: "mayim", meaning: "água" },
      { yiddish: "חיים", translit: "khayim", meaning: "vida" },
      { yiddish: "ייִד", translit: "yid", meaning: "judeu" },
      { yiddish: "נאַראָנים", translit: "naronim", meaning: "tolos" },
      { yiddish: "טאַטעלע", translit: "tatele", meaning: "paizinho" },
      { yiddish: "הימל", translit: "himl", meaning: "céu" },
      { yiddish: "ביסעלע", translit: "bisele", meaning: "um pouquinho" },
      { yiddish: "שפּעט", translit: "shpet", meaning: "tarde" },
      { yiddish: "בײמער", translit: "beymer", meaning: "árvores" },
      { yiddish: "מחותן", translit: "mekhutn", meaning: "sogro / parente por casamento" },
      { yiddish: "דרימל", translit: "driml", meaning: "sono / soneca" },
      { yiddish: "תּפֿילהדיקע", translit: "tfiledike", meaning: "cheia de oração / orante" },
      { yiddish: "ליד", translit: "lid", meaning: "canção" },
    ],
  },
  {
    id: "lomir-bagrisn",
    title: "Lomir bagrisn",
    subtitle: "Canção tradicional infantil",
    description: "Uma canção de boas-vindas: vamos saudar a todos, e também as crianças.",
    youtubeId: "IoOIhmQASdY",
    image: "img/lomir.png",
    featured: true,
    transliteration: `Lomir alemen bagrisn,
Lomir alemen bagrisn,
Lomir, lomir, lomir, lomir,
Lomir, lomir, lomir, lomir,
Lomir alemen bagrisn.

Lomir di kinder bagrisn,
Lomir di kinder bagrisn,
Lomir, lomir, lomir, lomir,
Lomir, lomir, lomir, lomir,
Lomir di kinder bagrisn.`,
    yiddish: `לאָמיר אַלעמען באַגריסן,
לאָמיר אַלעמען באַגריסן,
לאָמיר, לאָמיר, לאָמיר, לאָמיר,
לאָמיר, לאָמיר, לאָמיר, לאָמיר,
לאָמיר אַלעמען באַגריסן.

לאָמיר די קינדער באַגריסן,
לאָמיר די קינדער באַגריסן,
לאָמיר, לאָמיר, לאָמיר, לאָמיר,
לאָמיר, לאָמיר, לאָמיר, לאָמיר,
לאָמיר די קינדער באַגריסן.`,
    portuguese: `Vamos saudar a todos,
Vamos saudar a todos,
Vamos, vamos, vamos, vamos,
Vamos, vamos, vamos, vamos,
Vamos saudar a todos.

Vamos saudar as crianças,
Vamos saudar as crianças,
Vamos, vamos, vamos, vamos,
Vamos, vamos, vamos, vamos,
Vamos saudar as crianças.`,
    vocabulary: [
      { yiddish: "לאָמיר", translit: "lomir", meaning: "vamos" },
      { yiddish: "אַלעמען", translit: "alemen", meaning: "a todos" },
      { yiddish: "באַגריסן", translit: "bagrisn", meaning: "saudar / cumprimentar" },
      { yiddish: "קינדער", translit: "kinder", meaning: "crianças" },
      { yiddish: "די", translit: "di", meaning: "as / os" },
    ],
  },
];
