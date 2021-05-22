const HttpClient = require("./httpClient");
const HttpRequest = require("./httpRequest");
const { newError, isValid, errorTypes } = require("./error");

class SubscriptionApi {
  constructor(config) {
    this.baseUrl = `${config.baseUrl}services`;
    this.httpClient = new HttpClient(config.apiKey);
  }

  async listSubscriptions(serviceId, userId) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The listSubscriptions method must be invoked with a non-empty string serviceId argument."
      );
    }
    if (!isValid.userId(userId)) {
      return newError(
        errorTypes.missing_parameter,
        "The listSubscriptions method must be invoked with a non-empty string userId argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users/${userId}/subscriptions`;
    const request = new HttpRequest("GET", url);
    return await this.httpClient.send(request);
  }

  async createSubscription(serviceId, userId, subscriptionData) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The createSubscription method must be invoked with a non-empty string serviceId argument."
      );
    }
    if (!isValid.userId(userId)) {
      return newError(
        errorTypes.missing_parameter,
        "The createSubscription method must be invoked with a non-empty string userId argument."
      );
    }
    if (!isValid.subscriptionData(subscriptionData)) {
      return newError(
        errorTypes.missing_parameter,
        "The createSubscription method must be invoked with non-empty url and eventType arguments."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users/${userId}/subscriptions`;
    const request = new HttpRequest("POST", url, subscriptionData);
    return await this.httpClient.send(request);
  }

  async deleteSubscription(serviceId, userId, subscriptionId) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The deleteSubscription method must be invoked with a non-empty string serviceId argument."
      );
    }
    if (!isValid.userId(userId)) {
      return newError(
        errorTypes.missing_parameter,
        "The deleteSubscription method must be invoked with a non-empty string userId argument."
      );
    }
    if (!isValid.subscriptionId(subscriptionId)) {
      return newError(
        errorTypes.missing_parameter,
        "The deleteSubscription method must be invoked with a non-empty string subscriptionId argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users/${userId}/subscriptions/${subscriptionId}`;
    const request = new HttpRequest("DELETE", url);
    return await this.httpClient.send(request);
  }

  async getSubscription(serviceId, userId, subscriptionId) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getSubscription method must be invoked with a non-empty string serviceId argument."
      );
    }
    if (!isValid.userId(userId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getSubscription method must be invoked with a non-empty string userId argument."
      );
    }
    if (!isValid.subscriptionId(subscriptionId)) {
      return newError(
        errorTypes.missing_parameter,
        "The getSubscription method must be invoked with a non-empty string subscriptionId argument."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users/${userId}/subscriptions/${subscriptionId}`;
    const request = new HttpRequest("GET", url);
    return await this.httpClient.send(request);
  }

  async updateSubscription(
    serviceId,
    userId,
    subscriptionId,
    subscriptionData
  ) {
    if (!isValid.serviceId(serviceId)) {
      return newError(
        errorTypes.missing_parameter,
        "The updateSubscription method must be invoked with a non-empty string serviceId argument."
      );
    }
    if (!isValid.userId(userId)) {
      return newError(
        errorTypes.missing_parameter,
        "The updateSubscription method must be invoked with a non-empty string userId argument."
      );
    }
    if (!isValid.subscriptionId(subscriptionId)) {
      return newError(
        errorTypes.missing_parameter,
        "The updateSubscription method must be invoked with a non-empty string subscriptionId argument."
      );
    }
    if (!isValid.subscriptionUpdateData(subscriptionData)) {
      return newError(
        errorTypes.missing_parameter,
        "The updateSubscription method must be invoked with a non-empty subscriptionData object that contains a non-empty event_types list."
      );
    }

    const url = `${this.baseUrl}/${serviceId}/users/${userId}/subscriptions/${subscriptionId}`;
    const request = new HttpRequest("PUT", url, subscriptionData);
    return await this.httpClient.send(request);
  }
}

module.exports = SubscriptionApi;
