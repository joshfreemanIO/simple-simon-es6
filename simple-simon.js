'use strict';

class SimpleSimonGame {
  constructor(gameIndicator, simonsStack) {
    this.gameIndicator = gameIndicator;
    this.simonsStack = simonsStack;
  }

  startGame() {
    this.disableButtons();
    this.gameIndicator.startGame();
    this.simonsStack.incrementStack();
    this.currentRoundStack = new RoundStack(this.simonsStack);

    this.simonsStack.showSequence(() => {
      this.enableButtons();
    });
 }

  playButton(button) {
    this.currentRoundStack.playButton(button);

    if (this.currentRoundStack.gameOver) {
      this.endGame();
    } else if (this.currentRoundStack.roundCompleted) {
      this.startNextRound();
    }
  }

  startNextRound() {
    this.disableButtons();
    this.gameIndicator.startNextRound();
    this.simonsStack.incrementStack();
    this.currentRoundStack = new RoundStack(this.simonsStack);

    this.simonsStack.showSequence(() => {
      this.enableButtons();
    });
  }

  endGame() {
    this.gameIndicator.endGame();
    this.simonsStack.resetStack();
    this.disableButtons();
    this.gameIndicator.activate(this);
  }

  disableButtons() {
    this.simonsStack.simonsButtons.forEach(function(button) {
      button.deactivate();
    });
  }

  enableButtons() {
    this.simonsStack.simonsButtons.forEach(function(button) {
      button.activate();
    });
  }
}
