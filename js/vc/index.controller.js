"use strict";

(function(){
  angular
  .module("fotoz")
  .controller("FotoIndexController", [
    "FotoFactory",
    FotoIndexControllerFunction
  ]);

  function FotoIndexControllerFunction( FotoFactory ){
    this.fotos = FotoFactory.query();
  }
}());
