
之前做过一个jquery版本的sku选择，许久转到vue之后，一直没有处理成vue, 直到最近业务需要了，又开始翻了jquery下代码,

用了点时间弄了下，封装成.vue组件的方式

使用，[组件地址](https://github.com/luchanan/jquery.sku/blob/master/vue-sku/src/components/vueSku.vue)

```
<vue-sku :skuData="skuData" ref="sku"></vue-sku>
```

skuData为后端返回的数据格式，主要包括属性值和SKU信息，如下:

```
{
	'format_list': [
    {
      'id': '1',
      'name': '机身颜色',
      'format_val_list': [
        {
          'id': '110',
          'name': '银色'
        },
        {
          'id': '111',
          'name': '黄色'
        },
        {
          'id': '112',
          'name': '黑色'
        },
        {
          'id': '113',
          'name': '玫瑰金'
        }
      ]
    },
    {
      'id': '2',
      'name': '套餐类型',
      'format_val_list': [
        {
          'id': '210',
          'name': '官方标配'
        },
        {
          'id': '211',
          'name': '套餐二'
        }
      ]
    },
    {
      'id': '3',
      'name': '机身内存',
      'format_val_list': [
        {
          'id': '310',
          'name': '16GB'
        },
        {
          'id': '311',
          'name': '64GB'
        },
        {
          'id': '312',
          'name': '128GB'
        }
      ]
    },
    {
      'id': '4',
      'name': '版本类型',
      'format_val_list': [
        {
          'id': '410',
          'name': '港澳台'
        },
        {
          'id': '411',
          'name': '美国'
        },
        {
          'id': '412',
          'name': '欧洲'
        },
        {
          'id': '413',
          'name': '日本'
        },
        {
          'id': '414',
          'name': '中国大陆'
        }
      ]
    }
	],
	'sku_sale_list': [
    {
      'sku_sale_id': '66',
      'format_val_id': '110;210;311;414',
      'sale_unit': '0',
      'adult_selected': '1',
      'child_selected': '0',
      'baby_selected': '0',
      'is_date': '1',
      'sku_id': '870',
      'is_control': '0',
      'is_digital_stock': '1',
      'sale_id': '34',
      'format_val_name': '银色;官方标配;64GB;中国大陆',
      'stock_price_list': [
        {
          'adult_price': '589.00',
          'child_price': '579.00',
          'date': '2017-11-17',
          'stock': '14'
        },
        {
          'adult_price': '589.00',
          'child_price': '579.00',
          'date': '2017-11-18',
          'stock': '5'
        }]
    },
    {
      'sku_sale_id': '67',
      'format_val_id': '111;211;310;414',
      'sale_unit': '0',
      'adult_selected': '1',
      'child_selected': '0',
      'baby_selected': '0',
      'is_date': '1',
      'sku_id': '870',
      'is_control': '0',
      'is_digital_stock': '1',
      'sale_id': '34',
      'format_val_name': '对这上面的format_val_id拼接吧',
      'stock_price_list': [
        {
          'adult_price': '5189.00',
          'child_price': '5279.00',
          'date': '2017-11-17',
          'stock': '14'
        },
        {
          'adult_price': '5829.00',
          'child_price': '579.00',
          'date': '2017-11-18',
          'stock': '5'
        }]
    },
    {
      'sku_sale_id': '68',
      'format_val_id': '112;210;312;413',
      'sale_unit': '0',
      'adult_selected': '1',
      'child_selected': '0',
      'baby_selected': '0',
      'is_date': '1',
      'sku_id': '870',
      'is_control': '0',
      'is_digital_stock': '1',
      'sale_id': '34',
      'format_val_name': '对这上面的format_val_id拼接吧',
      'stock_price_list': [
        {
          'adult_price': '5849.00',
          'child_price': '5.00',
          'date': '2017-11-17',
          'stock': '1'
        },
        {
          'adult_price': '589.00',
          'child_price': '579.00',
          'date': '2017-11-18',
          'stock': '2'
        }]
    },
    {
      'sku_sale_id': '69',
      'format_val_id': '113;210;311;412',
      'sale_unit': '0',
      'adult_selected': '1',
      'child_selected': '0',
      'baby_selected': '0',
      'is_date': '1',
      'sku_id': '870',
      'is_control': '0',
      'is_digital_stock': '1',
      'sale_id': '34',
      'format_val_name': '对这上面的format_val_id拼接吧',
      'stock_price_list': [
        {
          'adult_price': '581.00',
          'child_price': '572.00',
          'date': '2017-11-12',
          'stock': '10'
        },
        {
          'adult_price': '589.00',
          'child_price': '579.00',
          'date': '2017-11-13',
          'stock': '9'
        }]
    }
	],
	'error_code': '0000',
	'error_msg': 'OK'
}
```

[vue-sku演示地址](https://github.com/luchanan/jquery.sku)