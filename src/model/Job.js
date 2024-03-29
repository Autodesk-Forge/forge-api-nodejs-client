/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function () {
  'use strict';

  var ApiClient = require('../ApiClient'),
    JobAcceptedJobs = require('./JobAcceptedJobs');



  /**
   * The Job model module.
   * @module model/Job
   */

  /**
   * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Job} obj Optional instance to populate.
   * @return {module:model/Job} The populated <code>Job</code> instance.
   */
  var constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('result')) {
        obj.result = ApiClient.convertToType(data.result, 'String');
      }
      if (data.hasOwnProperty('urn')) {
        obj.urn = ApiClient.convertToType(data.urn, 'String');
      }
      if (data.hasOwnProperty('acceptedJobs')) {
        obj.acceptedJobs = JobAcceptedJobs.constructFromObject(data.acceptedJobs);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>Job</code>.
   * @alias module:model/Job
   * @class
   * @param result {String} reporting success status
   * @param urn {String} the urn identifier of the source file
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/Job} obj Optional instance to populate.
   */
  var exports = function (result, urn, theData, obj) {
    var _this = this;

    _this.result = result;
    _this.urn = urn;

    return constructFromObject(theData, obj || _this);
  };

  /**
   * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Job} obj Optional instance to populate.
   * @return {module:model/Job} The populated <code>Job</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * reporting success status
   * @member {String} result
   */
  exports.prototype.result = undefined;
  /**
   * the urn identifier of the source file
   * @member {String} urn
   */
  exports.prototype.urn = undefined;
  /**
   * @member {module:model/JobAcceptedJobs} acceptedJobs
   */
  exports.prototype.acceptedJobs = undefined;



  return exports;
}());


