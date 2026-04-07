var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented, "notImplemented");
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
__name(notImplementedClass, "notImplementedClass");

// ../node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
var nodeTiming = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry = class {
  static {
    __name(this, "PerformanceEntry");
  }
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
var PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
  static {
    __name(this, "PerformanceMark");
  }
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
};
var PerformanceMeasure = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceMeasure");
  }
  entryType = "measure";
};
var PerformanceResourceTiming = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceResourceTiming");
  }
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
var PerformanceObserverEntryList = class {
  static {
    __name(this, "PerformanceObserverEntryList");
  }
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
var Performance = class {
  static {
    __name(this, "Performance");
  }
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw createNotImplementedError("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin) {
      return _performanceNow();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
var PerformanceObserver = class {
  static {
    __name(this, "PerformanceObserver");
  }
  __unenv__ = true;
  static supportedEntryTypes = [];
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw createNotImplementedError("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
var performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();

// ../node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
if (!("__unenv__" in performance)) {
  const proto = Performance.prototype;
  for (const key of Object.getOwnPropertyNames(proto)) {
    if (key !== "constructor" && !(key in performance)) {
      const desc = Object.getOwnPropertyDescriptor(proto, key);
      if (desc) {
        Object.defineProperty(performance, key, desc);
      }
    }
  }
}
globalThis.performance = performance;
globalThis.Performance = Performance;
globalThis.PerformanceEntry = PerformanceEntry;
globalThis.PerformanceMark = PerformanceMark;
globalThis.PerformanceMeasure = PerformanceMeasure;
globalThis.PerformanceObserver = PerformanceObserver;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming;

// ../node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";

// ../node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default = Object.assign(() => {
}, { __unenv__: true });

// ../node_modules/unenv/dist/runtime/node/console.mjs
var _console = globalThis.console;
var _ignoreErrors = true;
var _stderr = new Writable();
var _stdout = new Writable();
var log = _console?.log ?? noop_default;
var info = _console?.info ?? log;
var trace = _console?.trace ?? info;
var debug = _console?.debug ?? log;
var table = _console?.table ?? log;
var error = _console?.error ?? log;
var warn = _console?.warn ?? error;
var createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
var clear = _console?.clear ?? noop_default;
var count = _console?.count ?? noop_default;
var countReset = _console?.countReset ?? noop_default;
var dir = _console?.dir ?? noop_default;
var dirxml = _console?.dirxml ?? noop_default;
var group = _console?.group ?? noop_default;
var groupEnd = _console?.groupEnd ?? noop_default;
var groupCollapsed = _console?.groupCollapsed ?? noop_default;
var profile = _console?.profile ?? noop_default;
var profileEnd = _console?.profileEnd ?? noop_default;
var time = _console?.time ?? noop_default;
var timeEnd = _console?.timeEnd ?? noop_default;
var timeLog = _console?.timeLog ?? noop_default;
var timeStamp = _console?.timeStamp ?? noop_default;
var Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
var _times = /* @__PURE__ */ new Map();
var _stdoutErrorHandler = noop_default;
var _stderrErrorHandler = noop_default;

// ../node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole = globalThis["console"];
var {
  assert,
  clear: clear2,
  // @ts-expect-error undocumented public API
  context,
  count: count2,
  countReset: countReset2,
  // @ts-expect-error undocumented public API
  createTask: createTask2,
  debug: debug2,
  dir: dir2,
  dirxml: dirxml2,
  error: error2,
  group: group2,
  groupCollapsed: groupCollapsed2,
  groupEnd: groupEnd2,
  info: info2,
  log: log2,
  profile: profile2,
  profileEnd: profileEnd2,
  table: table2,
  time: time2,
  timeEnd: timeEnd2,
  timeLog: timeLog2,
  timeStamp: timeStamp2,
  trace: trace2,
  warn: warn2
} = workerdConsole;
Object.assign(workerdConsole, {
  Console,
  _ignoreErrors,
  _stderr,
  _stderrErrorHandler,
  _stdout,
  _stdoutErrorHandler,
  _times
});
var console_default = workerdConsole;

// ../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
globalThis.console = console_default;

// ../node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
  const now = Date.now();
  const seconds = Math.trunc(now / 1e3);
  const nanos = now % 1e3 * 1e6;
  if (startTime) {
    let diffSeconds = seconds - startTime[0];
    let diffNanos = nanos - startTime[0];
    if (diffNanos < 0) {
      diffSeconds = diffSeconds - 1;
      diffNanos = 1e9 + diffNanos;
    }
    return [diffSeconds, diffNanos];
  }
  return [seconds, nanos];
}, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
  return BigInt(Date.now() * 1e6);
}, "bigint") });

// ../node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";

// ../node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream = class {
  static {
    __name(this, "ReadStream");
  }
  fd;
  isRaw = false;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
};

// ../node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream = class {
  static {
    __name(this, "WriteStream");
  }
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  clearLine(dir3, callback) {
    callback && callback();
    return false;
  }
  clearScreenDown(callback) {
    callback && callback();
    return false;
  }
  cursorTo(x2, y2, callback) {
    callback && typeof callback === "function" && callback();
    return false;
  }
  moveCursor(dx, dy, callback) {
    callback && callback();
    return false;
  }
  getColorDepth(env2) {
    return 1;
  }
  hasColors(count3, env2) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(str, encoding, cb) {
    if (str instanceof Uint8Array) {
      str = new TextDecoder().decode(str);
    }
    try {
      console.log(str);
    } catch {
    }
    cb && typeof cb === "function" && cb();
    return false;
  }
};

// ../node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION = "22.14.0";

// ../node_modules/unenv/dist/runtime/node/internal/process/process.mjs
var Process = class _Process extends EventEmitter {
  static {
    __name(this, "Process");
  }
  env;
  hrtime;
  nextTick;
  constructor(impl) {
    super();
    this.env = impl.env;
    this.hrtime = impl.hrtime;
    this.nextTick = impl.nextTick;
    for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
      const value = this[prop];
      if (typeof value === "function") {
        this[prop] = value.bind(this);
      }
    }
  }
  // --- event emitter ---
  emitWarning(warning, type, code) {
    console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
  }
  emit(...args) {
    return super.emit(...args);
  }
  listeners(eventName) {
    return super.listeners(eventName);
  }
  // --- stdio (lazy initializers) ---
  #stdin;
  #stdout;
  #stderr;
  get stdin() {
    return this.#stdin ??= new ReadStream(0);
  }
  get stdout() {
    return this.#stdout ??= new WriteStream(1);
  }
  get stderr() {
    return this.#stderr ??= new WriteStream(2);
  }
  // --- cwd ---
  #cwd = "/";
  chdir(cwd2) {
    this.#cwd = cwd2;
  }
  cwd() {
    return this.#cwd;
  }
  // --- dummy props and getters ---
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${NODE_VERSION}`;
  }
  get versions() {
    return { node: NODE_VERSION };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  // --- noop methods ---
  ref() {
  }
  unref() {
  }
  // --- unimplemented methods ---
  umask() {
    throw createNotImplementedError("process.umask");
  }
  getBuiltinModule() {
    return void 0;
  }
  getActiveResourcesInfo() {
    throw createNotImplementedError("process.getActiveResourcesInfo");
  }
  exit() {
    throw createNotImplementedError("process.exit");
  }
  reallyExit() {
    throw createNotImplementedError("process.reallyExit");
  }
  kill() {
    throw createNotImplementedError("process.kill");
  }
  abort() {
    throw createNotImplementedError("process.abort");
  }
  dlopen() {
    throw createNotImplementedError("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw createNotImplementedError("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw createNotImplementedError("process.loadEnvFile");
  }
  disconnect() {
    throw createNotImplementedError("process.disconnect");
  }
  cpuUsage() {
    throw createNotImplementedError("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw createNotImplementedError("process.initgroups");
  }
  openStdin() {
    throw createNotImplementedError("process.openStdin");
  }
  assert() {
    throw createNotImplementedError("process.assert");
  }
  binding() {
    throw createNotImplementedError("process.binding");
  }
  // --- attached interfaces ---
  permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
    writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
  };
  finalization = {
    register: /* @__PURE__ */ notImplemented("process.finalization.register"),
    unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
    registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
  // --- undefined props ---
  mainModule = void 0;
  domain = void 0;
  // optional
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  // internals
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};

// ../node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess = globalThis["process"];
var getBuiltinModule = globalProcess.getBuiltinModule;
var workerdProcess = getBuiltinModule("node:process");
var unenvProcess = new Process({
  env: globalProcess.env,
  hrtime,
  // `nextTick` is available from workerd process v1
  nextTick: workerdProcess.nextTick
});
var { exit, features, platform } = workerdProcess;
var {
  _channel,
  _debugEnd,
  _debugProcess,
  _disconnect,
  _events,
  _eventsCount,
  _exiting,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _handleQueue,
  _kill,
  _linkedBinding,
  _maxListeners,
  _pendingMessage,
  _preload_modules,
  _rawDebug,
  _send,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  assert: assert2,
  availableMemory,
  binding,
  channel,
  chdir,
  config,
  connected,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  disconnect,
  dlopen,
  domain,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exitCode,
  finalization,
  getActiveResourcesInfo,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getMaxListeners,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  hrtime: hrtime3,
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  mainModule,
  memoryUsage,
  moduleLoadList,
  nextTick,
  off,
  on,
  once,
  openStdin,
  permission,
  pid,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  reallyExit,
  ref,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  send,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setMaxListeners,
  setSourceMapsEnabled,
  setuid,
  setUncaughtExceptionCaptureCallback,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  throwDeprecation,
  title,
  traceDeprecation,
  umask,
  unref,
  uptime,
  version,
  versions
} = unenvProcess;
var _process = {
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
  loadEnvFile,
  sourceMapsEnabled,
  arch,
  argv,
  argv0,
  chdir,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  disconnect,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exit,
  finalization,
  features,
  getBuiltinModule,
  getActiveResourcesInfo,
  getMaxListeners,
  hrtime: hrtime3,
  kill,
  listeners,
  listenerCount,
  memoryUsage,
  nextTick,
  on,
  off,
  once,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  throwDeprecation,
  traceDeprecation,
  umask,
  uptime,
  version,
  versions,
  // @ts-expect-error old API
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  openStdin,
  assert: assert2,
  binding,
  send,
  exitCode,
  channel,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  permission,
  mainModule,
  _events,
  _eventsCount,
  _exiting,
  _maxListeners,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  _disconnect,
  _handleQueue,
  _pendingMessage,
  _channel,
  _send,
  _linkedBinding
};
var process_default = _process;

// ../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
globalThis.process = process_default;

// _worker.js
var At = Object.defineProperty;
var Ge = /* @__PURE__ */ __name((e) => {
  throw TypeError(e);
}, "Ge");
var Dt = /* @__PURE__ */ __name((e, t, a) => t in e ? At(e, t, { enumerable: true, configurable: true, writable: true, value: a }) : e[t] = a, "Dt");
var y = /* @__PURE__ */ __name((e, t, a) => Dt(e, typeof t != "symbol" ? t + "" : t, a), "y");
var ze = /* @__PURE__ */ __name((e, t, a) => t.has(e) || Ge("Cannot " + a), "ze");
var i = /* @__PURE__ */ __name((e, t, a) => (ze(e, t, "read from private field"), a ? a.call(e) : t.get(e)), "i");
var v = /* @__PURE__ */ __name((e, t, a) => t.has(e) ? Ge("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), "v");
var m = /* @__PURE__ */ __name((e, t, a, n) => (ze(e, t, "write to private field"), n ? n.call(e, a) : t.set(e, a), a), "m");
var b = /* @__PURE__ */ __name((e, t, a) => (ze(e, t, "access private method"), a), "b");
var Je = /* @__PURE__ */ __name((e, t, a, n) => ({ set _(s) {
  m(e, t, s, a);
}, get _() {
  return i(e, t, n);
} }), "Je");
var Ye = /* @__PURE__ */ __name((e, t, a) => (n, s) => {
  let r = -1;
  return o(0);
  async function o(l) {
    if (l <= r) throw new Error("next() called multiple times");
    r = l;
    let d, c = false, p;
    if (e[l] ? (p = e[l][0][0], n.req.routeIndex = l) : p = l === e.length && s || void 0, p) try {
      d = await p(n, () => o(l + 1));
    } catch (u) {
      if (u instanceof Error && t) n.error = u, d = await t(u, n), c = true;
      else throw u;
    }
    else n.finalized === false && a && (d = await a(n));
    return d && (n.finalized === false || c) && (n.res = d), n;
  }
  __name(o, "o");
}, "Ye");
var Lt = /* @__PURE__ */ Symbol();
var Mt = /* @__PURE__ */ __name(async (e, t = /* @__PURE__ */ Object.create(null)) => {
  const { all: a = false, dot: n = false } = t, r = (e instanceof ut ? e.raw.headers : e.headers).get("Content-Type");
  return r != null && r.startsWith("multipart/form-data") || r != null && r.startsWith("application/x-www-form-urlencoded") ? Ct(e, { all: a, dot: n }) : {};
}, "Mt");
async function Ct(e, t) {
  const a = await e.formData();
  return a ? _t(a, t) : {};
}
__name(Ct, "Ct");
function _t(e, t) {
  const a = /* @__PURE__ */ Object.create(null);
  return e.forEach((n, s) => {
    t.all || s.endsWith("[]") ? Ht(a, s, n) : a[s] = n;
  }), t.dot && Object.entries(a).forEach(([n, s]) => {
    n.includes(".") && (jt(a, n, s), delete a[n]);
  }), a;
}
__name(_t, "_t");
var Ht = /* @__PURE__ */ __name((e, t, a) => {
  e[t] !== void 0 ? Array.isArray(e[t]) ? e[t].push(a) : e[t] = [e[t], a] : t.endsWith("[]") ? e[t] = [a] : e[t] = a;
}, "Ht");
var jt = /* @__PURE__ */ __name((e, t, a) => {
  if (/(?:^|\.)__proto__\./.test(t)) return;
  let n = e;
  const s = t.split(".");
  s.forEach((r, o) => {
    o === s.length - 1 ? n[r] = a : ((!n[r] || typeof n[r] != "object" || Array.isArray(n[r]) || n[r] instanceof File) && (n[r] = /* @__PURE__ */ Object.create(null)), n = n[r]);
  });
}, "jt");
var ot = /* @__PURE__ */ __name((e) => {
  const t = e.split("/");
  return t[0] === "" && t.shift(), t;
}, "ot");
var Ot = /* @__PURE__ */ __name((e) => {
  const { groups: t, path: a } = Rt(e), n = ot(a);
  return zt(n, t);
}, "Ot");
var Rt = /* @__PURE__ */ __name((e) => {
  const t = [];
  return e = e.replace(/\{[^}]+\}/g, (a, n) => {
    const s = `@${n}`;
    return t.push([s, a]), s;
  }), { groups: t, path: e };
}, "Rt");
var zt = /* @__PURE__ */ __name((e, t) => {
  for (let a = t.length - 1; a >= 0; a--) {
    const [n] = t[a];
    for (let s = e.length - 1; s >= 0; s--) if (e[s].includes(n)) {
      e[s] = e[s].replace(n, t[a][1]);
      break;
    }
  }
  return e;
}, "zt");
var Ae = {};
var Kt = /* @__PURE__ */ __name((e, t) => {
  if (e === "*") return "*";
  const a = e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (a) {
    const n = `${e}#${t}`;
    return Ae[n] || (a[2] ? Ae[n] = t && t[0] !== ":" && t[0] !== "*" ? [n, a[1], new RegExp(`^${a[2]}(?=/${t})`)] : [e, a[1], new RegExp(`^${a[2]}$`)] : Ae[n] = [e, a[1], true]), Ae[n];
  }
  return null;
}, "Kt");
var Ve = /* @__PURE__ */ __name((e, t) => {
  try {
    return t(e);
  } catch {
    return e.replace(/(?:%[0-9A-Fa-f]{2})+/g, (a) => {
      try {
        return t(a);
      } catch {
        return a;
      }
    });
  }
}, "Ve");
var qt = /* @__PURE__ */ __name((e) => Ve(e, decodeURI), "qt");
var dt = /* @__PURE__ */ __name((e) => {
  const t = e.url, a = t.indexOf("/", t.indexOf(":") + 4);
  let n = a;
  for (; n < t.length; n++) {
    const s = t.charCodeAt(n);
    if (s === 37) {
      const r = t.indexOf("?", n), o = t.indexOf("#", n), l = r === -1 ? o === -1 ? void 0 : o : o === -1 ? r : Math.min(r, o), d = t.slice(a, l);
      return qt(d.includes("%25") ? d.replace(/%25/g, "%2525") : d);
    } else if (s === 63 || s === 35) break;
  }
  return t.slice(a, n);
}, "dt");
var Ft = /* @__PURE__ */ __name((e) => {
  const t = dt(e);
  return t.length > 1 && t.at(-1) === "/" ? t.slice(0, -1) : t;
}, "Ft");
var oe = /* @__PURE__ */ __name((e, t, ...a) => (a.length && (t = oe(t, ...a)), `${(e == null ? void 0 : e[0]) === "/" ? "" : "/"}${e}${t === "/" ? "" : `${(e == null ? void 0 : e.at(-1)) === "/" ? "" : "/"}${(t == null ? void 0 : t[0]) === "/" ? t.slice(1) : t}`}`), "oe");
var lt = /* @__PURE__ */ __name((e) => {
  if (e.charCodeAt(e.length - 1) !== 63 || !e.includes(":")) return null;
  const t = e.split("/"), a = [];
  let n = "";
  return t.forEach((s) => {
    if (s !== "" && !/\:/.test(s)) n += "/" + s;
    else if (/\:/.test(s)) if (/\?/.test(s)) {
      a.length === 0 && n === "" ? a.push("/") : a.push(n);
      const r = s.replace("?", "");
      n += "/" + r, a.push(n);
    } else n += "/" + s;
  }), a.filter((s, r, o) => o.indexOf(s) === r);
}, "lt");
var Ke = /* @__PURE__ */ __name((e) => /[%+]/.test(e) ? (e.indexOf("+") !== -1 && (e = e.replace(/\+/g, " ")), e.indexOf("%") !== -1 ? Ve(e, pt) : e) : e, "Ke");
var ct = /* @__PURE__ */ __name((e, t, a) => {
  let n;
  if (!a && t && !/[%+]/.test(t)) {
    let o = e.indexOf("?", 8);
    if (o === -1) return;
    for (e.startsWith(t, o + 1) || (o = e.indexOf(`&${t}`, o + 1)); o !== -1; ) {
      const l = e.charCodeAt(o + t.length + 1);
      if (l === 61) {
        const d = o + t.length + 2, c = e.indexOf("&", d);
        return Ke(e.slice(d, c === -1 ? void 0 : c));
      } else if (l == 38 || isNaN(l)) return "";
      o = e.indexOf(`&${t}`, o + 1);
    }
    if (n = /[%+]/.test(e), !n) return;
  }
  const s = {};
  n ?? (n = /[%+]/.test(e));
  let r = e.indexOf("?", 8);
  for (; r !== -1; ) {
    const o = e.indexOf("&", r + 1);
    let l = e.indexOf("=", r);
    l > o && o !== -1 && (l = -1);
    let d = e.slice(r + 1, l === -1 ? o === -1 ? void 0 : o : l);
    if (n && (d = Ke(d)), r = o, d === "") continue;
    let c;
    l === -1 ? c = "" : (c = e.slice(l + 1, o === -1 ? void 0 : o), n && (c = Ke(c))), a ? (s[d] && Array.isArray(s[d]) || (s[d] = []), s[d].push(c)) : s[d] ?? (s[d] = c);
  }
  return t ? s[t] : s;
}, "ct");
var Vt = ct;
var Ut = /* @__PURE__ */ __name((e, t) => ct(e, t, true), "Ut");
var pt = decodeURIComponent;
var Xe = /* @__PURE__ */ __name((e) => Ve(e, pt), "Xe");
var ce;
var T;
var q;
var mt;
var yt;
var Fe;
var V;
var tt;
var ut = (tt = class {
  static {
    __name(this, "tt");
  }
  constructor(e, t = "/", a = [[]]) {
    v(this, q);
    y(this, "raw");
    v(this, ce);
    v(this, T);
    y(this, "routeIndex", 0);
    y(this, "path");
    y(this, "bodyCache", {});
    v(this, V, (e2) => {
      const { bodyCache: t2, raw: a2 } = this, n = t2[e2];
      if (n) return n;
      const s = Object.keys(t2)[0];
      return s ? t2[s].then((r) => (s === "json" && (r = JSON.stringify(r)), new Response(r)[e2]())) : t2[e2] = a2[e2]();
    });
    this.raw = e, this.path = t, m(this, T, a), m(this, ce, {});
  }
  param(e) {
    return e ? b(this, q, mt).call(this, e) : b(this, q, yt).call(this);
  }
  query(e) {
    return Vt(this.url, e);
  }
  queries(e) {
    return Ut(this.url, e);
  }
  header(e) {
    if (e) return this.raw.headers.get(e) ?? void 0;
    const t = {};
    return this.raw.headers.forEach((a, n) => {
      t[n] = a;
    }), t;
  }
  async parseBody(e) {
    return Mt(this, e);
  }
  json() {
    return i(this, V).call(this, "text").then((e) => JSON.parse(e));
  }
  text() {
    return i(this, V).call(this, "text");
  }
  arrayBuffer() {
    return i(this, V).call(this, "arrayBuffer");
  }
  blob() {
    return i(this, V).call(this, "blob");
  }
  formData() {
    return i(this, V).call(this, "formData");
  }
  addValidatedData(e, t) {
    i(this, ce)[e] = t;
  }
  valid(e) {
    return i(this, ce)[e];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get [Lt]() {
    return i(this, T);
  }
  get matchedRoutes() {
    return i(this, T)[0].map(([[, e]]) => e);
  }
  get routePath() {
    return i(this, T)[0].map(([[, e]]) => e)[this.routeIndex].path;
  }
}, ce = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakSet(), mt = /* @__PURE__ */ __name(function(e) {
  const t = i(this, T)[0][this.routeIndex][1][e], a = b(this, q, Fe).call(this, t);
  return a && /\%/.test(a) ? Xe(a) : a;
}, "mt"), yt = /* @__PURE__ */ __name(function() {
  const e = {}, t = Object.keys(i(this, T)[0][this.routeIndex][1]);
  for (const a of t) {
    const n = b(this, q, Fe).call(this, i(this, T)[0][this.routeIndex][1][a]);
    n !== void 0 && (e[a] = /\%/.test(n) ? Xe(n) : n);
  }
  return e;
}, "yt"), Fe = /* @__PURE__ */ __name(function(e) {
  return i(this, T)[1] ? i(this, T)[1][e] : e;
}, "Fe"), V = /* @__PURE__ */ new WeakMap(), tt);
var $t = { Stringify: 1 };
var vt = /* @__PURE__ */ __name(async (e, t, a, n, s) => {
  typeof e == "object" && !(e instanceof String) && (e instanceof Promise || (e = e.toString()), e instanceof Promise && (e = await e));
  const r = e.callbacks;
  return r != null && r.length ? (s ? s[0] += e : s = [e], Promise.all(r.map((l) => l({ phase: t, buffer: s, context: n }))).then((l) => Promise.all(l.filter(Boolean).map((d) => vt(d, t, false, n, s))).then(() => s[0]))) : Promise.resolve(e);
}, "vt");
var Wt = "text/plain; charset=UTF-8";
var qe = /* @__PURE__ */ __name((e, t) => ({ "Content-Type": e, ...t }), "qe");
var xe = /* @__PURE__ */ __name((e, t) => new Response(e, t), "xe");
var Be;
var Ie;
var O;
var pe;
var R;
var S;
var Pe;
var ue;
var me;
var Q;
var Se;
var Te;
var U;
var de;
var at;
var Gt = (at = class {
  static {
    __name(this, "at");
  }
  constructor(e, t) {
    v(this, U);
    v(this, Be);
    v(this, Ie);
    y(this, "env", {});
    v(this, O);
    y(this, "finalized", false);
    y(this, "error");
    v(this, pe);
    v(this, R);
    v(this, S);
    v(this, Pe);
    v(this, ue);
    v(this, me);
    v(this, Q);
    v(this, Se);
    v(this, Te);
    y(this, "render", (...e2) => (i(this, ue) ?? m(this, ue, (t2) => this.html(t2)), i(this, ue).call(this, ...e2)));
    y(this, "setLayout", (e2) => m(this, Pe, e2));
    y(this, "getLayout", () => i(this, Pe));
    y(this, "setRenderer", (e2) => {
      m(this, ue, e2);
    });
    y(this, "header", (e2, t2, a) => {
      this.finalized && m(this, S, xe(i(this, S).body, i(this, S)));
      const n = i(this, S) ? i(this, S).headers : i(this, Q) ?? m(this, Q, new Headers());
      t2 === void 0 ? n.delete(e2) : a != null && a.append ? n.append(e2, t2) : n.set(e2, t2);
    });
    y(this, "status", (e2) => {
      m(this, pe, e2);
    });
    y(this, "set", (e2, t2) => {
      i(this, O) ?? m(this, O, /* @__PURE__ */ new Map()), i(this, O).set(e2, t2);
    });
    y(this, "get", (e2) => i(this, O) ? i(this, O).get(e2) : void 0);
    y(this, "newResponse", (...e2) => b(this, U, de).call(this, ...e2));
    y(this, "body", (e2, t2, a) => b(this, U, de).call(this, e2, t2, a));
    y(this, "text", (e2, t2, a) => !i(this, Q) && !i(this, pe) && !t2 && !a && !this.finalized ? new Response(e2) : b(this, U, de).call(this, e2, t2, qe(Wt, a)));
    y(this, "json", (e2, t2, a) => b(this, U, de).call(this, JSON.stringify(e2), t2, qe("application/json", a)));
    y(this, "html", (e2, t2, a) => {
      const n = /* @__PURE__ */ __name((s) => b(this, U, de).call(this, s, t2, qe("text/html; charset=UTF-8", a)), "n");
      return typeof e2 == "object" ? vt(e2, $t.Stringify, false, {}).then(n) : n(e2);
    });
    y(this, "redirect", (e2, t2) => {
      const a = String(e2);
      return this.header("Location", /[^\x00-\xFF]/.test(a) ? encodeURI(a) : a), this.newResponse(null, t2 ?? 302);
    });
    y(this, "notFound", () => (i(this, me) ?? m(this, me, () => xe()), i(this, me).call(this, this)));
    m(this, Be, e), t && (m(this, R, t.executionCtx), this.env = t.env, m(this, me, t.notFoundHandler), m(this, Te, t.path), m(this, Se, t.matchResult));
  }
  get req() {
    return i(this, Ie) ?? m(this, Ie, new ut(i(this, Be), i(this, Te), i(this, Se))), i(this, Ie);
  }
  get event() {
    if (i(this, R) && "respondWith" in i(this, R)) return i(this, R);
    throw Error("This context has no FetchEvent");
  }
  get executionCtx() {
    if (i(this, R)) return i(this, R);
    throw Error("This context has no ExecutionContext");
  }
  get res() {
    return i(this, S) || m(this, S, xe(null, { headers: i(this, Q) ?? m(this, Q, new Headers()) }));
  }
  set res(e) {
    if (i(this, S) && e) {
      e = xe(e.body, e);
      for (const [t, a] of i(this, S).headers.entries()) if (t !== "content-type") if (t === "set-cookie") {
        const n = i(this, S).headers.getSetCookie();
        e.headers.delete("set-cookie");
        for (const s of n) e.headers.append("set-cookie", s);
      } else e.headers.set(t, a);
    }
    m(this, S, e), this.finalized = true;
  }
  get var() {
    return i(this, O) ? Object.fromEntries(i(this, O)) : {};
  }
}, Be = /* @__PURE__ */ new WeakMap(), Ie = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), Pe = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new WeakMap(), me = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakSet(), de = /* @__PURE__ */ __name(function(e, t, a) {
  const n = i(this, S) ? new Headers(i(this, S).headers) : i(this, Q) ?? new Headers();
  if (typeof t == "object" && "headers" in t) {
    const r = t.headers instanceof Headers ? t.headers : new Headers(t.headers);
    for (const [o, l] of r) o.toLowerCase() === "set-cookie" ? n.append(o, l) : n.set(o, l);
  }
  if (a) for (const [r, o] of Object.entries(a)) if (typeof o == "string") n.set(r, o);
  else {
    n.delete(r);
    for (const l of o) n.append(r, l);
  }
  const s = typeof t == "number" ? t : (t == null ? void 0 : t.status) ?? i(this, pe);
  return xe(e, { status: s, headers: n });
}, "de"), at);
var x = "ALL";
var Jt = "all";
var Yt = ["get", "post", "put", "delete", "options", "patch"];
var bt = "Can not add a route since the matcher is already built.";
var ft = class extends Error {
  static {
    __name(this, "ft");
  }
};
var Xt = "__COMPOSED_HANDLER";
var Qt = /* @__PURE__ */ __name((e) => e.text("404 Not Found", 404), "Qt");
var Qe = /* @__PURE__ */ __name((e, t) => {
  if ("getResponse" in e) {
    const a = e.getResponse();
    return t.newResponse(a.body, a);
  }
  return console.error(e), t.text("Internal Server Error", 500);
}, "Qe");
var A;
var w;
var ht;
var D;
var Y;
var De;
var Le;
var ye;
var Zt = (ye = class {
  static {
    __name(this, "ye");
  }
  constructor(t = {}) {
    v(this, w);
    y(this, "get");
    y(this, "post");
    y(this, "put");
    y(this, "delete");
    y(this, "options");
    y(this, "patch");
    y(this, "all");
    y(this, "on");
    y(this, "use");
    y(this, "router");
    y(this, "getPath");
    y(this, "_basePath", "/");
    v(this, A, "/");
    y(this, "routes", []);
    v(this, D, Qt);
    y(this, "errorHandler", Qe);
    y(this, "onError", (t2) => (this.errorHandler = t2, this));
    y(this, "notFound", (t2) => (m(this, D, t2), this));
    y(this, "fetch", (t2, ...a) => b(this, w, Le).call(this, t2, a[1], a[0], t2.method));
    y(this, "request", (t2, a, n2, s2) => t2 instanceof Request ? this.fetch(a ? new Request(t2, a) : t2, n2, s2) : (t2 = t2.toString(), this.fetch(new Request(/^https?:\/\//.test(t2) ? t2 : `http://localhost${oe("/", t2)}`, a), n2, s2)));
    y(this, "fire", () => {
      addEventListener("fetch", (t2) => {
        t2.respondWith(b(this, w, Le).call(this, t2.request, t2, void 0, t2.request.method));
      });
    });
    [...Yt, Jt].forEach((r) => {
      this[r] = (o, ...l) => (typeof o == "string" ? m(this, A, o) : b(this, w, Y).call(this, r, i(this, A), o), l.forEach((d) => {
        b(this, w, Y).call(this, r, i(this, A), d);
      }), this);
    }), this.on = (r, o, ...l) => {
      for (const d of [o].flat()) {
        m(this, A, d);
        for (const c of [r].flat()) l.map((p) => {
          b(this, w, Y).call(this, c.toUpperCase(), i(this, A), p);
        });
      }
      return this;
    }, this.use = (r, ...o) => (typeof r == "string" ? m(this, A, r) : (m(this, A, "*"), o.unshift(r)), o.forEach((l) => {
      b(this, w, Y).call(this, x, i(this, A), l);
    }), this);
    const { strict: n, ...s } = t;
    Object.assign(this, s), this.getPath = n ?? true ? t.getPath ?? dt : Ft;
  }
  route(t, a) {
    const n = this.basePath(t);
    return a.routes.map((s) => {
      var o;
      let r;
      a.errorHandler === Qe ? r = s.handler : (r = /* @__PURE__ */ __name(async (l, d) => (await Ye([], a.errorHandler)(l, () => s.handler(l, d))).res, "r"), r[Xt] = s.handler), b(o = n, w, Y).call(o, s.method, s.path, r);
    }), this;
  }
  basePath(t) {
    const a = b(this, w, ht).call(this);
    return a._basePath = oe(this._basePath, t), a;
  }
  mount(t, a, n) {
    let s, r;
    n && (typeof n == "function" ? r = n : (r = n.optionHandler, n.replaceRequest === false ? s = /* @__PURE__ */ __name((d) => d, "s") : s = n.replaceRequest));
    const o = r ? (d) => {
      const c = r(d);
      return Array.isArray(c) ? c : [c];
    } : (d) => {
      let c;
      try {
        c = d.executionCtx;
      } catch {
      }
      return [d.env, c];
    };
    s || (s = (() => {
      const d = oe(this._basePath, t), c = d === "/" ? 0 : d.length;
      return (p) => {
        const u = new URL(p.url);
        return u.pathname = u.pathname.slice(c) || "/", new Request(u, p);
      };
    })());
    const l = /* @__PURE__ */ __name(async (d, c) => {
      const p = await a(s(d.req.raw), ...o(d));
      if (p) return p;
      await c();
    }, "l");
    return b(this, w, Y).call(this, x, oe(t, "*"), l), this;
  }
}, A = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakSet(), ht = /* @__PURE__ */ __name(function() {
  const t = new ye({ router: this.router, getPath: this.getPath });
  return t.errorHandler = this.errorHandler, m(t, D, i(this, D)), t.routes = this.routes, t;
}, "ht"), D = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ __name(function(t, a, n) {
  t = t.toUpperCase(), a = oe(this._basePath, a);
  const s = { basePath: this._basePath, path: a, method: t, handler: n };
  this.router.add(t, a, [n, s]), this.routes.push(s);
}, "Y"), De = /* @__PURE__ */ __name(function(t, a) {
  if (t instanceof Error) return this.errorHandler(t, a);
  throw t;
}, "De"), Le = /* @__PURE__ */ __name(function(t, a, n, s) {
  if (s === "HEAD") return (async () => new Response(null, await b(this, w, Le).call(this, t, a, n, "GET")))();
  const r = this.getPath(t, { env: n }), o = this.router.match(s, r), l = new Gt(t, { path: r, matchResult: o, env: n, executionCtx: a, notFoundHandler: i(this, D) });
  if (o[0].length === 1) {
    let c;
    try {
      c = o[0][0][0][0](l, async () => {
        l.res = await i(this, D).call(this, l);
      });
    } catch (p) {
      return b(this, w, De).call(this, p, l);
    }
    return c instanceof Promise ? c.then((p) => p || (l.finalized ? l.res : i(this, D).call(this, l))).catch((p) => b(this, w, De).call(this, p, l)) : c ?? i(this, D).call(this, l);
  }
  const d = Ye(o[0], this.errorHandler, i(this, D));
  return (async () => {
    try {
      const c = await d(l);
      if (!c.finalized) throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
      return c.res;
    } catch (c) {
      return b(this, w, De).call(this, c, l);
    }
  })();
}, "Le"), ye);
var gt = [];
function ea(e, t) {
  const a = this.buildAllMatchers(), n = /* @__PURE__ */ __name(((s, r) => {
    const o = a[s] || a[x], l = o[2][r];
    if (l) return l;
    const d = r.match(o[0]);
    if (!d) return [[], gt];
    const c = d.indexOf("", 1);
    return [o[1][c], d];
  }), "n");
  return this.match = n, n(e, t);
}
__name(ea, "ea");
var Ce = "[^/]+";
var ke = ".*";
var Ee = "(?:|/.*)";
var le = /* @__PURE__ */ Symbol();
var ta = new Set(".\\+*[^]$()");
function aa(e, t) {
  return e.length === 1 ? t.length === 1 ? e < t ? -1 : 1 : -1 : t.length === 1 || e === ke || e === Ee ? 1 : t === ke || t === Ee ? -1 : e === Ce ? 1 : t === Ce ? -1 : e.length === t.length ? e < t ? -1 : 1 : t.length - e.length;
}
__name(aa, "aa");
var Z;
var ee;
var L;
var ne;
var na = (ne = class {
  static {
    __name(this, "ne");
  }
  constructor() {
    v(this, Z);
    v(this, ee);
    v(this, L, /* @__PURE__ */ Object.create(null));
  }
  insert(t, a, n, s, r) {
    if (t.length === 0) {
      if (i(this, Z) !== void 0) throw le;
      if (r) return;
      m(this, Z, a);
      return;
    }
    const [o, ...l] = t, d = o === "*" ? l.length === 0 ? ["", "", ke] : ["", "", Ce] : o === "/*" ? ["", "", Ee] : o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let c;
    if (d) {
      const p = d[1];
      let u = d[2] || Ce;
      if (p && d[2] && (u === ".*" || (u = u.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:"), /\((?!\?:)/.test(u)))) throw le;
      if (c = i(this, L)[u], !c) {
        if (Object.keys(i(this, L)).some((f) => f !== ke && f !== Ee)) throw le;
        if (r) return;
        c = i(this, L)[u] = new ne(), p !== "" && m(c, ee, s.varIndex++);
      }
      !r && p !== "" && n.push([p, i(c, ee)]);
    } else if (c = i(this, L)[o], !c) {
      if (Object.keys(i(this, L)).some((p) => p.length > 1 && p !== ke && p !== Ee)) throw le;
      if (r) return;
      c = i(this, L)[o] = new ne();
    }
    c.insert(l, a, n, s, r);
  }
  buildRegExpStr() {
    const a = Object.keys(i(this, L)).sort(aa).map((n) => {
      const s = i(this, L)[n];
      return (typeof i(s, ee) == "number" ? `(${n})@${i(s, ee)}` : ta.has(n) ? `\\${n}` : n) + s.buildRegExpStr();
    });
    return typeof i(this, Z) == "number" && a.unshift(`#${i(this, Z)}`), a.length === 0 ? "" : a.length === 1 ? a[0] : "(?:" + a.join("|") + ")";
  }
}, Z = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), ne);
var He;
var Ne;
var nt;
var sa = (nt = class {
  static {
    __name(this, "nt");
  }
  constructor() {
    v(this, He, { varIndex: 0 });
    v(this, Ne, new na());
  }
  insert(e, t, a) {
    const n = [], s = [];
    for (let o = 0; ; ) {
      let l = false;
      if (e = e.replace(/\{[^}]+\}/g, (d) => {
        const c = `@\\${o}`;
        return s[o] = [c, d], o++, l = true, c;
      }), !l) break;
    }
    const r = e.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let o = s.length - 1; o >= 0; o--) {
      const [l] = s[o];
      for (let d = r.length - 1; d >= 0; d--) if (r[d].indexOf(l) !== -1) {
        r[d] = r[d].replace(l, s[o][1]);
        break;
      }
    }
    return i(this, Ne).insert(r, t, n, i(this, He), a), n;
  }
  buildRegExp() {
    let e = i(this, Ne).buildRegExpStr();
    if (e === "") return [/^$/, [], []];
    let t = 0;
    const a = [], n = [];
    return e = e.replace(/#(\d+)|@(\d+)|\.\*\$/g, (s, r, o) => r !== void 0 ? (a[++t] = Number(r), "$()") : (o !== void 0 && (n[Number(o)] = ++t), "")), [new RegExp(`^${e}`), a, n];
  }
}, He = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), nt);
var ra = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var Me = /* @__PURE__ */ Object.create(null);
function xt(e) {
  return Me[e] ?? (Me[e] = new RegExp(e === "*" ? "" : `^${e.replace(/\/\*$|([.\\+*[^\]$()])/g, (t, a) => a ? `\\${a}` : "(?:|/.*)")}$`));
}
__name(xt, "xt");
function ia() {
  Me = /* @__PURE__ */ Object.create(null);
}
__name(ia, "ia");
function oa(e) {
  var c;
  const t = new sa(), a = [];
  if (e.length === 0) return ra;
  const n = e.map((p) => [!/\*|\/:/.test(p[0]), ...p]).sort(([p, u], [f, B]) => p ? 1 : f ? -1 : u.length - B.length), s = /* @__PURE__ */ Object.create(null);
  for (let p = 0, u = -1, f = n.length; p < f; p++) {
    const [B, I, _] = n[p];
    B ? s[I] = [_.map(([C]) => [C, /* @__PURE__ */ Object.create(null)]), gt] : u++;
    let N;
    try {
      N = t.insert(I, u, B);
    } catch (C) {
      throw C === le ? new ft(I) : C;
    }
    B || (a[u] = _.map(([C, g]) => {
      const H = /* @__PURE__ */ Object.create(null);
      for (g -= 1; g >= 0; g--) {
        const [fe, Oe] = N[g];
        H[fe] = Oe;
      }
      return [C, H];
    }));
  }
  const [r, o, l] = t.buildRegExp();
  for (let p = 0, u = a.length; p < u; p++) for (let f = 0, B = a[p].length; f < B; f++) {
    const I = (c = a[p][f]) == null ? void 0 : c[1];
    if (!I) continue;
    const _ = Object.keys(I);
    for (let N = 0, C = _.length; N < C; N++) I[_[N]] = l[I[_[N]]];
  }
  const d = [];
  for (const p in o) d[p] = a[o[p]];
  return [r, d, s];
}
__name(oa, "oa");
function ie(e, t) {
  if (e) {
    for (const a of Object.keys(e).sort((n, s) => s.length - n.length)) if (xt(a).test(t)) return [...e[a]];
  }
}
__name(ie, "ie");
var $;
var W;
var je;
var wt;
var st;
var da = (st = class {
  static {
    __name(this, "st");
  }
  constructor() {
    v(this, je);
    y(this, "name", "RegExpRouter");
    v(this, $);
    v(this, W);
    y(this, "match", ea);
    m(this, $, { [x]: /* @__PURE__ */ Object.create(null) }), m(this, W, { [x]: /* @__PURE__ */ Object.create(null) });
  }
  add(e, t, a) {
    var l;
    const n = i(this, $), s = i(this, W);
    if (!n || !s) throw new Error(bt);
    n[e] || [n, s].forEach((d) => {
      d[e] = /* @__PURE__ */ Object.create(null), Object.keys(d[x]).forEach((c) => {
        d[e][c] = [...d[x][c]];
      });
    }), t === "/*" && (t = "*");
    const r = (t.match(/\/:/g) || []).length;
    if (/\*$/.test(t)) {
      const d = xt(t);
      e === x ? Object.keys(n).forEach((c) => {
        var p;
        (p = n[c])[t] || (p[t] = ie(n[c], t) || ie(n[x], t) || []);
      }) : (l = n[e])[t] || (l[t] = ie(n[e], t) || ie(n[x], t) || []), Object.keys(n).forEach((c) => {
        (e === x || e === c) && Object.keys(n[c]).forEach((p) => {
          d.test(p) && n[c][p].push([a, r]);
        });
      }), Object.keys(s).forEach((c) => {
        (e === x || e === c) && Object.keys(s[c]).forEach((p) => d.test(p) && s[c][p].push([a, r]));
      });
      return;
    }
    const o = lt(t) || [t];
    for (let d = 0, c = o.length; d < c; d++) {
      const p = o[d];
      Object.keys(s).forEach((u) => {
        var f;
        (e === x || e === u) && ((f = s[u])[p] || (f[p] = [...ie(n[u], p) || ie(n[x], p) || []]), s[u][p].push([a, r - c + d + 1]));
      });
    }
  }
  buildAllMatchers() {
    const e = /* @__PURE__ */ Object.create(null);
    return Object.keys(i(this, W)).concat(Object.keys(i(this, $))).forEach((t) => {
      e[t] || (e[t] = b(this, je, wt).call(this, t));
    }), m(this, $, m(this, W, void 0)), ia(), e;
  }
}, $ = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakSet(), wt = /* @__PURE__ */ __name(function(e) {
  const t = [];
  let a = e === x;
  return [i(this, $), i(this, W)].forEach((n) => {
    const s = n[e] ? Object.keys(n[e]).map((r) => [r, n[e][r]]) : [];
    s.length !== 0 ? (a || (a = true), t.push(...s)) : e !== x && t.push(...Object.keys(n[x]).map((r) => [r, n[x][r]]));
  }), a ? oa(t) : null;
}, "wt"), st);
var G;
var z;
var rt;
var la = (rt = class {
  static {
    __name(this, "rt");
  }
  constructor(e) {
    y(this, "name", "SmartRouter");
    v(this, G, []);
    v(this, z, []);
    m(this, G, e.routers);
  }
  add(e, t, a) {
    if (!i(this, z)) throw new Error(bt);
    i(this, z).push([e, t, a]);
  }
  match(e, t) {
    if (!i(this, z)) throw new Error("Fatal error");
    const a = i(this, G), n = i(this, z), s = a.length;
    let r = 0, o;
    for (; r < s; r++) {
      const l = a[r];
      try {
        for (let d = 0, c = n.length; d < c; d++) l.add(...n[d]);
        o = l.match(e, t);
      } catch (d) {
        if (d instanceof ft) continue;
        throw d;
      }
      this.match = l.match.bind(l), m(this, G, [l]), m(this, z, void 0);
      break;
    }
    if (r === s) throw new Error("Fatal error");
    return this.name = `SmartRouter + ${this.activeRouter.name}`, o;
  }
  get activeRouter() {
    if (i(this, z) || i(this, G).length !== 1) throw new Error("No active router has been determined yet.");
    return i(this, G)[0];
  }
}, G = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), rt);
var we = /* @__PURE__ */ Object.create(null);
var ca = /* @__PURE__ */ __name((e) => {
  for (const t in e) return true;
  return false;
}, "ca");
var J;
var P;
var te;
var ve;
var k;
var K;
var X;
var be;
var pa = (be = class {
  static {
    __name(this, "be");
  }
  constructor(t, a, n) {
    v(this, K);
    v(this, J);
    v(this, P);
    v(this, te);
    v(this, ve, 0);
    v(this, k, we);
    if (m(this, P, n || /* @__PURE__ */ Object.create(null)), m(this, J, []), t && a) {
      const s = /* @__PURE__ */ Object.create(null);
      s[t] = { handler: a, possibleKeys: [], score: 0 }, m(this, J, [s]);
    }
    m(this, te, []);
  }
  insert(t, a, n) {
    m(this, ve, ++Je(this, ve)._);
    let s = this;
    const r = Ot(a), o = [];
    for (let l = 0, d = r.length; l < d; l++) {
      const c = r[l], p = r[l + 1], u = Kt(c, p), f = Array.isArray(u) ? u[0] : c;
      if (f in i(s, P)) {
        s = i(s, P)[f], u && o.push(u[1]);
        continue;
      }
      i(s, P)[f] = new be(), u && (i(s, te).push(u), o.push(u[1])), s = i(s, P)[f];
    }
    return i(s, J).push({ [t]: { handler: n, possibleKeys: o.filter((l, d, c) => c.indexOf(l) === d), score: i(this, ve) } }), s;
  }
  search(t, a) {
    var p;
    const n = [];
    m(this, k, we);
    let r = [this];
    const o = ot(a), l = [], d = o.length;
    let c = null;
    for (let u = 0; u < d; u++) {
      const f = o[u], B = u === d - 1, I = [];
      for (let N = 0, C = r.length; N < C; N++) {
        const g = r[N], H = i(g, P)[f];
        H && (m(H, k, i(g, k)), B ? (i(H, P)["*"] && b(this, K, X).call(this, n, i(H, P)["*"], t, i(g, k)), b(this, K, X).call(this, n, H, t, i(g, k))) : I.push(H));
        for (let fe = 0, Oe = i(g, te).length; fe < Oe; fe++) {
          const $e = i(g, te)[fe], F = i(g, k) === we ? {} : { ...i(g, k) };
          if ($e === "*") {
            const se = i(g, P)["*"];
            se && (b(this, K, X).call(this, n, se, t, i(g, k)), m(se, k, F), I.push(se));
            continue;
          }
          const [Nt, We, he] = $e;
          if (!f && !(he instanceof RegExp)) continue;
          const j = i(g, P)[Nt];
          if (he instanceof RegExp) {
            if (c === null) {
              c = new Array(d);
              let re = a[0] === "/" ? 1 : 0;
              for (let ge = 0; ge < d; ge++) c[ge] = re, re += o[ge].length + 1;
            }
            const se = a.substring(c[u]), Re = he.exec(se);
            if (Re) {
              if (F[We] = Re[0], b(this, K, X).call(this, n, j, t, i(g, k), F), ca(i(j, P))) {
                m(j, k, F);
                const re = ((p = Re[0].match(/\//)) == null ? void 0 : p.length) ?? 0;
                (l[re] || (l[re] = [])).push(j);
              }
              continue;
            }
          }
          (he === true || he.test(f)) && (F[We] = f, B ? (b(this, K, X).call(this, n, j, t, F, i(g, k)), i(j, P)["*"] && b(this, K, X).call(this, n, i(j, P)["*"], t, F, i(g, k))) : (m(j, k, F), I.push(j)));
        }
      }
      const _ = l.shift();
      r = _ ? I.concat(_) : I;
    }
    return n.length > 1 && n.sort((u, f) => u.score - f.score), [n.map(({ handler: u, params: f }) => [u, f])];
  }
}, J = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakSet(), X = /* @__PURE__ */ __name(function(t, a, n, s, r) {
  for (let o = 0, l = i(a, J).length; o < l; o++) {
    const d = i(a, J)[o], c = d[n] || d[x], p = {};
    if (c !== void 0 && (c.params = /* @__PURE__ */ Object.create(null), t.push(c), s !== we || r && r !== we)) for (let u = 0, f = c.possibleKeys.length; u < f; u++) {
      const B = c.possibleKeys[u], I = p[c.score];
      c.params[B] = r != null && r[B] && !I ? r[B] : s[B] ?? (r == null ? void 0 : r[B]), p[c.score] = true;
    }
  }
}, "X"), be);
var ae;
var it;
var ua = (it = class {
  static {
    __name(this, "it");
  }
  constructor() {
    y(this, "name", "TrieRouter");
    v(this, ae);
    m(this, ae, new pa());
  }
  add(e, t, a) {
    const n = lt(t);
    if (n) {
      for (let s = 0, r = n.length; s < r; s++) i(this, ae).insert(e, n[s], a);
      return;
    }
    i(this, ae).insert(e, t, a);
  }
  match(e, t) {
    return i(this, ae).search(e, t);
  }
}, ae = /* @__PURE__ */ new WeakMap(), it);
var kt = class extends Zt {
  static {
    __name(this, "kt");
  }
  constructor(e = {}) {
    super(e), this.router = e.router ?? new la({ routers: [new da(), new ua()] });
  }
};
var h = new kt();
var Et = "1234";
var Bt = "4321";
var It = "2028-12-31";
function Pt() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
__name(Pt, "Pt");
async function St(e, t) {
  if (!e.DATA_STORE) return [];
  let a;
  const n = [];
  do {
    const o = await e.DATA_STORE.list({ prefix: t, cursor: a, limit: 1e3 });
    n.push(...o.keys.map((l) => l.name)), a = o.list_complete ? void 0 : o.cursor;
  } while (a);
  const s = await Promise.all(n.map((o) => e.DATA_STORE.get(o))), r = [];
  for (let o = 0; o < n.length; o++) if (s[o]) try {
    r.push({ _key: n[o], ...JSON.parse(s[o]) });
  } catch {
  }
  return r;
}
__name(St, "St");
function E(e) {
  return new Response(e, { headers: { "content-type": "text/html;charset=UTF-8" } });
}
__name(E, "E");
h.post("/login", async (e) => (await e.req.formData()).get("pin") === Et ? new Response(null, { status: 302, headers: { "Set-Cookie": "auth=1; Path=/; HttpOnly; SameSite=Strict", Location: "/" } }) : E(_e("Wrong PIN")));
h.get("/logout", () => new Response(null, { status: 302, headers: { "Set-Cookie": "auth=; Path=/; HttpOnly; Max-Age=0", Location: "/login" } }));
h.use("*", async (e, t) => {
  const a = new URL(e.req.url).pathname;
  if (a === "/login" && e.req.method === "GET") return E(_e(""));
  if (!(new URL(e.req.url).searchParams.get("master") === Bt)) {
    const l = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    if (l > It) return E(Ze());
    if (e.env.DATA_STORE) {
      const d = await e.env.DATA_STORE.get("APP_LICENSE");
      if (d && l > d) return E(Ze());
    }
  }
  if (!(e.req.header("Cookie") || "").includes("auth=1") && a !== "/login") return E(_e(""));
  await t();
});
h.get("/api/license-info", async (e) => {
  const a = (e.env.DATA_STORE ? await e.env.DATA_STORE.get("APP_LICENSE") : null) || It, n = Math.floor((new Date(a).getTime() - Date.now()) / 864e5);
  return e.json({ expiry: a, days: n, status: n < 0 ? "Expired" : "Active" });
});
h.post("/api/set-license", async (e) => {
  if (new URL(e.req.url).searchParams.get("master") !== Bt) return e.json({ success: false, error: "Unauthorized" }, 403);
  const a = await e.req.json();
  return e.env.DATA_STORE ? (await e.env.DATA_STORE.put("APP_LICENSE", String((a == null ? void 0 : a.date) || "")), e.json({ success: true })) : e.json({ success: false, error: "KV not configured" }, 500);
});
h.post("/api/list", async (e) => {
  const t = await e.req.json();
  return e.json(await St(e.env, (t == null ? void 0 : t.prefix) || ""));
});
h.post("/api/save", async (e) => {
  if (!e.env.DATA_STORE) return e.json({ success: false, error: "KV not configured" }, 500);
  const t = await e.req.json(), a = (t == null ? void 0 : t.prefix) || "", n = t == null ? void 0 : t.id, s = t == null ? void 0 : t.key, r = (t == null ? void 0 : t.data) || {};
  let o = s;
  return o || (n ? o = n.startsWith(a) ? n : a + n : o = a + Pt()), await e.env.DATA_STORE.put(o, JSON.stringify(r)), e.json({ success: true, key: o });
});
h.post("/api/get", async (e) => {
  if (!e.env.DATA_STORE) return e.json(null);
  const { key: t } = await e.req.json(), a = await e.env.DATA_STORE.get(t);
  return e.json(a ? JSON.parse(a) : null);
});
h.post("/api/delete", async (e) => {
  if (!e.env.DATA_STORE) return e.json({ success: false, error: "KV not configured" }, 500);
  const { key: t } = await e.req.json();
  return t ? (await e.env.DATA_STORE.delete(t), e.json({ success: true })) : e.json({ success: false, error: "Key is required" }, 400);
});
h.post("/api/export-all", async (e) => {
  const t = ["product:", "party:", "sale:", "purchase:", "payment:", "expense:", "exphead:", "expsubhead:", "bank:", "cb:"], a = {};
  for (const n of t) a[n] = await St(e.env, n);
  return e.json(a);
});
h.post("/api/import-all", async (e) => {
  if (!e.env.DATA_STORE) return e.json({ success: false, error: "KV not configured" }, 500);
  const t = await e.req.json();
  let a = 0;
  for (const [n, s] of Object.entries(t)) if (Array.isArray(s)) for (const r of s) {
    const o = r._key || n + Pt(), l = { ...r };
    delete l._key, await e.env.DATA_STORE.put(o, JSON.stringify(l)), a++;
  }
  return e.json({ success: true, count: a });
});
h.post("/api/change-pin", async (e) => {
  var s;
  const { oldPin: t, newPin: a } = await e.req.json(), n = await ((s = e.env.DATA_STORE) == null ? void 0 : s.get("APP_PIN")) || Et;
  return t !== n ? e.json({ success: false, error: "Wrong current PIN" }) : !a || a.length < 4 ? e.json({ success: false, error: "PIN must be at least 4 characters" }) : (await e.env.DATA_STORE.put("APP_PIN", a), e.json({ success: true }));
});
h.post("/api/kv-keys", async (e) => {
  const { prefix: t } = await e.req.json();
  if (!e.env.DATA_STORE) return e.json([]);
  const a = await e.env.DATA_STORE.list({ prefix: t || "", limit: 100 });
  return e.json(a.keys.map((n) => n.name));
});
h.post("/api/kv-get", async (e) => {
  const { key: t } = await e.req.json();
  if (!e.env.DATA_STORE) return e.json({ value: null });
  const a = await e.env.DATA_STORE.get(t);
  return e.json({ value: a });
});
h.post("/api/kv-delete", async (e) => {
  const { key: t } = await e.req.json();
  return e.env.DATA_STORE ? (await e.env.DATA_STORE.delete(t), e.json({ success: true })) : e.json({ success: false });
});
h.get("/", (e) => E(M(ma(), "dashboard")));
h.get("/inventory", (e) => E(M(ya(), "inventory")));
h.get("/parties", (e) => E(M(va(), "parties")));
h.get("/purchases", (e) => E(M(ba(), "purchases")));
h.get("/sales", (e) => E(M(fa(), "sales")));
h.get("/payments", (e) => E(M(ha(), "payments")));
h.get("/expenses", (e) => E(M(ga(), "expenses")));
h.get("/ledger", (e) => E(M(xa(), "ledger")));
h.get("/profit-loss", (e) => E(M(wa(), "profitloss")));
h.get("/day-details", (e) => E(M(ka(), "daydetails")));
h.get("/admin", (e) => E(M(Ea(), "admin")));
h.get("/login", (e) => E(_e("")));
function Ue() {
  return `<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#f0f2f5;--card:#ffffff;--text:#111827;--muted:#6b7280;
  --primary:#4f46e5;--primary-light:#eef2ff;--primary-fg:#fff;
  --accent:#059669;--accent-light:#ecfdf5;
  --danger:#dc2626;--danger-light:#fef2f2;
  --warning:#d97706;--warning-light:#fffbeb;
  --info:#0891b2;--info-light:#ecfeff;
  --border:#e5e7eb;--border-dark:#d1d5db;
  --sidebar-bg:#1e1b4b;--sidebar-fg:#a5b4fc;--sidebar-active:#6366f1;--sidebar-hover:rgba(255,255,255,.06);
  --radius:12px;--shadow:0 1px 3px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.04);--shadow-md:0 4px 6px -1px rgba(0,0,0,.07),0 2px 4px -2px rgba(0,0,0,.05);
  --transition:all .2s ease
}
body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:var(--bg);color:var(--text);line-height:1.6;font-size:14px;-webkit-font-smoothing:antialiased}
a{color:var(--primary);text-decoration:none}

/* LAYOUT */
.app{display:flex;min-height:100vh}
.sidebar{width:250px;background:var(--sidebar-bg);color:var(--sidebar-fg);position:fixed;left:0;top:0;height:100vh;overflow:auto;z-index:50;transition:transform .3s ease;display:flex;flex-direction:column}
.sidebar .logo{padding:24px 20px;font-size:17px;font-weight:700;color:#fff;border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;gap:10px;letter-spacing:-.3px}
.sidebar .logo .logo-icon{width:36px;height:36px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px}
.sidebar nav{padding:16px 10px;flex:1}
.sidebar nav a{display:flex;align-items:center;gap:12px;padding:11px 16px;border-radius:10px;color:var(--sidebar-fg);font-size:13px;font-weight:500;margin-bottom:2px;transition:var(--transition)}
.sidebar nav a .nav-icon{width:20px;text-align:center;font-size:15px;flex-shrink:0}
.sidebar nav a:hover{background:var(--sidebar-hover);color:#e0e7ff}
.sidebar nav a.active{background:var(--sidebar-active);color:#fff;box-shadow:0 2px 8px rgba(99,102,241,.3)}
.sidebar .sidebar-footer{padding:16px 20px;border-top:1px solid rgba(255,255,255,.08);font-size:11px;color:rgba(255,255,255,.3)}
.main{margin-left:250px;flex:1;padding:28px 36px;min-height:100vh}

.mobile-header{display:none;position:fixed;top:0;left:0;right:0;height:56px;background:var(--card);border-bottom:1px solid var(--border);z-index:40;padding:0 16px;align-items:center;gap:12px}
.hamburger{background:none;border:none;font-size:22px;cursor:pointer;color:var(--text);width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:10px;transition:var(--transition)}
.hamburger:hover{background:var(--bg)}
.overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:45;backdrop-filter:blur(2px)}
.overlay.open{display:block}
@media(max-width:860px){
  .sidebar{transform:translateX(-100%)}
  .sidebar.open{transform:translateX(0)}
  .mobile-header{display:flex}
  .main{margin-left:0;padding:72px 16px 24px}
}

/* TYPOGRAPHY & CARDS */
.page-header{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:14px;margin-bottom:24px}
.page-title{font-size:24px;font-weight:800;letter-spacing:-.5px;color:var(--text)}
.page-sub{font-size:13px;color:var(--muted);margin-top:2px}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:22px;box-shadow:var(--shadow);transition:var(--transition)}

/* STAT CARDS */
.stats,.summary-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px;margin-bottom:20px}
.stat,.summary-card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:18px 20px;box-shadow:var(--shadow);transition:var(--transition);position:relative;overflow:hidden}
.stat:hover,.summary-card:hover{box-shadow:var(--shadow-md);transform:translateY(-1px)}
.stat .label,.summary-card .label{font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);font-weight:600;margin-bottom:6px}
.stat .value,.summary-card .value{font-size:22px;font-weight:800;font-variant-numeric:tabular-nums;letter-spacing:-.3px}

/* TABLE */
.tbl{width:100%;border-collapse:collapse;font-size:13px}
.tbl th{text-align:left;padding:12px 14px;font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);font-weight:700;border-bottom:2px solid var(--border);background:var(--bg)}
.tbl td{padding:12px 14px;border-bottom:1px solid var(--border);vertical-align:middle;transition:background .15s}
.tbl tr:hover td{background:rgba(79,70,229,.02)}
.tbl .r{text-align:right;font-variant-numeric:tabular-nums}
.tbl .bold{font-weight:700}
.table-wrap{overflow:auto;-webkit-overflow-scrolling:touch}

/* SEARCH */
.search-wrap{position:relative;max-width:360px;margin-bottom:18px}
.search-wrap input{padding-left:38px;background:var(--card)}
.search-wrap .icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--muted);font-size:14px}

/* FORM */
input,select,textarea{width:100%;padding:10px 14px;border:1px solid var(--border);border-radius:10px;font-size:13px;font-family:inherit;background:var(--card);color:var(--text);outline:none;transition:var(--transition)}
input:focus,select:focus,textarea:focus{border-color:var(--primary);box-shadow:0 0 0 3px rgba(79,70,229,.1)}
label{display:block;font-size:11px;font-weight:700;color:var(--muted);margin-bottom:5px;text-transform:uppercase;letter-spacing:.4px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}
.form-group{margin-bottom:14px}
@media(max-width:560px){.form-row{grid-template-columns:1fr}}

/* BUTTONS */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:10px 18px;border:none;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;transition:var(--transition);font-family:inherit;white-space:nowrap}
.btn:active{transform:scale(.97)}
.btn-primary{background:var(--primary);color:var(--primary-fg);box-shadow:0 1px 3px rgba(79,70,229,.25)}
.btn-primary:hover{background:#4338ca;box-shadow:0 4px 12px rgba(79,70,229,.3)}
.btn-success{background:var(--accent);color:#fff;box-shadow:0 1px 3px rgba(5,150,105,.25)}
.btn-success:hover{background:#047857}
.btn-danger{background:var(--danger);color:#fff;box-shadow:0 1px 3px rgba(220,38,38,.25)}
.btn-danger:hover{background:#b91c1c}
.btn-warning{background:var(--warning);color:#fff}
.btn-outline{background:transparent;color:var(--text);border:1px solid var(--border)}
.btn-outline:hover{background:var(--bg);border-color:var(--border-dark)}
.btn-sm{padding:7px 12px;font-size:12px;border-radius:8px}
.btn-xs{padding:4px 8px;font-size:11px;border-radius:6px}
.btn-icon{padding:8px;width:34px;height:34px}

/* TABS */
.tabs{display:flex;gap:4px;background:var(--bg);border-radius:10px;padding:4px;margin-bottom:18px;width:fit-content;border:1px solid var(--border)}
.tab{padding:8px 16px;border:none;border-radius:8px;background:transparent;color:var(--muted);font-size:13px;font-weight:600;cursor:pointer;transition:var(--transition)}
.tab.active{background:var(--card);color:var(--primary);box-shadow:var(--shadow)}
.tab:hover:not(.active){color:var(--text)}

/* BADGES */
.badge{display:inline-flex;align-items:center;padding:3px 10px;border-radius:99px;font-size:11px;font-weight:700;letter-spacing:.3px}
.badge-cash{background:var(--accent-light);color:var(--accent)}
.badge-bank{background:var(--primary-light);color:var(--primary)}
.badge-danger{background:var(--danger-light);color:var(--danger)}
.badge-warning{background:var(--warning-light);color:var(--warning)}
.badge-info{background:var(--info-light);color:var(--info)}

/* UTILITY */
.text-danger{color:var(--danger)}.text-success{color:var(--accent)}.text-warning{color:var(--warning)}.text-muted{color:var(--muted)}.text-primary{color:var(--primary)}
.empty{text-align:center;padding:40px 16px;color:var(--muted);font-size:13px}
.hidden{display:none !important}
.clickable{cursor:pointer;color:var(--primary);font-weight:700;transition:var(--transition)}.clickable:hover{text-decoration:underline}
.bold{font-weight:700}

/* METHOD TOGGLE */
.method-toggle{display:flex;gap:8px}
.method-btn{flex:1;padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--card);cursor:pointer;font-size:13px;font-weight:600;text-align:center;color:var(--muted);transition:var(--transition)}
.method-btn.active{background:var(--primary);border-color:var(--primary);color:#fff;box-shadow:0 2px 8px rgba(79,70,229,.25)}

/* MODAL */
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:100;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(4px)}
.modal-overlay.open{display:flex}
.modal{background:var(--card);border-radius:16px;padding:28px;width:100%;max-width:700px;max-height:90vh;overflow:auto;box-shadow:0 25px 60px rgba(0,0,0,.2)}
.modal h3{font-size:18px;font-weight:800;margin-bottom:20px;letter-spacing:-.3px}

/* P&L */
.pl-header{padding:18px 22px;border-bottom:2px solid var(--border)}
.pl-row{display:flex;justify-content:space-between;gap:12px;padding:8px 22px;font-size:14px}
.pl-row.total{font-weight:700;background:var(--bg);border-radius:8px;margin:4px 8px;padding:12px 16px}
.pl-row strong{font-size:15px}

/* LOGIN */
.login-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#4338ca 100%)}
.login-card{background:var(--card);border-radius:20px;padding:48px 36px;width:90%;max-width:380px;text-align:center;box-shadow:0 25px 60px rgba(0,0,0,.3)}
.login-card h2{font-size:22px;font-weight:800;margin:16px 0 4px;letter-spacing:-.3px}
.login-card .sub{color:var(--muted);font-size:13px;margin-bottom:28px}
.login-card input{margin-bottom:18px;text-align:center;font-size:22px;letter-spacing:10px;padding:14px}
.login-card .btn{width:100%;padding:14px;font-size:15px}
.login-card .err{color:var(--danger);font-size:13px;margin-bottom:12px;font-weight:600}

/* MOBILE TABLE */
@media(max-width:600px){
  .tbl thead{display:none}
  .tbl tr{display:block;border-bottom:2px solid var(--border);margin-bottom:12px;padding:8px 0}
  .tbl td{display:flex;justify-content:space-between;padding:6px 12px;border:none}
  .tbl td::before{font-weight:700;color:var(--muted);font-size:11px;text-transform:uppercase}
  .stats,.summary-grid{grid-template-columns:1fr 1fr}
}

/* INVOICE */
.invoice-paper{max-width:760px;margin:0 auto;background:#fff;border:1px solid var(--border);border-radius:12px;padding:24px}

/* Section divider */
.section-title{font-size:14px;font-weight:700;color:var(--text);margin-bottom:12px;display:flex;align-items:center;gap:8px}
.section-title::after{content:'';flex:1;height:1px;background:var(--border)}

/* Scrollbar */
::-webkit-scrollbar{width:6px;height:6px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:var(--border-dark);border-radius:3px}
::-webkit-scrollbar-thumb:hover{background:var(--muted)}

/* Date nav */
.date-nav{display:flex;align-items:center;gap:8px}
.date-nav button{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:8px 12px;cursor:pointer;font-size:16px;transition:var(--transition)}
.date-nav button:hover{background:var(--bg)}

/* Print */
@media print{
  .sidebar,.mobile-header,.overlay,.btn,.tabs,.search-wrap,.page-header .btn{display:none !important}
  .main{margin-left:0 !important;padding:0 !important}
  .card{border:none !important;box-shadow:none !important}
}
</style>`;
}
__name(Ue, "Ue");
function M(e, t) {
  const n = [{ path: "/", icon: "grid_view", label: "Dashboard", id: "dashboard" }, { path: "/inventory", icon: "inventory_2", label: "Inventory", id: "inventory" }, { path: "/parties", icon: "groups", label: "Customers & Suppliers", id: "parties" }, { path: "/purchases", icon: "shopping_cart", label: "Purchases", id: "purchases" }, { path: "/sales", icon: "receipt_long", label: "Sales", id: "sales" }, { path: "/payments", icon: "account_balance_wallet", label: "Accounts & Banking", id: "payments" }, { path: "/expenses", icon: "payments", label: "Expenses", id: "expenses" }, { path: "/ledger", icon: "menu_book", label: "Ledger", id: "ledger" }, { path: "/profit-loss", icon: "trending_up", label: "Profit & Loss", id: "profitloss" }, { path: "/day-details", icon: "calendar_today", label: "Day Details", id: "daydetails" }, { path: "/admin", icon: "settings", label: "Admin", id: "admin" }].map((s) => `<a href="${s.path}" class="${t === s.id ? "active" : ""}"><span class="nav-icon material-symbols-outlined" style="font-size:20px">${s.icon}</span>${s.label}</a>`).join("");
  return `<!doctype html>
<html lang="en"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Apollow Traders \u2014 BizManager</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
${Ue()}
<script>
// ============ GLOBAL UTILITIES ============
window.api=async function(path,body){
  var r=await fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body||{})});
  var d=await r.json();
  if(!r.ok||(d&&d.success===false)){throw new Error(d.error||'Request failed');}
  return d;
};
window.loadList=async function(prefix){return api('/api/list',{prefix:prefix});};
window.saveItem=async function(prefix,data,id){return api('/api/save',{prefix:prefix,data:data,id:id});};
window.saveByKey=async function(key,data){return api('/api/save',{key:key,data:data});};
window.deleteItem=async function(key,ask){if(ask!==false&&!confirm('Delete this item?'))return;await api('/api/delete',{key:key});};
window.openModal=function(id){var el=document.getElementById(id);if(el)el.classList.add('open');};
window.closeModal=function(id){var el=document.getElementById(id);if(el)el.classList.remove('open');};
window.fmt=function(n){return Number(n||0).toLocaleString('en-IN');};
window.todayISO=function(){return new Date().toISOString().slice(0,10);};
window.cleanForSave=function(obj){var c=Object.assign({},obj);delete c._key;return c;};
window.normalize=function(v){return String(v||'').trim().toLowerCase();};
window.txnNo=function(prefix){var d=todayISO().replace(/-/g,'');return prefix+'-'+d+'-'+Math.random().toString(36).slice(2,7).toUpperCase();};
window.setMethod=function(el,value,hiddenId,groupSelector){
  var hidden=document.getElementById(hiddenId);if(hidden)hidden.value=value;
  document.querySelectorAll(groupSelector).forEach(function(x){x.classList.remove('active');});
  if(el)el.classList.add('active');
};
window.toggleSidebar=function(){document.getElementById('sidebar').classList.toggle('open');document.getElementById('overlay').classList.toggle('open');};

window.openAddProduct=function(){
  var modal=document.getElementById('addProduct');if(!modal)return;
  var set=function(id,val){var el=document.getElementById(id);if(el)el.value=val;};
  set('editProductKey','');set('pName','');set('pSku','');set('pUnit','pcs');set('pBuy','');set('pSell','');set('pStock','');
  var dup=document.getElementById('productDuplicate');if(dup)dup.textContent='';
  var title=document.getElementById('productModalTitle');if(title)title.textContent='Add Product';
  modal.classList.add('open');
};
window.saveProduct=async function(){
  var name=document.getElementById('pName')?.value?.trim();if(!name){alert('Enter product name');return;}
  var skuEl=document.getElementById('pSku');var sku=skuEl.value.trim()||('PRD-'+Math.random().toString(36).slice(2,6).toUpperCase());skuEl.value=sku;
  var data={name:name,sku:sku,unit:document.getElementById('pUnit')?.value||'pcs',purchasePrice:+document.getElementById('pBuy')?.value||0,salePrice:+document.getElementById('pSell')?.value||0,stock:+document.getElementById('pStock')?.value||0};
  var editKey=document.getElementById('editProductKey')?.value;
  var res=editKey?await saveByKey(editKey,data):await saveItem('product:',data);
  if(!res||!res.key){alert('Save failed');return;}
  closeModal('addProduct');if(typeof loadProducts==='function')await loadProducts();else location.reload();
};
<\/script>
</head><body>
<div class="mobile-header">
  <button class="hamburger" onclick="toggleSidebar()"><span class="material-symbols-outlined">menu</span></button>
  <span style="font-weight:800;font-size:15px">Apollow Traders</span>
</div>
<div class="overlay" id="overlay" onclick="toggleSidebar()"></div>
<div class="app">
  <aside class="sidebar" id="sidebar">
    <div class="logo"><div class="logo-icon">AT</div>Apollow Traders</div>
    <nav>${n}<a href="/logout" style="margin-top:24px;opacity:.6"><span class="nav-icon material-symbols-outlined" style="font-size:20px">logout</span>Logout</a></nav>
    <div class="sidebar-footer">BizManager v2.0</div>
  </aside>
  <main class="main">${e}</main>
</div>
<script>document.querySelectorAll('.sidebar nav a').forEach(function(a){a.addEventListener('click',function(){document.getElementById('sidebar').classList.remove('open');document.getElementById('overlay').classList.remove('open');});});<\/script>
</body></html>`;
}
__name(M, "M");
function _e(e) {
  return `<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>BizManager Login</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
${Ue()}</head><body>
<div class="login-page"><form class="login-card" method="POST" action="/login">
  <div style="width:56px;height:56px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto;color:#fff;font-weight:800;font-size:20px">AT</div>
  <h2>Apollow Traders</h2>
  <div class="sub">Enter PIN to continue</div>
  ${e ? `<div class="err">${e}</div>` : ""}
  <input type="password" name="pin" placeholder="\u2022\u2022\u2022\u2022" maxlength="6" autofocus required>
  <button type="submit" class="btn btn-primary">Login</button>
</form></div></body></html>`;
}
__name(_e, "_e");
function Ze() {
  return `<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>License Expired</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">${Ue()}</head><body>
<div class="login-page"><div class="login-card">
  <span class="material-symbols-outlined" style="font-size:48px;color:var(--warning)">warning</span>
  <h2>License Expired</h2><div class="sub">Please renew your license to continue.</div>
</div></div></body></html>`;
}
__name(Ze, "Ze");
function ma() {
  return `
<div class="page-header"><div><div class="page-title">Dashboard</div><div class="page-sub">Overview of your business performance</div></div></div>
<div class="stats" id="stats"></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
  <div class="card"><div class="section-title">Recent Sales</div><div id="recentSales" class="table-wrap"></div></div>
  <div class="card"><div class="section-title">Recent Purchases</div><div id="recentPurchases" class="table-wrap"></div></div>
</div>
<script>
(async function(){
  var data=await Promise.all([loadList('product:'),loadList('sale:'),loadList('purchase:'),loadList('payment:'),loadList('expense:'),loadList('party:')]);
  var products=data[0],sales=data[1],purchases=data[2],payments=data[3],expenses=data[4],parties=data[5];
  var customers=parties.filter(function(p){return p.type==='customer';});
  var suppliers=parties.filter(function(p){return p.type==='supplier';});
  var totalSales=sales.reduce(function(s,x){return s+(x.total||0);},0);
  var totalPurchases=purchases.reduce(function(s,x){return s+(x.total||0);},0);
  var totalExpenses=expenses.reduce(function(s,x){return s+(x.amount||0);},0);
  var receivables=customers.reduce(function(s,c){return s+Math.max(0,c.balance||0);},0);
  var payables=suppliers.reduce(function(s,c){return s+Math.max(0,c.balance||0);},0);
  var cashFlow=payments.reduce(function(sum,p){return p.type==='receipt'?sum+(p.amount||0):sum-(p.amount||0);},0);
  var cardData=[
    {label:'Total Sales',value:fmt(totalSales),color:'var(--accent)',icon:'trending_up'},
    {label:'Total Purchases',value:fmt(totalPurchases),color:'var(--primary)',icon:'shopping_cart'},
    {label:'Total Expenses',value:fmt(totalExpenses),color:'var(--warning)',icon:'payments'},
    {label:'Receivables',value:fmt(receivables),color:'var(--accent)',icon:'call_received'},
    {label:'Payables',value:fmt(payables),color:'var(--danger)',icon:'call_made'},
    {label:'Cash Flow',value:fmt(cashFlow),color:cashFlow>=0?'var(--accent)':'var(--danger)',icon:'account_balance'},
    {label:'Products',value:products.length,color:'var(--primary)',icon:'inventory_2'},
    {label:'Customers',value:customers.length,color:'var(--info)',icon:'groups'}
  ];
  document.getElementById('stats').innerHTML=cardData.map(function(s){
    return '<div class="stat"><div class="label">'+s.label+'</div><div class="value" style="color:'+s.color+'">'+s.value+'</div></div>';
  }).join('');
  var rSales=sales.slice().sort(function(a,b){return(b.date||'').localeCompare(a.date||'');}).slice(0,5);
  var rPurchases=purchases.slice().sort(function(a,b){return(b.date||'').localeCompare(a.date||'');}).slice(0,5);
  document.getElementById('recentSales').innerHTML=rSales.length
    ?'<table class="tbl"><thead><tr><th>Date</th><th>Invoice</th><th>Customer</th><th class="r">Total</th></tr></thead><tbody>'+rSales.map(function(s){return'<tr><td>'+(s.date||'')+'</td><td>'+(s.invoiceNo||'')+'</td><td>'+(s.customerName||'')+'</td><td class="r bold">'+fmt(s.total)+'</td></tr>';}).join('')+'</tbody></table>'
    :'<div class="empty">No sales yet</div>';
  document.getElementById('recentPurchases').innerHTML=rPurchases.length
    ?'<table class="tbl"><thead><tr><th>Date</th><th>Purchase #</th><th>Supplier</th><th class="r">Total</th></tr></thead><tbody>'+rPurchases.map(function(p){return'<tr><td>'+(p.date||'')+'</td><td>'+(p.purchaseNo||'')+'</td><td>'+(p.supplierName||'')+'</td><td class="r bold">'+fmt(p.total)+'</td></tr>';}).join('')+'</tbody></table>'
    :'<div class="empty">No purchases yet</div>';
})();
<\/script>`;
}
__name(ma, "ma");
function ya() {
  return `
<div class="page-header">
  <div><div class="page-title">Inventory</div><div class="page-sub">Manage products, SKU and stock</div></div>
  <button class="btn btn-primary" onclick="openAddProduct()"><span class="material-symbols-outlined" style="font-size:18px">add</span> Add Product</button>
</div>
<div class="search-wrap"><span class="icon"><span class="material-symbols-outlined" style="font-size:18px">search</span></span><input placeholder="Search products..." oninput="filterProducts(this.value)"></div>
<div class="card" style="padding:0;overflow:hidden"><div class="table-wrap">
  <table class="tbl"><thead><tr><th>Name</th><th>SKU</th><th class="r">Purchase</th><th class="r">Sale</th><th class="r">Stock</th><th class="r">Actions</th></tr></thead><tbody id="productBody"></tbody></table>
</div></div>
<div class="modal-overlay" id="addProduct"><div class="modal">
  <h3 id="productModalTitle">Add Product</h3><input type="hidden" id="editProductKey">
  <div class="form-group"><label>Product Name</label><input id="pName" placeholder="Product name"><div id="productDuplicate" class="text-warning" style="font-size:12px;margin-top:6px"></div></div>
  <div class="form-row"><div><label>SKU</label><input id="pSku" placeholder="Auto generated"></div><div><label>Unit</label><input id="pUnit" value="pcs" placeholder="pcs, kg..."></div></div>
  <div class="form-row"><div><label>Purchase Price</label><input type="number" id="pBuy" placeholder="0"></div><div><label>Sale Price</label><input type="number" id="pSell" placeholder="0"></div></div>
  <div class="form-group"><label>Opening Stock</label><input type="number" id="pStock" placeholder="0"></div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px"><button class="btn btn-outline" onclick="closeModal('addProduct')">Cancel</button><button class="btn btn-primary" onclick="saveProduct()">Save</button></div>
</div></div>
<script>
var products=[],editKey=null;
function generateSKU(name){var c=String(name||'').replace(/[^a-zA-Z0-9]/g,'').toUpperCase().slice(0,4)||'PRD';return c+'-'+Math.random().toString(36).slice(2,6).toUpperCase();}
async function loadProducts(){try{var res=await fetch('/api/list',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prefix:'product:'})});var data=await res.json();products=Array.isArray(data)?data:[];renderProducts(products);}catch(err){console.error(err);}}
function renderProducts(list){var body=document.getElementById('productBody');if(!body)return;if(!list.length){body.innerHTML='<tr><td colspan="6" class="empty">No products found</td></tr>';return;}
  body.innerHTML=list.map(function(p){return'<tr><td class="bold">'+(p.name||'')+'</td><td><span class="badge badge-info">'+(p.sku||'')+'</span></td><td class="r">'+fmt(p.purchasePrice||0)+'</td><td class="r">'+fmt(p.salePrice||0)+'</td><td class="r bold '+((p.stock||0)<=0?'text-danger':'')+'">'+fmt(p.stock||0)+'</td><td class="r"><div style="display:flex;gap:4px;justify-content:flex-end"><button data-edit="'+p._key+'" class="btn btn-outline btn-sm">Edit</button><button data-key="'+p._key+'" class="btn btn-danger btn-sm delBtn">Del</button></div></td></tr>';}).join('');}
document.addEventListener('click',function(e){if(e.target.classList.contains('delBtn')){var el=e.target.closest('[data-key]');if(el)deleteProduct(el.getAttribute('data-key'));}if(e.target.hasAttribute('data-edit'))openEditProduct(e.target.getAttribute('data-edit'));});
window.saveProduct=async function(){var name=document.getElementById('pName').value.trim();if(!name){alert('Enter product name');return;}var skuInput=document.getElementById('pSku');var sku=skuInput.value.trim();if(!sku){sku=generateSKU(name);skuInput.value=sku;}
  var data={name:name,sku:sku,unit:document.getElementById('pUnit').value||'pcs',purchasePrice:Number(document.getElementById('pBuy').value||0),salePrice:Number(document.getElementById('pSell').value||0),stock:Number(document.getElementById('pStock').value||0)};
  var payload=editKey?{key:editKey,data:data}:{prefix:'product:',data:data};var res=await fetch('/api/save',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});var json=await res.json();if(!json||!json.key){alert('Save failed');return;}editKey=null;closeModal('addProduct');loadProducts();};
window.deleteProduct=async function(key){if(!confirm('Delete this product?'))return;await fetch('/api/delete',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({key:key})});loadProducts();};
window.filterProducts=function(q){var t=String(q||'').toLowerCase();renderProducts(products.filter(function(p){return(p.name||'').toLowerCase().includes(t)||(p.sku||'').toLowerCase().includes(t);}));};
function openEditProduct(key){var p=products.find(function(x){return x._key===key;});if(!p)return;editKey=key;document.getElementById('productModalTitle').textContent='Edit Product';document.getElementById('pName').value=p.name||'';document.getElementById('pSku').value=p.sku||'';document.getElementById('pUnit').value=p.unit||'pcs';document.getElementById('pBuy').value=p.purchasePrice||0;document.getElementById('pSell').value=p.salePrice||0;document.getElementById('pStock').value=p.stock||0;openModal('addProduct');}
window.addEventListener('load',loadProducts);
<\/script>`;
}
__name(ya, "ya");
function va() {
  return `
<div class="page-header">
  <div><div class="page-title">Customers & Suppliers</div><div class="page-sub">Manage business contacts</div></div>
  <button class="btn btn-primary" id="addPartyBtn"><span class="material-symbols-outlined" style="font-size:18px">add</span> Add</button>
</div>
<div class="tabs"><button class="tab active" data-tab="customer">Customers</button><button class="tab" data-tab="supplier">Suppliers</button></div>
<div class="search-wrap"><span class="icon"><span class="material-symbols-outlined" style="font-size:18px">search</span></span><input placeholder="Search..." oninput="filterParties(this.value)"></div>
<div class="card" style="padding:0;overflow:hidden"><div class="table-wrap">
  <table class="tbl"><thead><tr><th>Name</th><th>Phone</th><th>Address</th><th class="r">Balance</th><th class="r">Actions</th></tr></thead><tbody id="partyBody"></tbody></table>
</div></div>
<div class="modal-overlay" id="addParty"><div class="modal">
  <h3 id="partyModalTitle">Add Contact</h3><input type="hidden" id="partyEditKey">
  <div class="form-group"><label>Name</label><input id="partyName" placeholder="Name" oninput="partyDuplicateHint()"><div id="partyDuplicate" class="text-warning" style="font-size:12px;margin-top:6px"></div></div>
  <div class="form-group"><label>Phone</label><input id="partyPhone" placeholder="Phone"></div>
  <div class="form-group"><label>Address</label><input id="partyAddr" placeholder="Address"></div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px"><button class="btn btn-outline" onclick="closeModal('addParty')">Cancel</button><button class="btn btn-primary" onclick="saveParty()">Save</button></div>
</div></div>
<script>
var allParties=[],partyTab='customer';
document.getElementById('addPartyBtn').onclick=function(){openAddParty();};
document.addEventListener('click',function(e){if(e.target.classList.contains('tab')&&e.target.hasAttribute('data-tab')){partyTab=e.target.getAttribute('data-tab');document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active');});e.target.classList.add('active');renderParties();}if(e.target.classList.contains('editPartyBtn')){editParty(e.target.getAttribute('data-key'));}});
function findPartyDuplicate(name,editKey){var n=normalize(name);return allParties.find(function(p){return p.type===partyTab&&normalize(p.name)===n&&p._key!==editKey;});}
window.partyDuplicateHint=function(){var editKey=document.getElementById('partyEditKey').value;var dup=findPartyDuplicate(document.getElementById('partyName').value,editKey);document.getElementById('partyDuplicate').textContent=dup?('Existing '+partyTab+': '+dup.name):'';};
window.openAddParty=function(){document.getElementById('partyModalTitle').textContent='Add '+(partyTab==='customer'?'Customer':'Supplier');document.getElementById('partyEditKey').value='';document.getElementById('partyName').value='';document.getElementById('partyPhone').value='';document.getElementById('partyAddr').value='';document.getElementById('partyDuplicate').textContent='';openModal('addParty');};
window.saveParty=async function(){var editKey=document.getElementById('partyEditKey').value;var name=document.getElementById('partyName').value.trim();if(!name)return alert('Name required');var dup=findPartyDuplicate(name,editKey);if(dup)return alert((partyTab==='customer'?'Customer':'Supplier')+' already exists');
  if(editKey){var existing=allParties.find(function(x){return x._key===editKey;});if(!existing)return alert('Record not found');await saveByKey(editKey,{name:name,phone:document.getElementById('partyPhone').value.trim(),address:document.getElementById('partyAddr').value.trim(),type:existing.type,balance:Number(existing.balance||0)});}
  else{var res=await saveItem('party:',{name:name,phone:document.getElementById('partyPhone').value.trim(),address:document.getElementById('partyAddr').value.trim(),type:partyTab,balance:0});if(!res)return;}
  closeModal('addParty');await loadParties();};
async function loadParties(){allParties=await loadList('party:');renderParties();}
function renderParties(listInput){var list=listInput||allParties.filter(function(p){return p.type===partyTab;});document.getElementById('partyBody').innerHTML=!list.length?'<tr><td colspan="5" class="empty">No '+partyTab+'s found</td></tr>':list.map(function(p){return'<tr><td class="bold">'+(p.name||'')+'</td><td class="text-muted">'+(p.phone||'')+'</td><td class="text-muted">'+(p.address||'')+'</td><td class="r bold '+((p.balance||0)>0?'text-danger':'text-success')+'">'+fmt(p.balance||0)+'</td><td class="r"><button class="btn btn-outline btn-sm editPartyBtn" data-key="'+p._key+'">Edit</button></td></tr>';}).join('');}
window.filterParties=function(q){var t=normalize(q);renderParties(allParties.filter(function(p){return p.type===partyTab&&(normalize(p.name).includes(t)||normalize(p.phone).includes(t)||normalize(p.address).includes(t));}));};
window.editParty=async function(key){var p=allParties.find(function(x){return x._key===key;});if(!p)return;partyTab=p.type;document.getElementById('partyModalTitle').textContent='Edit '+(p.type==='customer'?'Customer':'Supplier');document.getElementById('partyEditKey').value=p._key;document.getElementById('partyName').value=p.name||'';document.getElementById('partyPhone').value=p.phone||'';document.getElementById('partyAddr').value=p.address||'';document.getElementById('partyDuplicate').textContent='';openModal('addParty');};
loadParties();
<\/script>`;
}
__name(va, "va");
function ba() {
  return `
<div class="page-header">
  <div><div class="page-title">Purchases</div><div class="page-sub">Purchase products from suppliers</div></div>
  <button class="btn btn-primary" onclick="window.openPurchaseModal()"><span class="material-symbols-outlined" style="font-size:18px">add</span> New Purchase</button>
</div>
<div class="card" style="padding:0;overflow:hidden"><div class="table-wrap">
  <table class="tbl"><thead><tr><th>Date</th><th>Purchase #</th><th>Supplier</th><th class="r">Items</th><th class="r">Total</th><th class="r">Paid</th><th class="r">Due</th><th class="r">Actions</th></tr></thead><tbody id="purchaseBody"></tbody></table>
</div></div>
<div class="modal-overlay" id="addPurchase"><div class="modal">
  <h3 id="purModalTitle">New Purchase</h3>
  <div class="form-row"><div><label>Date</label><input type="date" id="purDate"></div><div><label>Purchase Number</label><input id="purNo" readonly></div></div>
  <div class="form-group"><label>Supplier</label><select id="purSupplier"></select></div>
  <datalist id="purProductOptions"></datalist>
  <div style="display:flex;justify-content:space-between;align-items:center;margin:12px 0 8px"><span style="font-weight:700;font-size:13px">Items</span><button class="btn btn-outline btn-sm" onclick="window.addPurItem()">+ Add Item</button></div>
  <div id="purItems"></div>
  <div class="form-row" style="margin-top:12px"><div class="form-row"><div><label>Discount</label><input type="number" id="purDiscount" value="0" oninput="window.calcPurTotal()"></div><div><label>Extra</label><input type="number" id="purExtra" value="0" oninput="window.calcPurTotal()"></div></div><div class="form-row"><div><label>VAT Type</label><select id="purVatType" onchange="window.calcPurTotal()"><option value="percent">%</option><option value="flat">Flat</option></select></div><div><label>VAT</label><input type="number" id="purVat" value="0" oninput="window.calcPurTotal()"></div></div><div><label>Total</label><div id="purTotal" style="font-size:20px;font-weight:800;color:var(--primary)">0</div></div><div><label>Paid</label><input type="number" id="purPaid" placeholder="0"></div></div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px"><button class="btn btn-outline" onclick="closeModal('addPurchase')">Cancel</button><button class="btn btn-primary" onclick="window.savePurchase()">Save Purchase</button></div>
</div></div>
<div class="modal-overlay" id="viewPurchase"><div class="modal" style="max-width:800px"><h3>Purchase Invoice</h3><div id="purchaseInvoiceContent"></div><div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px"><button class="btn btn-outline" onclick="closeModal('viewPurchase')">Close</button><button class="btn btn-primary" onclick="window.printPurchase()">Print</button></div></div></div>
<script>
var editKey=null,purProducts=[],purSuppliers=[],purItems=[],documentData=[];
window.initPurchases=async function(){var data=await Promise.all([loadList('purchase:'),loadList('product:'),loadList('party:')]);documentData=data[0]||[];purProducts=data[1]||[];purSuppliers=(data[2]||[]).filter(function(p){return p.type==='supplier';});
  document.getElementById('purSupplier').innerHTML='<option value="">Select Supplier</option>'+purSuppliers.map(function(s){return'<option value="'+s._key+'">'+s.name+'</option>';}).join('');
  document.getElementById('purProductOptions').innerHTML=purProducts.map(function(p){return'<option value="'+p.name+'"></option>';}).join('');renderPurchaseTable();};
function renderPurchaseTable(){var sorted=documentData.slice().sort(function(a,b){return(b.date||'').localeCompare(a.date||'');});document.getElementById('purchaseBody').innerHTML=!sorted.length?'<tr><td colspan="8" class="empty">No purchases yet</td></tr>':sorted.map(function(p){return'<tr><td>'+(p.date||'')+'</td><td><span class="clickable viewBtn" data-key="'+p._key+'">'+(p.purchaseNo||'-')+'</span></td><td>'+(p.supplierName||'')+'</td><td class="r">'+((p.items||[]).length)+'</td><td class="r bold">'+fmt(p.total)+'</td><td class="r">'+fmt(p.paid)+'</td><td class="r bold '+((p.total||0)-(p.paid||0)>0?'text-danger':'text-success')+'">'+fmt((p.total||0)-(p.paid||0))+'</td><td class="r"><button class="btn btn-outline btn-sm editPurchaseBtn" data-key="'+p._key+'">Edit</button></td></tr>';}).join('');}
window.openPurchaseModal=function(){editKey=null;document.getElementById('purModalTitle').innerText="New Purchase";document.getElementById('purDate').value=todayISO();document.getElementById('purNo').value=txnNo('PUR');document.getElementById('purSupplier').value='';document.getElementById('purPaid').value='';document.getElementById('purDiscount').value=0;document.getElementById('purExtra').value=0;document.getElementById('purVat').value=0;purItems=[];window.addPurItem();openModal('addPurchase');};
window.addPurItem=function(){purItems.push({productKey:'',productName:'',qty:1,rate:0,amount:0});window.renderPurItems();};
window.renderPurItems=function(){document.getElementById('purItems').innerHTML=purItems.map(function(item,i){return'<div class="form-row" style="grid-template-columns:1fr 70px 100px 100px 36px;align-items:end;margin-bottom:8px"><div><input list="purProductOptions" placeholder="Product" value="'+item.productName+'" data-idx="'+i+'" data-field="productName" class="purInput"></div><div><input type="number" value="'+item.qty+'" data-idx="'+i+'" data-field="qty" class="purInput"></div><div><input type="number" value="'+item.rate+'" data-idx="'+i+'" data-field="rate" class="purInput"></div><div id="purItemAmt_'+i+'" style="font-weight:700;padding:10px 0;text-align:right">'+fmt(item.amount)+'</div><div><button class="btn btn-danger btn-sm purRemoveBtn" data-idx="'+i+'">X</button></div></div>';}).join('');document.querySelectorAll('.purInput').forEach(function(el){el.addEventListener('input',function(){window.purUpdateField(Number(this.dataset.idx),this.dataset.field,this.value);});});document.querySelectorAll('.purRemoveBtn').forEach(function(el){el.addEventListener('click',function(){window.purRemove(Number(this.dataset.idx));});});window.calcPurTotal();};
window.purUpdateField=function(idx,field,val){if(field==='productName'){purItems[idx].productName=val;var found=purProducts.find(function(p){return normalize(p.name)===normalize(val);});if(found){purItems[idx].productKey=found._key;purItems[idx].rate=Number(found.purchasePrice||0);window.renderPurItems();return;}}else{purItems[idx][field]=Number(val);}purItems[idx].amount=purItems[idx].qty*purItems[idx].rate;var el=document.getElementById('purItemAmt_'+idx);if(el)el.textContent=fmt(purItems[idx].amount);window.calcPurTotal();};
window.calcPurTotal=function(){var subtotal=purItems.reduce(function(s,i){return s+(i.amount||0);},0);var discount=Number(document.getElementById('purDiscount').value||0);var extra=Number(document.getElementById('purExtra').value||0);var vat=Number(document.getElementById('purVat').value||0);var vatType=document.getElementById('purVatType').value;var total=subtotal-discount+extra;total+=(vatType==='percent')?(total*vat/100):vat;document.getElementById('purTotal').textContent=fmt(total);return total;};
window.purRemove=function(idx){purItems.splice(idx,1);if(!purItems.length)purItems.push({productKey:'',productName:'',qty:1,rate:0,amount:0});window.renderPurItems();};
window.viewPurchase=function(key){var p=documentData.find(function(x){return x._key===key;});if(!p)return;var subtotal=(p.items||[]).reduce(function(s,i){return s+(i.amount||0);},0);var base=subtotal-(p.discount||0)+(p.extra||0);var vatAmt=(p.vatType==='percent')?(base*(p.vat||0)/100):(p.vat||0);var rows=(p.items||[]).map(function(it,i){return'<tr><td>'+(i+1)+'</td><td>'+it.productName+'</td><td class="r">'+fmt(it.qty)+'</td><td class="r">'+fmt(it.rate)+'</td><td class="r">'+fmt(it.amount)+'</td></tr>';}).join('');
  document.getElementById('purchaseInvoiceContent').innerHTML='<div id="purchasePrintArea"><div style="display:flex;justify-content:space-between;margin-bottom:15px"><div><h2 style="margin:0">PURCHASE INVOICE</h2><b>No:</b> '+p.purchaseNo+'</div><div style="text-align:right"><b>Date:</b> '+p.date+'<br><b>Supplier:</b> '+p.supplierName+'</div></div><table class="tbl"><thead><tr style="background:var(--bg)"><th>#</th><th>Item</th><th class="r">Qty</th><th class="r">Rate</th><th class="r">Amt</th></tr></thead><tbody>'+rows+'</tbody></table><div style="display:flex;justify-content:flex-end;margin-top:15px"><div style="width:260px;line-height:1.8"><div style="display:flex;justify-content:space-between"><span>Subtotal:</span><span>'+fmt(subtotal)+'</span></div><div style="display:flex;justify-content:space-between;color:var(--danger)"><span>Discount:</span><span>-'+fmt(p.discount)+'</span></div><div style="display:flex;justify-content:space-between"><span>Extra:</span><span>+'+fmt(p.extra)+'</span></div><div style="display:flex;justify-content:space-between"><span>VAT:</span><span>+'+fmt(vatAmt)+'</span></div><div style="display:flex;justify-content:space-between;font-weight:800;font-size:16px;border-top:2px solid var(--text);margin-top:5px;padding-top:5px"><span>Total:</span><span>'+fmt(p.total)+'</span></div><div style="display:flex;justify-content:space-between;color:var(--accent)"><span>Paid:</span><span>'+fmt(p.paid)+'</span></div><div style="display:flex;justify-content:space-between;border-top:1px dashed var(--muted)"><span>Balance:</span><span>'+fmt(p.total-p.paid)+'</span></div></div></div></div>';openModal('viewPurchase');};
window.printPurchase=function(){var content=document.getElementById('purchasePrintArea').innerHTML;var win=window.open('','_blank');win.document.write('<html><head><title>Print Purchase</title><style>body{font-family:sans-serif;padding:30px}.tbl{width:100%;border-collapse:collapse}.tbl th,.tbl td{border:1px solid #eee;padding:10px}.r{text-align:right}</style></head><body>'+content+'</body></html>');win.document.close();setTimeout(function(){win.print();win.close();},500);};
window.savePurchase=async function(){var supplierKey=document.getElementById('purSupplier').value;var supplier=purSuppliers.find(function(s){return s._key===supplierKey;});if(!supplier)return alert('Select supplier');var validItems=purItems.filter(function(i){return i.productKey&&i.qty>0;});if(!validItems.length)return alert('Add valid products');var total=window.calcPurTotal();var paid=Number(document.getElementById('purPaid').value||0);
  if(editKey){var old=documentData.find(function(x){return x._key===editKey;});if(old){for(var it of old.items){var p=purProducts.find(function(x){return x._key===it.productKey;});if(p){p.stock=(Number(p.stock)||0)-Number(it.qty);await saveByKey(p._key,cleanForSave(p));}}}}
  var payload={date:document.getElementById('purDate').value,purchaseNo:document.getElementById('purNo').value,supplierId:supplier._key,supplierName:supplier.name,items:validItems,discount:Number(document.getElementById('purDiscount').value),extra:Number(document.getElementById('purExtra').value),vat:Number(document.getElementById('purVat').value),vatType:document.getElementById('purVatType').value,total:total,paid:paid};
  var res=editKey?await saveByKey(editKey,payload):await saveItem('purchase:',payload);if(res){for(var it of validItems){var p=purProducts.find(function(x){return x._key===it.productKey;});if(p){p.stock=(Number(p.stock)||0)+Number(it.qty);await saveByKey(p._key,cleanForSave(p));}}closeModal('addPurchase');window.initPurchases();}};
window.editPurchase=function(key){var p=documentData.find(function(x){return x._key===key;});if(!p)return;editKey=key;document.getElementById('purModalTitle').innerText="Edit Purchase";openModal('addPurchase');document.getElementById('purDate').value=p.date;document.getElementById('purNo').value=p.purchaseNo;document.getElementById('purSupplier').value=p.supplierId;document.getElementById('purPaid').value=p.paid;document.getElementById('purDiscount').value=p.discount||0;document.getElementById('purExtra').value=p.extra||0;document.getElementById('purVat').value=p.vat||0;document.getElementById('purVatType').value=p.vatType||'percent';purItems=JSON.parse(JSON.stringify(p.items));window.renderPurItems();};
document.addEventListener('click',function(e){var key=e.target.getAttribute('data-key');if(e.target.classList.contains('viewBtn'))window.viewPurchase(key);if(e.target.classList.contains('editPurchaseBtn'))window.editPurchase(key);});
window.initPurchases();
<\/script>`;
}
__name(ba, "ba");
function fa() {
  return `
<div class="page-header">
  <div><div class="page-title">Sales</div><div class="page-sub">Manage invoices and customer credit</div></div>
  <button class="btn btn-primary" onclick="window.openSaleModal()"><span class="material-symbols-outlined" style="font-size:18px">add</span> New Sale</button>
</div>
<div class="card" style="padding:0;overflow:hidden"><div class="table-wrap">
  <table class="tbl"><thead><tr><th>Date</th><th>Invoice #</th><th>Customer</th><th class="r">Total</th><th class="r">Paid</th><th class="r">Due</th><th class="r">Actions</th></tr></thead><tbody id="saleBody"></tbody></table>
</div></div>
<div class="modal-overlay" id="saleModal"><div class="modal" style="max-width:750px">
  <h3 id="saleModalTitle">New Sale</h3><input type="hidden" id="saleEditKey">
  <div class="form-row"><div><label>Date</label><input type="date" id="saleDate"></div><div><label>Invoice Number</label><input id="saleNo" readonly></div></div>
  <div class="form-group"><label>Customer</label><select id="saleCustomer"></select></div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin:12px 0 8px"><span style="font-weight:700;font-size:13px">Items</span><button class="btn btn-outline btn-sm" onclick="window.addSaleItem()">+ Add Item</button></div>
  <div id="saleItems"></div>
  <div class="form-row" style="margin-top:15px;grid-template-columns:1fr 1fr 1fr"><div><label>Discount</label><div style="display:flex;gap:4px"><select id="saleDiscountType" style="width:70px" onchange="window.calcSaleTotal()"><option value="percent">%</option><option value="flat">Flat</option></select><input type="number" id="saleDiscount" value="0" oninput="window.calcSaleTotal()"></div></div><div><label>Extra Charges</label><input type="number" id="saleExtra" value="0" oninput="window.calcSaleTotal()"></div><div><label>VAT</label><div style="display:flex;gap:4px"><select id="saleVatType" style="width:70px" onchange="window.calcSaleTotal()"><option value="percent">%</option><option value="flat">Flat</option></select><input type="number" id="saleVat" value="0" oninput="window.calcSaleTotal()"></div></div></div>
  <div class="form-row" style="margin-top:10px;grid-template-columns:1fr 1fr 1fr"><div><label>AIT</label><div style="display:flex;gap:4px"><select id="saleAitType" style="width:70px" onchange="window.calcSaleTotal()"><option value="percent">%</option><option value="flat">Flat</option></select><input type="number" id="saleAit" value="0" oninput="window.calcSaleTotal()"></div></div><div><label>Paid Amount</label><input type="number" id="salePaid" placeholder="0"></div><div><label>Payment Method</label><select id="saleMethod" onchange="window.toggleBankView(this.value)"><option value="cash">Cash</option><option value="bank">Bank</option></select></div></div>
  <div id="bankWrap" class="form-group" style="display:none;margin-top:10px"><label>Select Bank Account</label><select id="saleBank"></select></div>
  <div style="display:flex;justify-content:space-between;align-items:center;background:var(--primary-light);padding:18px;border-radius:12px;margin-top:20px"><div><span style="font-size:11px;color:var(--muted);font-weight:700;text-transform:uppercase">Grand Total</span><div id="saleTotal" style="font-size:26px;font-weight:800;color:var(--primary)">0</div></div><div style="display:flex;gap:8px"><button class="btn btn-outline" onclick="closeModal('saleModal')">Cancel</button><button class="btn btn-primary" onclick="window.saveSale()">Save Invoice</button></div></div>
</div></div>
<div class="modal-overlay" id="saleView"><div class="modal" style="max-width:800px"><div id="saleInvoice"></div><div style="display:flex;justify-content:flex-end;gap:8px;margin-top:15px"><button class="btn btn-outline" onclick="closeModal('saleView')">Close</button><button class="btn btn-primary" onclick="window.printSale()">Print</button></div></div></div>
<script>
var saleItems=[],products=[],customers=[],sales=[],banks=[];
window.initSales=async function(){var d=await Promise.all([loadList('sale:'),loadList('product:'),loadList('party:'),loadList('bank:')]);sales=d[0]||[];products=d[1]||[];customers=(d[2]||[]).filter(function(x){return x.type==='customer';});banks=d[3]||[];
  document.getElementById('saleCustomer').innerHTML='<option value="">Select Customer</option>'+customers.map(function(c){return'<option value="'+c._key+'">'+c.name+'</option>';}).join('');
  document.getElementById('saleBank').innerHTML=banks.map(function(b){return'<option value="'+b._key+'">'+b.name+'</option>';}).join('');renderSalesTable();};
function renderSalesTable(){var sorted=sales.slice().sort(function(a,b){return(b.date||'').localeCompare(a.date||'');});document.getElementById('saleBody').innerHTML=!sorted.length?'<tr><td colspan="7" class="empty">No sales yet</td></tr>':sorted.map(function(s){return'<tr><td>'+s.date+'</td><td><span class="clickable saleViewBtn" data-key="'+s._key+'">'+s.invoiceNo+'</span></td><td>'+s.customerName+'</td><td class="r">'+fmt(s.total)+'</td><td class="r">'+fmt(s.paid)+'</td><td class="r bold '+((s.total-s.paid)>0?'text-danger':'text-success')+'">'+fmt(s.total-s.paid)+'</td><td class="r"><button class="btn btn-outline btn-sm saleEditBtn" data-key="'+s._key+'">Edit</button></td></tr>';}).join('');document.querySelectorAll('.saleViewBtn').forEach(function(el){el.addEventListener('click',function(){window.viewSale(this.dataset.key);});});document.querySelectorAll('.saleEditBtn').forEach(function(el){el.addEventListener('click',function(){window.editSale(this.dataset.key);});});}
window.openSaleModal=function(){document.getElementById('saleEditKey').value='';document.getElementById('saleModalTitle').innerText="New Sale";document.getElementById('saleDate').value=todayISO();document.getElementById('saleNo').value=txnNo('SAL');document.getElementById('salePaid').value='';document.getElementById('saleDiscount').value=0;document.getElementById('saleExtra').value=0;document.getElementById('saleVat').value=0;document.getElementById('saleAit').value=0;saleItems=[];window.addSaleItem();openModal('saleModal');};
window.addSaleItem=function(){saleItems.push({productKey:'',productName:'',qty:1,rate:0,amount:0});window.renderItems();};
window.removeSaleItem=function(idx){saleItems.splice(idx,1);if(saleItems.length===0)window.addSaleItem();else window.renderItems();};
window.renderItems=function(){document.getElementById('saleItems').innerHTML=saleItems.map(function(it,i){return'<div class="form-row" style="grid-template-columns:1fr 70px 100px 100px 36px;align-items:end;margin-bottom:8px"><select data-idx="'+i+'" data-field="productKey" class="saleInput"><option value="">Select Product</option>'+products.filter(function(p){return p.stock>0||p._key===it.productKey;}).map(function(p){return'<option value="'+p._key+'" '+(it.productKey==p._key?'selected':'')+'>'+p.name+' (Stock:'+( p.stock||0)+')</option>';}).join('')+'</select><input type="number" value="'+it.qty+'" data-idx="'+i+'" data-field="qty" class="saleInput"><input type="number" value="'+it.rate+'" data-idx="'+i+'" data-field="rate" class="saleInput"><div id="saleItemAmt_'+i+'" style="text-align:right;font-weight:700;padding:10px 0">'+fmt(it.amount)+'</div><button class="btn btn-danger btn-sm saleRemoveBtn" data-idx="'+i+'">X</button></div>';}).join('');document.querySelectorAll('.saleInput').forEach(function(el){var handler=function(){window.updateSaleRow(Number(this.dataset.idx),this.dataset.field,this.value);};el.addEventListener('input',handler);el.addEventListener('change',handler);});document.querySelectorAll('.saleRemoveBtn').forEach(function(el){el.addEventListener('click',function(){window.removeSaleItem(Number(this.dataset.idx));});});window.calcSaleTotal();};
window.updateSaleRow=function(idx,field,val){if(field==='productKey'){var p=products.find(function(x){return x._key===val;});if(p){saleItems[idx].productKey=val;saleItems[idx].productName=p.name;saleItems[idx].rate=p.salePrice||0;}window.renderItems();return;}saleItems[idx][field]=Number(val);saleItems[idx].amount=saleItems[idx].qty*saleItems[idx].rate;var el=document.getElementById('saleItemAmt_'+idx);if(el)el.textContent=fmt(saleItems[idx].amount);window.calcSaleTotal();};
window.calcSaleTotal=function(){var sub=saleItems.reduce(function(s,i){return s+(i.amount||0);},0);var dVal=Number(document.getElementById('saleDiscount').value||0);var dType=document.getElementById('saleDiscountType').value;var discAmt=(dType==='percent')?(sub*dVal/100):dVal;var extra=Number(document.getElementById('saleExtra').value||0);var base=sub-discAmt+extra;var vVal=Number(document.getElementById('saleVat').value||0);var vType=document.getElementById('saleVatType').value;var vatAmt=(vType==='percent')?(base*vVal/100):vVal;var aVal=Number(document.getElementById('saleAit').value||0);var aType=document.getElementById('saleAitType').value;var aitAmt=(aType==='percent')?(base*aVal/100):aVal;var total=base+vatAmt+aitAmt;document.getElementById('saleTotal').innerText=fmt(total);return total;};
window.toggleBankView=function(val){document.getElementById('bankWrap').style.display=(val==='bank')?'block':'none';};
window.editSale=function(key){var s=sales.find(function(x){return x._key===key;});if(!s)return;document.getElementById('saleEditKey').value=s._key;document.getElementById('saleModalTitle').innerText="Edit Sale";document.getElementById('saleDate').value=s.date;document.getElementById('saleNo').value=s.invoiceNo;document.getElementById('saleCustomer').value=s.customerId;document.getElementById('salePaid').value=s.paid;document.getElementById('saleDiscount').value=s.discount||0;document.getElementById('saleDiscountType').value=s.discountType||'percent';document.getElementById('saleExtra').value=s.extra||0;document.getElementById('saleVat').value=s.vat||0;document.getElementById('saleVatType').value=s.vatType||'percent';document.getElementById('saleAit').value=s.ait||0;document.getElementById('saleAitType').value=s.aitType||'percent';document.getElementById('saleMethod').value=s.method||'cash';window.toggleBankView(s.method);if(s.bankKey)document.getElementById('saleBank').value=s.bankKey;saleItems=JSON.parse(JSON.stringify(s.items));window.renderItems();openModal('saleModal');};
window.viewSale=function(key){var s=sales.find(function(x){return x._key===key;});if(!s)return;var sub=s.items.reduce(function(sum,i){return sum+(i.amount||0);},0);var discAmt=(s.discountType==='percent')?(sub*(s.discount||0)/100):(s.discount||0);var baseForTax=sub-discAmt+(s.extra||0);var vatAmt=(s.vatType==='percent')?(baseForTax*(s.vat||0)/100):(s.vat||0);var aitAmt=(s.aitType==='percent')?(baseForTax*(s.ait||0)/100):(s.ait||0);
  var rows=s.items.map(function(it,i){return'<tr><td>'+(i+1)+'</td><td>'+it.productName+'</td><td class="r">'+it.qty+'</td><td class="r">'+fmt(it.rate)+'</td><td class="r">'+fmt(it.amount)+'</td></tr>';}).join('');
  document.getElementById('saleInvoice').innerHTML='<div id="printArea"><div style="display:flex;justify-content:space-between;border-bottom:2px solid #333;padding-bottom:10px;margin-bottom:15px"><div><h2 style="margin:0">INVOICE</h2><b>No:</b> '+s.invoiceNo+'</div><div style="text-align:right"><b>Date:</b> '+s.date+'<br><b>Customer:</b> '+s.customerName+'</div></div><table class="tbl" style="width:100%"><thead><tr style="background:var(--bg)"><th>#</th><th>Product</th><th class="r">Qty</th><th class="r">Rate</th><th class="r">Amount</th></tr></thead><tbody>'+rows+'</tbody></table><div style="display:flex;justify-content:flex-end;margin-top:20px"><div style="width:300px;line-height:1.8"><div style="display:flex;justify-content:space-between"><span>Subtotal:</span><span>'+fmt(sub)+'</span></div><div style="display:flex;justify-content:space-between;color:var(--danger)"><span>Discount:</span><span>-'+fmt(discAmt)+'</span></div><div style="display:flex;justify-content:space-between"><span>VAT:</span><span>+'+fmt(vatAmt)+'</span></div><div style="display:flex;justify-content:space-between"><span>AIT:</span><span>+'+fmt(aitAmt)+'</span></div><div style="display:flex;justify-content:space-between;font-weight:800;font-size:1.2em;border-top:2px solid #333;margin-top:5px"><span>Grand Total:</span><span>'+fmt(s.total)+'</span></div><div style="display:flex;justify-content:space-between;color:var(--accent)"><span>Paid:</span><span>'+fmt(s.paid)+'</span></div><div style="display:flex;justify-content:space-between;border-top:1px dashed #666"><span>Balance Due:</span><span>'+fmt(s.total-s.paid)+'</span></div></div></div></div>';openModal('saleView');};
window.saveSale=async function(){var editKey=document.getElementById('saleEditKey').value;var custKey=document.getElementById('saleCustomer').value;var cust=customers.find(function(x){return x._key===custKey;});if(!cust)return alert('Select customer');var total=window.calcSaleTotal();var paid=Number(document.getElementById('salePaid').value||0);
  if(editKey){var old=sales.find(function(x){return x._key===editKey;});if(old){for(var it of old.items){var p=products.find(function(x){return x._key===it.productKey;});if(p){p.stock=(Number(p.stock)||0)+Number(it.qty);await saveByKey(p._key,cleanForSave(p));}}cust.balance=(Number(cust.balance)||0)-(Number(old.total)-Number(old.paid));}}
  var payload={date:document.getElementById('saleDate').value,invoiceNo:document.getElementById('saleNo').value,customerId:cust._key,customerName:cust.name,items:saleItems.filter(function(i){return i.productKey;}),discount:Number(document.getElementById('saleDiscount').value),discountType:document.getElementById('saleDiscountType').value,extra:Number(document.getElementById('saleExtra').value),vat:Number(document.getElementById('saleVat').value),vatType:document.getElementById('saleVatType').value,ait:Number(document.getElementById('saleAit').value),aitType:document.getElementById('saleAitType').value,total:total,paid:paid,received:paid,method:document.getElementById('saleMethod').value,bankKey:document.getElementById('saleBank').value};
  var res=editKey?await saveByKey(editKey,payload):await saveItem('sale:',payload);if(res){for(var it of payload.items){var p=products.find(function(x){return x._key===it.productKey;});if(p){p.stock=(Number(p.stock)||0)-Number(it.qty);await saveByKey(p._key,cleanForSave(p));}}cust.balance=(Number(cust.balance)||0)+(total-paid);await saveByKey(cust._key,cleanForSave(cust));closeModal('saleModal');window.initSales();}};
window.printSale=function(){var content=document.getElementById('printArea').innerHTML;var win=window.open('','_blank');win.document.write('<html><head><title>Invoice</title><style>body{font-family:sans-serif;padding:30px}table{width:100%;border-collapse:collapse}td,th{border:1px solid #ddd;padding:8px}.r{text-align:right}</style></head><body>'+content+'</body></html>');win.document.close();setTimeout(function(){win.print();win.close();},500);};
window.initSales();
<\/script>`;
}
__name(fa, "fa");
function ha() {
  return `
<div class="page-header">
  <div><div class="page-title">Accounts & Banking</div><div class="page-sub">Manage Cash, Banks, Cheques, and Ledgers</div></div>
  <div style="display:flex;gap:8px;flex-wrap:wrap">
    <button class="btn btn-outline" onclick="window.openBankModal()">Banks</button>
    <button class="btn btn-outline" onclick="window.openChequeBook()">Cheque Books</button>
    <button class="btn btn-outline" onclick="window.openPayLedger()">Ledger</button>
    <button class="btn btn-outline" onclick="window.openChequeRegister()">Cheque Reg.</button>
    <button class="btn btn-outline" onclick="window.openTransferModal()">Transfer</button>
    <button class="btn btn-primary" onclick="window.openPaymentModal()"><span class="material-symbols-outlined" style="font-size:18px">add</span> New Entry</button>
  </div>
</div>
<div class="tabs" style="margin-bottom:15px"><button class="tab active" onclick="window.switchPayTab('receipt',this)">Receipts</button><button class="tab" onclick="window.switchPayTab('payment',this)">Payments</button><button class="tab" onclick="window.switchPayTab('transfer',this)">Transfers</button></div>
<div class="card" style="padding:0;overflow:hidden"><table class="tbl"><thead><tr><th>Date</th><th>Voucher #</th><th>Party / Description</th><th>Method</th><th class="r">Amount</th><th>Status</th><th class="r">Actions</th></tr></thead><tbody id="payBody"></tbody></table></div>

<div class="modal-overlay" id="payModal"><div class="modal" style="max-width:500px">
  <h3 id="payTitle">New Transaction</h3><input type="hidden" id="payEditKey">
  <div class="form-row"><div><label>Date</label><input type="date" id="payDate"></div><div><label>Voucher No</label><input id="payNo" readonly></div></div>
  <div class="form-group"><label>Party / Account</label><select id="payParty"></select></div>
  <div class="form-row"><div><label>Method</label><select id="payMethod" onchange="window.handleMethodChange(this.value)"><option value="cash">Cash</option><option value="bank">Bank</option></select></div><div id="typeWrap" style="display:none"><label>Type</label><select id="payTransferType" onchange="window.handleTypeChange(this.value)"><option value="Online">Online/App</option><option value="Cheque">Cheque</option></select></div></div>
  <div id="chequeFields" style="display:none;background:var(--bg);padding:12px;border-radius:10px;margin-bottom:12px"><div class="form-row"><div><label>Cheque No</label><input id="payChequeNo"></div><div><label>Cheque Date</label><input type="date" id="payChequeDate"></div></div></div>
  <div class="form-group" id="bankSelectWrap" style="display:none"><label>Select Bank</label><select id="payBank"></select></div>
  <div class="form-group"><label>Amount</label><input type="number" id="payAmount"></div>
  <div class="form-group"><label>Note</label><input id="payNote"></div>
  <div style="display:flex;gap:8px;margin-top:15px"><button class="btn btn-outline" onclick="closeModal('payModal')">Cancel</button><button class="btn btn-primary" style="flex:1" onclick="window.savePayment()">Save</button></div>
</div></div>

<div class="modal-overlay" id="bankModal"><div class="modal" style="max-width:500px">
  <h3>Bank Accounts</h3><div class="form-row"><input id="bName" placeholder="Bank Name"><input type="number" id="bOpen" placeholder="Opening"><button class="btn btn-primary" onclick="window.addBank()">Add</button></div><hr style="margin:12px 0"><div id="bankDispList"></div><button class="btn btn-outline" style="width:100%;margin-top:10px" onclick="closeModal('bankModal')">Close</button>
</div></div>

<div class="modal-overlay" id="chequeModal"><div class="modal" style="max-width:800px">
  <h3>Cheque Register (Pending)</h3><table class="tbl"><thead><tr><th>Date</th><th>Cheque No</th><th>Bank</th><th>Party</th><th class="r">Amount</th><th>Action</th></tr></thead><tbody id="chequeRegBody"></tbody></table><button class="btn btn-outline" style="margin-top:10px" onclick="closeModal('chequeModal')">Close</button>
</div></div>

<div class="modal-overlay" id="chequeBookModal"><div class="modal" style="max-width:500px">
  <h3>New Cheque Book</h3><select id="cbBank" class="form-group"></select><input id="cbPrefix" placeholder="Prefix" class="form-group"><div class="form-row"><input type="number" id="cbFrom" placeholder="From"><input type="number" id="cbTo" placeholder="To"></div>
  <button class="btn btn-primary" style="width:100%;margin-top:10px" onclick="window.saveChequeBook()">Add Book</button><div id="cbList" style="margin-top:10px;max-height:150px;overflow:auto"></div><button class="btn btn-outline" style="width:100%;margin-top:10px" onclick="closeModal('chequeBookModal')">Close</button>
</div></div>

<div class="modal-overlay" id="transferModal"><div class="modal" style="max-width:400px">
  <h3>Internal Transfer</h3><select id="transType" class="form-group"><option value="C2B">Cash to Bank (Deposit)</option><option value="B2C">Bank to Cash (Withdraw)</option></select><select id="transBank" class="form-group"></select><input type="number" id="transAmount" class="form-group" placeholder="Amount">
  <button class="btn btn-primary" style="width:100%" onclick="window.saveTransfer()">Complete</button><button class="btn btn-outline" style="width:100%;margin-top:8px" onclick="closeModal('transferModal')">Close</button>
</div></div>

<div class="modal-overlay" id="payLedgerModal"><div class="modal" style="max-width:850px">
  <h3>Bank Ledger</h3><div class="form-row" style="align-items:end"><select id="lBank" style="width:200px"></select><input type="date" id="lFrom"><input type="date" id="lTo"><button class="btn btn-primary" onclick="window.loadPayLedger()">Load</button></div>
  <div style="max-height:400px;overflow-y:auto;margin-top:15px"><table class="tbl"><thead><tr><th>Date</th><th>Voucher</th><th>Party</th><th class="r">Dr</th><th class="r">Cr</th><th class="r">Balance</th></tr></thead><tbody id="payLedgerBody"></tbody></table></div><button class="btn btn-outline" style="margin-top:10px" onclick="closeModal('payLedgerModal')">Close</button>
</div></div>

<script>
var payments=[],banks=[],parties=[],chequeBooks=[],currentTab='receipt';
window.initPayments=async function(){var d=await Promise.all([loadList('payment:'),loadList('bank:'),loadList('party:'),loadList('cb:')]);payments=d[0]||[];banks=d[1]||[];parties=d[2]||[];chequeBooks=d[3]||[];window.renderPayTable();};
window.renderPayTable=function(){var filtered=payments.filter(function(p){return p.type===currentTab;});document.getElementById('payBody').innerHTML=!filtered.length?'<tr><td colspan="7" class="empty">No '+currentTab+' transactions</td></tr>':filtered.map(function(p){return'<tr><td>'+(p.date||'-')+'</td><td class="bold">'+(p.no||'-')+'</td><td>'+(p.party||'No Party')+'<br><small class="text-muted">'+(p.note||'')+'</small></td><td>'+(p.method||'cash').toUpperCase()+(p.chequeNo?' <small>#'+p.chequeNo+'</small>':'')+'</td><td class="r bold">'+fmt(p.amount||0)+'</td><td><span class="badge '+(p.status==='done'?'badge-cash':p.status==='bounced'?'badge-danger':'badge-warning')+'">'+(p.status||'pending').toUpperCase()+'</span></td><td class="r"><button class="btn btn-outline btn-xs payPrintBtn" data-key="'+p._key+'">Print</button> <button class="btn btn-outline btn-xs payEditBtn" data-key="'+p._key+'">Edit</button> <button class="btn btn-danger btn-xs payDelBtn" data-key="'+p._key+'">Del</button></td></tr>';}).join('');document.querySelectorAll('.payPrintBtn').forEach(function(el){el.addEventListener('click',function(){window.printVoucher(this.dataset.key);});});document.querySelectorAll('.payEditBtn').forEach(function(el){el.addEventListener('click',function(){window.editPayment(this.dataset.key);});});document.querySelectorAll('.payDelBtn').forEach(function(el){el.addEventListener('click',function(){window.deletePayment(this.dataset.key);});});};
window.switchPayTab=function(t,el){currentTab=t;document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active');});el.classList.add('active');window.renderPayTable();};
window.openPaymentModal=function(){document.getElementById('payEditKey').value='';document.getElementById('payDate').value=todayISO();document.getElementById('payNo').value=txnNo(currentTab==='receipt'?'RCT':'PAY');document.getElementById('payParty').innerHTML=parties.map(function(p){return'<option value="'+p.name+'">'+p.name+'</option>';}).join('');document.getElementById('payBank').innerHTML=banks.map(function(b){return'<option value="'+b._key+'">'+b.name+'</option>';}).join('');document.getElementById('payAmount').value='';document.getElementById('payNote').value='';window.handleMethodChange('cash');document.getElementById('payMethod').value='cash';openModal('payModal');};
window.handleMethodChange=function(v){document.getElementById('typeWrap').style.display=v==='bank'?'block':'none';document.getElementById('bankSelectWrap').style.display=v==='bank'?'block':'none';if(v==='cash')window.handleTypeChange('');};
window.handleTypeChange=function(v){document.getElementById('chequeFields').style.display=v==='Cheque'?'block':'none';};
window.editPayment=function(key){var p=payments.find(function(x){return x._key===key;});if(!p)return;document.getElementById('payEditKey').value=p._key;document.getElementById('payDate').value=p.date;document.getElementById('payNo').value=p.no;document.getElementById('payParty').innerHTML=parties.map(function(pp){return'<option value="'+pp.name+'" '+(pp.name===p.party?'selected':'')+'>'+pp.name+'</option>';}).join('');document.getElementById('payMethod').value=p.method;window.handleMethodChange(p.method);document.getElementById('payTransferType').value=p.transferType||'';window.handleTypeChange(p.transferType);document.getElementById('payChequeNo').value=p.chequeNo||'';document.getElementById('payChequeDate').value=p.chequeDate||'';document.getElementById('payAmount').value=p.amount;document.getElementById('payNote').value=p.note||'';if(p.bankId)document.getElementById('payBank').value=p.bankId;openModal('payModal');};
window.deletePayment=async function(key){if(!confirm('Delete this transaction?'))return;var p=payments.find(function(x){return x._key===key;});if(p&&p.status==='done')await window.updateBalance(p,'reverse');await deleteItem(key,false);window.initPayments();};
window.savePayment=async function(){var editKey=document.getElementById('payEditKey').value;var amt=Number(document.getElementById('payAmount').value||0);var method=document.getElementById('payMethod').value;var tType=document.getElementById('payTransferType').value;var status=(method==='bank'&&tType==='Cheque')?'pending':'done';
  var data={date:document.getElementById('payDate').value,no:document.getElementById('payNo').value,party:document.getElementById('payParty').value,type:currentTab,method:method,bankId:method==='bank'?document.getElementById('payBank').value:'',transferType:tType,chequeNo:document.getElementById('payChequeNo').value,chequeDate:document.getElementById('payChequeDate').value,amount:amt,note:document.getElementById('payNote').value,status:status};
  if(editKey){var old=payments.find(function(x){return x._key===editKey;});if(old&&old.status==='done')await window.updateBalance(old,'reverse');}
  var res=editKey?await saveByKey(editKey,data):await saveItem('payment:',data);if(res&&status==='done')await window.updateBalance(data,'apply');closeModal('payModal');window.initPayments();};
window.updateBalance=async function(p,mode){if(p.method==='bank'&&p.bankId){var b=banks.find(function(x){return x._key===p.bankId;});if(b){var amt=(p.type==='receipt'||p.note==='Cash to Bank')?p.amount:-p.amount;b.balance=(Number(b.balance)||0)+(mode==='apply'?amt:-amt);await saveByKey(b._key,cleanForSave(b));}}};
window.openChequeRegister=function(){var pending=payments.filter(function(p){return p.status==='pending';});document.getElementById('chequeRegBody').innerHTML=!pending.length?'<tr><td colspan="6" class="empty">No pending cheques</td></tr>':pending.map(function(p){var b=banks.find(function(x){return x._key===p.bankId;});return'<tr><td>'+p.chequeDate+'</td><td>'+p.chequeNo+'</td><td>'+(b?b.name:'-')+'</td><td>'+p.party+'</td><td class="r">'+fmt(p.amount)+'</td><td><button class="btn btn-success btn-sm chequeHonorBtn" data-key="'+p._key+'">Honor</button> <button class="btn btn-danger btn-sm chequeBouncBtn" data-key="'+p._key+'">Bounce</button></td></tr>';}).join('');document.querySelectorAll('.chequeHonorBtn').forEach(function(el){el.addEventListener('click',function(){window.honorCheque(this.dataset.key);});});document.querySelectorAll('.chequeBouncBtn').forEach(function(el){el.addEventListener('click',function(){window.bounceCheque(this.dataset.key);});});openModal('chequeModal');};
window.honorCheque=async function(key){var p=payments.find(function(x){return x._key===key;});if(!p)return;p.status='done';await window.updateBalance(p,'apply');await saveByKey(p._key,cleanForSave(p));closeModal('chequeModal');window.initPayments();};
window.bounceCheque=async function(key){var p=payments.find(function(x){return x._key===key;});if(!p)return;p.status='bounced';await saveByKey(p._key,cleanForSave(p));closeModal('chequeModal');window.initPayments();};
window.printVoucher=function(key){var p=payments.find(function(x){return x._key===key;});if(!p)return;var win=window.open('','_blank');win.document.write('<html><head><title>Voucher</title><style>body{font-family:sans-serif;padding:30px}.box{border:2px solid #333;padding:20px}.h{display:flex;justify-content:space-between;border-bottom:1px solid #333;padding-bottom:10px}.m{margin:20px 0;line-height:2}</style></head><body><div class="box"><div class="h"><h2>'+p.type.toUpperCase()+' VOUCHER</h2><b>No: '+p.no+'</b></div><div class="m"><b>Date:</b> '+p.date+'<br><b>Party:</b> '+p.party+'<br><b>Method:</b> '+p.method.toUpperCase()+(p.chequeNo?' (Chq: '+p.chequeNo+')':'')+'<br><b>Note:</b> '+(p.note||'N/A')+'<br><br><div style="font-size:24px;font-weight:bold">Amount: '+fmt(p.amount)+'</div></div><div style="margin-top:50px;display:flex;justify-content:space-between"><span>________________<br>Receiver</span><span>________________<br>Authorized</span></div></div></body></html>');win.document.close();win.print();};
window.openBankModal=function(){document.getElementById('bankDispList').innerHTML=!banks.length?'<div class="empty">No banks added</div>':banks.map(function(b){return'<div style="display:flex;justify-content:space-between;padding:10px;border-bottom:1px solid var(--border);align-items:center"><span class="bold">'+b.name+'</span><span class="bold">'+fmt(b.balance||b.opening||0)+'</span></div>';}).join('');openModal('bankModal');};
window.addBank=async function(){var name=document.getElementById('bName').value.trim();var bal=Number(document.getElementById('bOpen').value||0);if(!name)return alert('Bank name required');await saveItem('bank:',{name:name,opening:bal,balance:bal});document.getElementById('bName').value='';document.getElementById('bOpen').value='';window.initPayments();window.openBankModal();};
window.openChequeBook=function(){document.getElementById('cbBank').innerHTML=banks.map(function(b){return'<option value="'+b._key+'">'+b.name+'</option>';}).join('');document.getElementById('cbList').innerHTML=chequeBooks.map(function(cb){var b=banks.find(function(x){return x._key===cb.bank;});return'<div style="padding:4px 0;font-size:12px">'+(b?b.name:'-')+' : '+cb.prefix+' ('+cb.from+'-'+cb.to+')</div>';}).join('');openModal('chequeBookModal');};
window.saveChequeBook=async function(){await saveItem('cb:',{bank:document.getElementById('cbBank').value,prefix:document.getElementById('cbPrefix').value,from:document.getElementById('cbFrom').value,to:document.getElementById('cbTo').value});window.initPayments();closeModal('chequeBookModal');};
window.openPayLedger=function(){document.getElementById('lBank').innerHTML=banks.map(function(b){return'<option value="'+b._key+'">'+b.name+'</option>';}).join('');openModal('payLedgerModal');};
window.loadPayLedger=function(){var bid=document.getElementById('lBank').value;var b=banks.find(function(x){return x._key===bid;});var from=document.getElementById('lFrom').value;var to=document.getElementById('lTo').value;var filtered=payments.filter(function(p){return p.bankId===bid&&p.status==='done'&&(!from||p.date>=from)&&(!to||p.date<=to);}).sort(function(a,b){return a.date.localeCompare(b.date);});var balance=Number(b?b.opening:0);document.getElementById('payLedgerBody').innerHTML=!filtered.length?'<tr><td colspan="6" class="empty">No transactions</td></tr>':filtered.map(function(p){var dr=(p.type==='receipt'||p.note==='Cash to Bank')?p.amount:0;var cr=(p.type==='payment'||p.note==='Bank to Cash')?p.amount:0;balance+=(dr-cr);return'<tr><td>'+p.date+'</td><td>'+p.no+'</td><td>'+p.party+'</td><td class="r">'+(dr?fmt(dr):'')+'</td><td class="r">'+(cr?fmt(cr):'')+'</td><td class="r bold">'+fmt(balance)+'</td></tr>';}).join('');};
window.openTransferModal=function(){document.getElementById('transBank').innerHTML=banks.map(function(b){return'<option value="'+b._key+'">'+b.name+'</option>';}).join('');document.getElementById('transAmount').value='';openModal('transferModal');};
window.saveTransfer=async function(){var amt=Number(document.getElementById('transAmount').value);if(!amt||amt<=0)return alert('Enter valid amount');var data={date:todayISO(),no:txnNo('TRF'),party:'Internal Transfer',type:'transfer',method:'bank',bankId:document.getElementById('transBank').value,amount:amt,status:'done',note:document.getElementById('transType').value==='C2B'?'Cash to Bank':'Bank to Cash'};await saveItem('payment:',data);await window.updateBalance(data,'apply');closeModal('transferModal');window.initPayments();};
window.initPayments();
<\/script>`;
}
__name(ha, "ha");
function ga() {
  return `
<div class="page-header">
  <div><div class="page-title">Expenses</div><div class="page-sub">Track expenses by head, sub-head and payment method</div></div>
  <div style="display:flex;gap:8px;flex-wrap:wrap">
    <button class="btn btn-outline" onclick="openModal('manageHeads')">Manage Heads</button>
    <button class="btn btn-outline" onclick="openExpenseBankModal()">Banks</button>
    <button class="btn btn-primary" onclick="openExpenseModal()"><span class="material-symbols-outlined" style="font-size:18px">add</span> Add Expense</button>
  </div>
</div>

<div class="card" style="margin-bottom:16px">
  <div class="form-row" style="grid-template-columns:1fr 1fr 1fr auto;align-items:end">
    <div><label>From</label><input type="date" id="expFilterFrom" onchange="filterExpensesByDate()"></div>
    <div><label>To</label><input type="date" id="expFilterTo" onchange="filterExpensesByDate()"></div>
    <div><label>Head</label><select id="expFilterHead" onchange="filterExpensesByDate()"><option value="">All Heads</option></select></div>
    <div><button class="btn btn-outline" onclick="resetExpenseFilters()">Reset</button></div>
  </div>
</div>

<div class="summary-grid" id="expenseSummary"></div>

<div class="search-wrap"><span class="icon"><span class="material-symbols-outlined" style="font-size:18px">search</span></span><input placeholder="Search expenses..." oninput="filterExpenses(this.value)"></div>

<div class="card" style="padding:0;overflow:hidden"><div class="table-wrap">
  <table class="tbl"><thead><tr><th>Date</th><th>Expense #</th><th>Head</th><th>Sub-Head</th><th>Method</th><th class="r">Amount</th><th>Description</th><th class="r">Actions</th></tr></thead><tbody id="expBody"></tbody></table>
</div></div>

<!-- Manage Heads Modal -->
<div class="modal-overlay" id="manageHeads"><div class="modal">
  <h3>Expense Heads & Sub-Heads</h3>
  <div class="form-group"><label>Add Head</label><div style="display:flex;gap:8px"><input id="newHead" placeholder="e.g. Office, Travel"><button class="btn btn-primary btn-sm" onclick="addHead()">Add</button></div><div id="headWarn" class="text-warning" style="font-size:12px;margin-top:6px"></div></div>
  <div id="headsList" style="margin:12px 0"></div>
  <hr style="border:none;border-top:1px solid var(--border);margin:16px 0">
  <div class="form-group"><label>Add Sub-Head</label><div style="display:flex;gap:8px"><select id="subHeadParent" style="flex:1"></select><input id="newSubHead" placeholder="Sub-head name" style="flex:1"><button class="btn btn-primary btn-sm" onclick="addSubHead()">Add</button></div><div id="subHeadWarn" class="text-warning" style="font-size:12px;margin-top:6px"></div></div>
  <div id="subHeadsList" style="margin:12px 0"></div>
  <div style="text-align:right;margin-top:16px"><button class="btn btn-outline" onclick="closeModal('manageHeads')">Close</button></div>
</div></div>

<!-- Add/Edit Expense Modal -->
<div class="modal-overlay" id="addExpense"><div class="modal">
  <h3 id="expModalTitle">New Expense</h3>
  <input type="hidden" id="expEditKey">
  <div class="form-row"><div><label>Date</label><input type="date" id="expDate"></div><div><label>Expense Number</label><input id="expNo" readonly></div></div>
  <div class="form-row"><div><label>Head</label><select id="expHead" onchange="loadSubHeadsFor()"></select></div><div><label>Sub-Head</label><select id="expSubHead"></select></div></div>
  <div class="form-group"><label>Method</label><div class="method-toggle"><div class="method-btn active exp-method" onclick="setExpenseMethod('cash',this)">Cash</div><div class="method-btn exp-method" onclick="setExpenseMethod('bank',this)">Bank</div></div><input type="hidden" id="expMethod" value="cash"></div>
  <div class="form-group hidden" id="expBankWrap"><label>Bank Account</label><select id="expBank"></select></div>
  <div class="form-group"><label>Amount</label><input type="number" id="expAmt" placeholder="0"></div>
  <div class="form-group"><label>Description</label><input id="expDesc" placeholder="Description"></div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px"><button class="btn btn-outline" onclick="closeModal('addExpense')">Cancel</button><button class="btn btn-primary" onclick="saveExpense()">Save</button></div>
</div></div>

<!-- Expense Banks Modal -->
<div class="modal-overlay" id="expenseBankModal"><div class="modal" style="max-width:560px">
  <h3>Bank Accounts</h3>
  <div class="form-row" style="grid-template-columns:1fr 140px auto"><div><label>Bank Name</label><input id="expBankName" placeholder="e.g. City Bank"></div><div><label>Opening Balance</label><input type="number" id="expBankOpening" placeholder="0"></div><div style="align-self:end"><button class="btn btn-primary" onclick="addExpenseBank()">Add Bank</button></div></div>
  <div class="card" style="padding:0;overflow:hidden;margin-top:12px"><div class="table-wrap"><table class="tbl"><thead><tr><th>Bank</th><th class="r">Balance</th><th class="r">Action</th></tr></thead><tbody id="expBankBody"></tbody></table></div></div>
  <div style="text-align:right;margin-top:14px"><button class="btn btn-outline" onclick="closeModal('expenseBankModal')">Close</button></div>
</div></div>

<script>
var expHeads=[],expSubHeads=[],allExpenses=[],expBanks=[],filteredExpenses=[];

async function initExpenses(){
  var data=await Promise.all([loadList('exphead:'),loadList('expsubhead:'),loadList('expense:'),loadList('bank:')]);
  expHeads=data[0];expSubHeads=data[1];allExpenses=data[2];expBanks=data[3];
  filteredExpenses=allExpenses.slice();
  renderExpenses(filteredExpenses);
  renderHeadsUI();
  renderExpenseSummary(filteredExpenses);
  renderExpenseBanks();
  populateFilterHead();
}

function populateFilterHead(){
  document.getElementById('expFilterHead').innerHTML='<option value="">All Heads</option>'+expHeads.map(function(h){return'<option value="'+h.name+'">'+h.name+'</option>';}).join('');
}

window.filterExpensesByDate=function(){
  var from=document.getElementById('expFilterFrom').value;
  var to=document.getElementById('expFilterTo').value;
  var head=document.getElementById('expFilterHead').value;
  filteredExpenses=allExpenses.filter(function(e){
    if(from&&(e.date||'')<from)return false;
    if(to&&(e.date||'')>to)return false;
    if(head&&(e.headName||'')!==head)return false;
    return true;
  });
  renderExpenses(filteredExpenses);
  renderExpenseSummary(filteredExpenses);
};

window.resetExpenseFilters=function(){
  document.getElementById('expFilterFrom').value='';
  document.getElementById('expFilterTo').value='';
  document.getElementById('expFilterHead').value='';
  filteredExpenses=allExpenses.slice();
  renderExpenses(filteredExpenses);
  renderExpenseSummary(filteredExpenses);
};

function renderExpenseSummary(list){
  var cash=list.filter(function(e){return e.method==='cash';}).reduce(function(s,e){return s+(e.amount||0);},0);
  var bank=list.filter(function(e){return e.method==='bank';}).reduce(function(s,e){return s+(e.amount||0);},0);
  document.getElementById('expenseSummary').innerHTML=[
    {label:'Cash Expenses',value:fmt(cash),color:'var(--danger)'},
    {label:'Bank Expenses',value:fmt(bank),color:'var(--warning)'},
    {label:'Total Expenses',value:fmt(cash+bank),color:'var(--primary)'},
    {label:'Entries',value:list.length,color:'var(--info)'}
  ].map(function(c){return'<div class="summary-card"><div class="label">'+c.label+'</div><div class="value" style="color:'+c.color+'">'+c.value+'</div></div>';}).join('');
}

function renderExpenses(list){
  var sorted=list.slice().sort(function(a,b){return(b.date||'').localeCompare(a.date||'');});
  document.getElementById('expBody').innerHTML=!sorted.length
    ?'<tr><td colspan="8" class="empty">No expenses recorded</td></tr>'
    :sorted.map(function(e){
      var method=e.method==='bank'?'<span class="badge badge-bank">BANK</span>'+(e.bankName?' <small class="text-muted">('+e.bankName+')</small>':''):'<span class="badge badge-cash">CASH</span>';
      return'<tr><td>'+(e.date||'')+'</td><td class="bold">'+(e.expenseNo||'-')+'</td><td class="bold">'+(e.headName||'')+'</td><td class="text-muted">'+(e.subHeadName||'\u2014')+'</td><td>'+method+'</td><td class="r bold">'+fmt(e.amount)+'</td><td class="text-muted" style="max-width:200px;overflow:hidden;text-overflow:ellipsis">'+(e.description||'')+'</td><td class="r"><div style="display:flex;gap:4px;justify-content:flex-end"><button class="btn btn-outline btn-xs expEditBtn" data-key="'+e._key+'">Edit</button><button class="btn btn-danger btn-xs expDelBtn" data-key="'+e._key+'">Del</button></div></td></tr>';
    }).join('');
  document.querySelectorAll('.expEditBtn').forEach(function(el){el.addEventListener('click',function(){editExpense(this.dataset.key);});});
  document.querySelectorAll('.expDelBtn').forEach(function(el){el.addEventListener('click',function(){deleteExpense(this.dataset.key);});});
}

window.filterExpenses=function(q){
  var t=normalize(q);
  var list=filteredExpenses.filter(function(e){return normalize(e.headName).includes(t)||normalize(e.subHeadName).includes(t)||normalize(e.description).includes(t)||normalize(e.expenseNo).includes(t);});
  renderExpenses(list);
};

function renderHeadsUI(){
  document.getElementById('headsList').innerHTML=!expHeads.length?'<div class="text-muted" style="font-size:12px">No heads added yet</div>':expHeads.map(function(h){return'<span style="display:inline-flex;align-items:center;gap:6px;padding:5px 12px;background:var(--primary-light);border-radius:8px;font-size:12px;font-weight:600;margin:3px;color:var(--primary)">'+h.name+' <button class="btn btn-xs deleteHeadBtn" style="padding:2px 5px;font-size:10px;background:transparent;color:var(--danger)" data-key="'+h._key+'">x</button></span>';}).join('');document.querySelectorAll('.deleteHeadBtn').forEach(function(el){el.addEventListener('click',function(){deleteHead(this.dataset.key);});});
  document.getElementById('subHeadParent').innerHTML='<option value="">Select Head</option>'+expHeads.map(function(h){return'<option value="'+h._key+'">'+h.name+'</option>';}).join('');
  var grouped={};expSubHeads.forEach(function(s){var head=expHeads.find(function(h){return h._key===s.headId;});var key=head?head.name:'Unassigned';if(!grouped[key])grouped[key]=[];grouped[key].push({name:s.name,_key:s._key});});
  document.getElementById('subHeadsList').innerHTML=Object.keys(grouped).length?Object.keys(grouped).map(function(k){return'<div style="font-size:12px;margin:6px 0"><strong>'+k+':</strong> '+grouped[k].map(function(s){return s.name+' <button class="btn btn-xs deleteSubHeadBtn" style="padding:1px 4px;font-size:9px;background:transparent;color:var(--danger)" data-key="'+s._key+'">x</button>';}).join(', ')+'</div>';}).join(''):'<div class="text-muted" style="font-size:12px">No sub-heads added yet</div>';document.querySelectorAll('.deleteSubHeadBtn').forEach(function(el){el.addEventListener('click',function(){deleteSubHead(this.dataset.key);});});
}

window.addHead=async function(){var name=document.getElementById('newHead').value.trim();if(!name)return;var exists=expHeads.find(function(h){return normalize(h.name)===normalize(name);});if(exists){document.getElementById('headWarn').textContent='Already exists: '+exists.name;return;}document.getElementById('headWarn').textContent='';await saveItem('exphead:',{name:name});document.getElementById('newHead').value='';expHeads=await loadList('exphead:');renderHeadsUI();populateFilterHead();};

window.deleteHead=async function(key){var used=allExpenses.some(function(e){return e.headId===key;});if(used)return alert('Cannot delete: head is used in expenses');if(!confirm('Delete this head?'))return;await deleteItem(key,false);expHeads=await loadList('exphead:');renderHeadsUI();populateFilterHead();};

window.addSubHead=async function(){var headId=document.getElementById('subHeadParent').value;var name=document.getElementById('newSubHead').value.trim();if(!headId||!name)return alert('Select a head and enter sub-head name');var exists=expSubHeads.find(function(s){return s.headId===headId&&normalize(s.name)===normalize(name);});if(exists){document.getElementById('subHeadWarn').textContent='Sub-head already exists';return;}document.getElementById('subHeadWarn').textContent='';await saveItem('expsubhead:',{headId:headId,name:name});document.getElementById('newSubHead').value='';expSubHeads=await loadList('expsubhead:');renderHeadsUI();};

window.deleteSubHead=async function(key){var used=allExpenses.some(function(e){return e.subHeadId===key;});if(used)return alert('Cannot delete: sub-head is used in expenses');if(!confirm('Delete this sub-head?'))return;await deleteItem(key,false);expSubHeads=await loadList('expsubhead:');renderHeadsUI();};

window.openExpenseModal=function(editData){
  var isEdit=!!editData;
  document.getElementById('expModalTitle').textContent=isEdit?'Edit Expense':'New Expense';
  document.getElementById('expEditKey').value=isEdit?editData._key:'';
  document.getElementById('expDate').value=isEdit?editData.date:todayISO();
  document.getElementById('expNo').value=isEdit?editData.expenseNo:txnNo('EXP');
  document.getElementById('expAmt').value=isEdit?editData.amount:'';
  document.getElementById('expDesc').value=isEdit?editData.description||'':'';
  document.getElementById('expMethod').value=isEdit?editData.method:'cash';
  document.getElementById('expBankWrap').classList.toggle('hidden',!(isEdit&&editData.method==='bank'));
  document.querySelectorAll('.exp-method').forEach(function(x,idx){
    if(isEdit)x.classList.toggle('active',(editData.method==='bank'&&idx===1)||(editData.method!=='bank'&&idx===0));
    else x.classList.toggle('active',idx===0);
  });
  document.getElementById('expHead').innerHTML='<option value="">Select Head</option>'+expHeads.map(function(h){return'<option value="'+h._key+'" '+(isEdit&&editData.headId===h._key?'selected':'')+'>'+h.name+'</option>';}).join('');
  if(isEdit)loadSubHeadsFor(editData.subHeadId);
  else document.getElementById('expSubHead').innerHTML='<option value="">Optional</option>';
  document.getElementById('expBank').innerHTML='<option value="">Select Bank</option>'+expBanks.map(function(b){return'<option value="'+b._key+'" '+(isEdit&&editData.bankId===b._key?'selected':'')+'>'+b.name+'</option>';}).join('');
  openModal('addExpense');
};

window.editExpense=function(key){var e=allExpenses.find(function(x){return x._key===key;});if(!e)return;openExpenseModal(e);};

window.deleteExpense=async function(key){
  if(!confirm('Delete this expense?'))return;
  var e=allExpenses.find(function(x){return x._key===key;});
  if(e&&e.method==='bank'&&e.bankId){
    var bank=expBanks.find(function(b){return b._key===e.bankId;});
    if(bank){var ub=cleanForSave(bank);ub.openingBalance=Number(ub.openingBalance||0)+Number(e.amount||0);await saveByKey(bank._key,ub);}
  }
  await deleteItem(key,false);
  allExpenses=await loadList('expense:');
  filteredExpenses=allExpenses.slice();
  filterExpensesByDate();
  renderExpenseSummary(filteredExpenses);
};

window.loadSubHeadsFor=function(selectedSubId){
  var headId=document.getElementById('expHead').value;
  var subs=expSubHeads.filter(function(s){return s.headId===headId;});
  document.getElementById('expSubHead').innerHTML='<option value="">Optional</option>'+subs.map(function(s){return'<option value="'+s._key+'" '+(selectedSubId===s._key?'selected':'')+'>'+s.name+'</option>';}).join('');
};

window.setExpenseMethod=function(method,el){setMethod(el,method,'expMethod','.exp-method');document.getElementById('expBankWrap').classList.toggle('hidden',method!=='bank');};

window.saveExpense=async function(){
  var editKey=document.getElementById('expEditKey').value;
  var headKey=document.getElementById('expHead').value;
  var subKey=document.getElementById('expSubHead').value;
  var amount=Number(document.getElementById('expAmt').value||0);
  var method=document.getElementById('expMethod').value;
  var bankKey=document.getElementById('expBank').value;
  var head=expHeads.find(function(h){return h._key===headKey;});
  var sub=expSubHeads.find(function(s){return s._key===subKey;});
  var bank=expBanks.find(function(b){return b._key===bankKey;});
  if(!head)return alert('Select expense head');
  if(amount<=0)return alert('Enter valid amount');
  if(method==='bank'&&!bank)return alert('Select bank account');

  // If editing, reverse old bank deduction
  if(editKey){
    var oldExp=allExpenses.find(function(x){return x._key===editKey;});
    if(oldExp&&oldExp.method==='bank'&&oldExp.bankId){
      var oldBank=expBanks.find(function(b){return b._key===oldExp.bankId;});
      if(oldBank){var ub=cleanForSave(oldBank);ub.openingBalance=Number(ub.openingBalance||0)+Number(oldExp.amount||0);await saveByKey(oldBank._key,ub);}
    }
  }

  var expData={date:document.getElementById('expDate').value||todayISO(),expenseNo:document.getElementById('expNo').value,headId:head._key,headName:head.name,subHeadId:sub?sub._key:'',subHeadName:sub?sub.name:'',amount:amount,description:document.getElementById('expDesc').value.trim(),method:method,bankId:method==='bank'?bank._key:'',bankName:method==='bank'?bank.name:''};

  var res=editKey?await saveByKey(editKey,expData):await saveItem('expense:',expData);
  if(!res)return;

  if(method==='bank'){var ub=cleanForSave(bank);ub.openingBalance=Number(ub.openingBalance||0)-amount;await saveByKey(bank._key,ub);}

  closeModal('addExpense');
  await initExpenses();
};

window.openExpenseBankModal=function(){document.getElementById('expBankName').value='';document.getElementById('expBankOpening').value='';renderExpenseBanks();openModal('expenseBankModal');};

function renderExpenseBanks(){document.getElementById('expBankBody').innerHTML=!expBanks.length?'<tr><td colspan="3" class="empty">No banks added yet</td></tr>':expBanks.map(function(b){return'<tr><td class="bold">'+(b.name||'')+'</td><td class="r">'+fmt(b.openingBalance||0)+'</td><td class="r"><button class="btn btn-danger btn-sm expBankDelBtn" data-key="'+b._key+'">Delete</button></td></tr>';}).join('');document.querySelectorAll('.expBankDelBtn').forEach(function(el){el.addEventListener('click',function(){removeExpenseBank(this.dataset.key);});});}

window.addExpenseBank=async function(){var name=document.getElementById('expBankName').value.trim();var opening=Number(document.getElementById('expBankOpening').value||0);if(!name)return alert('Bank name required');var exists=expBanks.find(function(b){return normalize(b.name)===normalize(name);});if(exists)return alert('Bank already exists');await saveItem('bank:',{name:name,openingBalance:opening});document.getElementById('expBankName').value='';document.getElementById('expBankOpening').value='';expBanks=await loadList('bank:');renderExpenseBanks();};

window.removeExpenseBank=async function(key){var used=allExpenses.some(function(e){return e.bankId===key;});if(used)return alert('Cannot delete bank used in expenses');if(!confirm('Delete this bank?'))return;await deleteItem(key,false);expBanks=await loadList('bank:');renderExpenseBanks();};

initExpenses();
<\/script>`;
}
__name(ga, "ga");
function xa() {
  const e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  return `
<div class="page-header"><div><div class="page-title">Ledger</div><div class="page-sub">Customer / supplier account ledger with full transaction history</div></div></div>
<div class="card" style="margin-bottom:16px;max-width:860px">
  <div class="form-row" style="grid-template-columns:2fr 1fr 1fr auto;align-items:end">
    <div><label>Customer / Supplier</label><select id="ledgerParty" onchange="loadLedger()"><option value="">Select</option></select></div>
    <div><label>From</label><input type="date" id="ledgerFrom" value="${new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10)}" onchange="loadLedger()"></div>
    <div><label>To</label><input type="date" id="ledgerTo" value="${e}" onchange="loadLedger()"></div>
    <div><button class="btn btn-primary" onclick="printLedger()">Print</button></div>
  </div>
</div>
<div id="ledgerContent"></div>
<script>
var ledgerParties=[],ledgerSales=[],ledgerPurchases=[],ledgerPayments=[],ledgerExpenses=[];

async function initLedger(){
  var data=await Promise.all([loadList('party:'),loadList('sale:'),loadList('purchase:'),loadList('payment:')]);
  ledgerParties=data[0];ledgerSales=data[1];ledgerPurchases=data[2];ledgerPayments=data[3];
  var cust=ledgerParties.filter(function(p){return p.type==='customer';}).sort(function(a,b){return(a.name||'').localeCompare(b.name||'');});
  var supp=ledgerParties.filter(function(p){return p.type==='supplier';}).sort(function(a,b){return(a.name||'').localeCompare(b.name||'');});
  document.getElementById('ledgerParty').innerHTML='<option value="">Select party...</option>'+
    (cust.length?'<optgroup label="Customers">'+cust.map(function(c){return'<option value="'+c._key+'">'+c.name+'</option>';}).join('')+'</optgroup>':'')+
    (supp.length?'<optgroup label="Suppliers">'+supp.map(function(s){return'<option value="'+s._key+'">'+s.name+'</option>';}).join('')+'</optgroup>':'');
}

window.loadLedger=function(){
  var key=document.getElementById('ledgerParty').value;
  var from=document.getElementById('ledgerFrom').value;
  var to=document.getElementById('ledgerTo').value;
  var party=ledgerParties.find(function(p){return p._key===key;});
  if(!party){document.getElementById('ledgerContent').innerHTML='';return;}

  function inRange(date){return(!from||date>=from)&&(!to||date<=to);}
  var entries=[];

  if(party.type==='customer'){
    ledgerSales.filter(function(s){return s.customerId===key&&inRange(s.date||'');}).forEach(function(s){
      entries.push({date:s.date,desc:'Sale - '+( s.invoiceNo||''),debit:Number(s.total||0),credit:Number(s.received||s.paid||0)});
    });
    ledgerPayments.filter(function(p){return(p.partyId===key||(p.party&&p.party===party.name))&&inRange(p.date||'')&&p.type==='receipt';}).forEach(function(p){
      entries.push({date:p.date,desc:'Receipt '+(p.no||p.number||'')+' ('+p.method+')',debit:0,credit:Number(p.amount||0)});
    });
  } else {
    ledgerPurchases.filter(function(p){return p.supplierId===key&&inRange(p.date||'');}).forEach(function(p){
      entries.push({date:p.date,desc:'Purchase - '+(p.purchaseNo||''),debit:Number(p.paid||0),credit:Number(p.total||0)});
    });
    ledgerPayments.filter(function(p){return(p.partyId===key||(p.party&&p.party===party.name))&&inRange(p.date||'')&&p.type==='payment';}).forEach(function(p){
      entries.push({date:p.date,desc:'Payment '+(p.no||p.number||'')+' ('+p.method+')',debit:Number(p.amount||0),credit:0});
    });
  }

  entries.sort(function(a,b){return(a.date||'').localeCompare(b.date||'');});

  // Calculate running balance
  var openingBalance=0; // Could be enhanced with opening balance field
  var balance=openingBalance;
  var totalDebit=0,totalCredit=0;
  entries.forEach(function(e){
    totalDebit+=Number(e.debit||0);
    totalCredit+=Number(e.credit||0);
    balance+=Number(e.debit||0)-Number(e.credit||0);
    e.balance=balance;
  });

  var balLabel=party.type==='customer'?(balance>0?'Receivable':'Advance'):(balance>0?'Overpaid':'Payable');

  document.getElementById('ledgerContent').innerHTML=
    '<div class="card" style="padding:0;overflow:hidden" id="ledgerPrintArea">'+
      '<div style="display:flex;justify-content:space-between;align-items:center;padding:18px 22px;border-bottom:2px solid var(--border)">'+
        '<div><div class="bold" style="font-size:16px">'+party.name+'</div><div class="text-muted" style="font-size:12px;text-transform:capitalize">'+party.type+(party.phone?' | '+party.phone:'')+'</div></div>'+
        '<div style="text-align:right"><div class="text-muted" style="font-size:11px;text-transform:uppercase;font-weight:700">'+balLabel+'</div><div class="bold '+(Math.abs(party.balance||0)>0?'text-danger':'text-success')+'" style="font-size:22px">'+fmt(Math.abs(party.balance||0))+'</div></div>'+
      '</div>'+
      '<div style="display:flex;gap:16px;padding:12px 22px;background:var(--bg);border-bottom:1px solid var(--border);font-size:12px">'+
        '<div><span class="text-muted">Period:</span> <strong>'+from+' to '+to+'</strong></div>'+
        '<div><span class="text-muted">Total Debit:</span> <strong class="text-danger">'+fmt(totalDebit)+'</strong></div>'+
        '<div><span class="text-muted">Total Credit:</span> <strong class="text-success">'+fmt(totalCredit)+'</strong></div>'+
        '<div><span class="text-muted">Net:</span> <strong>'+fmt(balance)+'</strong></div>'+
      '</div>'+
      '<div class="table-wrap"><table class="tbl"><thead><tr><th>Date</th><th>Description</th><th class="r">Debit</th><th class="r">Credit</th><th class="r">Balance</th></tr></thead><tbody>'+
      (!entries.length?'<tr><td colspan="5" class="empty">No transactions in this period</td></tr>':
        entries.map(function(e){
          return'<tr><td>'+(e.date||'')+'</td><td>'+(e.desc||'')+'</td><td class="r '+(e.debit>0?'text-danger':'')+'">'+(e.debit>0?fmt(e.debit):'\u2014')+'</td><td class="r '+(e.credit>0?'text-success':'')+'">'+(e.credit>0?fmt(e.credit):'\u2014')+'</td><td class="r bold '+(e.balance>0?'text-danger':'text-success')+'">'+fmt(Math.abs(e.balance))+(e.balance>0?' Dr':' Cr')+'</td></tr>';
        }).join(''))+
      '<tr style="background:var(--bg);font-weight:800"><td colspan="2" style="text-align:right">TOTALS</td><td class="r text-danger">'+fmt(totalDebit)+'</td><td class="r text-success">'+fmt(totalCredit)+'</td><td class="r bold">'+fmt(Math.abs(balance))+(balance>0?' Dr':' Cr')+'</td></tr>'+
      '</tbody></table></div></div>';
};

window.printLedger=function(){
  var content=document.getElementById('ledgerPrintArea');
  if(!content)return alert('Load a ledger first');
  var win=window.open('','_blank');
  win.document.write('<html><head><title>Ledger</title><style>body{font-family:sans-serif;padding:20px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ddd;padding:8px;text-align:left;font-size:12px}.r{text-align:right}.bold{font-weight:bold}.text-danger{color:#dc2626}.text-success{color:#059669}</style></head><body>'+content.innerHTML+'</body></html>');
  win.document.close();setTimeout(function(){win.print();win.close();},500);
};

initLedger();
<\/script>`;
}
__name(xa, "xa");
function wa() {
  const e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  return `
<div class="page-header"><div><div class="page-title">Profit & Loss Statement</div><div class="page-sub">Financial summary for selected period</div></div></div>
<div class="card" style="margin-bottom:16px"><div class="form-row" style="grid-template-columns:1fr 1fr auto;align-items:end"><div><label>From</label><input type="date" id="plFrom" value="${new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10)}" onchange="calcPL()"></div><div><label>To</label><input type="date" id="plTo" value="${e}" onchange="calcPL()"></div><div><button class="btn btn-primary" onclick="printPL()">Print</button></div></div></div>
<div class="card" style="padding:0;max-width:760px" id="plReport"></div>
<script>
var plSales=[],plPurchases=[],plExpenses=[];
async function initPL(){var data=await Promise.all([loadList('sale:'),loadList('purchase:'),loadList('expense:')]);plSales=data[0];plPurchases=data[1];plExpenses=data[2];calcPL();}
window.calcPL=function(){
  var from=document.getElementById('plFrom').value;var to=document.getElementById('plTo').value;
  function inRange(d){return d>=from&&d<=to;}
  var sales=plSales.filter(function(s){return inRange(s.date||'');});
  var purchases=plPurchases.filter(function(p){return inRange(p.date||'');});
  var expenses=plExpenses.filter(function(e){return inRange(e.date||'');});
  var revenue=sales.reduce(function(s,x){return s+(x.total||0);},0);
  var cogs=purchases.reduce(function(s,x){return s+(x.total||0);},0);
  var gross=revenue-cogs;
  var operating=expenses.reduce(function(s,e){return s+(e.amount||0);},0);
  var net=gross-operating;
  var gm=revenue>0?(gross/revenue*100):0;var nm=revenue>0?(net/revenue*100):0;
  var byHead={};expenses.forEach(function(e){var k=e.headName||'Other';byHead[k]=(byHead[k]||0)+(e.amount||0);});
  var expRows=Object.keys(byHead).length?Object.keys(byHead).sort().map(function(k){return'<div class="pl-row"><span class="text-muted">'+k+'</span><span>'+fmt(byHead[k])+'</span></div>';}).join(''):'<div class="pl-row text-muted">No expenses in this period</div>';
  document.getElementById('plReport').innerHTML=
    '<div class="pl-header"><div style="font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);font-weight:700">Profit & Loss Statement</div><div class="text-muted" style="font-size:12px;margin-top:4px">'+from+' to '+to+'</div></div>'+
    '<div class="pl-row"><span>Revenue ('+sales.length+' sales)</span><span class="bold">'+fmt(revenue)+'</span></div>'+
    '<div class="pl-row"><span>Cost of Goods Sold</span><span>'+fmt(cogs)+'</span></div>'+
    '<div class="pl-row total" style="font-size:16px"><span>Gross Profit</span><span class="'+(gross>=0?'text-success':'text-danger')+'">'+fmt(gross)+'</span></div>'+
    '<div class="pl-row" style="font-weight:700;margin-top:8px"><span>Operating Expenses</span><span></span></div>'+expRows+
    '<div class="pl-row"><span>Total Operating Expenses</span><span>'+fmt(operating)+'</span></div>'+
    '<div class="pl-row total" style="font-size:16px"><strong>Net Profit / (Loss)</strong><strong class="'+(net>=0?'text-success':'text-danger')+'">'+fmt(net)+'</strong></div>'+
    '<div class="pl-row"><span>Gross Margin</span><span>'+gm.toFixed(2)+'%</span></div>'+
    '<div class="pl-row"><span>Net Margin</span><span>'+nm.toFixed(2)+'%</span></div>';
};
window.printPL=function(){var content=document.getElementById('plReport');if(!content)return;var win=window.open('','_blank');win.document.write('<html><head><title>P&L</title><style>body{font-family:sans-serif;padding:20px}.pl-header{padding:16px;border-bottom:2px solid #333}.pl-row{display:flex;justify-content:space-between;padding:6px 16px}.pl-row.total{font-weight:bold;background:#f4f4f4;padding:10px 16px;border-radius:4px}.text-success{color:#059669}.text-danger{color:#dc2626}.text-muted{color:#666}.bold{font-weight:bold}</style></head><body>'+content.innerHTML+'</body></html>');win.document.close();setTimeout(function(){win.print();win.close();},500);};
initPL();
<\/script>`;
}
__name(wa, "wa");
function ka() {
  return `
<div class="page-header">
  <div><div class="page-title">Day Details</div><div class="page-sub">Daily snapshot of all transactions</div></div>
  <button class="btn btn-primary" onclick="printDayReport()">Print Report</button>
</div>
<div class="card" style="max-width:420px;margin-bottom:16px">
  <div style="display:flex;align-items:end;gap:12px">
    <div class="date-nav">
      <button onclick="changeDay(-1)" title="Previous Day">&larr;</button>
    </div>
    <div style="flex:1"><label>Select Date</label><input type="date" id="dayDate" value="${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}" onchange="renderDay()"></div>
    <div class="date-nav">
      <button onclick="changeDay(1)" title="Next Day">&rarr;</button>
    </div>
    <button class="btn btn-outline btn-sm" onclick="goToday()">Today</button>
  </div>
</div>
<div id="dayReportArea">
<div class="summary-grid" id="daySummary"></div>
<div style="display:grid;grid-template-columns:1fr;gap:14px">
  <div class="card" id="dayPurchases"></div>
  <div class="card" id="daySales"></div>
  <div class="card" id="dayTransactions"></div>
  <div class="card" id="dayExpenses"></div>
  <div class="card" id="dayBanks"></div>
  <div class="card" id="dayCashSummary"></div>
</div>
</div>
<script>
var dayPurchasesData=[],daySalesData=[],dayPaymentsData=[],dayExpensesData=[],dayBanksData=[];

async function initDay(){
  var data=await Promise.all([loadList('purchase:'),loadList('sale:'),loadList('payment:'),loadList('expense:'),loadList('bank:')]);
  dayPurchasesData=data[0];daySalesData=data[1];dayPaymentsData=data[2];dayExpensesData=data[3];dayBanksData=data[4];
  renderDay();
}

window.changeDay=function(delta){
  var el=document.getElementById('dayDate');
  var d=new Date(el.value);
  d.setDate(d.getDate()+delta);
  el.value=d.toISOString().slice(0,10);
  renderDay();
};

window.goToday=function(){document.getElementById('dayDate').value=todayISO();renderDay();};

window.renderDay=function(){
  var date=document.getElementById('dayDate').value;
  var purchases=dayPurchasesData.filter(function(p){return p.date===date;});
  var sales=daySalesData.filter(function(s){return s.date===date;});
  var payments=dayPaymentsData.filter(function(p){return p.date===date;});
  var expenses=dayExpensesData.filter(function(e){return e.date===date;});

  var purTotal=purchases.reduce(function(s,p){return s+(p.total||0);},0);
  var purPaid=purchases.reduce(function(s,p){return s+(p.paid||0);},0);
  var salesTotal=sales.reduce(function(s,x){return s+(x.total||0);},0);
  var salesReceived=sales.reduce(function(s,x){return s+(x.received||x.paid||0);},0);

  var rcCash=payments.filter(function(p){return p.type==='receipt'&&p.method==='cash';}).reduce(function(s,p){return s+(p.amount||0);},0);
  var rcBank=payments.filter(function(p){return p.type==='receipt'&&p.method==='bank';}).reduce(function(s,p){return s+(p.amount||0);},0);
  var pyACash=payments.filter(function(p){return p.type==='payment'&&p.method==='cash';}).reduce(function(s,p){return s+(p.amount||0);},0);
  var pyABank=payments.filter(function(p){return p.type==='payment'&&p.method==='bank';}).reduce(function(s,p){return s+(p.amount||0);},0);
  var expCash=expenses.filter(function(e){return e.method==='cash';}).reduce(function(s,e){return s+(e.amount||0);},0);
  var expBank=expenses.filter(function(e){return e.method==='bank';}).reduce(function(s,e){return s+(e.amount||0);},0);

  // Cash in = cash receipts + cash received from sales
  // Cash out = cash payments + cash paid for purchases + cash expenses
  var cashIn=rcCash+salesReceived;
  var cashOut=pyACash+purPaid+expCash;
  var cashInHand=cashIn-cashOut;

  // Bank balances calculation
  var bankBal={};
  dayBanksData.forEach(function(b){bankBal[b._key]=Number(b.openingBalance||b.opening||b.balance||0);});
  dayPaymentsData.filter(function(p){return p.method==='bank'&&p.date<=date&&p.status==='done';}).forEach(function(p){
    if(!bankBal[p.bankId])bankBal[p.bankId]=0;
    bankBal[p.bankId]+= p.type==='receipt'||p.note==='Cash to Bank'?Number(p.amount||0):-Number(p.amount||0);
  });
  dayExpensesData.filter(function(e){return e.method==='bank'&&e.date<=date;}).forEach(function(e){
    if(!bankBal[e.bankId])bankBal[e.bankId]=0;
    bankBal[e.bankId]-=Number(e.amount||0);
  });
  var totalBank=Object.keys(bankBal).reduce(function(s,k){return s+Number(bankBal[k]||0);},0);

  var totalExpenses=expCash+expBank;

  document.getElementById('daySummary').innerHTML=[
    {label:'Purchase Total',value:fmt(purTotal),color:'var(--primary)'},
    {label:'Sales Total',value:fmt(salesTotal),color:'var(--accent)'},
    {label:'Total Expenses',value:fmt(totalExpenses),color:'var(--warning)'},
    {label:'Cash In Hand',value:fmt(cashInHand),color:cashInHand>=0?'var(--accent)':'var(--danger)'},
    {label:'Cash In Banks',value:fmt(totalBank),color:totalBank>=0?'var(--primary)':'var(--danger)'},
    {label:'Net Position',value:fmt(cashInHand+totalBank),color:(cashInHand+totalBank)>=0?'var(--accent)':'var(--danger)'}
  ].map(function(c){return'<div class="summary-card"><div class="label">'+c.label+'</div><div class="value" style="color:'+c.color+'">'+c.value+'</div></div>';}).join('');

  // Purchases section
  document.getElementById('dayPurchases').innerHTML='<div class="section-title">Purchases</div>'+(!purchases.length?'<div class="text-muted" style="font-size:13px">No purchases on this day</div>':'<div class="table-wrap"><table class="tbl"><thead><tr><th>No</th><th>Supplier</th><th class="r">Total</th><th class="r">Paid</th><th class="r">Due</th></tr></thead><tbody>'+purchases.map(function(p){return'<tr><td>'+(p.purchaseNo||'-')+'</td><td>'+(p.supplierName||'')+'</td><td class="r">'+fmt(p.total)+'</td><td class="r">'+fmt(p.paid)+'</td><td class="r bold text-danger">'+fmt((p.total||0)-(p.paid||0))+'</td></tr>';}).join('')+'<tr style="background:var(--bg);font-weight:700"><td colspan="2">Total</td><td class="r">'+fmt(purTotal)+'</td><td class="r">'+fmt(purPaid)+'</td><td class="r text-danger">'+fmt(purTotal-purPaid)+'</td></tr></tbody></table></div>');

  // Sales section
  document.getElementById('daySales').innerHTML='<div class="section-title">Sales</div>'+(!sales.length?'<div class="text-muted" style="font-size:13px">No sales on this day</div>':'<div class="table-wrap"><table class="tbl"><thead><tr><th>No</th><th>Customer</th><th class="r">Total</th><th class="r">Received</th><th class="r">Due</th></tr></thead><tbody>'+sales.map(function(s){return'<tr><td>'+(s.invoiceNo||'-')+'</td><td>'+(s.customerName||'')+'</td><td class="r">'+fmt(s.total)+'</td><td class="r">'+fmt(s.received||s.paid)+'</td><td class="r bold text-danger">'+fmt((s.total||0)-(s.received||s.paid||0))+'</td></tr>';}).join('')+'<tr style="background:var(--bg);font-weight:700"><td colspan="2">Total</td><td class="r">'+fmt(salesTotal)+'</td><td class="r">'+fmt(salesReceived)+'</td><td class="r text-danger">'+fmt(salesTotal-salesReceived)+'</td></tr></tbody></table></div>');

  // Transactions section
  document.getElementById('dayTransactions').innerHTML='<div class="section-title">Receipts & Payments</div>'+
    '<div class="summary-grid" style="margin-bottom:10px">'+
      '<div class="summary-card"><div class="label">Cash Receipts</div><div class="value" style="font-size:18px;color:var(--accent)">'+fmt(rcCash)+'</div></div>'+
      '<div class="summary-card"><div class="label">Bank Receipts</div><div class="value" style="font-size:18px;color:var(--primary)">'+fmt(rcBank)+'</div></div>'+
      '<div class="summary-card"><div class="label">Cash Payments</div><div class="value" style="font-size:18px;color:var(--danger)">'+fmt(pyACash)+'</div></div>'+
      '<div class="summary-card"><div class="label">Bank Payments</div><div class="value" style="font-size:18px;color:var(--warning)">'+fmt(pyABank)+'</div></div>'+
    '</div>'+
    (!payments.length?'<div class="text-muted" style="font-size:13px">No receipt/payment transactions</div>':'<div class="table-wrap"><table class="tbl"><thead><tr><th>No</th><th>Type</th><th>Party</th><th>Method</th><th class="r">Amount</th></tr></thead><tbody>'+payments.map(function(p){return'<tr><td>'+(p.no||p.number||'-')+'</td><td><span class="badge '+(p.type==='receipt'?'badge-cash':'badge-danger')+'">'+p.type.toUpperCase()+'</span></td><td>'+(p.party||p.partyName||'')+'</td><td>'+p.method+(p.bankName||p.chequeNo?' ('+(p.bankName||'Chq#'+p.chequeNo)+')':'')+'</td><td class="r bold">'+fmt(p.amount)+'</td></tr>';}).join('')+'</tbody></table></div>');

  // Expenses section
  document.getElementById('dayExpenses').innerHTML='<div class="section-title">Expenses</div>'+(!expenses.length?'<div class="text-muted" style="font-size:13px">No expenses on this day</div>':'<div class="table-wrap"><table class="tbl"><thead><tr><th>No</th><th>Head</th><th>Method</th><th>Description</th><th class="r">Amount</th></tr></thead><tbody>'+expenses.map(function(e){return'<tr><td>'+(e.expenseNo||'-')+'</td><td class="bold">'+(e.headName||'')+(e.subHeadName?' / '+e.subHeadName:'')+'</td><td><span class="badge '+(e.method==='bank'?'badge-bank':'badge-cash')+'">'+e.method.toUpperCase()+'</span>'+(e.bankName?' <small>('+e.bankName+')</small>':'')+'</td><td class="text-muted">'+(e.description||'')+'</td><td class="r bold">'+fmt(e.amount)+'</td></tr>';}).join('')+'<tr style="background:var(--bg);font-weight:700"><td colspan="4">Total Expenses</td><td class="r">'+fmt(totalExpenses)+'</td></tr></tbody></table></div>');

  // Bank balances
  document.getElementById('dayBanks').innerHTML='<div class="section-title">Bank Balances (as of '+date+')</div>'+(dayBanksData.length?'<div class="table-wrap"><table class="tbl"><thead><tr><th>Bank</th><th class="r">Balance</th></tr></thead><tbody>'+dayBanksData.map(function(b){var bal=bankBal[b._key]||0;return'<tr><td class="bold">'+(b.name||'')+'</td><td class="r bold '+(bal>=0?'text-success':'text-danger')+'">'+fmt(bal)+'</td></tr>';}).join('')+'<tr style="background:var(--bg);font-weight:700"><td>Total</td><td class="r">'+fmt(totalBank)+'</td></tr></tbody></table></div>':'<div class="text-muted" style="font-size:13px">No bank accounts</div>');

  // Cash summary
  document.getElementById('dayCashSummary').innerHTML='<div class="section-title">Cash Flow Summary</div>'+
    '<div class="table-wrap"><table class="tbl"><thead><tr><th>Description</th><th class="r">In</th><th class="r">Out</th></tr></thead><tbody>'+
    '<tr><td>Sales Received (Cash)</td><td class="r text-success">'+fmt(salesReceived)+'</td><td class="r"></td></tr>'+
    '<tr><td>Cash Receipts</td><td class="r text-success">'+fmt(rcCash)+'</td><td class="r"></td></tr>'+
    '<tr><td>Purchase Paid (Cash)</td><td class="r"></td><td class="r text-danger">'+fmt(purPaid)+'</td></tr>'+
    '<tr><td>Cash Payments</td><td class="r"></td><td class="r text-danger">'+fmt(pyACash)+'</td></tr>'+
    '<tr><td>Cash Expenses</td><td class="r"></td><td class="r text-danger">'+fmt(expCash)+'</td></tr>'+
    '<tr style="background:var(--bg);font-weight:800"><td>Net Cash</td><td class="r text-success">'+fmt(cashIn)+'</td><td class="r text-danger">'+fmt(cashOut)+'</td></tr>'+
    '<tr style="font-weight:800;font-size:15px"><td>Cash In Hand</td><td colspan="2" class="r '+(cashInHand>=0?'text-success':'text-danger')+'">'+fmt(cashInHand)+'</td></tr>'+
    '</tbody></table></div>';
};

window.printDayReport=function(){
  var content=document.getElementById('dayReportArea');
  if(!content)return;
  var date=document.getElementById('dayDate').value;
  var win=window.open('','_blank');
  win.document.write('<html><head><title>Day Report - '+date+'</title><style>body{font-family:sans-serif;padding:20px;font-size:12px}h1{font-size:18px;margin-bottom:4px}table{width:100%;border-collapse:collapse;margin:8px 0}th,td{border:1px solid #ddd;padding:6px 8px;text-align:left;font-size:11px}.r{text-align:right}.bold{font-weight:bold}.text-danger{color:#dc2626}.text-success{color:#059669}.text-warning{color:#d97706}.summary-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:8px 0}.summary-card{border:1px solid #ddd;padding:8px;border-radius:4px;text-align:center}.summary-card .label{font-size:9px;text-transform:uppercase;color:#666;margin-bottom:2px}.summary-card .value{font-size:16px;font-weight:bold}.section-title{font-weight:bold;font-size:13px;margin:12px 0 6px;padding-bottom:4px;border-bottom:1px solid #333}.badge{display:inline;padding:1px 6px;border-radius:3px;font-size:9px;font-weight:bold}.badge-cash{background:#ecfdf5;color:#059669}.badge-bank{background:#eef2ff;color:#4f46e5}.badge-danger{background:#fef2f2;color:#dc2626}.card{margin-bottom:12px}</style></head><body><h1>Apollow Traders - Day Report</h1><p style="color:#666">Date: '+date+'</p>'+content.innerHTML+'</body></html>');
  win.document.close();setTimeout(function(){win.print();win.close();},500);
};

initDay();
<\/script>`;
}
__name(ka, "ka");
function Ea() {
  return `
<div class="page-header"><div><div class="page-title">Admin Panel</div><div class="page-sub">System settings, data management, and diagnostics</div></div></div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:900px">

  <!-- License Info -->
  <div class="card">
    <div class="section-title">License Information</div>
    <div id="licenseInfo" class="text-muted">Loading...</div>
  </div>

  <!-- Quick Actions -->
  <div class="card">
    <div class="section-title">Quick Actions</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px">
      <button class="btn btn-outline" onclick="location.reload()"><span class="material-symbols-outlined" style="font-size:16px">refresh</span> Refresh</button>
      <button class="btn btn-outline" onclick="openModal('changePinModal')"><span class="material-symbols-outlined" style="font-size:16px">lock</span> Change PIN</button>
      <button class="btn btn-outline" onclick="openModal('kvBrowserModal')"><span class="material-symbols-outlined" style="font-size:16px">database</span> KV Browser</button>
    </div>
  </div>

  <!-- Data Export -->
  <div class="card">
    <div class="section-title">Export Data</div>
    <p class="text-muted" style="font-size:12px;margin-bottom:12px">Download all business data as JSON file for backup.</p>
    <button class="btn btn-primary" onclick="exportData()" id="exportBtn"><span class="material-symbols-outlined" style="font-size:16px">download</span> Export All Data</button>
  </div>

  <!-- Data Import -->
  <div class="card">
    <div class="section-title">Import Data</div>
    <p class="text-muted" style="font-size:12px;margin-bottom:12px">Restore data from a previously exported JSON file.</p>
    <input type="file" id="importFile" accept=".json" style="margin-bottom:8px">
    <button class="btn btn-warning" onclick="importData()"><span class="material-symbols-outlined" style="font-size:16px">upload</span> Import Data</button>
  </div>

  <!-- Data Statistics -->
  <div class="card" style="grid-column:span 2">
    <div class="section-title">Data Statistics</div>
    <div class="summary-grid" id="adminStats" style="grid-template-columns:repeat(auto-fill,minmax(140px,1fr))"></div>
  </div>

  <!-- Danger Zone -->
  <div class="card" style="grid-column:span 2;border-color:var(--danger)">
    <div class="section-title" style="color:var(--danger)">Danger Zone</div>
    <p class="text-muted" style="font-size:12px;margin-bottom:12px">These actions are irreversible. Use with extreme caution.</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn btn-danger" onclick="purgeData('expense:')">Purge Expenses</button>
      <button class="btn btn-danger" onclick="purgeData('payment:')">Purge Payments</button>
      <button class="btn btn-danger" onclick="purgeData('sale:')">Purge Sales</button>
      <button class="btn btn-danger" onclick="purgeData('purchase:')">Purge Purchases</button>
      <button class="btn btn-danger" onclick="purgeAllData()">PURGE ALL DATA</button>
    </div>
  </div>
</div>

<!-- Change PIN Modal -->
<div class="modal-overlay" id="changePinModal"><div class="modal" style="max-width:400px">
  <h3>Change PIN</h3>
  <div class="form-group"><label>Current PIN</label><input type="password" id="oldPin" placeholder="Current PIN"></div>
  <div class="form-group"><label>New PIN</label><input type="password" id="newPin" placeholder="New PIN (min 4 chars)"></div>
  <div class="form-group"><label>Confirm New PIN</label><input type="password" id="confirmPin" placeholder="Confirm new PIN"></div>
  <div style="display:flex;gap:8px;margin-top:16px"><button class="btn btn-outline" onclick="closeModal('changePinModal')">Cancel</button><button class="btn btn-primary" style="flex:1" onclick="changePin()">Change PIN</button></div>
</div></div>

<!-- KV Browser Modal -->
<div class="modal-overlay" id="kvBrowserModal"><div class="modal" style="max-width:700px">
  <h3>KV Storage Browser</h3>
  <div style="display:flex;gap:8px;margin-bottom:12px">
    <input id="kvPrefix" placeholder="Prefix filter (e.g. product:)" style="flex:1">
    <button class="btn btn-primary" onclick="browseKV()">Browse</button>
  </div>
  <div id="kvResults" style="max-height:400px;overflow:auto"></div>
  <div style="text-align:right;margin-top:12px"><button class="btn btn-outline" onclick="closeModal('kvBrowserModal')">Close</button></div>
</div></div>

<script>
// License info
(async function(){
  var r=await fetch('/api/license-info');var d=await r.json();
  document.getElementById('licenseInfo').innerHTML=
    '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px">'+
      '<div><div class="text-muted" style="font-size:11px;text-transform:uppercase;margin-bottom:2px">Status</div><span class="badge '+(d.status==='Active'?'badge-cash':'badge-danger')+'">'+d.status+'</span></div>'+
      '<div><div class="text-muted" style="font-size:11px;text-transform:uppercase;margin-bottom:2px">Expires</div><div class="bold">'+d.expiry+'</div></div>'+
      '<div><div class="text-muted" style="font-size:11px;text-transform:uppercase;margin-bottom:2px">Days Left</div><div class="bold '+(d.days<30?'text-danger':'text-success')+'">'+d.days+'</div></div>'+
    '</div>';
})();

// Data statistics
(async function(){
  var prefixes=[
    {prefix:'product:',label:'Products',icon:'inventory_2'},
    {prefix:'party:',label:'Parties',icon:'groups'},
    {prefix:'sale:',label:'Sales',icon:'receipt_long'},
    {prefix:'purchase:',label:'Purchases',icon:'shopping_cart'},
    {prefix:'payment:',label:'Payments',icon:'account_balance_wallet'},
    {prefix:'expense:',label:'Expenses',icon:'payments'},
    {prefix:'exphead:',label:'Exp. Heads',icon:'category'},
    {prefix:'bank:',label:'Banks',icon:'account_balance'}
  ];
  var counts=await Promise.all(prefixes.map(function(p){return loadList(p.prefix);}));
  document.getElementById('adminStats').innerHTML=prefixes.map(function(p,i){
    return'<div class="summary-card"><div class="label">'+p.label+'</div><div class="value" style="color:var(--primary)">'+counts[i].length+'</div></div>';
  }).join('');
})();

// Export
window.exportData=async function(){
  document.getElementById('exportBtn').textContent='Exporting...';
  document.getElementById('exportBtn').disabled=true;
  try{
    var r=await fetch('/api/export-all',{method:'POST',headers:{'Content-Type':'application/json'}});
    var data=await r.json();
    var blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
    var url=URL.createObjectURL(blob);
    var a=document.createElement('a');
    a.href=url;a.download='bizmanager-backup-'+todayISO()+'.json';
    document.body.appendChild(a);a.click();document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('Data exported successfully!');
  }catch(err){alert('Export failed: '+err.message);}
  finally{document.getElementById('exportBtn').textContent='Export All Data';document.getElementById('exportBtn').disabled=false;}
};

// Import
window.importData=async function(){
  var file=document.getElementById('importFile').files[0];
  if(!file)return alert('Select a JSON file first');
  if(!confirm('This will ADD imported data to existing data. Continue?'))return;
  try{
    var text=await file.text();
    var data=JSON.parse(text);
    var r=await fetch('/api/import-all',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
    var result=await r.json();
    if(result.success)alert('Imported '+result.count+' records successfully!');
    else alert('Import failed: '+(result.error||'Unknown error'));
    location.reload();
  }catch(err){alert('Import failed: '+err.message);}
};

// Change PIN
window.changePin=async function(){
  var oldPin=document.getElementById('oldPin').value;
  var newPin=document.getElementById('newPin').value;
  var confirmPin=document.getElementById('confirmPin').value;
  if(!oldPin||!newPin)return alert('Fill in all fields');
  if(newPin!==confirmPin)return alert('New PIN and confirm PIN do not match');
  if(newPin.length<4)return alert('PIN must be at least 4 characters');
  try{
    var r=await fetch('/api/change-pin',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({oldPin:oldPin,newPin:newPin})});
    var result=await r.json();
    if(result.success){alert('PIN changed successfully!');closeModal('changePinModal');document.getElementById('oldPin').value='';document.getElementById('newPin').value='';document.getElementById('confirmPin').value='';}
    else alert('Failed: '+(result.error||'Unknown error'));
  }catch(err){alert('Error: '+err.message);}
};

// KV Browser
window.browseKV=async function(){
  var prefix=document.getElementById('kvPrefix').value;
  try{
    var r=await fetch('/api/kv-keys',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prefix:prefix})});
    var keys=await r.json();
    if(!keys.length){document.getElementById('kvResults').innerHTML='<div class="empty">No keys found</div>';return;}
    document.getElementById('kvResults').innerHTML='<table class="tbl"><thead><tr><th>Key</th><th class="r">Actions</th></tr></thead><tbody>'+keys.map(function(k){var safeKey=k.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");return'<tr><td style="font-family:monospace;font-size:12px">'+safeKey+'</td><td class="r"><button class="btn btn-outline btn-xs kvViewBtn" data-kvkey="'+safeKey+'">View</button> <button class="btn btn-danger btn-xs kvDelBtn" data-kvkey="'+safeKey+'">Del</button></td></tr>';}).join('')+'</tbody></table>';document.querySelectorAll('.kvViewBtn').forEach(function(b){b.onclick=function(){viewKVKey(this.getAttribute('data-kvkey'));}});document.querySelectorAll('.kvDelBtn').forEach(function(b){b.onclick=function(){deleteKVKey(this.getAttribute('data-kvkey'));}});
  }catch(err){alert('Error: '+err.message);}
};

window.viewKVKey=async function(key){
  try{
    var r=await fetch('/api/kv-get',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({key:key})});
    var result=await r.json();
    alert('Key: '+key+'\\n\\nValue:\\n'+(result.value||'(empty)'));
  }catch(err){alert('Error: '+err.message);}
};

window.deleteKVKey=async function(key){
  if(!confirm('Delete key: '+key+'?'))return;
  try{
    await fetch('/api/kv-delete',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({key:key})});
    browseKV();
  }catch(err){alert('Error: '+err.message);}
};

// Purge data
window.purgeData=async function(prefix){
  var label=prefix.replace(':','');
  if(!confirm('DELETE ALL '+label.toUpperCase()+' DATA? This cannot be undone!'))return;
  if(!confirm('Are you ABSOLUTELY sure? Type the prefix to confirm.'))return;
  try{
    var items=await loadList(prefix);
    for(var i=0;i<items.length;i++){await deleteItem(items[i]._key,false);}
    alert('Purged '+items.length+' '+label+' records');
    location.reload();
  }catch(err){alert('Error: '+err.message);}
};

window.purgeAllData=async function(){
  if(!confirm('DELETE ALL DATA IN THE SYSTEM? This will remove EVERYTHING!'))return;
  if(!confirm('LAST WARNING: All products, sales, purchases, payments, expenses will be deleted permanently!'))return;
  var prefixes=['product:','party:','sale:','purchase:','payment:','expense:','exphead:','expsubhead:','bank:','cb:'];
  var total=0;
  for(var p=0;p<prefixes.length;p++){
    var items=await loadList(prefixes[p]);
    for(var i=0;i<items.length;i++){await deleteItem(items[i]._key,false);}
    total+=items.length;
  }
  alert('Purged '+total+' total records');
  location.reload();
};
<\/script>`;
}
__name(Ea, "Ea");
var et = new kt();
var Ba = Object.assign({ "/src/index.tsx": h });
var Tt = false;
for (const [, e] of Object.entries(Ba)) e && (et.all("*", (t) => {
  let a;
  try {
    a = t.executionCtx;
  } catch {
  }
  return e.fetch(t.req.raw, t.env, a);
}), et.notFound((t) => {
  let a;
  try {
    a = t.executionCtx;
  } catch {
  }
  return e.fetch(t.req.raw, t.env, a);
}), Tt = true);
if (!Tt) throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");

// ../node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error3 = reduceError(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// ../.wrangler/tmp/bundle-5t22Wn/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = et;

// ../node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// ../.wrangler/tmp/bundle-5t22Wn/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=bundledWorker-0.27805554208181227.mjs.map
