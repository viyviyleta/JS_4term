var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "Info";
    LogLevel["WARNING"] = "Warning";
    LogLevel["ERROR"] = "Error";
})(LogLevel || (LogLevel = {}));
function logEvent(arr) {
    console.log("[".concat(arr[0], "] [").concat(arr[1], "]: ").concat(arr[2]));
}
logEvent([new Date(), LogLevel.INFO, "Система запущена"]);
