var parser = require('./lib/parser');
var generator = require('./lib/generator');

exports.compile = function(code, options) {
    var parsed = parser.parse(code);
    return generator.generate(parsed);
};