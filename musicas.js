/* ============================================================
   Yidish Velt Brasil — Lista de músicas
   ============================================================ */

function createSongCardElement(song) {
  const article = document.createElement("article");
  article.className = "song-card";

  const media = document.createElement("div");
  media.className = "song-card__media";

  if (song.image) {
    const img = document.createElement("img");
    img.className = "song-card__image";
    img.src = song.image;
    img.alt = `Capa de ${song.title}`;
    img.loading = "lazy";
    img.addEventListener("error", () => {
      img.remove();
      media.classList.add("song-card__media--placeholder");
      media.innerHTML = `<span class="song-card__note" aria-hidden="true">♪</span>`;
    });
    media.appendChild(img);
  } else {
    media.classList.add("song-card__media--placeholder");
    media.innerHTML = `<span class="song-card__note" aria-hidden="true">♪</span>`;
  }

  const body = document.createElement("div");
  body.className = "song-card__body";
  body.innerHTML = `
    <p class="song-card__eyebrow">${song.subtitle || "Música Yiddish"}</p>
    <h3 class="song-card__title">${song.title}</h3>
    <p class="song-card__desc">${song.description}</p>
  `;

  const link = document.createElement("a");
  link.href = `musica.html?id=${song.id}`;
  link.className = "btn btn-primary btn-small song-card__btn";
  link.textContent = siteContent.songsPage.btnLabel;

  body.appendChild(link);
  article.appendChild(media);
  article.appendChild(body);
  return article;
}

function renderSongCards(grid, songsList) {
  if (!grid) return;
  grid.innerHTML = "";
  songsList.forEach((song) => {
    grid.appendChild(createSongCardElement(song));
  });
}

function filterSongsByName(query) {
  const term = query.trim().toLowerCase();
  if (!term) return songs;
  return songs.filter((song) => song.title.toLowerCase().includes(term));
}

function renderSongsList(filteredSongs) {
  const grid = document.getElementById("songs-grid");
  const emptyMessage = document.getElementById("songs-empty");

  if (filteredSongs.length === 0) {
    grid.innerHTML = "";
    emptyMessage.textContent = siteContent.songsPage.noResults;
    emptyMessage.hidden = false;
    return;
  }

  emptyMessage.hidden = true;
  renderSongCards(grid, filteredSongs);
}

function initSongsListPage() {
  initSharedLayout();

  document.title = `${siteContent.songsPage.title} — ${siteContent.name}`;
  document.getElementById("songs-list-back").textContent = siteContent.songsPage.backLabel;
  document.getElementById("songs-list-title").textContent = siteContent.songsPage.title;
  document.getElementById("songs-list-subtitle").textContent = siteContent.songsPage.subtitle;

  const searchInput = document.getElementById("songs-search");
  searchInput.placeholder = siteContent.songsPage.searchPlaceholder;
  searchInput.addEventListener("input", () => {
    renderSongsList(filterSongsByName(searchInput.value));
  });

  renderSongsList(songs);
}

document.addEventListener("DOMContentLoaded", initSongsListPage);
