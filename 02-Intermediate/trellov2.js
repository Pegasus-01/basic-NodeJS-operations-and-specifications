let myToDos={
    day: 'Monday',
    meetings: 0,
    meetdone: 0,
}
let addMeeting = function(todo,meet=0){
    todo.meetings = todo.meetings + meet
}

//addMeeting(myToDos, 2)

let meetdone = function(todo,meet=0){
    todo.meetdone = todo.meetdone - meet
}

let resetday = function(todo){
    todo.meetings = 0
    todo.meetdone = 0
}
let getSummaryOfDay = function(todo){
    let meetleft = todo.meetings + todo.meetdone
    return `you have ${meetleft} meetings today.`
}

addMeeting(myToDos, 4)
addMeeting(myToDos, 2)

meetdone(myToDos, 5)

console.log(getSummaryOfDay(myToDos))