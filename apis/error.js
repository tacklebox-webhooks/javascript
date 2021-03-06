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
  subscriptionData(data) {
    if (data.event_types) {
      data.eventTypes = data.event_types;
    }
    
    return (
      data.url &&
      typeof data.url === "string" &&
      data.eventTypes &&
      data.eventTypes.length > 0
    );
  },
  subscriptionUpdateData(data) {
    if (data.event_types) {
      data.eventTypes = data.event_types;
    }
    
    return data.eventTypes && data.eventTypes.length > 0;
  },
  eventId(id) {
    return this.id(id);
  },
  eventData(data) {
    if (data.event_type) {
      data.eventType = data.event_type;
    }
    
    if (data.idempotency_key) {
      data.idempotencyKey = data.idempotency_key;
    }
    
    return (
      data.eventType &&
      typeof data.eventType === "string" &&
      data.idempotencyKey &&
      typeof data.idempotencyKey === "string" &&
      data.payload
    );
  },
  messageId(id) {
    return this.id(id);
  },
};

module.exports.newError = newError;
module.exports.errorTypes = errorTypes;
module.exports.isValid = isValid;
