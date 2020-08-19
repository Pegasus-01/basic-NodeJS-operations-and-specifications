const myTodos = ['Buy bread','Go to gym','studying']
console.log(myTodos.indexOf('Buy bread'));

const newTodos = [{
    title:'Buy bread',
    isDone:false,
},{
    title:'Go to gym',
    isDone:false,
},{
    title: 'Study',
    isDone:false,
}]

const index = newTodos.findIndex(function(todo , index){
    console.log(todo)
    return todo.title === 'Go to gym'
})
console.log(index)

//method 1
/*const findTodo = function(mytodos , title){
    const index = mytodos.findIndex(function(todo,index){
        return todo.title.toLowerCase()===title.toLowerCase()
    })
    return mytodos[index]
}

let printme = findTodo(newTodos,'Go To gym')
console.log(printme)*/

//method2
const findTodo = function(myTodos , title){
    const titleReturned = myTodos.find(function(todo,index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}
let printme = findTodo(newTodos,'Go To Gym')
console.log(printme)