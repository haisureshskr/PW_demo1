//Basic Function
//Defining Function
// function openDemoShop()
// {
//     console.log("Opening Demo shop")
// }
// //Calling Function
// openDemoShop()
// openDemoShop()
// openDemoShop()

//Function with Parameter
// function searchProduct(product: string)
// {
//     console.log("Searching product " + product)
// }

// searchProduct("honey")

//Function Returning Value
// function calculateTotal(price: number, tax: number) {
//     console.log(price + tax)
//     let total_price = price + tax
//     return total_price

// }
// let total = calculateTotal(10, 2)
// console.log(total)

//Function with Multiple Parameters and Return Example, default value
//Use Default Parameter
// function calculateTotal_Discount(price: number, tax: number,discount:number = 1) {
//     console.log(price + tax)
//     let total_price = price + tax - discount
//     return total_price
// }
// let totalWithDiscount = calculateTotal_Discount(10, 2)
// console.log(totalWithDiscount)

//Rest Parameter (Variable Inputs)
// function calculateCartTotal(... prices: number [])
// {
//    let total=0
//    for (let p of prices)
//    {
//     total+=p
//    }
//   return total
// }
// let total_cart=calculateCartTotal(10,20,80,100,90,23)
// console.log(total_cart)

//Passing an Array to a Function
// function printProducts(products: string [])
// {
//     for (let p of products)
//     {
//         console.log("product name ", p)
//     }
// }

// printProducts(["tea","coffee"])

//Passing an Object to a Function
// type product_obj= {name: string,price:number, category:string}

// function ProductProperties(product:product_obj)
// {
//     console.log(product.name)
// }
// ProductProperties({
//     name: "Organic juice",
//     price: 100,
//     category: "Beverage"
// })
//Calling Function Inside Function
// function formatProductName(name:string) : string
// {
//     return name.toUpperCase()
// }

// function processProduct(name: string) : void{
//     console.log("Processing product")
//     let formatted =formatProductName(name)
//     console.log("searh formatted product name ..", formatted)
// }
// processProduct("tea")

// function formatCategory (category: string): string {
//  return category.toLowerCase();
// }

//Anonymous functions
// function logMessage()
// {
//     console.log("Test Step Executed")
// }
// let logMessage=function ()
// {
//     console.log("Test Step Executed")
// }
// console.log("new log message", logMessage)

// setTimeout(function ()
// {
//     console.log("Test Step Executed")
// },2000)


//Arrow Function

// function formatCategory (category: string): string {
//  return category.toLowerCase();
// }

// const formatCategory=(category: string): string => {
//  return category.toLowerCase();
// }
// let actualCategory="ORGANIC"
// if (formatCategory(actualCategory)==="organic")
// {console.log("pased")

// }

// const doublePrice=(price:number):number=>price*2


//Callback Function

// function processProduct(name: string, action: Function): void {
//     console.log(name);
//     action();
// }
// processProduct("Tea",function ()
// {
//     console.log("processed")
// })

// //callback with arrow function
// processProduct("Tea",()=>
// {
//     console.log("processed")
// })

//callback returning a value
// function processprice(price: number, operation: Function):void{
//     let result=operation(price)
//     console.log(result)
// }
// processprice(100, function (p:number){
//     return p*0.9
// })

//callback returning a value from main function
// function processprice(price: number, operation: Function):number{
//     let result=operation(price)
//     return result*2
// }
// let callbackPrice=processprice(100, (p:number):number=>{
//     return p*0.9
// })
// console.log(callbackPrice)












