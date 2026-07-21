/* ============================================================
   Yidish Velt Brasil — Dados do site
   Edite textos, poetas, links e imagens aqui.

   Imagens: pasta img/  (ex.: img/Kadia.png)
   Vídeos:  pasta video/ (ex.: video/Kadia.mp4) — campo "video" em cada poeta
   Músicas: array songs em data.js — página musica.html?id=...
   Destaque na home: campo "featured: true" em cada poeta
   ============================================================ */

const siteContent = {
  name: "Yiddish Velt Brasil",
  tagline: "Acervo de língua, literatura e cultura",

  hero: {
    eyebrow: "Acervo cultural · Literatura · Memória",
    title: "Um acervo vivo da cultura Yiddish",
    text: "Explore poetas, músicas, histórias, livros e conexões entre o mundo Yiddish e a cultura brasileira.",
    btnPrimary: "Explorar acervo",
    btnSecondary: "Aprender Yiddish",
  },

  categories: {
    title: "Explore o acervo",
    subtitle: "Navegue por categorias e descubra textos, vozes e tradições do mundo Yiddish — em português.",
  },

  poets: {
    title: "Escritores e Poetas em destaque",
    subtitle: "Vozes essenciais da poesia Yiddish moderna. Clique em um perfil para conhecer a biografia, obras e contexto histórico.",
    btnLabel: "Ver perfil",
    viewAllBtn: "Ver todos",
    backLabel: "← Voltar aos poetas",
  },

  poetsPage: {
    title: "Escritores e Poetas",
    subtitle: "Biografias, obras e contexto de vozes da literatura Yiddish. Use a busca para encontrar um nome.",
    searchPlaceholder: "Buscar por nome…",
    noResults: "Nenhum poeta encontrado com esse nome.",
    backLabel: "← Voltar ao início",
  },

  songsPage: {
    title: "Músicas",
    subtitle: "Canções em Yiddish para ouvir, ler e aprender — com letra, tradução e vocabulário.",
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
    lead: "Além do acervo literário, o projeto busca registrar conexões entre a cultura Yiddish e a história judaica no Brasil, passando por comunidades como Curitiba, São Paulo e Porto Alegre.",
  },

  beginners: {
    title: "Para iniciantes",
    subtitle: "Uma trilha gentil para quem quer dar os primeiros passos no idioma e na cultura Yiddish.",
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
            "Basta escrever a transliteração YIVO com o teclado latino — e as letras corretas em Yiddish aparecem automaticamente.",
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
            "A saída segue a ortografia YIVO do Yiddish. Mesmo palavras de origem hebraica (lashon kodesh) aparecem escritas segundo a tradição Yiddish — e não na grafia do hebraico moderno.",
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
    desc: "Um projeto em construção dedicado à preservação, estudo e difusão da língua e cultura Yiddish em português.",
    mission: "Feito para preservar, estudar e compartilhar a cultura Yiddish.",
    copy: "© 2025 Yidish Velt Brasil. Conteúdos em revisão.",
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
  { label: "Poetas", href: "poetas.html" },
  { label: "Músicas", href: "musicas.html" },
  { label: "Livros", href: "#inicio" },
  { label: "Yiddish no Brasil", href: "#brasil" },
  { label: "Sobre", href: "#topo" },
];

const footerLinks = [
  { label: "Sobre o projeto", href: "#" },
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
    href: "poetas.html",
  },
  {
    icon: "♪",
    href: "musicas.html",
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
    href: "alef-beys.html",
  },
  {
    icon: "⌨",
    title: "Transliterações",
    description: "Digite em YIVO e veja o Yiddish correto aparecer, sem instalar teclado.",
    href: "transliteracao.html",
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
    href: "musicas.html",
  },
  {
    icon: "📄",
    title: "Pequenos textos",
    description: "Poemas curtos e trechos comentados para prática de leitura.",
  },
  {
    icon: "🌍",
    title: "Cultura e contexto",
    description: "História, tradições e referências que ajudam a compreender o idioma.",
  },
];

// ---- Alef-beys (alfabeto Yiddish por grupos) ----
// Edite títulos e itens aqui. Cada item: { letter, name }
const alefBeysSections = [
  {
    id: "consonants",
    title: "Consoantes Yiddish",
    items: [
      { letter: "ב", name: "beys" },
      { letter: "ג", name: "gimel" },
      { letter: "ד", name: "daled" },
      { letter: "ה", name: "hey" },
      { letter: "װ", name: "tsvey vovn" },
      { letter: "ז", name: "zayin" },
      { letter: "ט", name: "tes" },
      { letter: "י", name: "yud" },
      { letter: "כ", name: "khof" },
      { letter: "ל", name: "lamed" },
      { letter: "מ", name: "mem" },
      { letter: "נ", name: "nun" },
      { letter: "ס", name: "samekh" },
      { letter: "פּ", name: "pey" },
      { letter: "פֿ", name: "fey" },
      { letter: "צ", name: "tsadek" },
      { letter: "ק", name: "kuf" },
      { letter: "ר", name: "reysh" },
      { letter: "ש", name: "shin" },
    ],
  },
  {
    id: "vowels",
    title: "Vogais Yiddish",
    items: [
      { letter: "אַ", name: "pasekh alef" },
      { letter: "אָ", name: "komets alef" },
      { letter: "ײ", name: "tsvey yudn" },
      { letter: "ײַ", name: "pasekh tsvey yudn" },
      { letter: "ו", name: "vov" },
      { letter: "י", name: "yud" },
      { letter: "ױ", name: "vov yud" },
      { letter: "ע", name: "ayin" },
    ],
  },
  {
    id: "courtesy",
    title: "Vogais de cortesia",
    note: "Usadas para dar mais clareza à leitura.",
    items: [
      { letter: "וּ", name: "melupm vov" },
      { letter: "יִ", name: "khirek yud" },
      { letter: "א", name: "shtumer alef" },
    ],
  },
  {
    id: "finals",
    title: "Formas finais das consoantes",
    note: "Usadas no fim das palavras.",
    items: [
      { letter: "ך", name: "langer khof" },
      { letter: "ן", name: "langer nun" },
      { letter: "ף", name: "langer fey" },
      { letter: "ץ", name: "langer tsadek" },
      { letter: "ם", name: "shlos mem" },
    ],
  },
  {
    id: "clusters",
    title: "Grupos consonantais",
    items: [
      { letter: "זש", name: "zayin shin" },
      { letter: "דזש", name: "daled zayin shin" },
      { letter: "טש", name: "tes shin" },
    ],
  },
  {
    id: "obsolete",
    title: "Letras obsoletas",
    note: "Usadas principalmente em palavras de origem hebraica (lashon kodesh).",
    items: [
      { letter: "בֿ", name: "veys" },
      { letter: "ח", name: "khes" },
      { letter: "כּ", name: "kaf" },
      { letter: "שׂ", name: "sin" },
      { letter: "תּ", name: "tof" },
      { letter: "ת", name: "sof" },
    ],
  },
];

// ---- Músicas ----
// Adicione novas músicas neste array. Página: musica.html?id=seu-id
const songs = [
  {
    id: "yome-yome",
    title: "Yome Yome",
    subtitle: "Canção tradicional infantil",
    description: "Uma menina diz à mãe o que deseja — até revelar o que realmente quer.",
    youtubeId: "InrSN76Yxog",
    image: "",
    featured: true,
    transliteration: `— Yome, Yome, shpil mir a lidele,
Vos dos meydele vil;
— Dos meydele vil a hitele hobn,
Muz men geyn dem putserke zogn!

— Neyn, mameshi, neyn!
Du kenst mikh nisht farshteyn,
Du veyst nisht, vos ikh meyn!

Yome, Yome, shpil mir a lidele,
Vos dos meydele vil;
Dos meydele vil a por shikhelekh hobn,
Muz men geyn dem shuster zogn!

— Neyn, mameshi, neyn!
Du kenst mikh nisht farshteyn,
Du veyst nisht, vos ikh meyn!

— Yome, Yome, shpil mir a lidele,
Vos dos meydele vil;
— Dos meydele vil a khosndl hobn,
Muz men geyn dem shadkhn zogn!

— Yo, mameshi, yo!
Du veyst shoyn vos ikh meyn,
Du kenst mikh shoyn farshteyn!`,
    yiddish: `— יאָמע, יאָמע, שפּיל מיר אַ לידעלע,
װאָס דאָס מײדעלע װיל;
— דאָס מײדעלע װיל אַ היטעלע האָבן,
מוז מען גײן דעם פּוצערקע זאָגן!

— נײן, מאַמעשי, נײן!
דו קענסט מיך נישט פֿאַרשטײן,
דו װײסט נישט, װאָס איך מײן!

יאָמע, יאָמע, שפּיל מיר אַ לידעלע,
װאָס דאָס מײדעלע װיל;
דאָס מײדעלע װיל אַ פּאָר שיכעלעך האָבן,
מוז מען גײן דעם שוסטער זאָגן!

— נײן, מאַמעשי, נײן!
דו קענסט מיך נישט פֿאַרשטײן,
דו װײסט נישט, װאָס איך מײן!

— יאָמע, יאָמע, שפּיל מיר אַ לידעלע,
װאָס דאָס מײדעלע װיל;
— דאָס מײדעלע װיל אַ כאָסנדל האָבן,
מוז מען גײן דעם שאַדכן זאָגן!

— יאָ, מאַמעשי, יאָ!
דו װײסט שוין װאָס איך מײן,
דו קענסט מיך שוין פֿאַרשטײן!`,
    portuguese: `— Yome, Yome, toca para mim uma cançãozinha
sobre o que a menininha quer;
— A menininha quer ter um chapeuzinho,
é preciso ir dizer ao chapeleiro!

— Não, mãezinha, não!
Você não consegue me entender,
você não sabe o que eu quero dizer!

Yome, Yome, toca para mim uma cançãozinha
sobre o que a menininha quer;
A menininha quer ter um par de sapatinhos,
é preciso ir dizer ao sapateiro!

— Não, mãezinha, não!
Você não consegue me entender,
você não sabe o que eu quero dizer!

— Yome, Yome, toca para mim uma cançãozinha
sobre o que a menininha quer;
— A menininha quer ter um noivinho,
é preciso ir dizer ao casamenteiro!

— Sim, mãezinha, sim!
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
];
