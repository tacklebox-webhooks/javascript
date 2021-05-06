const newError = (error_type, detail) => {
  return {
    Error: {
      error_type,
      detail,
    },
  };
};

const errorTypes = {
  missing_parameter: "missing_parameter",
  max_retries_reached: "max_retries_reached",
};

const isValid = {
  id(id) {
    return id && typeof id === "string";
  },
  name(data) {
    return data.name && typeof data.name === "string";
  },
  serviceId(id) {
    return this.id(id);
  },
  serviceData(data) {
    return this.name(data);
  },
  eventTypeId(id) {
    return this.id(id);
  },
  eventTypeData(data) {
    return this.name(data);
  },
  userId(id) {
    return this.id(id);
  },
  userData(data) {
    return this.name(data);
  },
  subscriptionId(id) {
    return this.id(id);
  },
  eventId(id) {
    return this.id(id);
  },
  messageId(id) {
    return this.id(id);
  },
};

module.exports.newError = newError;
module.exports.errorTypes = errorTypes;
module.exports.isValid = isValid;
