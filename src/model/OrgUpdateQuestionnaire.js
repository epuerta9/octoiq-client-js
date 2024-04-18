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
 * The OrgUpdateQuestionnaire model module.
 * @module model/OrgUpdateQuestionnaire
 * @version 0.0.1
 */
export class OrgUpdateQuestionnaire {
  /**
   * Constructs a new <code>OrgUpdateQuestionnaire</code>.
   * @alias module:model/OrgUpdateQuestionnaire
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrgUpdateQuestionnaire</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrgUpdateQuestionnaire} obj Optional instance to populate.
   * @return {module:model/OrgUpdateQuestionnaire} The populated <code>OrgUpdateQuestionnaire</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrgUpdateQuestionnaire();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
OrgUpdateQuestionnaire.prototype.name = undefined;

