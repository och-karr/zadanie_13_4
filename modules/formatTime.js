var uptime = require('../modules/OSinfo').uptime;

function formatTimeToSecs(uptime) {
    if (uptime>=3600){
        var hours = Math.floor(uptime/3600);
        var mins = Math.floor((uptime-(hours*3600))/60);
        var secs = Math.floor(uptime-(hours*3600)-(mins * 60));

        console.log(hours+'hours '+mins+'mins '+secs+'secs');
    } else {
        var mins = Math.floor(uptime/60);
        var secs = Math.floor(uptime-(mins * 60));

        console.log(mins+'mins '+secs+'secs');
    }
}

exports.print = formatTimeToSecs;