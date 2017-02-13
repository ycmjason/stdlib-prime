/* Import dependencies, declare constants */

/**
* Your function call
* @param {Object} params Execution parameters
*   Members
*   - {Array} args Arguments passed to function
*   - {Object} kwargs Keyword arguments (key-value pairs) passed to function
*   - {String} remoteAddress The IPv4 or IPv6 address of the caller
*
* @param {Function} callback Execute this to end the function call
*   Arguments
*   - {Error} error The error to show if function fails
*   - {Any} returnValue JSON serializable (or Buffer) return value
*/

var prime = require('../lib/prime');

module.exports = (params, callback) => {
  var n = params.kwargs['n']
  if(!n) return callback(null, 'undefined n');
  if(n <= 0) return callback(null, 'n <= 0');

  var p = prime(n);

  callback(null, p);

};
