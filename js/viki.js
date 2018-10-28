var viki = (function() {
    var workers = [];
    var curWorkerIdx = -1;
    var thisObj = null;

    var scheduleNext = function() {
        if (curWorkerIdx >= workers.length - 1) {
            console.log("all workers finished");
            curWorkerIdx = -1;
        } else {
            ++curWorkerIdx;
            console.log("schedule worker", curWorkerIdx);
            workers[curWorkerIdx].run();
        }
    };

    var registerWorker = function(p_worker) {
        p_worker.register(thisObj);
        workers.push(p_worker);
    };

    var init = function() {
        thisObj = viki;

        registerWorker(configWorker);

        $(document).ready(run);
    };

    var run = function() {
        curWorkerIdx = -1;
        scheduleNext();
    };


    return {
        init: init,
        scheduleNext: scheduleNext
    };
})();
