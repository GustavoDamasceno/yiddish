/* ============================================================
   Yidish Velt Brasil — Script da página inicial
   Dados editáveis em data.js
   ============================================================ */

function renderHomeContent() {
  document.getElementById("hero-eyebrow").textContent = siteContent.hero.eyebrow;
  document.getElementById("hero-title").textContent = siteContent.hero.title;
  document.getElementById("hero-text").textContent = siteContent.hero.text;
  document.getElementById("hero-btn-primary").textContent = siteContent.hero.btnPrimary;
  document.getElementById("hero-btn-secondary").textContent = siteContent.hero.btnSecondary;

  const categoriesTitle = document.getElementById("categories-title");
  if (categoriesTitle) {
    categoriesTitle.textContent = siteContent.categories.title;
    document.getElementById("categories-subtitle").textContent = siteContent.categories.subtitle;
  }

  document.getElementById("poets-title").textContent = siteContent.poets.title;
  document.getElementById("poets-subtitle").textContent = siteContent.poets.subtitle;

  const viewAllBtn = document.getElementById("poets-view-all");
  if (viewAllBtn) {
    viewAllBtn.textContent = siteContent.poets.viewAllBtn;
  }

  document.getElementById("brazil-title").textContent = siteContent.brazil.title;
  document.getElementById("brazil-lead").textContent = siteContent.brazil.lead;

  document.getElementById("beginners-title").textContent = siteContent.beginners.title;
  document.getElementById("beginners-subtitle").textContent = siteContent.beginners.subtitle;
}

function renderCategories() {
  const grid = document.getElementById("categories-grid");
  if (!grid) return;
  grid.innerHTML = "";

  categories.forEach((cat) => {
    const article = document.createElement("article");
    article.className = "category-card";
    article.innerHTML = `
      <span class="category-card__icon" aria-hidden="true">${cat.icon}</span>
      <h3 class="category-card__title">${cat.title}</h3>
      <p class="category-card__desc">${cat.description}</p>
      <a class="category-card__link" href="${cat.href}">Explorar →</a>
    `;
    grid.appendChild(article);
  });
}

function renderFeaturedPoets() {
  renderPoetCards(document.getElementById("poets-grid"), getFeaturedPoets());
}

function renderBrazil() {
  const grid = document.getElementById("brazil-grid");
  grid.innerHTML = "";

  brazilCards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "brazil-card";
    article.innerHTML = `
      <span class="brazil-card__icon" aria-hidden="true">${card.icon}</span>
      <h3 class="brazil-card__title">${card.title}</h3>
      <p class="brazil-card__desc">${card.description}</p>
    `;
    grid.appendChild(article);
  });
}

function renderLearningPath() {
  const container = document.getElementById("learning-path");
  container.innerHTML = "";

  learningPath.forEach((step, index) => {
    const article = document.createElement("article");
    article.className = "learning-step";
    article.innerHTML = `
      <span class="learning-step__number" aria-hidden="true">${index + 1}</span>
      <span class="learning-step__icon" aria-hidden="true">${step.icon}</span>
      <h3 class="learning-step__title">${step.title}</h3>
      <p class="learning-step__desc">${step.description}</p>
    `;
    container.appendChild(article);
  });
}

function initHomePage() {
  initSharedLayout();
  renderHomeContent();
  renderCategories();
  renderFeaturedPoets();
  renderBrazil();
  renderLearningPath();
}

document.addEventListener("DOMContentLoaded", initHomePage);
