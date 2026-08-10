# Yiddish Velt Brasil

**Acesso:** [https://gustavodamasceno.github.io/yiddish/](https://gustavodamasceno.github.io/yiddish/)

Caderno digital pessoal de estudo e pesquisa sobre a língua, a literatura e a cultura Yiddish, em português. Não é um acervo institucional: são as anotações de **Gustavo Damasceno** enquanto aprende, lê e organiza materiais.

## O que tem no site

- **Poetas** — biografias e notas sobre vozes da literatura Yiddish
- **Músicas** — letra (Yiddish, transliteração YIVO e português), vocabulário e vídeo
- **Alef-beys** — alfabeto por grupos, com letra impressa/cursiva e transliteração ao clicar
- **Teclado fonético** — digite em YIVO e veja o texto em Yiddish
- **Yiddish no Brasil** — conexões com a experiência judaica brasileira (em construção, ainda não subiu)
- **Sobre** — o propósito deste caderno de estudo

## Estrutura do projeto

```
├── index.html          # Página inicial
├── pages/              # Demais páginas HTML
├── js/                 # Scripts (data.js concentra textos e conteúdo)
├── css/                # Estilos
├── img/                # Imagens
├── fonts/              # Fontes (ex.: Nachlaot)
└── video/              # Vídeos opcionais
```

O conteúdo editável (textos, poetas, músicas, alef-beys, etc.) fica principalmente em `js/data.js`.

## Como rodar localmente

Por ser um site estático, basta servir a pasta na raiz:

```bash
npx serve .
```

Depois abra o endereço indicado no terminal (em geral `http://localhost:3000`).

> Alguns recursos (como o player do YouTube) não funcionam bem em `file://`. Prefira um servidor local ou o site publicado no GitHub Pages.
