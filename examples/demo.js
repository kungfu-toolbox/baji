var kungfu = require('../kungfu');

function code() {
    fs = require('fs');
    fs.readFile('/etc/hosts', 'utf8', kf(err, data));
    if (err) {
        return console.log(err);
    }
    console.log(data);
}

var compiled = kungfu.compile(code.toString());
console.log(compiled);
