const HttpClient = require("./httpClient");
const HttpRequest = require("./httpRequest");
const { newError, isValid, errorTypes } = require("./error");

class EventTypeApi {
  constructor(config) {
    this.baseUrl = `${config.baseUrl}/services`;
    this.httpClient = new HttpClient(config.apiKey);
  }

  async listEventTypes(serviceId) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The listEventTypes method must be invoked with a non-empty string serviceId argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/event_types`;
    const request = new HttpRequest("GET", url);
    return await this.httpClient.send(request);
  }

  async createEventType(serviceId, eventTypeData) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The createEventTypes method must be invoked with a non-empty string serviceId argument."
      );
    } else if (!isValid.eventTypeData(eventTypeData)) {
      return newError(
        errorTypes.missing_parameter,
        "The createEventTypes method must be invoked with an eventTypeData object that contains a non-empty string name property."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/event_types`;
    const request = new HttpRequest("POST", url, eventTypeData);
    return await this.httpClient.send(request);
  }

  // async deleteEventType(serviceId, eventTypeId) {
  //   const url = `${this.baseUrl}/${serviceId}/event_types/${eventTypeId}`;
  //   const request = new HttpRequest("DELETE", url);
  //   return await httpClient.send(request);
  // }

  async getEventType(serviceId, eventTypeId) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getEventType method must be invoked with a non-empty string serviceId argument."
      );
    } else if (!isValid.eventTypeId(eventTypeId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getEventType method must be invoked with a non-empty string eventTypeId argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/event_types/${eventTypeId}`;
    const request = new HttpRequest("GET", url);
    return await this.httpClient.send(request);
  }
}

module.exports = EventTypeApi;
