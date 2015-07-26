var escodegen = require('escodegen');

var geneartor = module.exports;

geneartor.generate = function(parsed) {
    return escodegen.generate(parsed);
};
