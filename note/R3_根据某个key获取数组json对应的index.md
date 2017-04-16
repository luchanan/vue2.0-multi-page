### 假设car_list的数据如下：
```
var cart_list=[
        {
            "single_amount": 0,
            "adult_amount": "1",
            "child_amount": "1",
            "baby_amount": 0,
            "check_in_date": "",
            "check_out_date": "",
            "user_id": "2",
            "sale_id": "43",
            "sku_sale_id": "96",
            "sku_format_val": "门票+不含导游+不含接送",
            "go_time": "2016-12-31",
            "id": 7160,
            "payment": "110.00",
            "product_name": "【当日可订】清迈夜间动物园门票套餐",
            "category_id": "29",
            "category_code": "MP",
            "product_status": "1",
            "image": "../static/api/center/images/collect1.jpg",
            "sku_status": 1,
            "is_timeout": 1,
            "stock_status": 1,
            "adult_price": "68.00",
            "child_price": "42.00"
        },
        {
            "single_amount": 0,
            "adult_amount": "3",
            "child_amount": "2",
            "baby_amount": 0,
            "check_in_date": "",
            "check_out_date": "",
            "user_id": "2",
            "sale_id": "43",
            "sku_sale_id": "95",
            "sku_format_val": "门票+含导游+含接送",
            "go_time": "2016-12-30",
            "id": 7159,
            "payment": "573.00",
            "product_name": "【当日可订】清迈夜间动物园门票套餐",
            "category_id": "29",
            "category_code": "MP",
            "product_status": "1",
            "image": "../static/api/center/images/collect2.jpg",
            "sku_status": 1,
            "is_timeout": 1,
            "stock_status": 1,
            "adult_price": "127.00",
            "child_price": "96.00"
        },
        {
            "single_amount": 0,
            "adult_amount": "1",
            "child_amount": "0",
            "baby_amount": 0,
            "check_in_date": "",
            "check_out_date": "",
            "user_id": "2",
            "sale_id": "43",
            "sku_sale_id": "96",
            "sku_format_val": "门票+不含导游+不含接送",
            "go_time": "2016-12-28",
            "id": 7158,
            "payment": "68.00",
            "product_name": "【当日可订】清迈夜间动物园门票套餐",
            "category_id": "29",
            "category_code": "MP",
            "product_status": "1",
            "image": "../static/api/center/images/collect3.jpg",
            "sku_status": 1,
            "is_timeout": 1,
            "stock_status": 1,
            "adult_price": "68.00",
            "child_price": "42.00"
        }
]
```

### 找id为***在car_list数组所在的索引

#### 方法一：

```
cart_list.map(x=>x.id).indexOf(7158)// 2，如果找不到返回-1
```

#### 方法二：

```
cart_list.findIndex(x=>x.id==7159)// 1，如果找不到返回-1
```
