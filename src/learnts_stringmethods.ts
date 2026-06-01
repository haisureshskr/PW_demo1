//getting length of string
let productTitle = "Organic Almonds";
console.log(productTitle.length);
if (productTitle.length>0)
{
    console.log("product is displayed")
}

//Changing Case
let searchText = "Organic Almonds";

console.log(searchText.toUpperCase());
console.log(searchText.toLowerCase());

let expected = "organic almonds";
let actual = "Organic Almonds";

if (actual.toLowerCase() === expected.toLowerCase()) {
   console.log("Product verified");
}

//Checking if a String Contains Text
let url = "https://qa-cart.com/my-account";

console.log(url.includes("account"));
let url1 = "https://qa-cart.com/checkout";

if(url.includes("checkout")) {
   console.log("User navigated to checkout page");
}


//Extracting Part of a String
let orderMessage="Order #45678 confirmed"
console.log(orderMessage.substring(7,12))
console.log(orderMessage.slice(5))
console.log(orderMessage.slice(-5))

//Replacing Text
let product: string = "Organic-Almonds";
console.log("replaced text",product.replace("-"," "))

//Splitting a String
let categories: string = "Grocery,Fruits,Organic";
let categoryArray=categories.split(",")


//Removing Extra Spaces
let username1 = "   admin   ";
console.log(username1.trim());

//Accessing Characters in a String
let word="test"
console.log(word[0])

//Template Strings
let product1 = "Organic Almonds";
let price: number = 25;
console.log("Product "+ product1+" costs "+price)
console.log(`Product ${product} costs ${price}`)

//Using Backslash () in Strings
// let message = "User said \"Login failed\"";
let message = `User said "Login failed"`;

console.log(message)