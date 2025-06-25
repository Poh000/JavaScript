async function listePokemon(){
    const data = await fetch('https://pokeapi.co/api/v2/pokemon');

    const result = await data.json();
    const poke = document.getElementById("liste");
    tab = result.results;
    for (let i = 0; i< 20; i++){
        const li = document.createElement("ul");
        li.textContent = result.results[i].name;
        liste.appendChild(li);
        console.log(result.results[i].name);
    }
    liste.style.background=("yellow");  
    liste.style.width=("200"+"px");
}

console.log(listePokemon())
