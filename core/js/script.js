/*PRELOADER*/
document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.querySelector("#preloader");
		if(!preloader.classList.contains("done")){
			preloader.classList.add("done");
		}	
	}, 2000);
}
/*MENU RESPONSIVE*/
var hd = document.querySelector("#rsp");
function toggle(){
	hd.classList.toggle("toggle");
}

/*SCROLL BUTTON*/
const mybutton = document.querySelector("#myBtn");

window.onscroll = function(){scrollFunction()}

function scrollFunction(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		mybutton.style.display = "block";
	}
	else{
		mybutton.style.display = "none";	
	}
}

function topFunction(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

/*SCROLL REVEAL*/
window.sr = ScrollReveal({
	duration: 1000,
	easing: 'ease',
	mobile: true,
	reset: true,
	viewFactor: 0.4,
});

 sr.reveal('.animb', {
    distance: '20px',
    origin: 'top',
});
  
  sr.reveal('.anim00',{
  	distance: '50px',
  	origin: 'left',
});
	
  sr.reveal('.anim01', {
  	distance: '50px',
    origin: 'top',
});

/*COUNTERUP*/
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});