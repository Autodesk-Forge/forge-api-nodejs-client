/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * Contact: forge.help@autodesk.com
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
   * The DerivativeDownloadUrl model module.
   * @module model/DerivativeDownloadUrl
   */

  /**
   * Constructs a <code>DerivativeDownloadUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DerivativeDownloadUrl} obj Optional instance to populate.
   * @return {module:model/DerivativeDownloadUrl} The populated <code>DerivativeDownloadUrl</code> instance.
   */
  var constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('etag')) {
        obj.etag = ApiClient.convertToType(data.etag, 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj.size = ApiClient.convertToType(data.size, 'Integer');
      }
      if (data.hasOwnProperty('url')) {
        obj.url = ApiClient.convertToType(data.url, 'String');
      }
      if (data.hasOwnProperty('content-type')) {
        obj.contentType = ApiClient.convertToType(data.contentType, 'String');
      }
      if (data.hasOwnProperty('expiration')) {
        obj.expiration = ApiClient.convertToType(data.expiration, 'Integer');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>DerivativeDownloadUrl</code>.
   * @alias module:model/DerivativeDownloadUrl
   * @class
   * @param etag {String} The calculated ETag hash of the derivative/file.
   * @param size {Integer} The size of the derivative/file, in bytes.
   * @param url {String} The download URL.
   * @param contentType {String} The content type of the derivative/file.
   * @param expiration {Integer} The 13-digit epoch time stamp indicating when the signed cookies expire.
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/DerivativeDownloadUrl} obj Optional instance to populate.
   */
  var exports = function (etag, size, url, contentType, expiration, theData, obj) {
    var _this = this;

    _this.etag = etag;
    _this.size = size;
    _this.url = url;
    _this.contentType = contentType;
    _this.expiration = expiration;

    return constructFromObject(theData, obj || _this);
  };

  /**
   * Constructs a <code>DerivativeDownloadUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DerivativeDownloadUrl} obj Optional instance to populate.
   * @return {module:model/DerivativeDownloadUrl} The populated <code>DerivativeDownloadUrl</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * The calculated ETag hash of the derivative/file, if available.
   * @member {String} etag
   */
  exports.prototype.etag = undefined;
  /**
   * The size of the derivative/file, in bytes.
   * @member {Integer} size
   */
  exports.prototype.size = undefined;
  /**
   * The download URL.
   * @member {String} url
   */
  exports.prototype.url = undefined;
  /**
   * The content type of the derivative/file.
   * @member {String} contentType
   */
  exports.prototype.contentType = undefined;
  /**
   * The 13-digit epoch time stamp indicating when the signed cookies expire.
   * @member {Integer} expiration
   */
  exports.prototype.expiration = undefined;


  return exports;
}());
