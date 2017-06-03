import Mock from 'mockjs'
const shopping = [
    {
        path: '/shopping/delete',
        data: {
            'error_code|1': ['0000', '1000'],
            'error_msg': function () {
                const errorCode = this.error_code
                let errorMsg = ''
                switch (errorCode) {
                case '0000':
                    errorMsg = '删除成功'
                    break
                case '1000':
                    errorMsg = '删除失败'
                    break
                default:
                    errorMsg = '未知错误'
                }
                return errorMsg
            },
            'execute_time|1-10': 1
        }
    }
]

export default shopping
