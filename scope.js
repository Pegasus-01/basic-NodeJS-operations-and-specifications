/*let iamglobal = 'somevalue'

if(true){
    let iamlocal = 'some more value'
    iamglobal= 'superman'
    console.log(iamglobal)
    console.log(iamlocal)
}

console.log(iamlocal)
console.log(iamglobal)*/

//kings problem


let king = 'john'
if(true){
    let king = 'sam'

    if(true){
        let king='Rudra'
        console.log(king)
    }
}

if(true){
    console.log('I am the second part' + king);
}