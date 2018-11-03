import ConfigWorker from "./configworker.js"

class Viki {
    constructor() {
        this.workers = [];
        this.curWorkerIdx = -1;
    }

    init() {
        let registerWorker = (p_worker) => {
            p_worker.register(this);
            this.workers.push(p_worker);
        };

        let configWorker = new ConfigWorker();
        registerWorker(configWorker);

        $(document).ready(() => {
            this.curWorkerIdx = -1;
            this.scheduleNext();
        });
    }

    scheduleNext() {
        if (this.curWorkerIdx >= this.workers.length - 1) {
            console.log("all workers finished");
            this.curWorkerIdx = -1;
        } else {
            ++this.curWorkerIdx;
            console.log("schedule worker", this.curWorkerIdx);
            this.workers[this.curWorkerIdx].run();
        }
    }
}

export default Viki
