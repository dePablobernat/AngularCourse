(function(){
// ------angularjs -----AppName--Dependencies.
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController',[ '$http', function($http){
      var gems = this;
      gems.products = [];
      $http.get('/product.json').success(function(data){
          gems.products = data
      });
  }]);

})();