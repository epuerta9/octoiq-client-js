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

  beforeEach(function() {
    instance = new OpenApi.TeamQuestionApi();
  });

  describe('(package)', function() {
    describe('TeamQuestionApi', function() {
      describe('listTeamKBQuestions', function() {
        it('should call listTeamKBQuestions successfully', function(done) {
          // TODO: uncomment, update parameter values for listTeamKBQuestions call and complete the assertions
          /*
          var opts = {};

          instance.listTeamKBQuestions(id, kbid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OpenApi.TeamQuestion);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));