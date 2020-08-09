function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}

let url = "https://pokeapi.co/api/v2/ability";
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(function(data) {
        
    })