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
 * The Gpt model module.
 * @module model/Gpt
 * @version 0.0.1
 */
export class Gpt {
  /**
   * Constructs a new <code>Gpt</code>.
   * @alias module:model/Gpt
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Gpt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Gpt} obj Optional instance to populate.
   * @return {module:model/Gpt} The populated <code>Gpt</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Gpt();
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
Gpt.prototype.id = undefined;

/**
 * @member {String} name
 */
Gpt.prototype.name = undefined;

