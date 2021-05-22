const HttpClient = require("./httpClient");
const HttpRequest = require("./httpRequest");
const { newError, isValid, errorTypes } = require("./error");

class EventApi {
  constructor(config) {
    this.baseUrl = `${config.baseUrl}services`;
    this.httpClient = new HttpClient(config.apiKey);
  }

  async listEvents(serviceId, userId) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The listEvents method must be invoked with a non-empty string serviceId argument."
      );
    }
    if (!isValid.userId(userId)) {
      return newError(
        errorTypes.missing_parameter,
        "The listEvents method must be invoked with a non-empty string userId argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users/${userId}/events`;
    const request = new HttpRequest("GET", url);
    return await this.httpClient.send(request);
  }

  async createEvent(serviceId, userId, eventData) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The createEvent method must be invoked with a non-empty string serviceId argument."
      );
    }
    if (!isValid.userId(userId)) {
      return newError(
        errorTypes.missing_parameter,
        "The createEvent method must be invoked with a non-empty string userId argument."
      );
    }
    if (!isValid.eventData(eventData)) {
      return newError(
        errorTypes.missing_parameter,
        "The createEvent method must be invoked with an eventData argument containing non-empty event_type and payload properties."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users/${userId}/events`;
    const request = new HttpRequest("POST", url, eventData);
    return await this.httpClient.send(request);
  }

  async getEvent(serviceId, userId, eventId) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getEvent method must be invoked with a non-empty string serviceId argument."
      );
    }
    if (!isValid.userId(userId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getEvent method must be invoked with a non-empty string userId argument."
      );
    }
    if (!isValid.eventId(eventId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getEvent method must be invoked with a non-empty string eventId argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users/${userId}/events/${eventId}`;
    const request = new HttpRequest("GET", url);
    return await this.httpClient.send(request);
  }
}

module.exports = EventApi;
