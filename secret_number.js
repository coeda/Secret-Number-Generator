'use strict';
module.exports = function() {
var sNumber = Math.floor((Math.random() * 1000000) + 0);

  return function secretNumber(){

    return sNumber;
  };


};