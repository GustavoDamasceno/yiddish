/* ============================================================
   Yidish Velt Brasil · Página de Filmes
   Dados em data.js → films
   ============================================================ */

function filmHasPlayer(film) {
  return Boolean(film.youtubeId || film.driveId);
}

function createFilmCardElement(film) {
  const article = document.createElement("article");
  article.className = "poet-card";
  article.dataset.filmId = film.id;

  const imageWrap = document.createElement("div");
  imageWrap.className = "poet-card__image-wrap";
  imageWrap.appendChild(
    createPoetImageElement(
      resolvePath(film.image),
      `Imagem de ${film.title}`,
      getInitials(film.title)
    )
  );

  const body = document.createElement("div");
  body.className = "poet-card__body";
  body.innerHTML = `
    <h3 class="poet-card__name">${film.title}</h3>
    <p class="poet-card__years">${film.year}</p>
    <p class="poet-card__desc">${film.description}</p>
  `;

  if (filmHasPlayer(film)) {
    const watchBtn = document.createElement("button");
    watchBtn.type = "button";
    watchBtn.className = "btn btn-primary btn-small poet-card__btn";
    watchBtn.textContent = siteContent.filmsPage.watchBtn;
    watchBtn.addEventListener("click", () => openFilmPlayer(film));
    body.appendChild(watchBtn);
  }

  article.appendChild(imageWrap);
  article.appendChild(body);
  return article;
}

function renderFilmCards(filmsList) {
  const grid = document.getElementById("films-grid");
  const emptyMessage = document.getElementById("films-empty");
  grid.innerHTML = "";

  if (filmsList.length === 0) {
    emptyMessage.textContent = siteContent.filmsPage.noResults;
    emptyMessage.hidden = false;
    return;
  }

  emptyMessage.hidden = true;
  filmsList.forEach((film) => {
    grid.appendChild(createFilmCardElement(film));
  });
}

function filterFilmsByName(query) {
  const term = query.trim().toLowerCase();
  if (!term) return films;

  return films.filter((film) => film.title.toLowerCase().includes(term));
}

function initFilmsSearch() {
  const searchInput = document.getElementById("films-search");
  searchInput.placeholder = siteContent.filmsPage.searchPlaceholder;
  searchInput.addEventListener("input", () => {
    renderFilmCards(filterFilmsByName(searchInput.value));
  });
}

function getFilmEmbedSrc(film) {
  if (film.driveId) {
    return `https://drive.google.com/file/d/${film.driveId}/preview`;
  }

  const origin = encodeURIComponent(window.location.origin);
  return `https://www.youtube.com/embed/${film.youtubeId}?rel=0&modestbranding=1&origin=${origin}`;
}

function buildFilmPlayerHTML(film) {
  const isFileProtocol = window.location.protocol === "file:";

  if (isFileProtocol) {
    return `
      <h2 class="film-modal__title" id="film-modal-title">${film.title}</h2>
      <div class="song-video song-video--blocked">
        <p class="song-video__message">${siteContent.filmsPage.fileProtocolHint}</p>
      </div>
    `;
  }

  const embedSrc = getFilmEmbedSrc(film);

  return `
    <h2 class="film-modal__title" id="film-modal-title">${film.title}</h2>
    <div class="film-modal__video">
      <iframe
        src="${embedSrc}"
        title="${film.title}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  `;
}

function openFilmPlayer(film) {
  const modal = document.getElementById("film-modal");
  const content = document.getElementById("film-modal-content");

  content.innerHTML = buildFilmPlayerHTML(film);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("film-modal-close").focus();
}

function closeFilmPlayer() {
  const modal = document.getElementById("film-modal");
  const content = document.getElementById("film-modal-content");

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  content.innerHTML = "";
  document.body.style.overflow = "";
}

function initFilmModal() {
  const modal = document.getElementById("film-modal");
  const closeBtn = document.getElementById("film-modal-close");

  closeBtn.setAttribute("aria-label", siteContent.filmsPage.closeLabel);
  closeBtn.addEventListener("click", closeFilmPlayer);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeFilmPlayer();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeFilmPlayer();
    }
  });
}

function initFilmsPage() {
  initSharedLayout();

  const content = siteContent.filmsPage;

  document.title = `${content.title} · ${siteContent.name}`;
  document.getElementById("films-back").textContent = content.backLabel;
  document.getElementById("films-title").textContent = content.title;
  document.getElementById("films-subtitle").textContent = content.subtitle;

  initFilmsSearch();
  renderFilmCards(films);
  initFilmModal();
}

document.addEventListener("DOMContentLoaded", initFilmsPage);
