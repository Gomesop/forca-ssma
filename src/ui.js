// UI Manager: Render Word Slots, Virtual Keyboard, HUD & Educational Explanations

export class UIManager {
  constructor() {
    this.elements = {
      categoryBadge: document.getElementById('category-badge'),
      hudScore: document.getElementById('hud-score'),
      hudStreak: document.getElementById('hud-streak'),
      errorCount: document.getElementById('error-count'),

      clueText: document.getElementById('clue-text'),
      wordContainer: document.getElementById('word-container'),
      virtualKeyboard: document.getElementById('virtual-keyboard'),

      screenExplanation: document.getElementById('screen-explanation'),
      screenMenu: document.getElementById('screen-menu'),

      modalBadge: document.getElementById('modal-badge'),
      modalTitle: document.getElementById('modal-title'),
      expWord: document.getElementById('exp-word'),
      expWhy: document.getElementById('exp-why'),
      expHow: document.getElementById('exp-how'),
      btnNextQuestion: document.getElementById('btn-next-question')
    };
  }

  updateHUD(score, streak, errorsMax = 6, errorCount = 0, currentQuestion = null) {
    this.elements.hudScore.textContent = score;
    this.elements.hudStreak.textContent = `🔥 ${streak}`;
    this.elements.errorCount.textContent = errorCount;

    if (currentQuestion) {
      this.elements.categoryBadge.textContent = currentQuestion.categoryName;
      this.elements.categoryBadge.className = `badge-cat ${currentQuestion.category.toLowerCase()}`;
      this.elements.clueText.textContent = currentQuestion.question;
    }
  }

  renderWordSlots(secretWord, guessedLetters = new Set()) {
    this.elements.wordContainer.innerHTML = '';

    for (let char of secretWord) {
      if (char === ' ') {
        const spaceDiv = document.createElement('div');
        spaceDiv.className = 'letter-space';
        this.elements.wordContainer.appendChild(spaceDiv);
      } else {
        const slotDiv = document.createElement('div');
        const isGuessed = guessedLetters.has(char);
        slotDiv.className = `letter-slot ${isGuessed ? 'filled' : ''}`;
        slotDiv.textContent = isGuessed ? char : '';
        this.elements.wordContainer.appendChild(slotDiv);
      }
    }
  }

  renderKeyboard(onKeyClick, guessedLetters = new Set(), secretWord = '') {
    this.elements.virtualKeyboard.innerHTML = '';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    alphabet.forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'key-btn';
      btn.textContent = letter;

      if (guessedLetters.has(letter)) {
        btn.disabled = true;
        if (secretWord.includes(letter)) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('wrong');
        }
      }

      btn.addEventListener('click', () => onKeyClick(letter));
      this.elements.virtualKeyboard.appendChild(btn);
    });
  }

  showExplanationModal({ isWin, question }, onContinue) {
    const el = this.elements;

    if (isWin) {
      el.modalBadge.className = 'modal-badge-status success';
      el.modalBadge.textContent = '🎉 PARABÉNS - CONHECIMENTO TÉCNICO SSMA!';
      el.modalTitle.textContent = 'Excelente! Você Acertou o Termo';
      el.btnNextQuestion.textContent = '🚀 PRÓXIMA PERGUNTA';
    } else {
      el.modalBadge.className = 'modal-badge-status danger';
      el.modalBadge.textContent = '💥 LIMITE DE ERROS ALCANÇADO';
      el.modalTitle.textContent = 'Que pena! O operador foi atingido na forca';
      el.btnNextQuestion.textContent = '🔄 PRÓXIMA PERGUNTA';
    }

    el.expWord.textContent = question.wordDisplay || question.word;
    el.expWhy.textContent = question.why;
    el.expHow.textContent = question.how;

    el.screenExplanation.classList.remove('hidden');
    el.screenExplanation.classList.add('active');

    const handleContinue = () => {
      el.btnNextQuestion.removeEventListener('click', handleContinue);
      el.screenExplanation.classList.remove('active');
      el.screenExplanation.classList.add('hidden');
      onContinue();
    };

    el.btnNextQuestion.onclick = handleContinue;
  }

  showMenu(show = true) {
    if (show) {
      this.elements.screenMenu.classList.remove('hidden');
      this.elements.screenMenu.classList.add('active');
    } else {
      this.elements.screenMenu.classList.remove('active');
      this.elements.screenMenu.classList.add('hidden');
    }
  }
}
