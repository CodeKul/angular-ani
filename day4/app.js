angular.module('MyApp', [])
.controller('MyController',['$scope',function(scp){
  scp.name = 'Android';
}])
.directive('myDir',[function(){
  return {
    restrict : 'E',
    transclude: true,
    templateUrl :'my-dir.html',
    scope:{},
    link : function(scp){
      scp.name= 'Apple';
    }
  };
}]);
