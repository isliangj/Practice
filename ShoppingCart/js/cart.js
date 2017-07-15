var vm = new Vue({
    el: "#app",
    data: {
        item: [{
                "productId": "600100002115",
                "productName": "黄鹤楼香烟",
                "productPrice": 19,
                "productQuantity": 1,
                "productImage": "static/img/goods-1.jpg",
                "parts": [{
                    "partsId": "10001",
                    "partsName": "打火机",
                    "imgSrc": "static/img/part-1.jpg"
                }]
            },
            {
                "productId": "600100002120",
                "productName": "加多宝",
                "productPrice": 8,
                "productQuantity": 5,
                "productImage": "static/img/goods-2.jpg",
                "parts": [{
                    "partsId": "20001",
                    "partsName": "吸管",
                    "imgSrc": "static/img/part-2.jpg"
                }]
            },
            {
                "productId": "600100002117",
                "productName": "金装黄鹤楼",
                "productPrice": 25,
                "productQuantity": 2,
                "productImage": "static/img/goods-1.jpg",
                "parts": [{
                        "partsId": "10001",
                        "partsName": "打火机-1",
                        "imgSrc": "static/img/part-1.jpg"
                    },
                    {
                        "partsId": "10002",
                        "partsName": "打火机-2",
                        "imgSrc": "static/img/part-1.jpg"
                    }
                ]
            }
        ]
    },
    filters: {

    },
    mounted: function() {
        this.$nextTick(function() {
            vm.cartView();
        })
    },
    methods: {
        cartView: function() {
            console.log(this.item);
        }
    },
});