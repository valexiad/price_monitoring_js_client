/*
 * Price Monitoring Service
 * Price Monitoring Service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PriceMonitoringService);
  }
}(this, function(expect, PriceMonitoringService) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('TokenRefresh', function() {
      beforeEach(function() {
        instance = new PriceMonitoringService.TokenRefresh();
      });

      it('should create an instance of TokenRefresh', function() {
        // TODO: update the code to test TokenRefresh
        expect(instance).to.be.a(PriceMonitoringService.TokenRefresh);
      });

      it('should have the property access (base name: "access")', function() {
        // TODO: update the code to test the property access
        expect(instance).to.have.property('access');
        // expect(instance.access).to.be(expectedValueLiteral);
      });

      it('should have the property refresh (base name: "refresh")', function() {
        // TODO: update the code to test the property refresh
        expect(instance).to.have.property('refresh');
        // expect(instance.refresh).to.be(expectedValueLiteral);
      });

    });
  });

}));
