const time=document.querySelector("#time")

setInterval(()=>{
	
//using date function....
let date=new Date();
let H=date.getHours();
let M=date.getMinutes();
let S=date.getSeconds();
let AM_PM="AM";

if(H>12){
	H=H-12;
	AM_PM="PM"
}
if(H<10){
	H="0"+H;
	
}
if (M<10) {
	M="0"+M
}
if (S<10) {
	S="0"+S
}

time.textContent=H+":"+M+":"+S+" "+AM_PM;
},1000);