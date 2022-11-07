var app = angular.module("myModule", [])
    .controller("myController", function($scope) {
        $scope.carts = [];
        $scope.products = [
            { p_id: "1", p_name: "iPhone 13 Pro", p_image: "images/1.jpg", p_price: 28990 },
            { p_id: "2", p_name: "iPhone 13", p_image: "images/2.jpg", p_price: 23784 },
            { p_id: "3", p_name: "iPhone 13 Pro Max", p_image: "images/3.jpg", p_price: 1519000 },

        ];

        $scope.add_cart = function(product) {
            if (product) {
                $scope.carts.push({ p_id: product.p_id, p_name: product.p_name, p_price: product.p_price });
            }
        }


        $scope.total = 0;

        $scope.setTotals = function(cart) {
            if (cart) {
                $scope.total += cart.p_price;
            }
        }

        $scope.remove_cart = function(cart) {
            if (cart) {
                $scope.carts.splice($scope.carts.indexOf(cart), 1);
                $scope.total -= cart.p_price;
            }
        }
    });