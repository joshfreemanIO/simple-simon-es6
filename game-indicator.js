'use strict';

class GameIndicator {

  constructor($gameIndicator, $roundIndicator, $roundNumber, $startGameButton) {
    this.$gameIndicator = $gameIndicator;
    this.$roundIndicator = $roundIndicator;
    this.$startGameButton = $startGameButton;
    this.$roundNumber = $roundNumber;
  }

  startGame() {
    this.$startGameButton.hide();
    this.$roundIndicator.show();
    this._deactivate();
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

  activate(game) {
    this.$gameIndicator.click(function() {
      game.startGame();
    });
  }

  _deactivate() {
    this.$gameIndicator.unbind('click');
  }
}

