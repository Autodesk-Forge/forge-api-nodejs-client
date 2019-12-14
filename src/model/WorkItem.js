/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
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

module.exports = (function() {
  'use strict';

  var ApiClient = require('../ApiClient');



  /**
   * The WorkItem model module.
   * @module model/WorkItem
   * @deprecated
   */

   /**
    * Constructs a <code>WorkItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WorkItem} obj Optional instance to populate.
    * @return {module:model/WorkItem} The populated <code>WorkItem</code> instance.
    * @deprecated
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('Arguments')) {
        obj['Arguments'] = ApiClient.convertToType(data['Arguments'], Object);
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('StatusDetail')) {
        obj['StatusDetail'] = ApiClient.convertToType(data['StatusDetail'], Object);
      }
      if (data.hasOwnProperty('AvailabilityZone')) {
        obj['AvailabilityZone'] = ApiClient.convertToType(data['AvailabilityZone'], 'String');
      }
      if (data.hasOwnProperty('ActivityId')) {
        obj['ActivityId'] = ApiClient.convertToType(data['ActivityId'], 'String');
      }
      if (data.hasOwnProperty('Version')) {
        obj['Version'] = ApiClient.convertToType(data['Version'], 'Integer');
      }
      if (data.hasOwnProperty('Timestamp')) {
        obj['Timestamp'] = ApiClient.convertToType(data['Timestamp'], 'String');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>WorkItem</code>.
   * @alias module:model/WorkItem
   * @class
   * @param id {String} 
   * @param _arguments {Object} 
   * @param activityId {String} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkItem} obj Optional instance to populate.
   * @deprecated
   */
  var exports = function(id, _arguments, activityId, theData, obj) {
    var _this = this;

    _this['Id'] = id;
    _this['Arguments'] = _arguments;



    _this['ActivityId'] = activityId;



    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>WorkItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkItem} obj Optional instance to populate.
   * @return {module:model/WorkItem} The populated <code>WorkItem</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * @member {Object} Arguments
   */
  exports.prototype['Arguments'] = undefined;
  /**
   * @member {String} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * @member {Object} StatusDetail
   */
  exports.prototype['StatusDetail'] = undefined;
  /**
   * @member {String} AvailabilityZone
   */
  exports.prototype['AvailabilityZone'] = undefined;
  /**
   * @member {String} ActivityId
   */
  exports.prototype['ActivityId'] = undefined;
  /**
   * @member {Integer} Version
   */
  exports.prototype['Version'] = undefined;
  /**
   * @member {String} Timestamp
   */
  exports.prototype['Timestamp'] = undefined;



  return exports;
}());


