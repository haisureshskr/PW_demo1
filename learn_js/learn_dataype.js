//primitive data type
//strings
let username="Anuradha"

//number
let age=35

//boolean
let isLoggedIn=true
let hasError=false

//arrays
// let keyword1 = "organic";
// let keyword2 = "fresh";
// let keyword3 = "grocery";

let searchKeywords=["organic","fresh","grocery"]
let quantities=[1,2,3]
quantities.push("ten")
// console.log(quantities)


//objects
// let name1="anuradha"
// let email="agaanuradha@gmail.com"
// let role="admin"
// let login_status=true

// let user = ["Anuradha", "aganuradha@email.com", "admin", true];

let user= {
    name1:"Anuradha",
    email:"aganuradha@gmail.com",
    role:"admin",
    isLoggedIn:true
}
console.log("user name",user.name1)
user.age=35
console.log("user name",user)

user.age="thirty six"
console.log("user name",user)