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
    describe('GptCreateData', function() {
      beforeEach(function() {
        instance = new OpenApi.GptCreateData();
      });

      it('should create an instance of GptCreateData', function() {
        // TODO: update the code to test GptCreateData
        expect(instance).to.be.a(OpenApi.GptCreateData);
      });

      it('should have the property requirements (base name: "requirements")', function() {
        // TODO: update the code to test the property requirements
        expect(instance).to.have.property('requirements');
        // expect(instance.requirements).to.be(expectedValueLiteral);
      });

      it('should have the property tag (base name: "tag")', function() {
        // TODO: update the code to test the property tag
        expect(instance).to.have.property('tag');
        // expect(instance.tag).to.be(expectedValueLiteral);
      });

    });
  });

}));
