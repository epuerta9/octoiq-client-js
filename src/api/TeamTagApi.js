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
import {TeamTag} from '../model/TeamTag';

/**
* TeamTag service.
* @module api/TeamTagApi
* @version 0.0.1
*/
export class TeamTagApi {

    /**
    * Constructs a new TeamTagApi. 
    * @alias module:api/TeamTagApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the listTeamTags operation.
     * @callback moduleapi/TeamTagApi~listTeamTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamTag{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllTeamTag
     * List tags for a team given a team ID
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/TeamTagApi~listTeamTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listTeamTags(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling listTeamTags");
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
      let returnType = TeamTag;

      return this.apiClient.callApi(
        '/api/team/{id}/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}