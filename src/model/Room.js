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
import {OrgTagInner} from './OrgTagInner';

/**
 * The Room model module.
 * @module model/Room
 * @version 0.0.1
 */
export class Room extends Array {
  /**
   * Constructs a new <code>Room</code>.
   * @alias module:model/Room
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>Room</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Room} obj Optional instance to populate.
   * @return {module:model/Room} The populated <code>Room</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Room();
      ApiClient.constructFromObject(data, obj, 'OrgTagInner');
    }
    return obj;
  }
}