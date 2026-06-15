var products = ["Pen","Pencil","Bottle"];

var choice = prompt("1. for Pen\n2. for Pencil\n3. for Bottle \n\nEnter your Choice : ");
var bill = 0;

switch(choice){
    case '1' : choice = Number(prompt("Enter Quantity : "));
                if(choice <= 10){
                    bill+= (10*choice);
                }else{
                    bill+= (10*choice -(10*choice*0.05));
                }
                break;
    case '2' :  choice = prompt("Enter Quantity : ");
                break;
    case '3' :  choice = prompt("Enter Quantity : ");
                break;
    //
    default : 
            console.log("asdfg");
}

console.log(bill);