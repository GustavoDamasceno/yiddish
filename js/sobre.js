/* ============================================================
   Yidish Velt Brasil · Página Sobre
   ============================================================ */

function renderAboutPage() {
  const content = siteContent.about;
  const container = document.getElementById("about-content");

  document.title = `${content.title} · ${siteContent.name}`;
  document.getElementById("about-back").textContent = content.backLabel;
  document.getElementById("about-title").textContent = content.title;
  document.getElementById("about-subtitle").textContent = content.subtitle;

  const paragraphs = content.paragraphs
    .map((paragraph) => `<p class="about-article__text">${paragraph}</p>`)
    .join("");

  container.innerHTML = `
    <p class="about-article__author">${content.author}</p>
    ${paragraphs}
  `;
}

function initAboutPage() {
  initSharedLayout();
  renderAboutPage();
}

document.addEventListener("DOMContentLoaded", initAboutPage);
