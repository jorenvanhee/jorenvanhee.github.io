var notify = require('gulp-notify');

var Notification = function () {
    this.title = 'Gulp';

    if (arguments.length) {
        return this.message(arguments[0]);
    }
};

var n = Notification.prototype;

n.message = function (message) {
    return notify({
        title: this.title,
        message: message,
        onLast: true
    });
};

n.error = function (e, title, message) {
    notify.onError({
        title: title || this.title,
        message: message,
        onLast: true
    })(e);
};

module.exports = Notification;