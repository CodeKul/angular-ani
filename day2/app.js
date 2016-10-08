angular.module('MyApp', [])
.controller('MyController',['$scope',function(scp){
  scp.myName = 'Android';
  scp.yourName = 'Aapple';
}])

.directive('myDir',[function(){
  return {
    restrict : 'AE',
    templateUrl: 'mydir.html',
    scope : {
      myInfo : '='
    }
  };
}]);
