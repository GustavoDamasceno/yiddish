/* ============================================================
   Yidish Velt Brasil · Página Alef-beys
   Dados em data.js → alefBeysSections
   ============================================================ */

function renderAlefBeysSections() {
  const container = document.getElementById("alefbeys-sections");
  container.innerHTML = "";

  alefBeysSections.forEach((section) => {
    const block = document.createElement("section");
    block.className = `alphabet-section alphabet-section--${section.id}`;
    block.setAttribute("aria-labelledby", `alphabet-${section.id}`);

    const noteHTML = section.note
      ? `<p class="alphabet-section__note">${section.note}</p>`
      : "";

    const cardsHTML = section.items
      .map(
        (item) => `
      <button
        type="button"
        class="alphabet-card"
        data-letter="${item.letter}"
        data-translit="${item.translit}"
        aria-pressed="false"
        aria-label="${item.name}: ${item.letter}. Clique para ver a transliteração ${item.translit}."
      >
        <span class="alphabet-card__letter" lang="yi" dir="rtl">${item.letter}</span>
        <span class="alphabet-card__name">${item.name}</span>
      </button>`
      )
      .join("");

    block.innerHTML = `
      <header class="alphabet-section__header">
        <h2 class="alphabet-section__title" id="alphabet-${section.id}">${section.title}</h2>
        ${noteHTML}
      </header>
      <div class="alphabet-grid">
        ${cardsHTML}
      </div>
    `;

    container.appendChild(block);
  });

  container.querySelectorAll(".alphabet-card").forEach((card) => {
    card.addEventListener("click", () => toggleAlphabetCard(card));
  });
}

function toggleAlphabetCard(card) {
  const letter = card.dataset.letter;
  const translit = card.dataset.translit;
  const glyph = card.querySelector(".alphabet-card__letter");
  const showingTranslit = card.classList.toggle("is-showing-translit");

  if (showingTranslit) {
    glyph.textContent = translit;
    glyph.removeAttribute("lang");
    glyph.removeAttribute("dir");
  } else {
    glyph.textContent = letter;
    glyph.setAttribute("lang", "yi");
    glyph.setAttribute("dir", "rtl");
  }

  card.setAttribute("aria-pressed", String(showingTranslit));
}

function setAlphabetFontStyle(style) {
  const sections = document.getElementById("alefbeys-sections");
  const btnPrinted = document.getElementById("alefbeys-printed");
  const btnCursive = document.getElementById("alefbeys-cursive");
  const isCursive = style === "cursive";

  sections.classList.toggle("font-cursive", isCursive);
  sections.classList.toggle("font-printed", !isCursive);
  btnCursive.classList.toggle("is-active", isCursive);
  btnPrinted.classList.toggle("is-active", !isCursive);
  btnCursive.setAttribute("aria-pressed", String(isCursive));
  btnPrinted.setAttribute("aria-pressed", String(!isCursive));
}

function initAlefBeysPage() {
  initSharedLayout();

  const content = siteContent.alefbeys;

  document.title = `${content.title} · ${siteContent.name}`;
  document.getElementById("alefbeys-title").textContent = content.title;
  document.getElementById("alefbeys-subtitle").textContent = content.subtitle;
  document.getElementById("alefbeys-back").textContent = content.backLabel;
  document.getElementById("alefbeys-printed").textContent = content.printedLabel;
  document.getElementById("alefbeys-cursive").textContent = content.cursiveLabel;

  document.getElementById("alefbeys-printed").addEventListener("click", () => {
    setAlphabetFontStyle("printed");
  });

  document.getElementById("alefbeys-cursive").addEventListener("click", () => {
    setAlphabetFontStyle("cursive");
  });

  renderAlefBeysSections();
  setAlphabetFontStyle("printed");
}

document.addEventListener("DOMContentLoaded", initAlefBeysPage);
