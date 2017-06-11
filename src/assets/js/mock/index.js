import Mock from 'mockjs'
import shopping from 'js/mock/shopping'
import center from 'js/mock/center/index'
function addToMock (api) {
    api.forEach(item => {
        Mock.mock(item.path, item.data)
    })
}
addToMock(shopping)
addToMock(center)
export default Mock
