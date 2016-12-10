'use strict';

class SimonsStack {
  constructor(simonsButtons) {
    this.simonsButtons = simonsButtons;
    this.sequence = [];
  }

  incrementStack() {
    var randomButton = this._getRandomButton();

    this.sequence.push(randomButton);
  }

  resetStack() {
    this.sequence = [];
  }

  showSequence(callback) {
    var sequenceCopy = this.sequence.slice();

    setTimeout(() => {
      this._showSequence(sequenceCopy, callback);
    }, 500)
  }

  _showSequence(sequence, callback) {
    var button = sequence.shift();

    button.powerOn();

    setTimeout(() => {
      button.powerOff();

      if (sequence.length != 0) {
        setTimeout(() => {
          this._showSequence(sequence, callback);
        }, 250);
      } else {
        callback();
      }
    }, 500);
  }

  _getRandomButton() {
    return this.simonsButtons[this._getRandomIndexFromArray(this.simonsButtons)];
  }

  _getRandomIndexFromArray(array) {
    return Math.floor(Math.random() * array.length);
  }
}
