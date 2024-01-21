const { createInterface } = require("readline");
const data = require("./data.js");

class Hangman {
  constructor() {
    this.state = 0;
  }

  initial() {
    this.state = 0;
  }

  getStateOfHangman() {
    return data.ASCII[this.state];
  }

  fail() {
    this.state++;
  }

  getCountFail() {
    return this.state;
  }
}

class Word {
  constructor() {
    this.openPositions = new Set();
  }

  initial() {
    this.openPositions = new Set();
    const randomNumber = this._getRandomNumber();
    this.word = data.words[randomNumber];
    this._getRandomPositions();
  }

  hasLetter(letter) {
    const letters = this.word.split("");
    let isHasLetter = false;
    letters.forEach((elem, index) => {
      if (elem === letter) {
        isHasLetter = true;
        this.openPositions.add(index);
      }
    });
    return isHasLetter;
  }

  isGuessed() {
    return this.word === this.getHiddenWord();
  }

  getHiddenWord() {
    let newWord = this.word.split("");
    return newWord
      .map((letter, index) => {
        if (this.openPositions.has(index)) {
          return letter;
        } else {
          return "_";
        }
      })
      .join("");
  }

  _getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * data.words.length);
    return randomNumber;
  }

  _getRandomPositions() {
    while (this.openPositions.size < 2) {
      const randomNumber = Math.floor(Math.random() * this.word.length);
      if (!this.openPositions.has(randomNumber)) {
        this.openPositions.add(randomNumber);
      }
    }
  }
}

class Game {
  constructor() {
    this.game = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.word = new Word();
    this.hangman = new Hangman();
  }

  guessLetter(letter) {
    const isHasLetter = this.word.hasLetter(letter);
    if (!isHasLetter) {
      this.hangman.fail();
    }
    this.showStateOfTheGame();
  }

  checkState() {
    if (this.hangman.getCountFail() >= 6) {
      console.log("ПОРАЖЕНИЕ");
      this.startGame();
    }
    if (this.word.isGuessed()) {
      console.log("ПОБЕДА");
      this.startGame();
    }
  }

  showStateOfTheGame() {
    console.log(`Слово: ${this.word.getHiddenWord()}`);
    console.log(`${this.hangman.getStateOfHangman()}`);
    console.log(`Ошибок: ${this.hangman.getCountFail()} / 6`);
    console.log("_______________________");
    this.checkState();
  }

  startGame() {
    this.word.initial();
    this.hangman.initial();
    this.game.removeAllListeners("line");

    this.game.question(
      ` Для старта введите 'старт' + enter\n Для выхода из игры нажмите любой символ + enter: `,
      (answer) => {
        if (answer === "старт") {
          console.log("\n" + this.word.getHiddenWord());
          this.game.on("line", (line) => {
            this.guessLetter(line);
          });
        } else {
          this.game.close();
        }
      }
    );
  }
}

const game = new Game();
game.startGame();
