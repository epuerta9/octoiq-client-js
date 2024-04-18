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
import {OrgUserInner} from './OrgUserInner';

/**
 * The OrgUser model module.
 * @module model/OrgUser
 * @version 0.0.1
 */
export class OrgUser extends Array {
  /**
   * Constructs a new <code>OrgUser</code>.
   * @alias module:model/OrgUser
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>OrgUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrgUser} obj Optional instance to populate.
   * @return {module:model/OrgUser} The populated <code>OrgUser</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrgUser();
      ApiClient.constructFromObject(data, obj, 'OrgUserInner');
    }
    return obj;
  }
}