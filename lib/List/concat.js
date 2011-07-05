// Array.prototype.concat for array-like objects.

'use strict';

var f         = require('../Function/functionalize')
  , bindApply = require('../Function/bind-apply')
  , isList    = require('./is-list')
  , map       = require('./map').call
  , toArray   = require('./to-array').call

  , concat  = bindApply(Array.prototype.concat)

  , mapArg;

mapArg = function (el) {
	if (isList(el)) {
		if (!Array.isArray(el)) {
			return toArray(el);
		}
	}
	return el;
};

module.exports = f(function () {
	return concat(toArray(this), map(arguments, mapArg));
});