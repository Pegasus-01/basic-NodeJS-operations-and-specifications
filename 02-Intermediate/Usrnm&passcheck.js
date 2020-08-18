let userEmail = 'abc123abc'
let password = '1234'

//console.log(password.length)  //checking length of password
//console.log(userEmail.toLocaleUpperCase())  //converting to upper case
//console.log(userEmail.trim()) //trimming to remove spaces

let userChecker = function(myString){
    if ((myString.includes(123)) && (myString.length > 6)){
        return true
    }
    else{
        return false
    }
}

let passchecker = function(pass){
    if ((myString.includes(123)) && (pass.length > 6)){
        return true
    }
    else{
        return false
    }
}