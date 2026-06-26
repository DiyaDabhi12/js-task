let arr = [



    {
        id: 1,
        name: "The Book Thief",
        author: "Patel",
        category: "Education",
        quantity: 5,
        status: "Available"
    },
    {
        id: 2,
        name: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "Finance",
        quantity: 3,
        status: "Available"
    },
    {
        id: 3,
        name: "Atomic Habits",
        author: "James Clear",
        category: "Self Help",
        quantity: 7,
        status: "Available"
    },
    {
        id: 4,
        name: "Think and Grow Rich",
        author: "Napoleon Hill",
        category: "Motivation",
        quantity: 0,
        status: "Out of Stock"
    },
    {
        id: 5,
        name: "JavaScript Basics",
        author: "John Smith",
        category: "Programming",
        quantity: 6,
        status: "Available"
    }
];



// console.log(arr);

document.querySelector(".display").onclick=function(){
document.querySelector("table").classList.add("show");
document.querySelector("tbody").innerHTML="";
for(const book of arr){
book.status=(book.quantity>0)?"Available":"Out of Stock";
document.querySelector("tbody").innerHTML+=`
<tr>
<td>${book.id}</td>
<td>${book.name}</td>
<td>${book.author}</td>
<td>${book.category}</td>
<td>${book.quantity}</td>
<td>${book.status}</td>
</tr>`;
}
}

document.querySelector(".add").onclick=function(){
var book={
id:Number(prompt("Enter Book ID : ")),
name:prompt("Enter Book Name : "),
author:prompt("Enter Author Name : "),
category:prompt("Enter Category : "),
quantity:Number(prompt("Enter Quantity : "))};
book.status=(book.quantity>0)?"Available":"Out of Stock";
arr.push(book);
console.log(arr);
}

document.querySelector(".issue").onclick=function(){
var id=Number(prompt("Enter Book ID : "));
for(const book of arr){
if(book.id==id){
if(book.quantity>0){
book.quantity--;}
book.status=(book.quantity>0)?"Available":"Out of Stock";
}
}
}


document.querySelector(".return").onclick=function(){
var id=Number(prompt("Enter Book ID : "));
for(const book of arr){
if(book.id==id){
book.quantity++;
book.status=(book.quantity>0)?"Available":"Out of Stock";
}
}
}


document.querySelector(".delete").onclick=function(){
var id=Number(prompt("Enter Book ID : "));
arr=arr.filter((book)=>{
return book.id!=id;});
}

document.querySelector(".available").onclick=function(){
document.querySelector("table").classList.add("show");
document.querySelector("tbody").innerHTML="";
for(const book of arr){
book.status=(book.quantity>0)?"Available":"Out of Stock";
if(book.quantity>0){
document.querySelector("tbody").innerHTML+=`
<tr>
<td>${book.id}</td>
<td>${book.name}</td>
<td>${book.author}</td>
<td>${book.category}</td>
<td>${book.quantity}</td>
<td>${book.status}</td>
</tr>`;
}
}
}

document.querySelector("main").innerHTML+=arr.length;
