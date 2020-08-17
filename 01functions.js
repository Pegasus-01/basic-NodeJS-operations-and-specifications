let sayhello = function(name){
    console.log(`greeting messege for ${name} `)
    console.log(`hey ${name} `)

}

//sayhello('John')


let fullnamemaker = function(firstname,lastname){
    console.log('welcome to LCO')
    console.log(`happy to have you ${firstname} ${lastname}`)


}

fullnamemaker('Rudranil','Maity')


let myadder = function(number1,number2){

    let added= number1+number2
    return added

}
//console.log( myadder(3,5))

let multiplier = function(num1,num2){
    return num1*num2
}
result= multiplier(9,6)
console.log(result)


let guest= function(name='annynomous', coursecount=0){
    return 'hello '+ name + ' and your course count is '+coursecount
}
console.log(guest('Rudra',1))