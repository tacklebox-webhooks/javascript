const AuthorizationApi = require("./apis/authorization");
const ServiceApi = require("./apis/service");
const EventTypeApi = require("./apis/eventType");
const UserApi = require("./apis/user");
const SubscriptionApi = require("./apis/subscription");
const EventApi = require("./apis/event");
const MessageApi = require("./apis/message");

class CaptainHook {
  constructor(apiKey, serviceUrl) {
    const config = {
      baseUrl: serviceUrl, // this will be different for each user of the service
      apiKey,
    };

    this.configuration = config;
    // this.authorization = new Authorization(config);
    this.service = new Service(config);
    this.eventType = new EventType(config);
    this.user = new User(config);
    this.subscription = new Subscription(config);
    this.event = new Event(config);
    // this.message = new Message(config);
  }
}
exports.CaptainHook = CaptainHook;

// class Authorization {
//   constructor(config) {
//     this.api = new AuthorizationApi(config);
//   }
//   async authorizeDashboardUser(serviceId, userId) {
//     return await this.api.authorizeDashboardUser(serviceId, userId);
//   }
//   async logout(serviceId, userId) {
//     return await this.api.logoutDashboardUser(serviceId, userId);
//   }
// }

class Service {
  constructor(config) {
    this.api = new ServiceApi(config);
  }
  async list() {
    return await this.api.listServices();
  }
  async create(serviceData) {
    return await this.api.createService(serviceData);
  }
  async get(serviceId) {
    return await this.api.getService(serviceId);
  }
  // async delete(serviceId) {
  //   return await this.api.deleteService(serviceId);
  // }
}

class EventType {
  constructor(config) {
    this.api = new EventTypeApi(config);
  }
  async list(serviceId) {
    return await this.api.listEventTypes(serviceId);
  }
  async create(serviceId, eventTypeData) {
    return await this.api.createEventType(serviceId, eventTypeData);
  }
  async get(serviceId, eventTypeId) {
    return await this.api.getEventType(serviceId, eventTypeId);
  }
  // async delete(serviceId, eventTypeId) {
  //   return await this.api.deleteEventType(serviceId, eventTypeId);
  // }
}

class User {
  constructor(config) {
    this.api = new UserApi(config);
  }
  async list(serviceId) {
    return await this.api.listUsers(serviceId);
  }
  async create(serviceId, userData) {
    return await this.api.createUser(serviceId, userData);
  }
  async get(serviceId, userId) {
    return await this.api.getUser(serviceId, userId);
  }
  // async delete(serviceId, userId) {
  //   return this.api.deleteUser(serviceId, userId);
  // }
}

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
  // async getSecret(serviceId, userId, subscriptionId) {
  //   return await this.api.getSecret(serviceId, userId, subscriptionId);
  // }
  // async delete(serviceId, userId, subscriptionId) {
  //   return await this.api.deleteSubscription(serviceId, userId, subscriptionId);
  // }
}

class Event {
  constructor(config) {
    this.api = new EventApi(config);
  }
  async list(serviceId, userId) {
    return await this.api.listEvents(serviceId, userId);
  }
  async create(serviceId, userId, eventData) {
    return await this.api.createEvent(serviceId, userId, eventData);
  }
  async get(serviceId, userId, eventId) {
    return await this.api.getEvent(serviceId, userId, eventId);
  }
}

// class Message {
//   constructor(config) {
//     this.api = new MessageApi(config);
//   }
//   create(serviceId, userId, messageData) {
//     return this.api.createMessage(serviceId, userId, messageData);
//   }
//   get(serviceId, userId, messageId) {
//     return this.api.getMessage(serviceId, userId, messageId);
//   }
//   list(serviceId, userId, options) {
//     // options will dictate whether message should be pulled per subscription, user, or service
//     return this.api.listMessages(serviceId, userId, options);
//   }
// }
