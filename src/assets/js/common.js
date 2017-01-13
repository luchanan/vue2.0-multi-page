const Common = {
    isLogin: () => {
        if (window.localStorage.getItem('userInfo') == null) {
            return false
        }
        return true
    },
    hasDeviceId: false
}
// 使用：Common.isLogin
module.exports = Common
// 使用Common.Common.isLogin
/* export default {
    // Common: Common缩写
    Common
} */
