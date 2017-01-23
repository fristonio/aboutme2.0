/*Main page javascript*/

window.onload=function(){
	document.body.style.overflow="hidden";
	document.getElementsByClassName("pagehead")[0].style.color="white";
	setTimeout(function(){
		document.getElementById("typedmsg").style.visibility="visible";
		document.getElementById("typedmsg").style.animation="typethis 6s steps(80,end)";
	}, 2000);
	//document.getElementsByClassName("pagehead")[0].style.background="url(./background.jpg)"
}
var n=0;
document.onkeydown=function(event){
	if (event.keyCode==40) {
		n+=1;
		console.log(n);

		if (n==4) {
			alert("Stay in your limits :P");
			n=3;
		}
		else{
		document.getElementsByClassName("web-page")[n].style.height="100vh";
		setTimeout(function(){
				document.getElementsByClassName('image')[0].classList.toggle('image1');
				document.getElementsByClassName('image')[1].classList.toggle('image2');},1000);
		}

	}
	if (event.keyCode==38) {
		if (n>0) {
			document.getElementsByClassName("web-page")[n].style.height="0vh";
			setTimeout(function(){
				document.getElementsByClassName('image')[0].classList.toggle('image1');
				document.getElementsByClassName('image')[1].classList.toggle('image2');},1000);
			n-=1;
		}
		else{
			alert("Stay in your limits :P");
			n=0;
		}
		console.log(n);
	}
}

/*Navigation Bar js*/

var closebtn=document.getElementById('nav-close');
closebtn.onclick=function(){
	closebtn.parentNode.style.width="0";
	closebtn.parentNode.style.height="0"; 
	closebtn.style.visibility="hidden";
	var mask=document.getElementsByClassName('nav-mask2')[0];
	mask.style.animation="none";
	for (var i = 0; i < 4; i++) {
		document.getElementsByClassName('nav-head')[i].style.transform="translateX(6vw)";
	}
}

var openbtn=document.getElementById('nav-open');
openbtn.onclick=function(){
	closebtn.parentNode.style.width="30vw";
	closebtn.parentNode.style.height="30vw"; 
	var mask=document.getElementsByClassName('nav-mask2')[0];
	mask.style.animation="navbounce 1s";
	setTimeout(function(){closebtn.style.visibility="visible";},400);
	var n=0;
	setTimeout(function(){
	var a=setInterval(function(){
		if(n==4){clearInterval(a);}
		else{
			document.getElementsByClassName('nav-head')[n].style.transform="translateX(0)";
			n++;
		}
	}, 100);},100);
}
