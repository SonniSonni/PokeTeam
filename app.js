const pokeTeam = [
    document.getElementById('firs-poke'),
    document.getElementById('seco-poke'),
    document.getElementById('thir-poke'),
    document.getElementById('four-poke'),
    document.getElementById('fith-poke'),
    document.getElementById('sixt-poke')
]

//Use to create an html element
function createNode(element) {
    return document.createElement(element);
}
//Use to attach to a parent html element
function append(parent, el) {
    return parent.appendChild(el);
}

let url = "https://pokeapi.co/api/v2/pokemon/?limit=10";
let ul = document.getElementById('poke-list');
//List of pokemon in the team, max 6
let pokeTeamList = [
    {
        name:'',
        img:'',
    },
    {
        name:'',
        img:'',
    },
    {
        name:'',
        img:'',
    },
    {
        name:'',
        img:'',
    },
    {
        name:'',
        img:'',
    },
    {
        name:'',
        img:'',
    }
];
fetch(url)
    .then(response => response.json())
    .then(function(data) {
        let pokemonList = data.results;
        return pokemonList.map(function(pokemon){
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                .then(response => response.json())
                .then(function(data){
                    img.src = data.sprites.front_default
                });
            span.innerHTML = pokemon.name;
            li.id = pokemon.name;
            span.onclick = function(e) {
                insertToTeam(span.innerHTML, img.src);
            }
            append(li, img)
            append(li, span);
            append(ul, li);
        })
    });

const insertToTeam = (pokeName, pokeImg) => {
    //Remove new pokemon from the list of pokemon
    console.log(pokeTeamList[4]);
    document.getElementById(pokeName).style.display = 'none';
    //Inserts new pokemon into pokeTeamList
    for (let i = 0; i < 6; i++){     
        //If the position in the team is empty and not the last position
        if (pokeTeamList[i].name == "" && i != 5){
            //Set new Pokemon name and set i to 6, should break loop
            pokeTeamList[i].name = pokeName;
            pokeTeamList[i].img = pokeImg;
            i=6;
        }
        //if it is number 6 then return old pokemon, and set new one
        else if(i == 5){
            //Grabs name of old pokemon at end of list
            oldPokemon = pokeTeamList[i].name;
            //If the item isnt empty then return old pokemon
            if(oldPokemon != ''){
                document.getElementById(oldPokemon).style.display = '';
            };
            //Set new pokemon name
            pokeTeamList[i].name = pokeName;
        }
    }
    //Calls mapTeam
    mapTeam();
};
//Goes through and inserts each pokemon into their correct team position
const mapTeam = () => {
    //Sets new pokeName in the Team based on the list
    for (let i = 0; i < pokeTeam.length; i++) {
        pokeTeam[i].firstElementChild.innerHTML = pokeTeamList[i].name;
        pokeTeam[i].children[1].src = pokeTeamList[i].img;
    }
};

const clickTeamItem = (pokemon) => {
    //Pull the name from the span
    pokeName = pokemon.firstElementChild.innerHTML;
    //Search the pokeTeamList for the name of the clicked element, and reset its value
    for (let i = 0; i < pokeTeamList.length; i++) {
        if(pokeTeamList[i].name == pokeName){
            pokeTeamList[i].name = '';
            //Call mapTeam to update team
            mapTeam();
        }
    }
    //Make pokemon re-appear on original list again
    document.getElementById(pokeName).style.display = '';
};