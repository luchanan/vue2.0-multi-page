import Mock from 'mockjs'
import shopping from 'js/mock/shopping'
function addToMock (api) {
    api.forEach(item => {
        Mock.mock(item.path, item.data)
    })
}
addToMock(shopping)
export default Mock
