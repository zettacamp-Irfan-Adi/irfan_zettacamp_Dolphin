function createStringconvert(array:(string|number)[]):string {
    let containArray:string="";
    for (const arrayType of array) {
        containArray += arrayType + " ";   
    }
    return(containArray);
}

//Test case 1

const inputFunction:(string|number)[] = [1, 'data', '3', 'result'];
const inputFunction1:(string|number)[] = ["Bejo", "has", 4, "sport", "car"];
console.log(createStringconvert(inputFunction));
console.log(createStringconvert(inputFunction1));

type resultFunction2 = string|number;
function createValuebasedOntype(array:(string|number)[]):resultFunction2 {
    let result:number|string; 
    if (array.every((items)=>typeof items==="number")) {
        result = 0;
        for (const num of array) {
            result += Number(num);
        }
    } else if (array.every((items)=>typeof items==="string")) {
        result = array.join(" ")
    }else{
        result = 'invalid input';
    }
    return result;
}

//Test case 2

const task:(string|number)[] =  [1, 2, 3, 4];
const task2:(string|number)[] =  ["the", "dolphins", "of", "zettacamp"];
const task3:(string|number)[] = ["Bejo", "has", 4, "sport", "car"];
console.log(createValuebasedOntype(task));
console.log(createValuebasedOntype(task2));
console.log(createValuebasedOntype(task3));

type simpleResultproduct = {
    name:string,
    buyable:boolean,
    total?:number
}

type produkMakandanMinum = {
    name:string,
    vendor:string,
    quantity:number,
    in_stock:number,
    price:number,
}
function simpleProduct(produk:produkMakandanMinum):simpleResultproduct {
    const Name = produk.name;
    const quantity = produk.quantity;
    const  price = produk.price;
    const in_stock = produk.in_stock;

    const totalPrice = quantity * price;
    const buyable = in_stock>0; 

    const simpleProduct:simpleResultproduct = {
        name : Name,
        buyable : buyable
    }
    if (buyable===true) {
        simpleProduct.total = totalPrice;
    }
    return simpleProduct;
}


//Test case 3
const produkSaya:produkMakandanMinum = {
    name:"batu",
    vendor:"alam",
    quantity:5,
    in_stock:0,
    price:10000,
}

console.log(simpleProduct(produkSaya));
