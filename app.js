var red= document.getElementById("red");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var box = ["box-1","box-2","box-3","box-4","box-5","box-6"];
var rgbs = ["su","bu","mu","nu","du","ku"];
var randomk = Math.floor(Math.random()*6);
var guessRgb = rgbs[randomk];
var result = document.getElementById("checkResult");


colourSetter();

function colourSetter(){

    for (let index = 0; index < 6; index++) 
    {
        var randomRed = Math.random()*256|0;
        var randomBlue = Math.random()*256|0;
        var randomGreen = Math.random()*256|0;
        document.getElementById(box[index]).style.backgroundColor= "rgb("+ randomRed + "," + randomBlue + "," + randomGreen + ")";
        rgbs[index]= document.getElementById(box[index]).style.backgroundColor;
        randomk = Math.floor(Math.random()*6);
        guessRgb = rgbs[randomk];
        document.getElementById("rgb").innerText = guessRgb;
        document.getElementById(box[index]).addEventListener("click", colourCheck);
    }
}

function colourCheck(){
    if(this.style.backgroundColor===guessRgb){
        result.innerText = "MATCHED!!";
        result.style.color = "green";
        
        for (let i = 0; i < rgbs.length; i++) {
            document.getElementById(box[i]).classList.remove("invisible");   
            document.getElementById(box[i]).style.backgroundColor= guessRgb;  
        }

    }else{
        result.innerText = " DIDN'T MATCH!!";
        this.classList.toggle("invisible");
    }
}

document.getElementById("reset").addEventListener("click",function(){
    result.innerText = "";
    result.style.color = "#ff0000";


    for (let i = 0; i < 6; i++) {
        document.getElementById(box[i]).removeEventListener("click", colourCheck);   
    }
    colourSetter();
});


