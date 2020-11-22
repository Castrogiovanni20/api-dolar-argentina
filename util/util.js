class util {

    getDateTime = function () {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();
        (month.toString().length == 1) ? month = '0' + month : '';
        (day.toString().length == 1) ? day = '0' + day : '';
        (hour.toString().length == 1) ? hour = '0' + hour : '';
        (minute.toString().length == 1) ? minute = '0' + minute : '';
        (second.toString().length == 1) ? second = '0' + second : '';

        let dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
        return dateTime;
    }
}

module.exports = util