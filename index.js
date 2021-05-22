const Service = require("./components/service");
const EventType = require("./components/eventType");
const User = require("./components/user");
const Subscription = require("./components/subscription");
const Event = require("./components/event");
const Message = require("./components/message");

class Tacklebox {
  constructor(apiKey, baseUrl) {
    const config = {
      apiKey,
      baseUrl,
    };

    this.service = new Service(config);
    this.eventType = new EventType(config);
    this.user = new User(config);
    this.subscription = new Subscription(config);
    this.event = new Event(config);
    this.message = new Message(config);
  }
}

module.exports = Tacklebox;
