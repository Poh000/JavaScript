// addEventListener("click",function(unEvent){
//     console.log(unEvent.x, unEvent.y);
// })
addEventListener("click",function(e){

const monImg = document.createElement("img");
const taille = 200;
monImg.setAttribute("src",`https://loremflickr.com/${taille}/${taille}`);
// console.log(unEvent.x , unEvent.y);


    monImg.style.position = "absolute";
    monImg.style.left = e.x - taille /2 +"px";
    monImg.style.top = e.y- taille /2 +"px";
    
    document.body.appendChild(monImg);
});