import { QUESTIONS_DATABASE } from './questions.js';
import { GallowsCanvas } from './gallowsCanvas.js';
import { UIManager } from './ui.js';
import { audio } from './audio.js';

class ForcaSSMAGame {
  constructor() {
    this.gallows = new GallowsCanvas('gallows-canvas');
    this.ui = new UIManager();

    this.score = 0;
    this.streak = 0;
    this.errors = 0;
    this.maxErrors = 6;

    this.questionPool = [...QUESTIONS_DATABASE];
    this.currentQuestion = null;
    this.guessedLetters = new Set();
    this.isInputBlocked = false;

    this.bindEvents();
    this.gallows.draw(0);
    this.ui.showMenu(true);
  }

  bindEvents() {
    // Sound Button
    document.getElementById('btn-sound').addEventListener('click', (e) => {
      const isMuted = audio.toggleMute();
      e.target.textContent = isMuted ? '🔇' : '🔊';
    });

    // Restart Button
    document.getElementById('btn-restart-game').addEventListener('click', () => {
      audio.playClick();
      this.startNewGame();
    });

    // Start Menu Button — padrão Hora da Segurança: cadastro antes de jogar
    document.getElementById('btn-start').addEventListener('click', () => {
      audio.playClick();
      const seguir = () => { this.ui.showMenu(false); this.startNewGame(); };
      if (window.HS) { window.HS.novaPartida(); window.HS.exigirCadastro(seguir); }
      else seguir();
    });

    // Physical Keyboard Input
    window.addEventListener('keydown', (e) => {
      if (this.isInputBlocked || !this.currentQuestion) return;
      const char = e.key.toUpperCase();
      if (/^[A-Z]$/.test(char)) {
        this.handleLetterGuess(char);
      }
    });
  }

  startNewGame() {
    this.score = 0;
    this.streak = 0;
    this.palavrasJogadas = 0;   // conta rodadas para o anúncio e para o registro
    this.palavrasAcertadas = 0;
    this.questionPool = this.shuffleArray([...QUESTIONS_DATABASE]);
    this.loadNextQuestion();
  }

  // espaço de patrocínio a cada 3 palavras; a 5ª acertada fecha o treinamento
  proximaRodada() {
    this.palavrasJogadas = (this.palavrasJogadas || 0) + 1;

    if (this.palavrasAcertadas >= 5 && window.HS) {
      window.HS.concluir(this.score, 'Concluído');
    }

    if (this.palavrasJogadas % 3 === 0 && window.HS) {
      window.HS.anuncio(() => this.loadNextQuestion());
    } else {
      this.loadNextQuestion();
    }
  }

  loadNextQuestion() {
    if (this.questionPool.length === 0) {
      // Re-shuffle when all questions played
      this.questionPool = this.shuffleArray([...QUESTIONS_DATABASE]);
    }

    this.currentQuestion = this.questionPool.pop();
    this.guessedLetters.clear();
    this.errors = 0;
    this.isInputBlocked = false;

    this.gallows.draw(0);
    this.updateUI();
  }

  updateUI() {
    this.ui.updateHUD(this.score, this.streak, this.maxErrors, this.errors, this.currentQuestion);
    this.ui.renderWordSlots(this.currentQuestion.word, this.guessedLetters);
    this.ui.renderKeyboard(
      (letter) => this.handleLetterGuess(letter),
      this.guessedLetters,
      this.currentQuestion.word
    );
  }

  handleLetterGuess(letter) {
    if (this.isInputBlocked || this.guessedLetters.has(letter)) return;

    this.guessedLetters.add(letter);

    if (this.currentQuestion.word.includes(letter)) {
      // Correct Guess
      audio.playCorrectLetter();
      this.updateUI();
      this.checkWinCondition();
    } else {
      // Wrong Guess - Only draw next part on gallows canvas
      audio.playWrongLetter();
      this.errors++;
      this.gallows.draw(this.errors);
      this.updateUI();

      if (this.errors >= this.maxErrors) {
        // Round Lost - Reached 6 Errors (Full Gallows Drawing)
        this.isInputBlocked = true;
        this.streak = 0;
        audio.playGameOver();

        setTimeout(() => {
          this.ui.showExplanationModal(
            { isWin: false, question: this.currentQuestion },
            () => this.proximaRodada()
          );
        }, 400);
      }
    }
  }

  checkWinCondition() {
    // Check if all letters (excluding spaces) in secret word have been guessed
    const wordChars = this.currentQuestion.word.replace(/\s/g, '').split('');
    const isComplete = wordChars.every(char => this.guessedLetters.has(char));

    if (isComplete) {
      this.isInputBlocked = true;
      this.streak++;
      this.palavrasAcertadas = (this.palavrasAcertadas || 0) + 1;
      const roundBonus = 100 + (this.streak * 20);
      this.score += roundBonus;
      audio.playRoundVictory();

      setTimeout(() => {
        this.ui.showExplanationModal(
          { isWin: true, question: this.currentQuestion },
          () => this.proximaRodada()
        );
      }, 400);
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

// Launch Game on Window Load
window.addEventListener('DOMContentLoaded', () => {
  new ForcaSSMAGame();
});
