const UserApi = require("../apis/userApi");

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

module.exports = User;