const sayhello = (name)=> "hi,it's" + name + " !"
console.log(sayhello('sammy'))

const todos = [{
    title:'Wake up',
    isDone:true
},{
    title:'go to gym',
    isDone:true
},{
    title:'study',
    isDone:false
}]
const thingsDone = todos.filter((todo)=>  todo.isDone === true)

console.log(thingsDone)