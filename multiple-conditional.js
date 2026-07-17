
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




const score = 90;
const project = true;
const interview = true;

if (score >= 85 && project=== true && interview=== true){
    console.log("hired")
}

 else if(score>=85 && project===true){
    console.log("Final Interview")
 }

 else if (score >= 70 ){
    console.log("need Improvement")
 }
 else{
    console.log("Rejected")
 }