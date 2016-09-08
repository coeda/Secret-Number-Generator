'use strict';
module.exports = function() {
var secretNumber;
  return function secretNumber(){
    var randomNumber = Math.floor((Math.random() * 1000000) + 0);
    var secretNumber = Math.floor((Math.random() * 1000000) + 0);
    return randomNumber;
  };


};