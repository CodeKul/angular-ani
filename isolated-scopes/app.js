angular.module('MyApp', [])
.controller('MyController',['$scope',function(scp){
  scp.myName = 'Android';
  scp.yourName = 'Aapple';
  scp.simFun = function(){
    console.log('Hello world');
  };
}])
.directive('myDir',[function(){
  return {
    restrict : 'AE',
    templateUrl: 'mydir.html',
    scope : {
      myInfo : '=',
      myFun : '&',
      myOneWay : '@'
    }
  };
}]);
