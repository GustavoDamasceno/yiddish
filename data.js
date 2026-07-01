/* ============================================================
   Yidish Velt Brasil — Dados do site
   Edite textos, poetas, links e imagens aqui.

   Imagens: pasta img/  (ex.: img/Kadia.png)
   Vídeos:  pasta video/ (ex.: video/Kadia.mp4) — campo "video" em cada poeta
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

  brazil: {
    title: "Yiddish no Brasil",
    lead: "Além do acervo literário, o projeto busca registrar conexões entre a cultura Yiddish e a história judaica no Brasil, passando por comunidades como Curitiba, São Paulo e Porto Alegre.",
  },

  beginners: {
    title: "Para iniciantes",
    subtitle: "Uma trilha gentil para quem quer dar os primeiros passos no idioma e na cultura Yiddish.",
  },

  footer: {
    desc: "Um projeto em construção dedicado à preservação, estudo e difusão da língua e cultura Yiddish em português.",
    mission: "Feito para preservar, estudar e compartilhar a cultura Yiddish.",
    copy: "© 2025 Yidish Velt Brasil. Conteúdos em revisão.",
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
  { label: "Músicas", href: "#inicio" },
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
    title: "Músicas",
    description: "Canções tradicionais, klezmer e gravações que atravessam gerações.",
    href: "#categorias",
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
    video: "video/Kadia.mp4",
    featured: true,
    initials: "KM",
    description: "Poetisa, educadora e uma das grandes vozes da literatura Yiddish.",
    biography:
      "Nascida na atual Bielorrússia, Kadia Molodowsky emigrou para os Estados Unidos em 1935. Sua poesia combina linguagem lírica e clareza moral, com atenção especial à infância, à condição feminina e ao exílio. Também foi editora e fundadora de revistas literárias em Yiddish.",
    works: ["Froyen Lider", "Likht fun Dornboym", "Der Melekh Dovid Aleyn Iz Geblibn"],
    themes: ["infância", "memória", "mulheres", "exílio", "identidade"],
    context:
      "Escreveu em meio às rupturas do século XX — guerras, deslocamentos e a reconstrução cultural ashkenazim na América. Sua voz permanece central para quem estuda poesia Yiddish escrita por mulheres.",
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
    icon: "א",
    title: "Alef-beys",
    description: "Conheça o alfabeto yiddish e os sons básicos da língua escrita.",
  },
  {
    icon: "💬",
    title: "Primeiras palavras",
    description: "Saudações, números e vocabulário essencial para começar a ler e ouvir.",
  },
  {
    icon: "☀",
    title: "Expressões do dia a dia",
    description: "Frases úteis e modismos que aparecem em conversas e canções.",
  },
  {
    icon: "🎵",
    title: "Músicas infantis",
    description: "Canções simples para fixar ritmo, pronúncia e vocabulário.",
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
