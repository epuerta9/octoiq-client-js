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
import {Gpt} from '../model/Gpt';
import {GptCreate} from '../model/GptCreate';

/**
* Gpt service.
* @module api/GptApi
* @version 0.0.1
*/
export class GptApi {

    /**
    * Constructs a new GptApi. 
    * @alias module:api/GptApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the gPTRequest operation.
     * @callback moduleapi/GptApi~gPTRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Gpt{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * postGpt
     * creates questions given a list of requirements from chatgpt and assigns them to the appropriate team
     * @param {module:model/GptCreate} body Request body for controller.GptCreate
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization authorization
     * @param {module:api/GptApi~gPTRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    gPTRequest(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling gPTRequest");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Gpt;

      return this.apiClient.callApi(
        '/api/gpt/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}