const HttpClient = require("./httpClient");
const HttpRequest = require("./httpRequest");

class EventTypeApi {
  constructor(config) {
    this.baseUrl = `${config.baseUrl}/services`;
    this.httpClient = new HttpClient(config.apiKey);
  }

  async listEventTypes(serviceId) {
    const url = `${this.baseUrl}/${serviceId}/event-types`;
    const request = new HttpRequest("GET", url);
    return await httpClient.send(request);
  }

  async createEventType(serviceId, eventTypeData) {
    const url = `${this.baseUrl}/${serviceId}/event-types`;
    const request = new HttpRequest("POST", url, eventTypeData);
    return await httpClient.send(request);
  }

  async deleteEventType(serviceId, eventTypeId) {
    const url = `${this.baseUrl}/${serviceId}/event-types/${eventTypeId}`;
    const request = new HttpRequest("DELETE", url);
    return await httpClient.send(request);
  }

  async getEventType(serviceId, eventTypeId) {
    const url = `${this.baseUrl}/${serviceId}/event-types/${eventTypeId}`;
    const request = new HttpRequest("GET", url);
    return await httpClient.send(request);
  }

  async updateEventType(serviceId, eventTypeId, eventTypeData) {
    const url = `${this.baseUrl}/${serviceId}/event-types/${eventTypeId}`;
    const request = new HttpRequest("PUT", url, eventTypeData);
    return await httpClient.send(request);
  }
}

exports.EventTypeApi = EventTypeApi;
