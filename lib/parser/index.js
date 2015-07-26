var esprima = require('esprima');

var parser = module.exports;

parser.parse = function(code) {
    var parsed;
    try {
        parsed = esprima.parse(code);
    } catch (err) {
        throw new Error(err.message);
    }
    return parsed;
};
