const SubscriptionApi = require("../apis/subscriptionApi");

class Subscription {
  constructor(config) {
    this.api = new SubscriptionApi(config);
  }
  async list(serviceId, userId) {
    return await this.api.listSubscriptions(serviceId, userId);
  }
  async create(serviceId, userId, subscriptionData) {
    return await this.api.createSubscription(
      serviceId,
      userId,
      subscriptionData
    );
  }
  async get(serviceId, userId, subscriptionId) {
    return await this.api.getSubscription(serviceId, userId, subscriptionId);
  }
  async update(serviceId, userId, subscriptionId, subscriptionData) {
    return await this.api.updateSubscription(
      serviceId,
      userId,
      subscriptionId,
      subscriptionData
    );
  }

  // async delete(serviceId, userId, subscriptionId) {
  //   return await this.api.deleteSubscription(serviceId, userId, subscriptionId);
  // }
}

module.exports = Subscription;