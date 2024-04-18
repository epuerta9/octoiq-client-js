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
 * The UnknownInterface model module.
 * @module model/UnknownInterface
 * @version 0.0.1
 */
export class UnknownInterface {
  /**
   * Constructs a new <code>UnknownInterface</code>.
   * @alias module:model/UnknownInterface
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UnknownInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnknownInterface} obj Optional instance to populate.
   * @return {module:model/UnknownInterface} The populated <code>UnknownInterface</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UnknownInterface();
    }
    return obj;
  }
}