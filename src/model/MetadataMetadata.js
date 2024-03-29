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

  var ApiClient = require('../ApiClient');

  /**
   * The MetadataMetadata model module.
   * @module model/MetadataMetadata
   */

  /**
   * Constructs a <code>MetadataMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataMetadata} obj Optional instance to populate.
   * @return {module:model/MetadataMetadata} The populated <code>MetadataMetadata</code> instance.
   */
  var constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data.name, 'String');
      if (data.hasOwnProperty('guid'))
        obj.guid = ApiClient.convertToType(data.guid, 'String');
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data.role, 'String');
    }
    return obj;
  };

  /**
   * Constructs a new <code>MetadataMetadata</code>.
   * metadata definition
   * @alias module:model/MetadataMetadata
   * @class
   * @param name {String} Name of the model view
   * @param guid {String} Unique identifier for the model view
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataMetadata} obj Optional instance to populate.
   */
  var exports = function (name, guid, theData, obj) {
    var _this = this;

    _this.name = name;
    _this.guid = guid;

    return constructFromObject(theData, obj || _this);
  };

  /**
   * Constructs a <code>MetadataMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataMetadata} obj Optional instance to populate.
   * @return {module:model/MetadataMetadata} The populated <code>MetadataMetadata</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * Name of the model view
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Unique identifier for the model view
   * @member {String} guid
   */
  exports.prototype.guid = undefined;

  /**
   * Unique identifier for the model view
   * @member {String} role
   */
  exports.prototype.role = undefined;

  return exports;
}());


