# javascript代码部分

## 下拉框
输入框通过接口数据变成下拉框

使用的js、css文件
```html
<link href="~/Content/asset/js/plugins/自动完成下拉选择--支持中文/css/selectpage.css" rel="stylesheet" />
<script src="~/Content/asset/js/plugins/自动完成下拉选择--支持中文/js/selectpage.js"></script>
```
相关js代码
```javascript
$.ajax({
            url: '/FinancialManage/CustomerBillManage/GetBCustomer',
            datatype: 'json',
            type: "post",
            success: function (data) {
                $('#CustomerName').selectPage({
                    showField: 'Name',
                    keyField: 'ID',
                    pagination: false, ///关闭分页栏，数据将会一次性在列表中展示，上限200个项目
                    data: data
                });
            }
        });
```




