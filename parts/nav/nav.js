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
