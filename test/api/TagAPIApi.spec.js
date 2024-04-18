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
    instance = new OpenApi.TagAPIApi();
  });

  describe('(package)', function() {
    describe('TagAPIApi', function() {
      describe('createMultipleTags', function() {
        it('should call createMultipleTags successfully', function(done) {
          // TODO: uncomment, update parameter values for createMultipleTags call and complete the assertions
          /*
          var opts = {};

          instance.createMultipleTags(body, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OpenApi.TagManyResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createTag', function() {
        it('should call createTag successfully', function(done) {
          // TODO: uncomment, update parameter values for createTag call and complete the assertions
          /*
          var opts = {};

          instance.createTag(body, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OpenApi.Tag);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteTag', function() {
        it('should call deleteTag successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteTag call and complete the assertions
          /*
          var opts = {};

          instance.deleteTag(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OpenApi.UnknownInterface);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTag', function() {
        it('should call getTag successfully', function(done) {
          // TODO: uncomment, update parameter values for getTag call and complete the assertions
          /*
          var opts = {};

          instance.getTag(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OpenApi.Tag);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTagsOrg', function() {
        it('should call getTagsOrg successfully', function(done) {
          // TODO: uncomment, update parameter values for getTagsOrg call and complete the assertions
          /*
          var opts = {};

          instance.getTagsOrg(orgid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OpenApi.Tag);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateTag', function() {
        it('should call updateTag successfully', function(done) {
          // TODO: uncomment, update parameter values for updateTag call and complete the assertions
          /*
          var opts = {};

          instance.updateTag(body, id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OpenApi.Tag);

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