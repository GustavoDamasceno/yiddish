/* ============================================================
   Yidish Velt Brasil — Página de uma música
   URL: musica.html?id=nome-da-musica
   ============================================================ */

function getSongIdFromURL() {
  return new URLSearchParams(window.location.search).get("id");
}

function formatMultilineText(text) {
  return escapeHTML(text).replace(/\n/g, "<br>");
}

function buildSongVocabularyHTML(song, labels) {
  if (!song.vocabulary || song.vocabulary.length === 0) return "";

  const rows = song.vocabulary
    .map(
      (word) => `
      <tr>
        <td class="vocab-yiddish" lang="yi" dir="rtl">${word.yiddish}</td>
        <td>${word.translit}</td>
        <td>${word.meaning}</td>
      </tr>`
    )
    .join("");

  return `
    <section class="song-section">
      <h2 class="song-section__title">${labels.vocabTitle}</h2>
      <div class="vocab-table-wrap">
        <table class="vocab-table">
          <thead>
            <tr>
              <th scope="col">${labels.vocabHeaders.yiddish}</th>
              <th scope="col">${labels.vocabHeaders.translit}</th>
              <th scope="col">${labels.vocabHeaders.meaning}</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}

function buildSongVideoHTML(song, labels) {
  const isFileProtocol = window.location.protocol === "file:";

  if (isFileProtocol) {
    return `
      <div class="song-video song-video--blocked">
        <p class="song-video__message">
          O YouTube bloqueia o player quando a página é aberta como arquivo local
          (<code>file://</code>). Abra o site por um servidor, por exemplo:
        </p>
        <p class="song-video__hint"><code>npx serve .</code></p>
        <p class="song-video__hint">Depois acesse <code>http://localhost:3000/musica.html?id=${song.id}</code></p>
      </div>
    `;
  }

  const origin = encodeURIComponent(window.location.origin);
  const embedSrc = `https://www.youtube.com/embed/${song.youtubeId}?rel=0&modestbranding=1&origin=${origin}`;

  return `
      <div class="song-video">
        <iframe
          src="${embedSrc}"
          title="${song.title}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
  `;
}

function buildSongPageHTML(song, labels) {
  return `
    <header class="song-header">
      <p class="song-eyebrow">${song.subtitle || "Música Yiddish"}</p>
      <h1 class="song-title">${song.title}</h1>
      <p class="song-summary">${song.description}</p>
    </header>

    <section class="song-section">
      <h2 class="song-section__title">${labels.videoTitle}</h2>
      ${buildSongVideoHTML(song, labels)}
    </section>

    <section class="song-section">
      <div class="song-section__head song-section__head--lyrics">
        <h2 class="song-section__title song-section__title--inline">Letra</h2>
        <div class="alphabet-controls song-font-controls" role="group" aria-label="Estilo da letra">
          <button type="button" class="keyboard-btn is-active" id="song-printed" aria-pressed="true">${labels.printedLabel}</button>
          <button type="button" class="keyboard-btn" id="song-cursive" aria-pressed="false">${labels.cursiveLabel}</button>
        </div>
      </div>
      <div class="song-lyrics-grid">
        <div class="song-lyrics-col">
          <h3 class="song-lyrics-col__label">${labels.translitTitle}</h3>
          <div class="song-lyrics song-lyrics--translit">${formatMultilineText(song.transliteration)}</div>
        </div>
        <div class="song-lyrics-col">
          <h3 class="song-lyrics-col__label">${labels.yiddishTitle}</h3>
          <div class="song-lyrics song-lyrics--yiddish font-printed" id="song-yiddish" lang="yi" dir="rtl">${formatMultilineText(song.yiddish)}</div>
        </div>
      </div>
    </section>

    <section class="song-section">
      <h2 class="song-section__title">${labels.portugueseTitle}</h2>
      <div class="song-lyrics song-lyrics--portuguese">${formatMultilineText(song.portuguese)}</div>
    </section>

    ${buildSongVocabularyHTML(song, labels)}
  `;
}

function setSongFontStyle(style) {
  const lyrics = document.getElementById("song-yiddish");
  const btnPrinted = document.getElementById("song-printed");
  const btnCursive = document.getElementById("song-cursive");
  if (!lyrics || !btnPrinted || !btnCursive) return;

  const isCursive = style === "cursive";
  lyrics.classList.toggle("font-cursive", isCursive);
  lyrics.classList.toggle("font-printed", !isCursive);
  btnCursive.classList.toggle("is-active", isCursive);
  btnPrinted.classList.toggle("is-active", !isCursive);
  btnCursive.setAttribute("aria-pressed", String(isCursive));
  btnPrinted.setAttribute("aria-pressed", String(!isCursive));
}

function renderSongPage() {
  const container = document.getElementById("song-content");
  const backLink = document.getElementById("song-back");
  const labels = siteContent.songPage;
  const songId = getSongIdFromURL();
  const song = songs.find((item) => item.id === songId);

  backLink.textContent = labels.backLabel;

  if (!song) {
    document.title = `${labels.notFoundTitle} — ${siteContent.name}`;
    container.innerHTML = `
      <div class="profile-not-found">
        <h1 class="profile-not-found__title">${labels.notFoundTitle}</h1>
        <p class="profile-not-found__text">${labels.notFoundText}</p>
        <a href="musicas.html" class="btn btn-primary">${labels.notFoundBtn}</a>
      </div>
    `;
    return;
  }

  document.title = `${song.title} — ${siteContent.name}`;
  container.innerHTML = buildSongPageHTML(song, labels);

  document.getElementById("song-printed").addEventListener("click", () => {
    setSongFontStyle("printed");
  });
  document.getElementById("song-cursive").addEventListener("click", () => {
    setSongFontStyle("cursive");
  });

  setSongFontStyle("printed");
}

function initSongPage() {
  initSharedLayout();
  renderSongPage();
}

document.addEventListener("DOMContentLoaded", initSongPage);
