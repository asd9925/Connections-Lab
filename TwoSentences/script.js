let blackberry;
let text;

blackberry = document.getElementById("blackberry");
text = document.getElementById("text");

blackberry.addEventListener("click", function(){
    document.body.style.background = "rgb(128, 3, 3)";
    text.style.display = "block"
})

blackberry.addEventListener("mouseenter", function(){
    blackberry.classList.add("vibrate");
});