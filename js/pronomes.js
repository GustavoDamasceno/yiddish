/* ============================================================
   Yidish Velt Brasil · Página de Pronomes
   Dados: pronounsTable, pronounsPhrases, pronounsQuiz
   ============================================================ */

let quizState = {
  index: 0,
  score: 0,
  selected: null,
  checked: false,
  order: [],
};

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderPronounsTable() {
  const labels = siteContent.pronounsPage.tableHeaders;
  const rows = pronounsTable
    .map(
      (row) => `
      <tr>
        <td>${row.person}</td>
        <td class="vocab-yiddish" lang="yi" dir="rtl">${row.yiddish}</td>
        <td>${row.translit}</td>
        <td>${row.meaning}</td>
      </tr>`
    )
    .join("");

  document.getElementById("pronouns-table-wrap").innerHTML = `
    <table class="vocab-table">
      <thead>
        <tr>
          <th scope="col">${labels.person}</th>
          <th scope="col">${labels.yiddish}</th>
          <th scope="col">${labels.translit}</th>
          <th scope="col">${labels.meaning}</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderPronounsPhrases() {
  const list = document.getElementById("pronouns-phrases");
  list.innerHTML = pronounsPhrases
    .map(
      (phrase) => `
      <article class="phrase-card">
        <p class="phrase-card__yiddish" lang="yi" dir="rtl">${phrase.yiddish}</p>
        <p class="phrase-card__translit">${phrase.translit}</p>
        <p class="phrase-card__pt">${phrase.portuguese}</p>
      </article>`
    )
    .join("");
}

function getQuizLabels() {
  return siteContent.pronounsPage.quiz;
}

function getCurrentQuestion() {
  return pronounsQuiz[quizState.order[quizState.index]];
}

function formatProgress() {
  const labels = getQuizLabels();
  return labels.progressLabel
    .replace("{current}", String(quizState.index + 1))
    .replace("{total}", String(pronounsQuiz.length));
}

function buildQuizQuestionHTML() {
  const labels = getQuizLabels();
  const question = getCurrentQuestion();
  const progress = ((quizState.index + 1) / pronounsQuiz.length) * 100;
  const options = shuffleArray(question.options);

  const yiddishBlock = question.yiddish
    ? `<p class="quiz-prompt__yiddish" lang="yi" dir="rtl">${question.yiddish}</p>`
    : "";
  const translitBlock = question.translit
    ? `<p class="quiz-prompt__translit">${question.translit}</p>`
    : "";

  return `
    <h2 class="quiz-title" id="quiz-title">${labels.title}</h2>
    <p class="quiz-progress-label">${formatProgress()}</p>
    <div class="quiz-progress" aria-hidden="true">
      <div class="quiz-progress__bar" style="width: ${progress}%"></div>
    </div>
    <div class="quiz-prompt">
      <p class="quiz-prompt__text">${question.prompt}</p>
      ${yiddishBlock}
      ${translitBlock}
    </div>
    <div class="quiz-options" role="group" aria-label="Opções">
      ${options
        .map(
          (option) => `
        <button type="button" class="quiz-option" data-value="${escapeHTML(option)}">
          ${escapeHTML(option)}
        </button>`
        )
        .join("")}
    </div>
    <p class="quiz-feedback" id="quiz-feedback" hidden></p>
    <div class="quiz-actions">
      <button type="button" class="btn btn-primary" id="quiz-check" disabled>${labels.checkLabel}</button>
    </div>
  `;
}

function buildQuizResultHTML() {
  const labels = getQuizLabels();
  const text = labels.finishText
    .replace("{score}", String(quizState.score))
    .replace("{total}", String(pronounsQuiz.length));

  return `
    <h2 class="quiz-title" id="quiz-title">${labels.finishTitle}</h2>
    <p class="quiz-result-score">${quizState.score}/${pronounsQuiz.length}</p>
    <p class="quiz-result-text">${text}</p>
    <div class="quiz-actions quiz-actions--result">
      <button type="button" class="btn btn-primary" id="quiz-restart">${labels.restartLabel}</button>
      <button type="button" class="btn btn-secondary" id="quiz-close-result">${labels.closeResultLabel}</button>
    </div>
  `;
}

function renderQuizStep() {
  const content = document.getElementById("quiz-content");
  quizState.selected = null;
  quizState.checked = false;

  if (quizState.index >= pronounsQuiz.length) {
    content.innerHTML = buildQuizResultHTML();
    document.getElementById("quiz-restart").addEventListener("click", startQuiz);
    document.getElementById("quiz-close-result").addEventListener("click", closeQuiz);
    return;
  }

  content.innerHTML = buildQuizQuestionHTML();
  wireQuizQuestion();
}

function wireQuizQuestion() {
  const labels = getQuizLabels();
  const question = getCurrentQuestion();
  const checkBtn = document.getElementById("quiz-check");
  const feedback = document.getElementById("quiz-feedback");
  const options = [...document.querySelectorAll(".quiz-option")];

  options.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (quizState.checked) return;
      quizState.selected = btn.dataset.value;
      options.forEach((option) => option.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      checkBtn.disabled = false;
    });
  });

  checkBtn.addEventListener("click", () => {
    if (!quizState.selected || quizState.checked) {
      if (quizState.checked) {
        quizState.index += 1;
        renderQuizStep();
      }
      return;
    }

    quizState.checked = true;
    const isCorrect = quizState.selected === question.answer;
    if (isCorrect) quizState.score += 1;

    options.forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.value === question.answer) btn.classList.add("is-correct");
      if (btn.dataset.value === quizState.selected && !isCorrect) {
        btn.classList.add("is-wrong");
      }
    });

    feedback.hidden = false;
    feedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
    feedback.textContent = isCorrect
      ? labels.correctLabel
      : `${labels.wrongLabel} ${question.answer}`;

    checkBtn.textContent =
      quizState.index + 1 >= pronounsQuiz.length ? labels.resultLabel : labels.nextLabel;
  });
}

function startQuiz() {
  quizState = {
    index: 0,
    score: 0,
    selected: null,
    checked: false,
    order: shuffleArray(pronounsQuiz.map((_, i) => i)),
  };
  renderQuizStep();
}

function openQuiz() {
  const modal = document.getElementById("quiz-modal");
  startQuiz();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("quiz-close").focus();
}

function closeQuiz() {
  const modal = document.getElementById("quiz-modal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.getElementById("pronouns-practice-btn").focus();
}

function initQuizModal() {
  const modal = document.getElementById("quiz-modal");
  const closeBtn = document.getElementById("quiz-close");
  const practiceBtn = document.getElementById("pronouns-practice-btn");

  practiceBtn.addEventListener("click", openQuiz);
  closeBtn.addEventListener("click", closeQuiz);
  closeBtn.setAttribute("aria-label", getQuizLabels().closeLabel);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeQuiz();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeQuiz();
    }
  });
}

function initPronounsPage() {
  initSharedLayout();

  const content = siteContent.pronounsPage;

  document.title = `${content.title} · ${siteContent.name}`;
  document.getElementById("pronouns-back").textContent = content.backLabel;
  document.getElementById("pronouns-title").textContent = content.title;
  document.getElementById("pronouns-subtitle").textContent = content.subtitle;
  document.getElementById("pronouns-table-title").textContent = content.tableTitle;
  document.getElementById("pronouns-phrases-title").textContent = content.phrasesTitle;
  document.getElementById("pronouns-practice-btn").textContent = content.practiceBtn;

  renderPronounsTable();
  renderPronounsPhrases();
  initQuizModal();
}

document.addEventListener("DOMContentLoaded", initPronounsPage);
