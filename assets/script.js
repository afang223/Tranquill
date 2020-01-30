function fade(){
    setTimeout(function(){
		$('#loadingPage').fadeOut(800, function() { 
			$('#loadingPage').remove(); 
		}); 
	}, 4300);
}


// CAROUSELLLLLlLLLLLLLLLL
let images = [
	"assets/images/cards/lofi.png",
	"assets/images/cards/anime.png",
	"assets/images/cards/jazz.png",
	"assets/images/cards/rain.png",
	"assets/images/cards/forest.png",
	"assets/images/cards/ocean.png"
]

let links = [
	"lofi/lofi.html",
	"anime/anime.html",
	"jazz/jazz.html",
	"rain/rain.html",
	"forest/forest.html",
	"ocean/ocean.html"
]

var current = 0;

function next(){
	if(current === 5){
		current = 0;
	}else{
		current += 1;
	}
	document.getElementById('image').src = images[current];
	document.getElementById('link').href = links[current];
}

function previous(){
	if(current === 0){
		current = 5;
	}else{
		current -= 1;
	}
	document.getElementById('image').src = images[current];
	document.getElementById('link').href = links[current];
}