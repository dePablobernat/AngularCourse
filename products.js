(function(){
var app = angular.module('store-products', []);

app.directive('productTitle', function(){
    return {restrict: 'E',templateUrl: 'product-title.html'};
  });
  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function(){
        this.tab = 1;
        this.selectTab = function(setTab){
          this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });
    app.directive('panelNav', function(){return {restrict: 'E',templateUrl: 'panel-nav.html'};});
      app.directive('panelSpecs', function(){return {restrict: 'E',templateUrl: 'panel-specs.html'};});
      app.directive('panelDescription', function(){return {restrict: 'E',templateUrl: 'panel-description.html'};});
      app.directive('panelReview', function(){
        return {
          restrict: 'E',
          templateUrl: 'panel-review.html'
        };
      });
        app.directive('reviewQuotes', function(){return {restrict: 'E',templateUrl: 'review-quotes.html'};});
        app.directive('reviewForm', function(){
          return {
            restrict: 'E',
            templateUrl: 'review-form.html',
            controller: function(){
              this.review = {};
              this.addReview = function(product){
                product.reviews.push(this.review);
                this.review = {};
              };
            },
            controllerAs: 'reviewCtrl'
          }
        });

})();