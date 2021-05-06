const HttpClient = require("./httpClient");
const HttpRequest = require("./httpRequest");
const { newError, isValid, errorTypes } = require("./error");

class UserApi {
  constructor(config) {
    this.baseUrl = `${config.baseUrl}/services`;
    this.httpClient = new HttpClient(config.apiKey);
  }

  async createUser(serviceId, userData) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getUser method must be invoked with a non-empty string serviceId argument."
      );
    }

    if (!isValid.userData(userData)) {
      return newError(
        errorTypes.missing_parameter,
        "The createUser method must be invoked with a non-empty string name argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users`;
    const request = new HttpRequest("POST", url, userData);
    return await this.httpClient.send(request);
  }

  async getUser(serviceId, userId) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getUser method must be invoked with a non-empty string serviceId argument."
      );
    }

    if (!isValid.userId(userId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getUser method must be invoked with a non-empty string userId argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users/${userId}`;
    const request = new HttpRequest("GET", url);
    return await this.httpClient.send(request);
  }

  async listUsers(serviceId) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The listUsers method must be invoked with a non-empty string serviceId argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users`;
    const request = new HttpRequest("GET", url);
    return await this.httpClient.send(request);
  }

  // async deleteService(serviceId) {
  //   const url = `${this.baseUrl}/${serviceId}`;
  //   const request = new HttpRequest("DELETE", url);
  //   return await this.httpClient.send(request);
  // }
}

module.exports = UserApi;
