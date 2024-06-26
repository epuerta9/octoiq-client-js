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
import {Org} from '../model/Org';
import {OrgCreateQuestionnaire} from '../model/OrgCreateQuestionnaire';
import {OrgPlan} from '../model/OrgPlan';
import {OrgQuestionnaire} from '../model/OrgQuestionnaire';
import {OrgTag} from '../model/OrgTag';
import {OrgTeam} from '../model/OrgTeam';
import {OrgUpdate} from '../model/OrgUpdate';
import {OrgUpdateQuestionnaire} from '../model/OrgUpdateQuestionnaire';
import {OrgUser} from '../model/OrgUser';
import {OrgUserCreate} from '../model/OrgUserCreate';
import {UnknownInterface} from '../model/UnknownInterface';

/**
* OrgAPI service.
* @module api/OrgAPIApi
* @version 0.0.1
*/
export class OrgAPIApi {

    /**
    * Constructs a new OrgAPIApi. 
    * @alias module:api/OrgAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the assignOrgUser operation.
     * @callback moduleapi/OrgAPIApi~assignOrgUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnknownInterface{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * putOrgUser
     * Assign a user to a specific team given the Org ID, the User ID, and the designated Team ID
     * @param {String} id 
     * @param {String} userid 
     * @param {String} teamid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/OrgAPIApi~assignOrgUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    assignOrgUser(id, userid, teamid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling assignOrgUser");
      }
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling assignOrgUser");
      }
      // verify the required parameter 'teamid' is set
      if (teamid === undefined || teamid === null) {
        throw new Error("Missing the required parameter 'teamid' when calling assignOrgUser");
      }

      let pathParams = {
        'id': id,'userid': userid,'teamid': teamid
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
        '/api/org/{id}/users/{userid}/teams/{teamid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createOrgQuestionnaire operation.
     * @callback moduleapi/OrgAPIApi~createOrgQuestionnaireCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgQuestionnaire{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * postOrgQuestionnaire
     * Create a specific org questionnaire given Org ID
     * @param {module:model/OrgCreateQuestionnaire} body Request body for controller.OrgCreateQuestionnaire
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/OrgAPIApi~createOrgQuestionnaireCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createOrgQuestionnaire(body, id, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOrgQuestionnaire");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createOrgQuestionnaire");
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
      let returnType = OrgQuestionnaire;

      return this.apiClient.callApi(
        '/api/org/{id}/questionnaire', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createOrgUser operation.
     * @callback moduleapi/OrgAPIApi~createOrgUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgUser{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * postOrgUser
     * Create a user within the org given the Org ID
     * @param {module:model/OrgUserCreate} body Request body for controller.OrgUserCreate
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/OrgAPIApi~createOrgUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createOrgUser(body, id, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOrgUser");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createOrgUser");
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
      let returnType = OrgUser;

      return this.apiClient.callApi(
        '/api/org/{id}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteOrgUser operation.
     * @callback moduleapi/OrgAPIApi~deleteOrgUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnknownInterface{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteOrgUser
     * Delete a specific org user given the org ID and the user ID
     * @param {String} id 
     * @param {String} userid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/OrgAPIApi~deleteOrgUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteOrgUser(id, userid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteOrgUser");
      }
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling deleteOrgUser");
      }

      let pathParams = {
        'id': id,'userid': userid
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
        '/api/org/{id}/users/{userid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrg operation.
     * @callback moduleapi/OrgAPIApi~getOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Org{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getOrg
     * Get a specific org
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/OrgAPIApi~getOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrg(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOrg");
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
      let returnType = Org;

      return this.apiClient.callApi(
        '/api/org/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrgPlan operation.
     * @callback moduleapi/OrgAPIApi~getOrgPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgPlan{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getOrgPlan
     * Get the current plan given the Org ID
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/OrgAPIApi~getOrgPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrgPlan(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOrgPlan");
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
      let returnType = OrgPlan;

      return this.apiClient.callApi(
        '/api/org/{id}/plan', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrgQuestionnaire operation.
     * @callback moduleapi/OrgAPIApi~getOrgQuestionnaireCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgQuestionnaire{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getOrgQuestionnaire
     * Get a specific org onboarding questionnaire
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/OrgAPIApi~getOrgQuestionnaireCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrgQuestionnaire(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOrgQuestionnaire");
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
      let returnType = OrgQuestionnaire;

      return this.apiClient.callApi(
        '/api/org/{id}/questionnaire', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrgTags operation.
     * @callback moduleapi/OrgAPIApi~getOrgTagsCallback
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
     * @param {module:api/OrgAPIApi~getOrgTagsCallback} callback The callback function, accepting three arguments: error, data, response
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
    /**
     * Callback function to receive the result of the getOrgTeams operation.
     * @callback moduleapi/OrgAPIApi~getOrgTeamsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgTeam{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllOrgTeam
     * List all teams within a specific org given the Org ID
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/OrgAPIApi~getOrgTeamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrgTeams(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOrgTeams");
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
      let returnType = OrgTeam;

      return this.apiClient.callApi(
        '/api/org/{id}/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrgUser operation.
     * @callback moduleapi/OrgAPIApi~getOrgUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgUser{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getOrgUser
     * Get a specific org user given the Org ID and the User ID
     * @param {String} id 
     * @param {String} userid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/OrgAPIApi~getOrgUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrgUser(id, userid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOrgUser");
      }
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling getOrgUser");
      }

      let pathParams = {
        'id': id,'userid': userid
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
      let returnType = OrgUser;

      return this.apiClient.callApi(
        '/api/org/{id}/users/{userid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrgUsers operation.
     * @callback moduleapi/OrgAPIApi~getOrgUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrgUser{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllOrgUser
     * List all users in the org given the org ID
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/OrgAPIApi~getOrgUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrgUsers(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOrgUsers");
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
      let returnType = OrgUser;

      return this.apiClient.callApi(
        '/api/org/{id}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateOrg operation.
     * @callback moduleapi/OrgAPIApi~updateOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Org{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * putOrg
     * Update a specific org given ID
     * @param {module:model/OrgUpdate} body Request body for controller.OrgUpdate
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/OrgAPIApi~updateOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateOrg(body, id, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOrg");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateOrg");
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
      let returnType = Org;

      return this.apiClient.callApi(
        '/api/org/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateOrgQuestionnaire operation.
     * @callback moduleapi/OrgAPIApi~updateOrgQuestionnaireCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnknownInterface{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * putOrgQuestionnaire
     * Update a specific org questionnaire
     * @param {module:model/OrgUpdateQuestionnaire} body Request body for controller.OrgUpdateQuestionnaire
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.jwt authorization
     * @param {module:api/OrgAPIApi~updateOrgQuestionnaireCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateOrgQuestionnaire(body, id, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOrgQuestionnaire");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateOrgQuestionnaire");
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
      let returnType = UnknownInterface;

      return this.apiClient.callApi(
        '/api/org/{id}/questionnaire', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}