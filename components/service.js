const ServiceApi = require("../apis/serviceApi");

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

module.exports = Service;