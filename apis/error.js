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

exports.WebhookVerificationError = WebhookVerificationError;
exports.WebhookCommunicationError = WebhookCommunicationError;
exports.WebhookInputError = WebhookInputError;
