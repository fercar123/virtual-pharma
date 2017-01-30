(function(){
  var app=angular.module('Virtual-pharma',['ngRoute','Virtual-pharma.navegador']);
  app.controller('mostrar-Nav',['$scope','$location',function($scope,$location){
    $scope.weburl=$location.url();
    switch($scope.weburl){
      case '/':
      $scope.title="VIRTUAL PHARMA";
      break;
      case '/prescripcion':
      $scope.title="Prescripciones";
      break;
      case '/inventario':
      $scope.title="Inventario";
      break;
      case '/reporte':
      $scope.title="Reporte";
      break;
      case '/historial':
      $scope.title="Historial";
      break;
    }
  }]);

  app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl:'views/bienvenido.html',
      controller:'mostrar-Nav'
    })
    .when('/prescripcion',{
      templateUrl:'views/prescripcion.html',
      controller: 'mostrar-Nav'
    })
    .when('/inventario',{
      templateUrl:'views/inventario.html',
      controller: 'mostrar-Nav'
    })
    .when('/reporte',{
      templateUrl:'views/reporte.html',
      controller: 'mostrar-Nav'
    })
    .when('/historial',{
      templateUrl:'views/historial.html',
      controller: 'mostrar-Nav'
    })
    .otherwise({
      redirectTo: '/'
    });
  }]);
}())
