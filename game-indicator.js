'use strict';

class GameIndicator {

  constructor($roundIndicator, $roundNumber, $startGameButton) {
    this.$roundIndicator = $roundIndicator;
    this.$startGameButton = $startGameButton;
    this.$roundNumber = $roundNumber;
  }

  startGame() {
    this.$startGameButton.hide();
    this.$roundIndicator.show();
  }

  startNextRound() {
    var currentRound = parseInt(this.$roundNumber.html());

    this.$roundNumber.html(currentRound + 1);
  }

  endGame() {
    this.resetGame();
  }

  resetGame() {
    this.$roundNumber.html(1);
    this.$roundIndicator.hide();
    this.$startGameButton.show();
  }
}

