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
    JsonApiLink = require('./JsonApiLink');



  /**
   * The JsonApiRelationshipsLinksRefsLinks model module.
   * @module model/JsonApiRelationshipsLinksRefsLinks
   */

  /**
   * Constructs a <code>JsonApiRelationshipsLinksRefsLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JsonApiRelationshipsLinksRefsLinks} obj Optional instance to populate.
   * @return {module:model/JsonApiRelationshipsLinksRefsLinks} The populated <code>JsonApiRelationshipsLinksRefsLinks</code> instance.
   */
  var constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj.self = JsonApiLink.constructFromObject(data.self);
      }
      if (data.hasOwnProperty('related')) {
        obj.related = JsonApiLink.constructFromObject(data.related);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>JsonApiRelationshipsLinksRefsLinks</code>.
   * @alias module:model/JsonApiRelationshipsLinksRefsLinks
   * @class
   * @param self {module:model/JsonApiLink} 
   * @param related {module:model/JsonApiLink} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JsonApiRelationshipsLinksRefsLinks} obj Optional instance to populate.
   */
  var exports = function (self, related, theData, obj) {
    var _this = this;

    _this.self = self;
    _this.related = related;

    return constructFromObject(theData, obj || _this);
  };

  /**
   * Constructs a <code>JsonApiRelationshipsLinksRefsLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JsonApiRelationshipsLinksRefsLinks} obj Optional instance to populate.
   * @return {module:model/JsonApiRelationshipsLinksRefsLinks} The populated <code>JsonApiRelationshipsLinksRefsLinks</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {module:model/JsonApiLink} self
   */
  exports.prototype.self = undefined;
  /**
   * @member {module:model/JsonApiLink} related
   */
  exports.prototype.related = undefined;



  return exports;
}());


