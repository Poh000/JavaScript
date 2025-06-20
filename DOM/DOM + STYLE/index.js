const titre = document.querySelector("h1");
const liens = document.querySelectorAll("a");

liens[0].addEventListener("click",function(){
    titre.classList.add("maCouleur");
})

liens[1].addEventListener("click",function(){
    titre.classList.remove("maCouleur");
})

liens[2].addEventListener("click",function(){
    titre.classList.toggle("maCouleur");
})


let txt = addEventListener("keyup",function(event){
    return console.log(event)
})


document.addEventListener("keyup", function(event) {
    const newTxt = document.createElement("p");
    newTxt.textContent = `Touche pressée : ${event.key}`;
    console.log(event);
    document.body.appendChild(newTxt);
});

