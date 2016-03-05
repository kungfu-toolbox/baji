var baji = require('../baji');

function code() {
    fs = require('fs');
    fs.readFile('/etc/hosts', 'utf8', kf(err, data));
    if (err) {
        return console.log(err);
    }
    console.log(data);
}

var compiled = baji.compile(code.toString());
console.log(compiled);
