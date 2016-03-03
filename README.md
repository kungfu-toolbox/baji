# Kungfu

[![Build Status](https://travis-ci.org/kungfu-toolbox/kungfu.svg?branch=master)](https://travis-ci.org/kungfu-toolbox/kungfu)

Kungfu.js is a Javascript compiler designed to solve the callback hell problem.

**Warning:** Kungfu is still under development, please do not use it in any production environment.

# Example

To solve the callback hell problem, we write code like this:

```javascript
function code() {
    fs = require('fs');
    fs.readFile('/etc/hosts', 'utf8', kf(err, data));
    if (err) {
        return console.log(err);
    }
    console.log(data);
}
```

Then kungfu master compiles it into this:


```javascript
function code() {
    fs = require('fs');
    fs.readFile('/etc/hosts', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    });
}
```

Try Kungfu:

```
node examples/demo.js
```

# LICENSE

[MIT License](/LICENSE)
