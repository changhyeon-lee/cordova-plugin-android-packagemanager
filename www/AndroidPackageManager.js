var exec = require('cordova/exec');

exports.getInstalledApplications = function(success, error) {
    exec(success, error, 'AndroidPackageManager', 'getInstalledApplications', []);
};

exports.getInstalledPackages = function(success, error) {
    exec(success, error, 'AndroidPackageManager', 'getInstalledPackages', []);
};

exports.getPackageInfo = function(success, error, flag) {
    exec(success, error, 'AndroidPackageManager', 'getPackageInfo', [flag]);
};

exports.queryIntentActivities = function(success, error) {
    exec(success, error, 'AndroidPackageManager', 'queryIntentActivities', []);
};

/*
module.exports = {
  getInstalledApplications: function (successCallback, errorCallback) {
    var services = "AndroidPackageManager";
    var action = "getInstalledApplications";
    exec(successCallback, errorCallback, services, action, [{}]);
  },
  getInstalledPackages: function (successCallback, errorCallback) {
    var services = "AndroidPackageManager";
    var action = "getInstalledPackages";
    exec(successCallback, errorCallback, services, action, [{}]);
  },
  queryIntentActivities: function (successCallback, errorCallback) {
    var services = "AndroidPackageManager";
    var action = "queryIntentActivities";
    exec(successCallback, errorCallback, services, action, [{}]);
  },
  getPackageInfo: function (successCallback, errorCallback) {
    var services = "AndroidPackageManager";
    var action = "getPackageInfo";
    var argsArr = [].slice.call(arguments, 2, arguments.length)
    exec(successCallback, errorCallback, services, action, argsArr);
  },
}
*/
