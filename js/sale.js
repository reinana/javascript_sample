const itemList = [
    {id: 1, name: "オリジナルブレンド200g", price: 500},
    {id: 2, name: "オリジナルブレンド500g", price: 900},
    {id: 3, name: "スペシャルブレンド200g", price: 700},
    {id: 4, name: "スペシャルブレンド500g", price: 1200},
];
const config = {
    productElement : document.getElementById("productId"),
    quantityElement : document.getElementById("number")
}
console.log(config.productElement)
console.log(config.quantityElement)

let purchases = [];
//追加ボタンを押した時の処理 
function add() {
    const productId = parseInt(config.productElement.value);
    const quantity = parseInt(config.quantityElement.value);

    let purchase = {
        product: itemList[productId - 1],
        quantity: quantity,
    }
    let newPurchase = true; //--1

    purchases.forEach((item) => {  //--2
      if(item.product.id === productId) {
        newPurchase = false;
      }
    })

  
    if (purchases.length < 1 || newPurchase) { //--3
        purchases.push(purchase);
    } 
    else {
        for(let i = 0; i < purchases.length; i++) {
            if(purchases[i].product.id === productId) {
            purchases[i].quantity += purchase.quantity;
            }
        }
    }
    console.log(purchases)
    window.alert(`${display()}\n小計: ${subtotal()}円`)
    config.productElement.value = "";
    config.quantityElement.value = "";
}

function subtotal() {
    console.log(purchases)
    return purchases.reduce((prev, purchase) => {
        console.log(purchase.product.price)
        return prev + purchase.product.price * purchase.quantity
    },0);
}
function calc() {
    let sum = subtotal();
    let postage = calcPostageFromPurchase(sum)
    window.alert(`${display()}\n小計: ${subtotal()}円\n送料は ${postage}円\n合計は ${sum + postage}円です`);

    purchases = [];
    priceElement.value= "";
    quantityElement.value = "";
    
}
function display() {
    let output = purchases.map(purchase => `${purchase.product.name} ${purchase.product.price}円 : ${purchase.quantity}点\n`).join("");
    console.log(typeof(output))
    return output;
}
function calcPostageFromPurchase(sum) {
    let postage = 0;
    if(sum == 0 || sum >= 50000) postage = 0;
    else if(sum >= 2000) postage = 250;
    else postage = 500;
    return postage;    
}