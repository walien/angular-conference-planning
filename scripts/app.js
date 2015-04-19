'use strict';

/**
 * @ngdoc overview
 * @name angularConferencePlanningApp
 * @description
 * # angularConferencePlanningApp
 *
 * Main module of the application.
 */
angular
  .module('AngularConferencePlanning', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/Sample.html',
        controller: 'SampleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
