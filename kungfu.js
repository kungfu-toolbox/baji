var esprima = require('esprima');
var escodegen = require('escodegen');

exports.compile = function(code, options) {
    try {
        var parsed = esprima.parse(code);
    } catch (err) {
        throw new Error(err.message);
    }
    return escodegen.generate(parsed);
}