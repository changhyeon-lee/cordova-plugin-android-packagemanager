var exec = require('cordova/exec');

exports.getInstalledApplications = function(success, error) {
    exec(success, error, 'AndroidPackageManager', 'getInstalledApplications', []);
};

exports.getInstalledPackages = function(success, error) {
    exec(success, error, 'AndroidPackageManager', 'getInstalledPackages', []);
};

exports.getPackageInfo = function(packageName, flags, success, error) {
    exec(success, error, 'AndroidPackageManager', 'getPackageInfo', [packageName, flags]);
};

exports.queryIntentActivities = function(success, error) {
    exec(success, error, 'AndroidPackageManager', 'queryIntentActivities', []);
};

exports.finishAndRemoveTask = function(success, error) {
    exec(success, error, 'AndroidPackageManager', 'finishAndRemoveTask', []);
};
