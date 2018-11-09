class Logger {
    constructor() {
        this.enableDebug = true;
    }

    log(...args) {
        if (!this.enableDebug) {
            return;
        }

        console.log.apply(this, args);
    }
}

var logger = new Logger();

export default logger;
