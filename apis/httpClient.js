const axios = require("axios");
const { newError, errorTypes } = require("./error");

class HttpClient {
  constructor(apiKey) {
    this.MAX_RETRY_ATTEMPTS = 5;
    this.MAX_TIMEOUT = 5000;
    this.headers = {
      "x-api-key": apiKey,
      "Content-Type": "application/json",
    };
  }

  extractConfig(request) {
    const config = {
      method: request.method,
      url: request.url,
      headers: this.headers,
      timeout: this.MAX_TIMEOUT,
    };

    if (request.data) {
      config.data = request.data;
    }

    return config;
  }

  async send(request) {
    const config = this.extractConfig(request);

    while (request.attempt <= this.MAX_RETRY_ATTEMPTS) {
      try {
        const response = await axios(config);
        return response.data;
      } catch (error) {
        if (error.code !== "ECONNABORTED" && error.response) {
          const webhookError = error.response.data;
          return newError(webhookError.error_type, webhookError.detail);
        } else if (error.code !== "ECONNABORTED") {
          return newError(error.code, { message: error.message });
        }

        console.log(`Error: exceeded max timeout of ${config.timeout}ms.`);
        if (request.attempt >= this.MAX_RETRY_ATTEMPTS) {
          return newError(
            errorTypes.max_retries_reached,
            "Webhook server did not respond after multiple retries."
          );
        }

        request.attempt += 1;
      }
    }
  }
}

module.exports = HttpClient;
