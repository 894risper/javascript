function myMove(){
let id=null;
const elem=document.getElementById("animate");
let pos=0;
clearInterval(id);
id=setInterval(frame,5);
function frame(){
if(pos==350){
    clearInterval(id);
}else{
pos++;
elem.style.top=pos + "px";
elem.style.left= pos + "px";
}


}

}

function displayDate(){
document.getElementById("demo").innerHTML=Date();

}
function checkCookies(){
let text= "";
if(navigator.cookieEnabled== true){
   text="cookies are enabled" ;
}else{
   text= "cookies are not enabled" ;
}
document.getElementById("demo2").innerHTML=text;
}