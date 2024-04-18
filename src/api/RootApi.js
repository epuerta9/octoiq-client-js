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
import {UnknownInterface} from '../model/UnknownInterface';

/**
* Root service.
* @module api/RootApi
* @version 0.0.1
*/
export class RootApi {

    /**
    * Constructs a new RootApi. 
    * @alias module:api/RootApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the gET1 operation.
     * @callback moduleapi/RootApi~gET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UnknownInterface{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 1
     * controller: main.main.Run.func1.1
     * @param {module:api/RootApi~gET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    gET1(callback) {
      
      let postBody = null;

      let pathParams = {
        
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
        '/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}