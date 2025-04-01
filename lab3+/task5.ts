enum LogLevel{
    INFO = "Info",
    WARNING = "Warning",
    ERROR = "Error"
}

function logEvent(arr:[Date, LogLevel, string]) : void{
    console.log(`[${arr[0]}] [${arr[1]}]: ${arr[2]}`);
}


logEvent([new Date(), LogLevel.INFO, "Система запущена"]);