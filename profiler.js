const os = require("os");
const process = require("process");
const fs = require("fs");

class PerformanceProfiler {
  constructor() {
    this.startTime = process.hrtime();
  }

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

  getCpuUsage() {
    return `CPU Usage: ${os.loadavg()}`;
  }

  getUpTime() {
    const elapsedTime = process.hrtime(this.startTime);
    return `Elapsed Time: ${elapsedTime[0]} s ${elapsedTime[1] / 1000000} ms`;
  }

  logResults(filename = 'performance.txt') {
    const results = [
      `Logged Time: ${new Date().toISOString()}`,
      ...this.getMemoryUsage(),
      this.getCpuUsage(),
      this.getUpTime(),
    ];
    fs.writeFile(filename, results.join('\n'), (err) => {
      if (err) {
        console.error('An error occurred:', err);
      } else {
        console.log(`Results were successfully logged to ${filename}`);
      }
    });
  }
}

module.exports = PerformanceProfiler;
