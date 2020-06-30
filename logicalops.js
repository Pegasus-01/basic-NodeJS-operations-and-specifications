/*
 &&- AND operator- both sides need to be true
 || - OR operations- you will get a choice,one side need to be true
 */


 let isverified = true
 let isloggedin= true
 let haspaymenttaken=true
 let isguest=true

if(isverified && isloggedin && haspaymenttaken){
    console.log('access granted to user')
}
else if(isverified || isguest){
    console.log('aloow free content')
}
else{
    console.log('please contact admin')
}