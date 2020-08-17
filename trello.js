const days =['mon','tue','wed','thr','fri','sat']

console.log(days[0])


//*days.forEach(function(days/*you can name anything in this brackt*/){
//    console.log(days/*this should be as same as the perviously named*/)
//})

days.forEach(function(days,index){
    console.log(`starts with ${index+1} --${days}`)
})