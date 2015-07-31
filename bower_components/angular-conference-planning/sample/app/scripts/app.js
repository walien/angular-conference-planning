'use strict';

angular
  .module('AngularConferencePlanningSample', [
    'ngRoute',
    'ngTouch',
    'AngularConferencePlanning'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/Sample.html',
        controller: 'SampleCtrl'
      })
      .when('/mobile', {
        templateUrl: 'views/MobileSample.html',
        controller: 'SampleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
