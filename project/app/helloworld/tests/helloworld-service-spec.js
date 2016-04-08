/* global it, expect, describe, beforeEach, angular */

'use strict';

var app = require('../helloworld-service');

describe('helloworld', function() {

  var helloWorldService;

  beforeEach(angular.mock.module(app.name));

  beforeEach(angular.mock.inject(function(_helloWorldService_) {
    helloWorldService = _helloWorldService_;
  }));

  it('should be defined', function() {
    expect(helloWorldService.hello).toBeDefined();
  });

  it('should say hi', function() {
    expect(helloWorldService.hello()).toBe('hi');
  });

});
