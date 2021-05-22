const EventTypeApi = require("../apis/eventTypeApi");

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

module.exports = EventType;