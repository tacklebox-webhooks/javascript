const MessageApi = require("../apis/messageApi");

class Message {
  constructor(config) {
    this.api = new MessageApi(config);
  }
  async list(serviceId, userId) {
    return await this.api.listMessages(serviceId, userId);
  }
  async resend(serviceId, userId, messageId) {
    return await this.api.resendMessage(serviceId, userId, messageId);
  }
  async get(serviceId, userId, messageId) {
    return await this.api.getMessage(serviceId, userId, messageId);
  }
}

module.exports = Message;