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
import {Team} from '../model/Team';
import {TeamCreate} from '../model/TeamCreate';
import {TeamUpdate} from '../model/TeamUpdate';

/**
* Team service.
* @module api/TeamApi
* @version 0.0.1
*/
export class TeamApi {

    /**
    * Constructs a new TeamApi. 
    * @alias module:api/TeamApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createTeam operation.
     * @callback moduleapi/TeamApi~createTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * postTeam
     * Create a team
     * @param {module:model/TeamCreate} body Request body for controller.TeamCreate
     * @param {module:api/TeamApi~createTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createTeam(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTeam");
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
      let returnType = Team;

      return this.apiClient.callApi(
        '/api/team/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTeam operation.
     * @callback moduleapi/TeamApi~getTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getTeam
     * Get a team given team ID
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/TeamApi~getTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTeam(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTeam");
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
      let returnType = Team;

      return this.apiClient.callApi(
        '/api/team/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateTeam operation.
     * @callback moduleapi/TeamApi~updateTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * putTeam
     * Update a team given team ID
     * @param {module:model/TeamUpdate} body Request body for controller.TeamUpdate
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/TeamApi~updateTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateTeam(body, id, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTeam");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateTeam");
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
      let returnType = Team;

      return this.apiClient.callApi(
        '/api/team/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}