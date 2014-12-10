'use strict';

angular
  .module('fable-on', [
    'ngAnimate',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise("/home");

      // Now set up the states
      $stateProvider
        .state('home', {
          url: "/home",
          controller: 'Home',
          templateUrl: "views/home.tpl.html"
        })
        .state('start', {
          url: "/start",
          controller: 'Start',
          templateUrl: "views/start.tpl.html"
        });
    }
  ]);
