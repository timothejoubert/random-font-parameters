// console.clear();


Splitting({
	target: document.querySelector('.content-txt'),
	by: "chars",
  });

select = (e) => document.querySelector(e);
selectAll = (e) => document.querySelectorAll(e);

let i = 0;
function changeValue(){
	let letters = selectAll(".content-txt .char");

	let weight = Math.floor(Math.random() * (900 - 100 + 1)) + 100;
	letters[i].style.setProperty('--wghtFont', weight);

	let width = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
	letters[i].style.setProperty('--wdthFont', width);

	let slant = Math.floor(Math.random() * (0 + 10 + 1)) -10;
	letters[i].style.setProperty('--slntFont', slant);

	let color = Math.floor(Math.random() * (255 - 200 + 1)) + 200;
	//let color = Math.floor(Math.random() * 100);
	letters[i].style.color = "rgb("+color+","+color+","+color+")";

	var span = document.createElement("span");
	letters[i].appendChild(span);
	span.style.animation = "displayLetter 10ms forwards";

	if(i > 23){
		let scale = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
		letters[i].style.transform = "scale("+scale/10+") translateY("+scale*4 +"px)";
	}


	//repeat for each letter
	i++;
	repeat = setTimeout(changeValue, 10);
	if(i > letters.length - 1){
		clearTimeout(repeat);
		i = 0;
		colorBorder();
	}
}
// changeValue();

window.addEventListener("keydown", (e) => {
	console.log(e);
	if(e.key == "Enter"){
		changeValue();
	}
});

function colorBorder(){
	let h2 = selectAll("h2");
	h2.forEach(element => {
		let colorBorder = Math.floor(Math.random() * (255 - 50 + 1)) + 50;
		element.style.setProperty('--color-border', "rgb("+colorBorder+","+colorBorder+","+colorBorder+")");
	});
}

////////////////////////////////
//utils
function mapRange (value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
}

function lerp (start, end, amt){
	return (1-amt)*start+amt*end
  }
// fin utils


