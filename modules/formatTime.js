var uptime = require('./modules/OSinfo.js');

function formatTimeToSecs(uptime) {
    if (uptime>=3600){
        var hours = ((uptime / 3600).toFixed(0));
        var mins = (((uptime-hours*3600)/60).toFixed(0));
        var secs = uptime-hours*3600-mins*60;

        console.log(hours+'hours '+mins+'mins '+secs+'secs');
    } else {
        var mins = ((uptime/60).toFixed(0));
        var secs = uptime-mins*60;

        console.log(mins+'mins '+secs+'secs');
    }
}

exports.print = formatTimeToSecs;