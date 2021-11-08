var exec = require('cordova/exec');


exports.isUpdateAvailable = function (success, error) {
	exec(success, error, 'inappupdate', 'isUpdateAvailable');
};


exports.update = function (arg0, success, error) {
	exec(success, error, 'inappupdate', 'update', [arg0]);
};