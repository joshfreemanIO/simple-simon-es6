$(document).ready(function() {
  var gameIndicator = new GameIndicator($('.round-indicator'), $('.round-number'), $('.start-game'));
  var game = new SimpleSimonGame(gameIndicator)
  var simonsButtons = SimonButton.buildFromjQuery($('.simple-simon-button'), game);
  var simonsStack = new SimonsStack(simonsButtons);
  game.simonsStack = simonsStack

  $('.start-game').click(function() {
    game.startGame();
  });
});
