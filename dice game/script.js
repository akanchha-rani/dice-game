var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg1 = "1dice " + randomNum1 + ".png";
var randomImgSrc1 = "/images/" + randomDiceImg1 ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSrc1);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "2dice " + randomNum2 + ".png";
var randomImgSrc2 = "/images/" +randomDiceImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSrc2);

if(randomNum1 > randomNum2){
    document.querySelector("h2").innerHTML="Player-1 WINS!!";
}
else if(randomNum1 < randomNum2){
    document.querySelector("h2").innerHTML="Player-2 WINS!!";
}
else{
    document.querySelector("h2").innerHTML="It's a DRAW!!";
}
