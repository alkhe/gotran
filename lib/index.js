'use strict';

var _got = require('got');

var _got2 = _interopRequireDefault(_got);

var _looseJson = require('loose-json');

var _looseJson2 = _interopRequireDefault(_looseJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _process$argv$slice = process.argv.slice(2);

var _process$argv$slice2 = _toArray(_process$argv$slice);

var in_lang = _process$argv$slice2[0];
var out_lang = _process$argv$slice2[1];

var text = _process$argv$slice2.slice(2);

text = text.join(' ');

(0, _got2.default)('https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + in_lang + '&tl=' + out_lang + '&dt=t&q=' + encodeURIComponent(text)).then(function (result) {
	console.log((0, _looseJson2.default)(result.body)[0][0][0]);
}).catch(function (err) {
	console.log(err.response.body);
});