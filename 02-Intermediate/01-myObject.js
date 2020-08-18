let myArray=['name',33,true]
let myYTvideo={
    title:'loops in javascript',
    videoLength: '15',
    videoDescription: 'this is a video description',
    videoCreator:'Rudra'
}
console.log(myYTvideo)
//if we want a specific value
console.log(`Hi new video on ${myYTvideo.title} is created by ${myYTvideo.videoCreator}`)

let changeVideoLength= function(myObject){
    return {
        format1:'`time of the videolength is ${myObject.videoLength + 1}`',
        format2:'`time of the videolength is ${myObject.videoLength +2}`'
    }
}
let adOne = changeVideoLength(myYTvideo)
console.log(adOne.format1)
//we can return a whole object by using this method