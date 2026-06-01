//primitive data type
//strings
let username:string="Anuradha"

//number
let age:number=35
// age="Thirty Five"

//boolean
let isLoggedIn: boolean=true
let hasError: boolean=false

//array
// let searchKeywords=["organic","fresh","grocery"]
// let quantities=[1,2,3]
// quantities.push("ten")
// console.log(quantities)
// let searchKeywords: string[]=["organic","fresh","grocery"]
// let quantities: number[]=[1,2,3]
// // quantities.push("ten")
// console.log(quantities)
//objects
// let user= {
//     name1:"Anuradha",
//     email:"aganuradha@gmail.com",
//     role:"admin",
//     isLoggedIn:true
// }
// console.log("user name",user.name1)
// user.age=35
// console.log("user name",user)

// user.role="thirty six"
// console.log("user name",user)

let user:
{
    name1:string,
    email:string,
    role:string,
    isLoggedIn:boolean  ,
    age?:number
}
=
 {
    name1:"Anuradha",
    email:"aganuradha@gmail.com",
    role:"admin",
    isLoggedIn:true,
   
}

let config:{
    readonly baseURL:string,
    timeOut:number
}={
    baseURL:"http://qa-cart.com",
    timeOut:5000
}
console.log(config)

//object containing arrays
let testUser:{
name:string,
roles:string[]
}={
 name:"Anuradha",
 roles:["admin","editor"]
}