/* ============================================================
   Yidish Velt Brasil — Teclado fonético YIVO → Yiddish
   ============================================================ */

/**
 * Converte transliteração YIVO para escrita hebraica.
 * Regras principais (estilo Keyman / YIVO):
 * - digrafos: sh, kh, ts, zh, tsh, dzh, ay, ey, oy
 * - shtumer alef automático no início de palavra (i, u, ay, ey, oy)
 * - formas finais: khof, mem, nun, fey, tsadek
 */
function yivoToYiddish(input) {
  const lower = input.toLowerCase();
  let result = "";
  let i = 0;

  const isWordBoundary = (index) => {
    if (index <= 0) return true;
    const prev = lower[index - 1];
    return !/[a-z]/.test(prev);
  };

  const isEndOfWord = (index) => {
    if (index >= lower.length) return true;
    return !/[a-z]/.test(lower[index]);
  };

  while (i < lower.length) {
    const rest = lower.slice(i);

    // Digrafos / trígrafos (mais longos primeiro)
    if (rest.startsWith("dzh")) {
      result += "דזש";
      i += 3;
      continue;
    }
    if (rest.startsWith("tsh")) {
      result += "טש";
      i += 3;
      continue;
    }
    if (rest.startsWith("zh")) {
      result += "זש";
      i += 2;
      continue;
    }
    if (rest.startsWith("sh")) {
      result += "ש";
      i += 2;
      continue;
    }
    if (rest.startsWith("kh")) {
      result += isEndOfWord(i + 2) ? "ך" : "כ";
      i += 2;
      continue;
    }
    if (rest.startsWith("ts")) {
      result += isEndOfWord(i + 2) ? "ץ" : "צ";
      i += 2;
      continue;
    }
    if (rest.startsWith("ay")) {
      result += (isWordBoundary(i) ? "א" : "") + "ײַ";
      i += 2;
      continue;
    }
    if (rest.startsWith("ey")) {
      result += (isWordBoundary(i) ? "א" : "") + "ײ";
      i += 2;
      continue;
    }
    if (rest.startsWith("oy")) {
      result += (isWordBoundary(i) ? "א" : "") + "ױ";
      i += 2;
      continue;
    }

    const ch = lower[i];

    switch (ch) {
      case "a":
        result += "אַ";
        break;
      case "o":
        result += "אָ";
        break;
      case "e":
        result += "ע";
        break;
      case "i":
        result += (isWordBoundary(i) ? "א" : "") + "י";
        break;
      case "u":
        result += (isWordBoundary(i) ? "א" : "") + "ו";
        break;
      case "b":
        result += "ב";
        break;
      case "v":
      case "w":
        result += "װ";
        break;
      case "g":
        result += "ג";
        break;
      case "d":
        result += "ד";
        break;
      case "h":
        result += "ה";
        break;
      case "z":
        result += "ז";
        break;
      case "t":
        result += "ט";
        break;
      case "y":
        result += "י";
        break;
      case "k":
      case "q":
        result += "ק";
        break;
      case "l":
        result += "ל";
        break;
      case "m":
        result += isEndOfWord(i + 1) ? "ם" : "מ";
        break;
      case "n":
        result += isEndOfWord(i + 1) ? "ן" : "נ";
        break;
      case "s":
        result += "ס";
        break;
      case "p":
        result += "פּ";
        break;
      case "f":
        result += isEndOfWord(i + 1) ? "ף" : "פֿ";
        break;
      case "r":
        result += "ר";
        break;
      case "c":
        // atalho comum: c → צ (como em algumas ortografias)
        result += isEndOfWord(i + 1) ? "ץ" : "צ";
        break;
      case "x":
        // atalho: x → כ/ך
        result += isEndOfWord(i + 1) ? "ך" : "כ";
        break;
      case "-":
        result += "־";
        break;
      case "'":
        result += "׳";
        break;
      case '"':
        result += "״";
        break;
      default:
        result += input[i]; // preserva maiúsculas/números/pontuação originais
        break;
    }

    i += 1;
  }

  return result;
}

function buildTutorialHTML(tutorial) {
  const sectionsHTML = tutorial.sections
    .map((section) => {
      const paragraphs = section.paragraphs
        .map((text) => `<p class="tutorial-text">${text}</p>`)
        .join("");

      const examples = section.examples
        ? `<ul class="tutorial-examples">
            ${section.examples
              .map(
                (ex) => `
              <li>
                <code class="tutorial-code">${ex.input}</code>
                <span class="tutorial-arrow" aria-hidden="true">→</span>
                <span class="tutorial-yiddish" dir="rtl" lang="yi">${ex.output}</span>
              </li>`
              )
              .join("")}
          </ul>`
        : "";

      return `
        <section class="tutorial-section">
          <h3 class="tutorial-heading">${section.heading}</h3>
          ${paragraphs}
          ${examples}
        </section>
      `;
    })
    .join("");

  return `
    <h2 class="tutorial-title" id="tutorial-title">${tutorial.title}</h2>
    ${sectionsHTML}
    <div class="tutorial-actions">
      <button type="button" class="btn btn-primary" id="tutorial-done">${tutorial.closeLabel}</button>
    </div>
  `;
}

function initTutorialModal(content) {
  const modal = document.getElementById("tutorial-modal");
  const modalContent = document.getElementById("tutorial-content");
  const helpBtn = document.getElementById("translit-help-btn");
  const closeBtn = document.getElementById("tutorial-close");
  let lastFocused = null;

  modalContent.innerHTML = buildTutorialHTML(content.tutorial);
  const doneBtn = document.getElementById("tutorial-done");

  function openTutorial() {
    lastFocused = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeTutorial() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  helpBtn.addEventListener("click", openTutorial);
  closeBtn.addEventListener("click", closeTutorial);
  doneBtn.addEventListener("click", closeTutorial);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeTutorial();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeTutorial();
    }
  });
}

function initTransliterationPage() {
  initSharedLayout();

  const content = siteContent.transliteration;
  const input = document.getElementById("yivo-input");
  const output = document.getElementById("yiddish-output");
  const btnPrinted = document.getElementById("btn-printed");
  const btnCursive = document.getElementById("btn-cursive");
  const btnCopy = document.getElementById("btn-copy");
  const backLink = document.getElementById("translit-back");
  const helpBtn = document.getElementById("translit-help-btn");

  document.title = `${content.title} — ${siteContent.name}`;
  document.getElementById("translit-title").textContent = content.title;
  document.getElementById("translit-subtitle").textContent = content.subtitle;
  helpBtn.textContent = content.helpLink;
  backLink.textContent = content.backLabel;
  input.placeholder = content.inputPlaceholder;
  btnPrinted.textContent = content.printedLabel;
  btnCursive.textContent = content.cursiveLabel;
  btnCopy.textContent = content.copyLabel;

  initTutorialModal(content);

  function updateOutput() {
    output.value = yivoToYiddish(input.value);
  }

  function setFontStyle(style) {
    const isCursive = style === "cursive";
    output.classList.toggle("font-cursive", isCursive);
    output.classList.toggle("font-printed", !isCursive);
    btnCursive.classList.toggle("is-active", isCursive);
    btnPrinted.classList.toggle("is-active", !isCursive);
    btnCursive.setAttribute("aria-pressed", String(isCursive));
    btnPrinted.setAttribute("aria-pressed", String(!isCursive));
  }

  input.addEventListener("input", updateOutput);

  btnPrinted.addEventListener("click", () => setFontStyle("printed"));
  btnCursive.addEventListener("click", () => setFontStyle("cursive"));

  btnCopy.addEventListener("click", async () => {
    const text = output.value;
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      btnCopy.textContent = content.copiedLabel;
      setTimeout(() => {
        btnCopy.textContent = content.copyLabel;
      }, 1600);
    } catch (error) {
      output.select();
      document.execCommand("copy");
      btnCopy.textContent = content.copiedLabel;
      setTimeout(() => {
        btnCopy.textContent = content.copyLabel;
      }, 1600);
    }
  });

  setFontStyle("printed");
  updateOutput();
  input.focus();
}

document.addEventListener("DOMContentLoaded", initTransliterationPage);
