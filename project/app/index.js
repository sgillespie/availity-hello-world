/* eslint-disable no-new */
'use strict';

require('./index.less');

require('jquery');
require('angular');
require('availity-angular');

var app = require('./module');
var registration = require('./helloworld');

app.addModules([
  'availity',
  'availity.ui',
  'availity.ui.templates',
  'ui.router',
  'ng.shims.placeholder'
]);

app.controller('PageController', function($scope, AvModal, AV_GLOBALS) {
  var reg = {
    name: null,
    selectedState: null,
    date: null,
    states: AV_GLOBALS.REGIONS
  };

  reg.selectedState = reg.states[0];
  $scope.reg = reg;
});

app.config(function($stateProvider, $urlRouterProvider, avValProvider) {
  var defaultRules = {
  };

  avValProvider.addRules({
    'default': defaultRules
  });

  $stateProvider
    .state('helloworld', {
      url: '/helloworld',
      template: registration.TEMPLATES.PAGE,
      controller: 'PageController'
    });

  $urlRouterProvider.otherwise('/helloworld');

});

module.exports = app;

