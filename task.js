function createStringconvert(array) {
    var containArray = "";
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var arrayType = array_1[_i];
        containArray += arrayType + " ";
    }
    return (containArray);
}
//Test case 1
var inputFunction = [1, 'data', '3', 'result'];
var inputFunction1 = ["Bejo", "has", 4, "sport", "car"];
console.log(createStringconvert(inputFunction));
console.log(createStringconvert(inputFunction1));
function createValuebasedOntype(array) {
    var result;
    if (array.every(function (items) { return typeof items === "number"; })) {
        result = 0;
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var num = array_2[_i];
            result += Number(num);
        }
    }
    else if (array.every(function (items) { return typeof items === "string"; })) {
        result = array.join(" ");
    }
    else {
        result = 'invalid input';
    }
    return result;
}
//Test case 2
var task = [1, 2, 3, 4];
var task2 = ["the", "dolphins", "of", "zettacamp"];
var task3 = ["Bejo", "has", 4, "sport", "car"];
console.log(createValuebasedOntype(task));
console.log(createValuebasedOntype(task2));
console.log(createValuebasedOntype(task3));
function simpleProduct(produk) {
    var Name = produk.name;
    var quantity = produk.quantity;
    var price = produk.price;
    var in_stock = produk.in_stock;
    var totalPrice = quantity * price;
    var buyable = in_stock > 0;
    var simpleProduct = {
        name: Name,
        buyable: buyable
    };
    if (buyable === true) {
        simpleProduct.total = totalPrice;
    }
    return simpleProduct;
}
//Test case 3
var produkSaya = {
    name: "batu",
    vendor: "alam",
    quantity: 5,
    in_stock: 0,
    price: 10000,
};
console.log(simpleProduct(produkSaya));
