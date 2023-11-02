class AppError {
  message; 
  satusCode;
  constructor(message, statusCode = 400) {
    this.message = message;
    this.satusCode = statusCode;
  }
}

module.exports = AppError; 