angular.module('DirectiveApp', [])
.controller('DirController',[function(){
    var my = this;
    my.myData = 'Hello';
    my.myName = 'Android';
    my.yourName ='Gaga';
}])
.controller('OtherController',[function(){
  var my = this;
  my.myData = 'Hello from other';
}])
.controller('LinkController',[function (){
  var my = this;

}])
.directive('myDirective',[function(){
  return  {
      template : 'MyData : {{my.myData}}'
  };
}])
.directive('otherDirective',[function(){
  return {
    templateUrl : function(elem,attr){
        return attr.temp +'.html';
    }
  };
}])
.directive('restrictedDirective',[function(){
  return {
    restrict : 'E',
    templateUrl : 'restricted.html',
    controller : 'DirController',
    controllerAs : 'my',
    scope : {
      myInfo : "=name"
    },
    bindToController : true
  };
}]);
