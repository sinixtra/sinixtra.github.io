var app = angular.module('weiss_Schwarz_Db', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);

app.controller('project_Catalog',function(){
  this.products = projects;
});

app.controller("menuController", function(){
  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };
  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };
});

var projects = [
  {
    name: "home",
    tab: 1
  },
  {
    name: "Average Calculator",
    description: "Calculates the average from a set of grades out of 55.",
    tab: 2
  },
  {
    name: "Bubble Sorter",
    description: "Sorts a set of numbers using a bubble sorting algorithm.",
    tab: 3
  }
];
