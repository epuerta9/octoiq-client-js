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
 * The TeamQuestionInner model module.
 * @module model/TeamQuestionInner
 * @version 0.0.1
 */
export class TeamQuestionInner {
  /**
   * Constructs a new <code>TeamQuestionInner</code>.
   * @alias module:model/TeamQuestionInner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamQuestionInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamQuestionInner} obj Optional instance to populate.
   * @return {module:model/TeamQuestionInner} The populated <code>TeamQuestionInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamQuestionInner();
      if (data.hasOwnProperty('answer'))
        obj.answer = ApiClient.convertToType(data['answer'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('question'))
        obj.question = ApiClient.convertToType(data['question'], 'String');
      if (data.hasOwnProperty('questions_id'))
        obj.questionsId = ApiClient.convertToType(data['questions_id'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} answer
 */
TeamQuestionInner.prototype.answer = undefined;

/**
 * @member {Date} createdAt
 */
TeamQuestionInner.prototype.createdAt = undefined;

/**
 * @member {String} id
 */
TeamQuestionInner.prototype.id = undefined;

/**
 * @member {String} question
 */
TeamQuestionInner.prototype.question = undefined;

/**
 * @member {String} questionsId
 */
TeamQuestionInner.prototype.questionsId = undefined;

/**
 * @member {Number} version
 */
TeamQuestionInner.prototype.version = undefined;

