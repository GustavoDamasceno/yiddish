/* ============================================================
   Yidish Velt Brasil · Página Cultura e contexto
   Dados em data.js → cultureTopics
   ============================================================ */

function createCultureCard(topic) {
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
    <h2 class="grammar-card__title">${topic.title}</h2>
    <p class="grammar-card__desc">${topic.description}</p>
    ${
      hasLink
        ? '<span class="grammar-card__cta">Abrir →</span>'
        : `<span class="grammar-card__badge">${siteContent.culturePage.comingSoon}</span>`
    }
  `;

  return article;
}

function renderCultureTopics() {
  const grid = document.getElementById("culture-grid");
  grid.innerHTML = "";
  cultureTopics.forEach((topic) => {
    grid.appendChild(createCultureCard(topic));
  });
}

function initCulturePage() {
  initSharedLayout();

  const content = siteContent.culturePage;

  document.title = `${content.title} · ${siteContent.name}`;
  document.getElementById("culture-back").textContent = content.backLabel;
  document.getElementById("culture-title").textContent = content.title;
  document.getElementById("culture-subtitle").textContent = content.subtitle;

  renderCultureTopics();
}

document.addEventListener("DOMContentLoaded", initCulturePage);
