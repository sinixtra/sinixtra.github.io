var app = angular.module('weiss_Schwarz_Db', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);

app.controller('serice_Catalog',function(){
  this.product = serice;
});

var serice = {
  name: 'Sword Art Online'
}
