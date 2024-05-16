const os = require("os");
const process = require("process");
const fs = require("fs");

class PerformanceProfiler {
  constructor() {
    // Initialize the start time for performance measurement
    this.startTime = process.hrtime();
  }

  /**
   * Get memory usage statistics.
   * @returns {string[]} Array of memory usage details for different keys (e.g., heapUsed, rss).
   */
  getMemoryUsage() {
    const used = process.memoryUsage();
    const memoryUsage = [];
    for (let key in used) {
      memoryUsage.push(
        `${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
      );
    }
    return memoryUsage;
  }

  /**
   * Get CPU usage information.
   * @returns {string} CPU usage details (load average).
   */
  getCpuUsage() {
    return `CPU Usage: ${os.loadavg()}`;
  }

  /**
   * Calculate elapsed time since the start.
   * @returns {string} Elapsed time in seconds and milliseconds.
   */
  getUpTime() {
    const elapsedTime = process.hrtime(this.startTime);
    return `Elapsed Time: ${elapsedTime[0]} s ${elapsedTime[1] / 1000000} ms`;
  }

  /**
   * Log performance results to a file.
   * @param {string} filename - Name of the log file (default: "performance.txt").
   */
  logResults(filename = "performance.txt") {
    const results = [
      `Logged Time: ${new Date().toISOString()}`,
      ...this.getMemoryUsage(),
      this.getCpuUsage(),
      this.getUpTime(),
      "\n", // Add a newline character for better readability
    ];
    fs.appendFile(filename, results.join("\n"), (err) => {
      if (err) {
        console.error("An error occurred:", err);
      } else {
        console.log(`Results were successfully logged to ${filename}`);
      }
    });
  }
}

module.exports = PerformanceProfiler;
