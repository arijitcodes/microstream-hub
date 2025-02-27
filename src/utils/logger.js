const levels = ["debug", "info", "warn", "error", "silent"];

class Logger {
  constructor(logLevel = "info") {
    this.logLevel = logLevel;
  }

  shouldLog(level) {
    return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }

  formatMessage(level, ...args) {
    const timestamp = new Date().toISOString();
    return `[MicroStream Hub][${timestamp}][${level.toUpperCase()}] ${args.join(
      " "
    )}`;
  }

  debug(...args) {
    if (this.shouldLog("debug")) {
      console.debug(this.formatMessage("debug", ...args));
    }
  }

  info(...args) {
    if (this.shouldLog("info")) {
      console.info(this.formatMessage("info", ...args));
    }
  }

  warn(...args) {
    if (this.shouldLog("warn")) {
      console.warn(this.formatMessage("warn", ...args));
    }
  }

  error(...args) {
    if (this.shouldLog("error")) {
      console.error(this.formatMessage("error", ...args));
    }
  }
}

module.exports = Logger;
