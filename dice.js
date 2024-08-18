

let randomNumer1 =Math.floor(Math.random()*6)+1;
let randomNumer2 =Math.floor(Math.random()*6)+1;

var randomImageSource1 = "images/dice"+randomNumer1+".png";
var randomImageSource2 = "images/dice"+randomNumer2+".png";


document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumer1>randomNumer2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 win!";
}
else if(randomNumer1<randomNumer2){
    document.querySelector("h1").innerHTML = "Player 2 win! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}