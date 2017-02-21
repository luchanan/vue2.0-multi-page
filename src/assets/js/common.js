const Common = {
    isLogin: () => {
        if (window.localStorage.getItem('userInfo') == null) {
            return false
        }
        return true
    },
    hasDeviceId: false,
    index2PageCount: (index, count) => Math.ceil(index / (count || 10)), // return lastIndex转总页数
    goBack: () => {
        window.history.go(-1)
    }
}
// 使用：Common.isLogin
module.exports = Common
// 使用Common.Common.isLogin
/* export default {
    // Common: Common缩写
    Common
} */
