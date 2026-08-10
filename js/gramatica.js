/* ============================================================
   Yidish Velt Brasil · Página de Gramática
   Dados em data.js → grammarTopics
   ============================================================ */

function createGrammarCard(topic) {
  const article = document.createElement("article");
  article.className = "grammar-card";
  article.dataset.topicId = topic.id;

  const hasLink = Boolean(topic.href);

  if (hasLink) {
    article.classList.add("grammar-card--link");
    article.setAttribute("role", "link");
    article.tabIndex = 0;
    article.addEventListener("click", () => {
      window.location.href = resolvePath(topic.href);
    });
    article.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = resolvePath(topic.href);
      }
    });
  }

  article.innerHTML = `
    <span class="grammar-card__icon" lang="yi" dir="rtl" aria-hidden="true">${topic.icon}</span>
    <h2 class="grammar-card__title">${topic.title}</h2>
    <p class="grammar-card__desc">${topic.description}</p>
    ${
      hasLink
        ? '<span class="grammar-card__cta">Abrir →</span>'
        : `<span class="grammar-card__badge">${siteContent.grammarPage.comingSoon}</span>`
    }
  `;

  return article;
}

function renderGrammarTopics() {
  const grid = document.getElementById("grammar-grid");
  grid.innerHTML = "";
  grammarTopics.forEach((topic) => {
    grid.appendChild(createGrammarCard(topic));
  });
}

function initGrammarPage() {
  initSharedLayout();

  const content = siteContent.grammarPage;

  document.title = `${content.title} · ${siteContent.name}`;
  document.getElementById("grammar-back").textContent = content.backLabel;
  document.getElementById("grammar-title").textContent = content.title;
  document.getElementById("grammar-subtitle").textContent = content.subtitle;

  renderGrammarTopics();
}

document.addEventListener("DOMContentLoaded", initGrammarPage);
