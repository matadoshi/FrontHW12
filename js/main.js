const body=document.querySelector('body');
const time=new Date();
console.log(time.getHours())
if(time.getHours()>=6 && time.getHours()<=20){
    body.style.backgroundColor='White';
}
else{
    body.style.backgroundColor='Black';
}