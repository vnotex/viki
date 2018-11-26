class Logger {
    constructor() {
        this.enableDebug = true;
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
