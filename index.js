var url = 'https://www.livecoding.tv:443/api/';

function Livecoding(apiKey) {
  if (!apiKey) throw new error('apiKey paramater are missing');

  this.options = {};
  this.options.apiKey = apiKey;
  this.options.url = url;
}

module.exports = Livecoding;
