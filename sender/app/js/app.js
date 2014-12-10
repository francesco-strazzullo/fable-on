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
        .state('dwarfs', {
          url: "/dwarfs",
          controller: 'Dwarfs',
          templateUrl: "views/dwarfs.tpl.html"
        })
        .state('grumpy', {
          url: "/grumpy",
          controller: 'Grumpy',
          templateUrl: "views/grumpy.tpl.html"
        })
        .state('end', {
          url: "/end",
          controller: 'End',
          templateUrl: "views/end.tpl.html"
        });
    }
  ]);
