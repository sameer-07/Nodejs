var request = require('request');
var url = 'http://www.google.com';
request({ url: url }, function (err, response) {
    var data = JSON.parse(response.body);
    console.log(data.currently);
});
