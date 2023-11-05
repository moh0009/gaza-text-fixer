var text = document.querySelector("#text1");
var val  = text.value;
var button = document.getElementById("button");
button.onclick = con;

var con_text = document.getElementById("con_text");

console.log(con_text);


function con(){
    var sp = text.value.split("");
    con_text.innerText = sp;
    for(let i = 0; i <= sp; i++){
        console.log("hi")
    }    
}