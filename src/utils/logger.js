const chalk = require("chalk");

const levels = ["debug", "info", "warn", "error", "silent"];

class Logger {
  constructor(logLevel = "info") {
    this.logLevel = logLevel;
  }

  shouldLog(level) {
    return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }

  formatMessage(level, ...args) {
    if (level === "silent") {
      return ""; // Skip formatting for "silent" logs
    }

    const prefix = chalk.magenta(`[MicroStream Hub]`);
    const timestamp = chalk.gray(`[${new Date().toISOString()}]`);

    // Define levelLabel with a default value
    const levelLabel =
      {
        debug: chalk.greenBright,
        info: chalk.cyan,
        warn: chalk.yellow,
        error: chalk.red,
      }[level] || chalk.white; // Default to white if level is invalid

    const formattedLevel = levelLabel(`[${level.toUpperCase()}]`);
    const message = args
      .map((arg) =>
        arg instanceof Error
          ? arg.stack
          : typeof arg === "object"
          ? JSON.stringify(arg, null, 2)
          : arg
      )
      .join(" ");
    return `${prefix}${timestamp}${formattedLevel} ${message}`;
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
