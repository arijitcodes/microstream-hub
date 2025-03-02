class CustomError extends Error {
  constructor(code, message, errorData) {
    super(message);
    this.code = code;
    this.errorData = errorData;
    this.name = "CustomError";
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
      errorData: this.errorData,
    };
  }
}

module.exports = CustomError;
