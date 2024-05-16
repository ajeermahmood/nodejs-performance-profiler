const PerformanceProfiler = require("./profiler");

const profiler = new PerformanceProfiler();

const memory = profiler.getMemoryUsage();
const cpu = profiler.getCpuUsage();
const getUp = profiler.getUpTime();

console.log(memory, cpu, getUp);

profiler.logResults();
