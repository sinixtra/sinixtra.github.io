var app = angular.module('weiss_Schwarz_Db', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);

app.controller('project_Catalog',function(){
  this.product = projects;
});

var projects = [
  {
    name: "Average Calculator",
    description: "Calculates the average from a set of grades out of 55."
  },
  {
    name: "Bubble Sorter",
    description: "Sorts a set of numbers using a bubble sorting algorithm."
  }
]
