fetch("https://pokeapi.co/api/v2/ability")
    .then(response => response.json())
    .then(data => console.log(data));