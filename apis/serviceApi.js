const HttpClient = require("./httpClient");
const HttpRequest = require("./httpRequest");
const { newError, isValid, errorTypes } = require("./error");

class ServiceApi {
  constructor(config) {
    this.baseUrl = `${config.baseUrl}/services`;
    this.httpClient = new HttpClient(config.apiKey);
  }

  async listServices() {
    const url = this.baseUrl;
    const request = new HttpRequest("GET", url);
    return await this.httpClient.send(request);
  }

  async createService(serviceData) {
    if (!isValid.serviceData(serviceData)) {
      return newError(
        errorTypes.missing_parameter,
        "The createService method must be invoked with a non-empty string name argument."
      );
    }

    const url = this.baseUrl;
    const request = new HttpRequest("POST", url, serviceData);
    return await this.httpClient.send(request);
  }

  // async deleteService(serviceId) {
  //   const url = `${this.baseUrl}/${serviceId}`;
  //   const request = new HttpRequest("DELETE", url);
  //   return await this.httpClient.send(request);
  // }

  async getService(serviceId) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getServices method must be invoked with a non-empty string serviceId argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}`;
    const request = new HttpRequest("GET", url);
    return await this.httpClient.send(request);
  }
}

module.exports = ServiceApi;
