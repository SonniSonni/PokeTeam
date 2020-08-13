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
            span.onclick = function(e) {
                this.style.color = 'red';
            }
            append(li, span);
            append(ul, li);
        })
    })