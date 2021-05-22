const EventApi = require("../apis/eventApi");

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

module.exports = Event;