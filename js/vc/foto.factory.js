"use strict";

(function() {
  angular
  .module( "fotoz" )
  .factory( "FotoFactory", [
    "$resource",
    FactoryFunction
  ]);

function FactoryFunction( $resource ){
  return $resource( "http://localhost:3000/entries/:id", {}, {
    update: {method: "PUT"}
  });
}
}());
