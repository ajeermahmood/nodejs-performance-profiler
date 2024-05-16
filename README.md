**Node.js Performance Profiler**

---

### Description

This Node.js module, PerformanceProfiler, provides a simple yet effective way to profile the performance of Node.js applications. It allows developers to monitor memory usage, CPU usage, and elapsed time of their Node.js processes, facilitating optimization and troubleshooting efforts.

### Features

- **Memory Usage Monitoring**: Get insights into the memory consumption of your Node.js application.
- **CPU Usage Monitoring**: Track CPU usage to identify potential bottlenecks.
- **Elapsed Time Tracking**: Measure the elapsed time since the start of profiling.
- **Logging to File**: Easily log the profiling results to a specified file for future analysis.

### Installation

To install the PerformanceProfiler module, simply run:

```
npm install nodejs-performance-profiler
```

## Usage

Element Scraper provides a simple interface for scraping text from HTML elements on a web page.

```javascript
const PerformanceProfiler = require("nodejs-performance-profiler");

// Initialize the profiler
const profiler = new PerformanceProfiler();

// Perform operations to profile
const memoryUsage = profiler.getMemoryUsage();
const cpuUsage = profiler.getCpuUsage();
const upTime = profiler.getUpTime();

// console results
console.log(memoryUsage, cpuUsage, upTime);

// Log profiling results to a file
profiler.logResults("performance.txt");
```

### Functions

- `getMemoryUsage()` (string): Returns an array containing memory usage statistics in megabytes.
- `getCpuUsage()` (string): Returns CPU usage statistics as a string.
- `getUpTime()` (string): Returns the elapsed time since the profiler was initialized.
- `logResults(filename)` : Logs performance metrics to the specified file. If no filename is provided, it defaults to "performance.txt".

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.