//selection of Element 

// var a = document.querySelector("h1")
//a.innerHTML = "changed HTML";

//a.style.backgroundColor = "grey";
//a.style.color = "red";

// a.addEventListener("click",function(){
//     console.log("Hey")
// })

// a.addEventListener("click",function(){
//     document.write("<h1>HEY</h1>")
// })

// a.addEventListener("click",function(){
//     a.innerHTML = "bdal gya hoon mai bhi teri ex ki trah";
//     a.style.color = "yellow"
//     a.style.backgroundColor = "black"
// })


var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener("click",function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow";
        console.log("clicked");
        flag = 1;
    }
    else{
        bulb.style.backgroundColor = "grey";
        console.log("unclicked");
        flag = 0;
    }
})

// var h = document.querySelectorAll("h1")

// h.forEach(function(e){
//     console.log(e)
// })

// document.getElementById("box");

// document.getElementsByClassName("box")


// var h = document.querySelector("h1")
// h.textContent = "bye";

// var box = document.querySelector("#box");
// box.innerHTML = "<h1>Hello</h1>"


// var box = document.querySelector("#box");
// box.textContent = "<h1>Hello</h1>"

//comment

