"use strict";

(function(){
  angular
    .module("fotoz", [
      "ui.router",
      "supplies"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

  function RouterFunction($stateProvider){
    $stateProvider
      .state("fotoIndex", {
        url: "/fotos",
        templateUrl: "vc/index.html",
        controller: "FotoIndexController",
        controllerAs: "FotoIndexViewModel"
      })
      .state("fotoNew", {
        url: "/fotos/new",
        templateUrl: "js/vc/new.html",
        controller: "FotoNewController",
        controllerAs: "FotoNewViewModel"
      })
      .state("fotoShow", {
        url: "/fotos/:id",
        templateUrl: "js/vc/show.html",
        controller: "FotoShowController",
        controllerAs: "FotoShowViewModel"
      })
      .state("fotoEdit", {
        url: "/fotos/:id/edit",
        templateUrl: "js/vc/edit.html",
        controller: "FotoEditController",
        controllerAs: "FotoEditViewModel"
      });
    }
})();
