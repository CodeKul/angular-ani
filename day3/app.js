angular.module('MyApp', [])
.controller('MyController',['$scope',function(scp) {
  scp.os = 'Android';
}])
.directive('myDir',[function(){
  return {
    link : function(scp,element,attr){
      scp.do = function(){
        var millis = new Date().getMilliseconds();
        var elInner = element.append('<input type="button" value="'+millis+'">');
      };
      element.text('Hello '+attr.myDir+' - your os is '+scp.os);
      var el = element.append('<input type="button" value="Okay">');
      el.bind('click',scp.do);
    }
  };
}]);
