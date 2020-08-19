const pokeTeam = [
    document.getElementById('firs-poke'),
    document.getElementById('seco-poke'),
    document.getElementById('thir-poke'),
    document.getElementById('four-poke'),
    document.getElementById('fith-poke'),
    document.getElementById('sixt-poke')
]

function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}

let url = "https://pokeapi.co/api/v2/pokemon/?limit=40";
let ul = document.getElementById

('poke-list');
fetch(url)
    .then(response => response.json())
    .then(function(data) {
        let pokemonList = data.results;
        console.log(pokemonList)
        return pokemonList.map(function(pokemon){
            let li = createNode('li'),
                span = createNode('span');
            span.innerHTML = pokemon.name;
            li.id = pokemon.name;
            span.onclick = function(e) {
                setTeam(this.innerHTML)
            }
            append(li, span);
            append(ul, li);
        })
    })

    let selector = 0;
const setTeam = (pokeName) => {
    oldPokemon = pokeTeam[selector].innerHTML;
    pokeTeam[selector].innerHTML = pokeName;
    document.getElementById(pokeName).style.display = 'none';
    if(selector < 5){
        selector++;
    }
}