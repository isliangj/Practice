var vm = new Vue({
    el: "#app",
    data: {

    },
    filters: {

    },
    mounted: function() {
        this.cartView();
    },
    methods: {
        cartView: function() {
            var _this = this;
            this.$http.get("data/cartData.json").then(function(res) {
                _this.productList = rea.body.result.list;
            });
        }
    }
});