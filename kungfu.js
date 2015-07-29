var parser = require('./lib/parser');
var generator = require('./lib/generator');
var transformer = require('./lib/transformer');

exports.compile = function(code, options) {
    var parsed = parser.parse(code);
    parsed = transformer.transform(parsed);
    return generator.generate(parsed);
};