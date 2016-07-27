var request = require('request');

module.exports = {

  request: function(method, apiUrl, apiKey, data, callback) {
    if (!method) throw new Error('method is a required argument');
    if (!apiUrl) throw new Error('the url of a api is a required argument');
    if (!apiKey) throw new Error('the key of a api is a required argument');

    var options = {};
    options.method = method;
    options.url = apiUrl;
    options.headers = { 'Content-Type': 'application/json', authorization: 'Basic ' + apiKey };

    if (data) options.form = data;

    request(options, function (error, response, body) {
      if (error) return callback(error);
      else return callback(JSON.parse(body));
    });
  }

}
