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
    CreateStorageDataAttributes = require('./CreateStorageDataAttributes'),
    CreateStorageDataRelationships = require('./CreateStorageDataRelationships');



  /**
   * The CreateStorageData model module.
   * @module model/CreateStorageData
   */

  /**
   * Constructs a <code>CreateStorageData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateStorageData} obj Optional instance to populate.
   * @return {module:model/CreateStorageData} The populated <code>CreateStorageData</code> instance.
   */
  var constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj.type = ApiClient.convertToType(data.type, 'String');
      }
      if (data.hasOwnProperty('attributes')) {
        obj.attributes = CreateStorageDataAttributes.constructFromObject(data.attributes);
      }
      if (data.hasOwnProperty('relationships')) {
        obj.relationships = CreateStorageDataRelationships.constructFromObject(data.relationships);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>CreateStorageData</code>.
   * @alias module:model/CreateStorageData
   * @class
   * @param type {module:model/CreateStorageData.TypeEnum} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateStorageData} obj Optional instance to populate.
   */
  var exports = function (type, theData, obj) {
    var _this = this;

    _this.type = type;

    return constructFromObject(theData, obj || _this);
  };

  /**
   * Constructs a <code>CreateStorageData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateStorageData} obj Optional instance to populate.
   * @return {module:model/CreateStorageData} The populated <code>CreateStorageData</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {module:model/CreateStorageData.TypeEnum} type
   */
  exports.prototype.type = undefined;
  /**
   * @member {module:model/CreateStorageDataAttributes} attributes
   */
  exports.prototype.attributes = undefined;
  /**
   * @member {module:model/CreateStorageDataRelationships} relationships
   */
  exports.prototype.relationships = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "objects"
     * @const
     */
    "objects": "objects"
  };


  return exports;
}());


