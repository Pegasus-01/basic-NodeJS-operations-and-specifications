/*//datatype - array

const superheros= ['iron man', 'spider man','captain america','thor`']

console.log(superheros)
console.log(superheros[0])
// .length --can be used to find the last element
    of an Array
console.log(superheros[superheros.length -1])

//printing the length of the array

console.log(`we have ${superheros.length} super heroes`)
// we can run any js code inside the 2nd brackets */







const numbers = ['one','two','three','four','five','six']

/*//for replacement
numbers[2]='something'
console.log(numbers)

//start
console.log(numbers.shift())
console.log(numbers)

// shift part
numbers.unshift('something')
console.log(numbers)

//end part
console.log('the element to be deleted is: ' + numbers.pop()) //removes the last element of an array
console.log(numbers);

// push part

numbers.push('seven')
console.log(numbers)
*/
//middle part

numbers.splice(2,1 , 'something')
console.log(numbers)