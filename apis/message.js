const HttpClient = require("./httpClient");
const HttpRequest = require("./httpRequest");
const { newError, isValid, errorTypes } = require("./error");

class EventApi {
  constructor(config) {
    this.baseUrl = `${config.baseUrl}/services`;
    this.httpClient = new HttpClient(config.apiKey);
  }

  async listMessages(serviceId, userId) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The listMessages method must be invoked with a non-empty string serviceId argument."
      );
    }
    if (!isValid.userId(userId)) {
      return newError(
        errorTypes.missing_parameter,
        "The listMessages method must be invoked with a non-empty string userId argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users/${userId}/messages`;
    const request = new HttpRequest("GET", url);
    return await this.httpClient.send(request);
  }

  async resendMessage(serviceId, userId, messageId) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getMessage method must be invoked with a non-empty string serviceId argument."
      );
    }
    if (!isValid.userId(userId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getMessage method must be invoked with a non-empty string userId argument."
      );
    }
    if (!isValid.messageId(messageId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getMessage method must be invoked with a non-empty string messageId argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users/${userId}/messages/${messageId}/resend`;
    const request = new HttpRequest("POST", url);
    return await this.httpClient.send(request);
  }

  async getMessage(serviceId, userId, messageId) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getMessage method must be invoked with a non-empty string serviceId argument."
      );
    }
    if (!isValid.userId(userId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getMessage method must be invoked with a non-empty string userId argument."
      );
    }
    if (!isValid.messageId(messageId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getMessage method must be invoked with a non-empty string messageId argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users/${userId}/messages/${messageId}`;
    const request = new HttpRequest("GET", url);
    return await this.httpClient.send(request);
  }
}

module.exports = EventApi;
