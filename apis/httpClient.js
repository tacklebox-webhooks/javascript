const axios = require("axios");
const { WebhookCommunicationError } = require("./error");

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
    } catch (err) {
      if (request.attempt < this.MAX_RETRY_ATTEMPTS) {
        request.attempts += 1;
        return this.send(request);
      }
      throw new WebhookCommunicationError(
        `Webhook service could not be ` +
          `reached after ${this.MAX_RETRY_ATTEMPTS} retries.`
      );
    }
  }

  extractConfig(request) {
    const config = {
      method: request.method,
      url: request.url,
      headers: this.headers,
    };

    if (request.data) {
      config.data = request.data;
    }

    return config;
  }
}

exports.HttpClient = HttpClient;
