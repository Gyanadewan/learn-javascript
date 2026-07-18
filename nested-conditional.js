const isloggedIn = true;
const isAdmin = true;

if (!!isloggedIn === true){
    if(!!isAdmin === true){
     console.log("welcome admin")
    } else {
        console.log("welcome user")
    }
   
}

else {
    console.log("please login ")
}


// pass hole grade dekabe ar fail hole  "Better  luck  next time" dekabe

const marks = 33;
if (marks >= 33){
    if (marks >= 80){
        console.log("Excellent")
    }
    else{
        console.log("passed")
    }

}

else{
    console.log("fail")
}
