/* ============================================================
   Yidish Velt Brasil — Página de perfil do poeta
   URL: poeta.html?id=nome-do-poeta
   ============================================================ */

function getPoetIdFromURL() {
  return new URLSearchParams(window.location.search).get("id");
}

function renderPoetProfile() {
  const container = document.getElementById("profile-content");
  const backLink = document.getElementById("profile-back");
  const poetId = getPoetIdFromURL();
  const poet = poets.find((p) => p.id === poetId);

  backLink.textContent = siteContent.poets.backLabel;

  if (!poet) {
    document.title = `${siteContent.profile.notFoundTitle} — ${siteContent.name}`;
    container.innerHTML = `
      <div class="profile-not-found">
        <h1 class="profile-not-found__title">${siteContent.profile.notFoundTitle}</h1>
        <p class="profile-not-found__text">${siteContent.profile.notFoundText}</p>
        <a href="poetas.html" class="btn btn-primary">${siteContent.profile.notFoundBtn}</a>
      </div>
    `;
    return;
  }

  document.title = `${poet.name} — ${siteContent.name}`;
  container.innerHTML = buildPoetProfileHTML(poet);
  setupProfilePhotoFallback(container);
}

function initProfilePage() {
  initSharedLayout();
  renderPoetProfile();
}

document.addEventListener("DOMContentLoaded", initProfilePage);
