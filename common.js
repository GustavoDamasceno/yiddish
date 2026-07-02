/* ============================================================
   Yidish Velt Brasil — Funções compartilhadas
   Usado em index.html e poeta.html
   ============================================================ */

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function isHomePage() {
  return document.body.dataset.page === "home";
}

function resolveHref(href) {
  if (href.startsWith("#") && !isHomePage()) {
    return `index.html${href}`;
  }
  return href;
}

function renderSiteHeader() {
  const logoLink = document.querySelector(".logo-block");
  if (logoLink) {
    logoLink.href = isHomePage() ? "#topo" : "index.html";
  }

  const siteName = document.getElementById("site-name");
  const siteTagline = document.getElementById("site-tagline");
  if (siteName) siteName.textContent = siteContent.name;
  if (siteTagline) siteTagline.textContent = siteContent.tagline;
}

function renderNav() {
  const navList = document.getElementById("nav-list");
  if (!navList) return;

  navList.innerHTML = "";

  navLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = resolveHref(link.href);
    a.textContent = link.label;
    li.appendChild(a);
    navList.appendChild(li);
  });
}

function renderFooter() {
  const footerName = document.getElementById("footer-name");
  const footerDesc = document.getElementById("footer-desc");
  const footerMission = document.getElementById("footer-mission");
  const footerCopy = document.getElementById("footer-copy");

  if (footerName) footerName.textContent = siteContent.name;
  if (footerDesc) footerDesc.textContent = siteContent.footer.desc;
  if (footerMission) footerMission.textContent = siteContent.footer.mission;
  if (footerCopy) footerCopy.textContent = siteContent.footer.copy;

  const list = document.getElementById("footer-links");
  if (!list) return;

  list.innerHTML = "";
  footerLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = resolveHref(link.href);
    a.textContent = link.label;
    li.appendChild(a);
    list.appendChild(li);
  });
}

function initMobileNav() {
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  if (!navToggle || !mainNav) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
    }
  });
}

function escapeHTML(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatInlineFootnotes(text) {
  const escaped = escapeHTML(text);

  return escaped.replace(/(\[\^\d+\])+/g, (match) => {
    const numbers = [...match.matchAll(/\[\^(\d+)\]/g)].map((m) => m[1]);
    const inner = numbers
      .map((num, index) => {
        const link = `<a href="#ref-${num}">${num}</a>`;
        return index > 0 ? `,${link}` : link;
      })
      .join("");

    return `<sup class="article-footnote">${inner}</sup>`;
  });
}

function formatFootnoteReference(line) {
  const match = line.match(/^\[\^(\d+)\]:\s*(.+)$/);
  if (!match) return escapeHTML(line);

  return `<sup class="article-footnote" id="ref-${match[1]}">${match[1]}</sup> ${escapeHTML(match[2])}`;
}

function isWorkListItem(line) {
  return /^.+ \(\d{4}\)$/.test(line);
}

function isFootnoteRef(line) {
  return /^\[\^\d+\]:/.test(line);
}

function isBibliographyLine(line) {
  return /^[A-Z]{2,}/.test(line) && line.includes(",");
}

function hasInlineFootnote(line) {
  return /\[\^\d+\]/.test(line);
}

function endsLikeParagraph(line) {
  return /[.!?…](\[\^\d+\])+$/.test(line) || /[.!?…]$/.test(line);
}

function isSectionHeading(line) {
  if (!line) return false;
  if (line.startsWith("Por ")) return false;
  if (isFootnoteRef(line)) return false;
  if (isWorkListItem(line)) return false;
  if (isBibliographyLine(line)) return false;
  if (hasInlineFootnote(line)) return false;
  if (endsLikeParagraph(line)) return false;
  if (line.endsWith(":") && !line.startsWith("Obras de")) return false;
  if (line.length > 75) return false;
  return true;
}

function formatBiographyAsArticle(text) {
  const lines = text.split("\n");
  let html = "";
  let worksListOpen = false;

  function closeWorksList() {
    if (worksListOpen) {
      html += "</ul>";
      worksListOpen = false;
    }
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      closeWorksList();
      return;
    }

    if (index === 0 && trimmed.startsWith("Por ")) {
      closeWorksList();
      html += `<p class="article-byline">${escapeHTML(trimmed)}</p>`;
      return;
    }

    if (trimmed.startsWith("Obras de")) {
      closeWorksList();
      html += `<h3 class="article-subheading">${escapeHTML(trimmed)}</h3>`;
      return;
    }

    if (isWorkListItem(trimmed)) {
      if (!worksListOpen) {
        html += '<ul class="article-list">';
        worksListOpen = true;
      }
      html += `<li>${escapeHTML(trimmed)}</li>`;
      return;
    }

    closeWorksList();

    if (isSectionHeading(trimmed)) {
      html += `<h2 class="article-heading">${escapeHTML(trimmed)}</h2>`;
      return;
    }

    if (isFootnoteRef(trimmed)) {
      html += `<p class="article-ref">${formatFootnoteReference(trimmed)}</p>`;
      return;
    }

    if (isBibliographyLine(trimmed)) {
      html += `<p class="article-bib">${escapeHTML(trimmed)}</p>`;
      return;
    }

    html += `<p class="article-paragraph">${formatInlineFootnotes(trimmed)}</p>`;
  });

  closeWorksList();
  return `<div class="article-content">${html}</div>`;
}

function buildBiographyHTML(poet) {
  if (!poet.biography) return "";

  if (poet.biography.includes("\n")) {
    return formatBiographyAsArticle(poet.biography);
  }

  return `<div class="article-content"><p class="article-paragraph">${escapeHTML(poet.biography)}</p></div>`;
}

function buildPoetVideoHTML(poet) {
  if (!poet.video) return "";

  return `
      <section class="profile-section profile-video">
        <h2 class="profile-section__title">${siteContent.profile.videoTitle}</h2>
        <div class="profile-video__wrap">
          <video
            class="profile-video__player"
            controls
            preload="metadata"
            playsinline
            aria-label="Vídeo sobre ${poet.name}"
          >
            <source src="${poet.video}" type="video/mp4">
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </div>
      </section>
  `;
}

function buildPoetWorksHTML(poet) {
  if (!poet.works || poet.works.length === 0) return "";

  return `
      <section class="profile-section">
        <h2 class="profile-section__title">Obras principais</h2>
        <ul class="profile-works">
          ${poet.works.map((work) => `<li>${work}</li>`).join("")}
        </ul>
      </section>
  `;
}

function buildPoetThemesHTML(poet) {
  if (!poet.themes || poet.themes.length === 0) return "";

  return `
      <section class="profile-section">
        <h2 class="profile-section__title">Temas recorrentes</h2>
        <div class="profile-tags">
          ${poet.themes.map((theme) => `<span class="profile-tag">${theme}</span>`).join("")}
        </div>
      </section>
  `;
}

function buildPoetContextHTML(poet) {
  if (!poet.context) return "";

  return `
      <section class="profile-section">
        <h2 class="profile-section__title">Contexto histórico</h2>
        <p class="profile-section__text">${poet.context}</p>
      </section>
  `;
}

function buildPoetProfileHTML(poet) {
  const initials = poet.initials || getInitials(poet.name);

  return `
    <header class="profile-header">
      <div class="profile-photo">
        <img src="${poet.image}" alt="Retrato de ${poet.name}" class="profile-photo__img">
        <div class="profile-photo__placeholder" hidden>${initials}</div>
      </div>
      <div class="profile-intro">
        <p class="profile-eyebrow">Poeta · Literatura Yiddish</p>
        <h1 class="profile-poet-name">${poet.name}</h1>
        <p class="profile-poet-years">${poet.years}</p>
        <p class="profile-poet-summary">${poet.description}</p>
      </div>
    </header>

    <div class="profile-body">
      ${buildPoetVideoHTML(poet)}
      <section class="profile-section profile-section--article">
        <h2 class="profile-section__title">Biografia</h2>
        ${buildBiographyHTML(poet)}
      </section>

      ${buildPoetWorksHTML(poet)}
      ${buildPoetThemesHTML(poet)}
      ${buildPoetContextHTML(poet)}
    </div>
  `;
}

function setupProfilePhotoFallback(container) {
  const img = container.querySelector(".profile-photo__img");
  const placeholder = container.querySelector(".profile-photo__placeholder");
  if (!img || !placeholder) return;

  img.addEventListener("error", () => {
    img.style.display = "none";
    placeholder.hidden = false;
  });
}

function getFeaturedPoets() {
  return poets.filter((poet) => poet.featured);
}

function createPoetImageElement(imageSrc, alt, initials) {
  const wrap = document.createElement("div");

  const img = document.createElement("img");
  img.className = "poet-card__image";
  img.src = imageSrc;
  img.alt = alt;
  img.loading = "lazy";

  const placeholder = document.createElement("div");
  placeholder.className = "poet-card__placeholder";
  placeholder.textContent = initials;
  placeholder.hidden = true;

  img.addEventListener("error", () => {
    img.style.display = "none";
    placeholder.hidden = false;
  });

  wrap.appendChild(img);
  wrap.appendChild(placeholder);
  return wrap;
}

function createPoetCardElement(poet) {
  const initials = poet.initials || getInitials(poet.name);
  const article = document.createElement("article");
  article.className = "poet-card";
  article.dataset.poetName = poet.name.toLowerCase();

  const imageWrap = document.createElement("div");
  imageWrap.className = "poet-card__image-wrap";
  imageWrap.appendChild(createPoetImageElement(poet.image, `Retrato de ${poet.name}`, initials));

  const body = document.createElement("div");
  body.className = "poet-card__body";
  body.innerHTML = `
    <h3 class="poet-card__name">${poet.name}</h3>
    <p class="poet-card__years">${poet.years}</p>
    <p class="poet-card__desc">${poet.description}</p>
  `;

  const link = document.createElement("a");
  link.href = `poeta.html?id=${poet.id}`;
  link.className = "btn btn-primary btn-small poet-card__btn";
  link.textContent = siteContent.poets.btnLabel;

  body.appendChild(link);
  article.appendChild(imageWrap);
  article.appendChild(body);
  return article;
}

function renderPoetCards(grid, poetsList) {
  if (!grid) return;
  grid.innerHTML = "";
  poetsList.forEach((poet) => {
    grid.appendChild(createPoetCardElement(poet));
  });
}

function initSharedLayout() {
  renderSiteHeader();
  renderNav();
  renderFooter();
  initMobileNav();
}
