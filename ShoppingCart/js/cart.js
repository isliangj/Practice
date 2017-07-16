var vm = new Vue({
    el: "#app",
    data: {
        productList: [{
                "productId": "600100002115",
                "productName": "黄鹤楼香烟",
                "productPrice": 19,
                "productQuantity": 1,
                "productImage": "../img/goods-1.jpg",
                "parts": [{
                        "partsId": "10001",
                        "partsName": "打火机",
                    },
                    {
                        "partsId": "10002",
                        "partsName": "烟盒",
                    }
                ]
            },
            {
                "productId": "600100002120",
                "productName": "加多宝",
                "productPrice": 8,
                "productQuantity": 5,
                "productImage": "../img/goods-2.jpg",
                "parts": [{
                    "partsId": "20001",
                    "partsName": "吸管",
                }]
            },
            {
                "productId": "600100002117",
                "productName": "金装黄鹤楼",
                "productPrice": 25,
                "productQuantity": 2,
                "productImage": "../img/goods-1.jpg",
                "parts": [{
                        "partsId": "10001",
                        "partsName": "打火机-1",
                    },
                    {
                        "partsId": "10002",
                        "partsName": "打火机-2",
                    }
                ]
            }
        ],
        totalMoney: 0, //总价格
        checkAll: false, //全选
        checkAllFlag: false,
        delFlag: false, //删除
        curProduct: '',
    },

    filters: {
        //对价格进行过滤
        formatMony: function(value) {
            return "￥ " + value.toFixed(2);
        }
    },

    mounted: function() {

    },

    methods: {
        //改变商品数量事件
        changeMoney: function(product, way) {
            if (way > 0) {
                product.productQuantity++;
            } else {
                product.productQuantity--;
                if (product.productQuantity < 1) {
                    product.productQuantity = 1;
                }
            }
            this.calcTotalPrice();
        },
        //点击选中事件
        selectProduct: function(item) {
            if (typeof item.checked == 'undefined') {
                Vue.set(item, "checked", true);
            } else {
                item.checked = !item.checked;
            }
            this.calcTotalPrice();
        },
        //全选事件
        checkedAll: function(flag) {
            this.checkAllFlag = flag;
            var _this = this;
            this.productList.forEach(function(item, index) {
                if (typeof item.checked == 'undefined') {
                    Vue.set(item, "checked", _this.checkAllFlag);
                } else {
                    item.checked = _this.checkAllFlag;
                }
            });
            this.calcTotalPrice();
        },
        //计算总金额
        calcTotalPrice: function() {
            var _this = this;
            this.totalMoney = 0;
            this.productList.forEach(function(item, index) {
                if (item.checked) {
                    _this.totalMoney += item.productPrice * item.productQuantity;
                }
            });
        },

        delConfirm: function(item) {
            this.delFlag = true;
            this.curProduct = item;
        },
        //删除
        delProduct: function() {
            var index = this.productList.indexOf(this.curProduct);
            this.productList.splice(index, 1);
            this.delFlag = false;
        }
    },

});