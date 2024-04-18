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
import {ApiClient} from "../ApiClient";
import {Tag} from '../model/Tag';
import {TagCreate} from '../model/TagCreate';
import {TagManyCreate} from '../model/TagManyCreate';
import {TagManyResponse} from '../model/TagManyResponse';
import {TagUpdate} from '../model/TagUpdate';
import {UnknownInterface} from '../model/UnknownInterface';

/**
* TagAPI service.
* @module api/TagAPIApi
* @version 0.0.1
*/
export class TagAPIApi {

    /**
    * Constructs a new TagAPIApi. 
    * @alias module:api/TagAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createMultipleTags operation.
     * @callback moduleapi/TagAPIApi~createMultipleTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TagManyResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * postMultipleTag
     * Create multiple org tags
     * @param {module:model/TagManyCreate} body Request body for controller.TagManyCreate
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/TagAPIApi~createMultipleTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createMultipleTags(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMultipleTags");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TagManyResponse;

      return this.apiClient.callApi(
        '/api/tag/multiple', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createTag operation.
     * @callback moduleapi/TagAPIApi~createTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * postTag
     * Create a new org tag
     * @param {module:model/TagCreate} body Request body for controller.TagCreate
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/TagAPIApi~createTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createTag(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTag");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Tag;

      return this.apiClient.callApi(
        '/api/tag/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteTag operation.
     * @callback moduleapi/TagAPIApi~deleteTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnknownInterface{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteTag
     * Delete a tag given tag ID
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/TagAPIApi~deleteTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteTag(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteTag");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UnknownInterface;

      return this.apiClient.callApi(
        '/api/tag/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTag operation.
     * @callback moduleapi/TagAPIApi~getTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getTag
     * Get a tag given tag ID
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/TagAPIApi~getTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTag(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTag");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Tag;

      return this.apiClient.callApi(
        '/api/tag/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTagsOrg operation.
     * @callback moduleapi/TagAPIApi~getTagsOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllTag
     * Get all tags with OrgID. This API is more open to the rest of the org instead of using org API
     * @param {String} orgid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/TagAPIApi~getTagsOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTagsOrg(orgid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'orgid' is set
      if (orgid === undefined || orgid === null) {
        throw new Error("Missing the required parameter 'orgid' when calling getTagsOrg");
      }

      let pathParams = {
        'orgid': orgid
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Tag;

      return this.apiClient.callApi(
        '/api/tag/org/{orgid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateTag operation.
     * @callback moduleapi/TagAPIApi~updateTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * putTag
     * Update a tag given tag ID
     * @param {module:model/TagUpdate} body Request body for controller.TagUpdate
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/TagAPIApi~updateTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateTag(body, id, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTag");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateTag");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Tag;

      return this.apiClient.callApi(
        '/api/tag/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}