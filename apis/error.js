class WebhookVerificationError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, WebhookVerificationError.prototype);
    this.name = "WebhookVerificationError";
  }
}

class WebhookCommunicationError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, WebhookCommunicationError.prototype);
    this.name = "WebhookCommunicationError";
  }
}

class WebhookInputError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, WebhookInputError.prototype);
    this.name = "WebhookInputError";
  }
}

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
  serviceId: this.id(id),
  userId: this.id(id),
  eventTypeId: this.id(id),
  subscriptionId: this.id(id),
  eventId: this.id(id),
  messageId: this.id(id),
  eventTypeData(data) {
    return !!data.name;
  },
};

exports.WebhookVerificationError = WebhookVerificationError;
exports.WebhookCommunicationError = WebhookCommunicationError;
exports.WebhookInputError = WebhookInputError;
exports.newError = newError;
exports.errorTypes = errorTypes;
exports.isValid = isValid;
