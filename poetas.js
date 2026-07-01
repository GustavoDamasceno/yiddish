/* ============================================================
   Yidish Velt Brasil — Página de todos os poetas
   ============================================================ */

function filterPoetsByName(query) {
  const term = query.trim().toLowerCase();
  if (!term) return poets;

  return poets.filter((poet) => poet.name.toLowerCase().includes(term));
}

function renderPoetsList(filteredPoets) {
  const grid = document.getElementById("poets-all-grid");
  const emptyMessage = document.getElementById("poets-empty");

  if (filteredPoets.length === 0) {
    grid.innerHTML = "";
    emptyMessage.textContent = siteContent.poetsPage.noResults;
    emptyMessage.hidden = false;
    return;
  }

  emptyMessage.hidden = true;
  renderPoetCards(grid, filteredPoets);
}

function initPoetsSearch() {
  const searchInput = document.getElementById("poets-search");

  searchInput.placeholder = siteContent.poetsPage.searchPlaceholder;

  searchInput.addEventListener("input", () => {
    renderPoetsList(filterPoetsByName(searchInput.value));
  });
}

function initPoetsListPage() {
  initSharedLayout();

  document.title = `${siteContent.poetsPage.title} — ${siteContent.name}`;
  document.getElementById("poets-list-back").textContent = siteContent.poetsPage.backLabel;
  document.getElementById("poets-list-title").textContent = siteContent.poetsPage.title;
  document.getElementById("poets-list-subtitle").textContent = siteContent.poetsPage.subtitle;

  initPoetsSearch();
  renderPoetsList(poets);
}

document.addEventListener("DOMContentLoaded", initPoetsListPage);
