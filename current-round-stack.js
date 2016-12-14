'use strict';

class RoundStack {

  constructor(simsonsStack) {
    this.sequence = simsonsStack.sequence.slice();
    this.gameOver = false;
    this.roundCompleted = false;
  }

  playButton(playedSimonButton) {
    var expectedButton = this.sequence.shift();

    if (playedSimonButton.equal(expectedButton)) {
      if (this.sequence.length === 0) {
        this.roundCompleted = true;
      }
    } else {
      this.gameOver = true;
    }
  }
}
