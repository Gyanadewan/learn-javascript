
const isLoggedIn = false;
const  isAdmin = false;
if(isLoggedIn && isAdmin){
    console.log("Admin Dashboard")
}
else if (isLoggedIn){
    console.log("user Dashboard")
}
else{
    console.log("please Login")
}


// const salary = 70000;
// const bcs = false;
// const car = true;
// if ( salary <= 50000 || bcs === true || car=== true ){
//     console.log("su...patro")
// }

// else{
//     console.log("biye hobe nah!")
// }



const salary = 60000;
const bcs = true;
const car = true;

if (salary >= 60000 && bcs) {
    console.log("Marriage Confirm");
}
else if (salary >= 60000 && car) {
    console.log("Need Family Approval");
}
else if (bcs) {
    console.log("Consider");
}
else {
    console.log("Rejected");
}