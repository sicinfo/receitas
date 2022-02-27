/**
 * @author moreira
 * @version 0.1.0
 */
'use strict';

const { Service, logging } = require('sicinfo-router')(__filename);

exports.Service = class extends Service {

}
  

module.exports = (filename = '') => {
  exports.logging = logging.call(this, filename)
  exports.logging('Loading...');
  return exports;
}
