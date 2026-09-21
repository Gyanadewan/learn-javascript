function classifyPassword(password) {
    let count = 0;

    if (/[A-Z]/.test(password)) {
        count++;
    }

    if (/[a-z]/.test(password)) {
        count++;
    }

    if (/[0-9]/.test(password)) {
        count++;
    }

    if (/[!@#$%^&*]/.test(password)) {
        count++;
    }

    if (password.length >= 8 && count === 4) {
        return "Strong";
    }

    if (password.length >= 6 && count >= 2) {
        return "Medium";
    }

    return "Weak";
}

console.log(classifyPassword("Password1!")); 
console.log(classifyPassword("pass123"));    
console.log(classifyPassword("passsswordhghghhh"));  