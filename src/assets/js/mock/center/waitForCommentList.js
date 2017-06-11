
import Mock from 'mockjs'
const waitForCommentList = {
    path: '/center/waitForCommentList',
    data: {
        'error_code': 1000,
        'error_msg': 'ok',
        'execute_time|1-10': 1,
        'comment_list|10': [{ // 每次返回10条数据
            'product_name': '@cparagraph()', // 随机生成一个随机文本
            'id|+1': 1000, // 1000开始，每次+1自增
            'order_date': '@datetime()'
        }],
        'last_index|+10': 9, // 从9开始，每次请求index+10
        'total_index': 31 // 31/10, 共4页
    }
}

export default waitForCommentList
