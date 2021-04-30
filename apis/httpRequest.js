class HttpRequest {
  constructor(method, url, data) {
    this.attempt = 1;
    this.method = method;
    this.url = url;
    this.data = data;
  }
}

exports.HttpRequest = HttpRequest;
