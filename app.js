function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}

let url = "https://pokeapi.co/api/v2/ability";
let ul = document.getElementById('ul');
fetch(url)
    .then(response => response.json())
    .then(function(data) {
        let abilities = data.results;
        console.log(abilities)
        return abilities.map(function(ability){
            let li = createNode('li'),
                span = createNode('span');
            span.innerHtml = `${ability.name}`;
            append(li, span);
            append(ul, li);
        })
    })