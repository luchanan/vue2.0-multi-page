const filters = {
    toFriendlyTime: function (timestamp) {
        // var nowTimestamp = Math.round(new Date().getTime() / 1000)// js返回的是毫秒数，现转为秒
        var nowTimestamp = 1469695314;// 2016-7-28 16:41:54
        var distance = nowTimestamp - timestamp;// 相差的时间,秒
        var getday = parseInt(distance / 86400);// 多少天
        var timeFriendly = '';
        if (getday >= 180) {
            if (getday <= 360) {
                timeFriendly = '半年前'
            } else {
                timeFriendly = Math.ceil(getday / 360) + '年前'
            }
        } else if (getday > 30) {
            timeFriendly = parseInt(getday / 30) + '个月前'
        } else if (getday >= 7 && getday <= 30) {
            timeFriendly = parseInt(getday / 7) + '周前'
        } else if (distance < 30) {
            timeFriendly = '刚刚';
        } else if (distance < 60) {
            timeFriendly = Math.floor(distance) + '秒前'
        } else if (distance < 3600) {
            timeFriendly = Math.floor(distance / 60) + '分钟前';
        } else if (distance < 86400) {
            // 小于1天
            timeFriendly = Math.floor(distance / 3600) + '小时前'
        } else if (distance < 604800) {
            // 小于7天
            if (getday < 2) {
                timeFriendly = '昨天'
            } else if (getday < 3) {
                timeFriendly = '前天'
            } else {
                timeFriendly = getday + '天前'
            }
        }
        return timeFriendly
    }
}
module.exports = filters
