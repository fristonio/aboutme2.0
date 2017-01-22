window.onload=function(){
	document.body.style.overflow="hidden";
	document.getElementsByClassName("pagehead")[0].style.color="white";
	setTimeout(function(){
		document.getElementById("typedmsg").style.visibility="visible";
		document.getElementById("typedmsg").style.animation="typethis 5s steps(76,end)";
	}, 2000);
	//document.getElementsByClassName("pagehead")[0].style.background="url(./background.jpg)"
}