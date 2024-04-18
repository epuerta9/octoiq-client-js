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
import {ApiClient} from '../ApiClient';

/**
 * The User model module.
 * @module model/User
 * @version 0.0.1
 */
export class User {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new User();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('entity_uuid'))
        obj.entityUuid = ApiClient.convertToType(data['entity_uuid'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('is_terms_conditions'))
        obj.isTermsConditions = ApiClient.convertToType(data['is_terms_conditions'], 'Boolean');
      if (data.hasOwnProperty('org_id'))
        obj.orgId = ApiClient.convertToType(data['org_id'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('team_id'))
        obj.teamId = ApiClient.convertToType(data['team_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} email
 */
User.prototype.email = undefined;

/**
 * @member {String} entityUuid
 */
User.prototype.entityUuid = undefined;

/**
 * @member {String} id
 */
User.prototype.id = undefined;

/**
 * @member {Boolean} isTermsConditions
 */
User.prototype.isTermsConditions = undefined;

/**
 * @member {String} orgId
 */
User.prototype.orgId = undefined;

/**
 * @member {String} status
 */
User.prototype.status = undefined;

/**
 * @member {String} teamId
 */
User.prototype.teamId = undefined;

