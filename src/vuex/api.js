/**
 * axios接口大全
 * api配置
 */
import axios from 'axios'

var url = process.env.NODE_ENV !== 'production' ? '/static/api/' : '';
export default {
    /**
     * 根据请求的时间戳获取banner列表
     */
    getMessageList: function (cb) {
        axios.get(url + 'center/getNotification.json?t=' + new Date() * 1 + '&callback=?').then(function (res) {
            if (res.status >= 200 && res.status < 300) {
                cb(res.data.notification_list)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}
