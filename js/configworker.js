var configWorker = (function() {
    var vikiObj = null;

    var register = function(p_viki) {
        console.log("register worker", "config");
        vikiObj = p_viki;
    };

    var run = function() {
        $.get("config.json", function(p_data) {
            vikiObj.scheduleNext();
        });
    };

    return {
        register: register,
        run: run,
    }
})();
