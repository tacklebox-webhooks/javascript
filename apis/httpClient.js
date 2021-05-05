const axios = require("axios");
const { newError, errorTypes } = require("./error");

class HttpClient {
  constructor(apiKey) {
    this.MAX_RETRY_ATTEMPTS = 5;
    this.headers = {
      Authorization: apiKey,
      "Content-Type": "application/json",
    };
  }

  async send(request) {
    const config = this.extractConfig(request);

    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log(error);
      if (request.attempt < this.MAX_RETRY_ATTEMPTS) {
        request.attempts += 1;
        return this.send(request);
      }

      return newError(
        errorTypes.max_retries_reached,
        "Webhook server did not respond."
      );
    }
  }

  extractConfig(request) {
    const config = {
      method: request.method,
      url: request.url,
      headers: this.headers,
      timeout: 5000,
    };

    if (request.data) {
      config.data = request.data;
    }

    return config;
  }
}

exports.HttpClient = HttpClient;
