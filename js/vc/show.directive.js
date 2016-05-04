"use strict";

(function(){
  angular
  .module("fotoz")
  .directive("fotoShow", function(){
    return {
      templateUrl: 'js/vc/_show.html',
      scope:{
        foto: "="
      },
      link: function(scope) {
        console.log(scope.foto)
      }
    }
  })
}());
