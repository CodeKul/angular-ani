angular.module('MyApp', [])
.directive('myDir',[function(){
  return {
    link : function(scp,element,attr){
        element.on('mouseup',function(event){
            element.append('<input type="button"/>')
        });
    }
  };
}]);
