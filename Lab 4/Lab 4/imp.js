/**
 * Created by gumma on 7/6/2017.
 */
'use strict';
/* App Controllers */


var memoryGameApp = angular.module('memoryGameApp', []);


memoryGameApp.factory('game', function() {
    var tileNames = ['green', 'pink', 'red','purple'];

    return new Game(tileNames);
});


memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
    $scope.game = game;
});
