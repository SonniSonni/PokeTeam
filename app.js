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
let ul = document.getElementById('poke-list');
//List of pokemon in the team, max 6
let pokeTeamList = [];

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
                insertToTeam(span.innerHTML);
            }
            append(li, span);
            append(ul, li);
        })
    })

const insertToTeam = (pokeName) => {
    //Grabs name of old pokemon at end of list
    oldPokemon = pokeTeamList[5];
    //Remove new pokemon from the list of pokemon
    document.getElementById(pokeName).style.display = 'none';
    //Inserts new pokemon into pokeTeamList
    for (let i = 0; i < 6; i++){
        //If the position in the team is empty and not the last position
        if (pokeTeamList[i] == "" && i != 5){
            //Set new Pokemon name and set i to 6, should break loop
            pokeTeamList[i] = pokeName;
            i=6;
        }
        //if it is number 6 then return old pokemon, and set new one
        else if(i == 5){
            pokeTeamList[5].pop();
            document.getElementById(oldPokemon).style.display = '';
            pokeTeamList[i] = pokeName;
        }
    }
    //Calls mapTeam
    mapTeam();
};
//Goes through and inserts each pokemon into their correct team position
const mapTeam = () => {
    //Sets new pokeName in the Team based on the list
};

const clickTeamItem = (pokeName) => {
    console.log(pokeName);
    document.getElementById(pokeName).style.display = '';
};