const HttpClient = require("./httpClient");
const HttpRequest = require("./httpRequest");

class ServiceApi {
  constructor(config) {
    this.baseUrl = `${config.baseUrl}/services`;
    this.httpClient = new HttpClient(config.apiKey);
  }

  async listServices() {
    const url = this.baseUrl;
    const request = new HttpRequest("GET", url);
    return await httpClient.send(request);
  }

  async createService(serviceData) {
    const url = this.baseUrl;
    const request = new HttpRequest("POST", url, serviceData);
    return await httpClient.send(request);
  }

  async deleteService(serviceId) {
    const url = `${this.baseUrl}/${serviceId}`;
    const request = new HttpRequest("DELETE", url);
    return await httpClient.send(request);
  }

  async getService(serviceId) {
    const url = `${this.baseUrl}/${serviceId}`;
    const request = new HttpRequest("GET", url);
    return await httpClient.send(request);
  }

  async updateService(serviceId, serviceData) {
    const url = `${this.baseUrl}/${serviceId}`;
    const request = new HttpRequest("PUT", url, serviceData);
    return await httpClient.send(request);
  }
}

exports.ServiceApi = ServiceApi;
