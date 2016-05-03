"use strict";


(function() {
  angular
    .module("wdinstagram", [
      "ui.router",
      "ngResource"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])
    .controller("InstaIndexController", InstaIndexControllerFunc)
    .controller("InstaShowController", InstaShowControllerFunc)
    .factory("InstaFactory", InstaFactoryFunc);
  function RouterFunction($stateProvider) {
    $stateProvider
      .state("instaIndex", {
        url: "/home",
        templateUrl: "index.html",
        controller: "InstaIndexController",
        controllerAs: "indexVm"
      })
      .state("instaShow", {
        url: "/home/:id",
        templateUrl: "js/show.html",
        controller: "InstaShowController",
        controllerAs: "showVm"
      });
  }
  InstaFactoryFunc.$inject = [ "$resource" ];
  function InstaFactoryFunc($resource) {
    return $resource("http://localhost:3000/entries/:id", {}, {
      update: {method: "PUT"}
    });
  }
  InstaIndexControllerFunc.$inject = [ "InstaFactory" ];
    function InstaIndexControllerFunc(InstaFactory) {
    var indexVm = this;
    indexVm.instas = InstaFactory.query();
    indexVm.newInsta = new InstaFactory();
    indexVm.create = function($state){
      indexVm.newInsta.$save().then(function(res) {
        indexVm.instas.push(res)
        indexVm.newInsta = new InstaFactory();
      })
    };
  }
  InstaShowControllerFunc.$inject = [ "InstaFactory", "$stateParams" ];
  function InstaShowControllerFunc(InstaFactory, $stateParams) {
    var showVm = this;
    showVm.insta = InstaFactory.get({id: $stateParams.id})

    showVm.update = function() {
      showVm.insta.$update({id: $stateParams.id});
    };

    showVm.delete = function() {
      showVm.insta.$delete({id: $stateParams.id});
    }
  };
})();
