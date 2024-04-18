/*
 * OpenAPI
 * OpenAPI
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.52
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
    factory(root.expect, root.OpenApi);
  }
}(this, function(expect, OpenApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('AuthWhoAmIResponse', function() {
      beforeEach(function() {
        instance = new OpenApi.AuthWhoAmIResponse();
      });

      it('should create an instance of AuthWhoAmIResponse', function() {
        // TODO: update the code to test AuthWhoAmIResponse
        expect(instance).to.be.a(OpenApi.AuthWhoAmIResponse);
      });

      it('should have the property emai (base name: "emai")', function() {
        // TODO: update the code to test the property emai
        expect(instance).to.have.property('emai');
        // expect(instance.emai).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property orgId (base name: "org_id")', function() {
        // TODO: update the code to test the property orgId
        expect(instance).to.have.property('orgId');
        // expect(instance.orgId).to.be(expectedValueLiteral);
      });

    });
  });

}));
