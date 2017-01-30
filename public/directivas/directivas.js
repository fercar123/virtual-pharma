(function(){
  var dir=angular.module('Virtual-pharma.navegador',[]);
  dir.directive('navegador',function(){
    return{
      restrict: 'E',
      templateUrl: 'templates/navegador.html'
    };
  })
}())
