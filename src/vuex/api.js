/**
 * axios接口大全
 * api配置
 */
import axios from 'axios'

var url = process.env.NODE_ENV !== 'production' ? '/static/api/' : '';
export default {
    /**
     * 获取消息列表数据
     */
    getMessageList: function (currentPage, cb) {
        axios.get(url + 'center/getNotification.json?t=' + new Date() * 1 + '&currentPage=' + currentPage + '&callback=?').then(function (res) {
            if (res.status >= 200 && res.status < 300) {
                cb(res.data)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}
