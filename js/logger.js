class Logger {
    constructor() {
        this.enableDebug = false;
    }

    log(...args) {
        if (!this.enableDebug) {
            return;
        }

        try {
            console.log.apply(this, args);
        } catch(err) {
            console.log(args);
        }
    }
}

var logger = new Logger();

export default logger;
