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
 * The OrgTagInner model module.
 * @module model/OrgTagInner
 * @version 0.0.1
 */
export class OrgTagInner {
  /**
   * Constructs a new <code>OrgTagInner</code>.
   * @alias module:model/OrgTagInner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrgTagInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrgTagInner} obj Optional instance to populate.
   * @return {module:model/OrgTagInner} The populated <code>OrgTagInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrgTagInner();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
OrgTagInner.prototype.id = undefined;

/**
 * @member {String} name
 */
OrgTagInner.prototype.name = undefined;

