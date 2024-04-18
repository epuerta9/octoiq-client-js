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
import {OrgTag} from '../model/OrgTag';

/**
* OrgTag service.
* @module api/OrgTagApi
* @version 0.0.1
*/
export class OrgTagApi {

    /**
    * Constructs a new OrgTagApi. 
    * @alias module:api/OrgTagApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getOrgTags operation.
     * @callback moduleapi/OrgTagApi~getOrgTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgTag{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllOrgTeamTags
     * List all team tags within a specific org given the Org ID
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/OrgTagApi~getOrgTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrgTags(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOrgTags");
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
      let returnType = OrgTag;

      return this.apiClient.callApi(
        '/api/org/{id}/teams/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}