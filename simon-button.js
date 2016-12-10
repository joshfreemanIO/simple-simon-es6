'use strict';

class SimonButton {

  static buildFromjQuery(jQueryObject, SimpleSimonGame) {
    var buttons = [];

    jQueryObject.each(function() {
      var button = new SimonButton($(this), SimpleSimonGame);

      buttons.push(button);
    });

    return buttons;
  }

  constructor($button, SimpleSimon) {
    this.$htmlButton = $button;
    this.SimpleSimon = SimpleSimon;
  }

  activate() {
    this.$htmlButton.mousedown((event) => {
      this.powerOn();
    });

    this.$htmlButton.mouseup((event) => {
      this.powerOff();
      this.SimpleSimon.playButton(this);
    });
  }

  deactivate() {
    this.$htmlButton.unbind('mouseup').unbind('mousedown');
  }

  powerOn() {
    var primaryColor = this.$htmlButton.data('color');

    this.$htmlButton.removeClass(primaryColor);
    this.$htmlButton.addClass(primaryColor + '-active');
  }

  powerOff() {
    var primaryColor = this.$htmlButton.data('color');

    this.$htmlButton.removeClass(primaryColor + '-active');
    this.$htmlButton.addClass(primaryColor);
  }

  flash() {
    var i = 0;

    var interval = setInterval(() => {
      this.powerOn();

      setTimeout(() => {
        this.powerOff();
      },100);

      i = i + 1;

      if (i == 6) {
        clearInterval(interval);
      }
    }, 200);
  }

  equal(simonButton) {
    if (typeof(simonButton) == 'undefined') {
      return false;
    }

    if (simonButton.hasOwnProperty('$htmlButton') == false) {
      return false;
    }

    if (this.$htmlButton.is($(simonButton.$htmlButton))) {
      return true;
    }

    return false;
  }
}
