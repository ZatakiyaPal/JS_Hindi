const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc , currval) {
//     console.log(`Acc: ${acc} and Currval: ${currval}`);
//     return acc + currval
// } , 0)

const myTotal = myNums.reduce((acc,val) => acc + val , 0)

// console.log(myTotal);

 const shoppinfCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile development course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
 ]

 const priceToPay = shoppinfCart.reduce((acc,item) => acc + item.price , 0 )

 console.log(priceToPay);
 