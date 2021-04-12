document.addEventListener('DOMContentLoaded', () => {
    // console.log('pokemon!')
    // const API_URI = "https://pokeapi.co/api/v2/pokemon/pikachu";
    // const cardTitle = document.getElementsByClassName('card__title')[0];
    // const cardType = document.getElementsByClassName('card__type')[0];
    // const cardImage = document.querySelector('.card img');

    // fetch(API_URI)
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log(data)
    //         cardTitle.innerHTML = `${data.name}`
    //         cardType.innerHTML = `${data.types[0].type.name}`
    //         cardImage.src = `${data.sprites.front_default}`;
    //     })
    // const card = (
    //     ` <div class="card">
    //     <img src="${data.sprites.front_default} " />
    //     <h1 class="card__title">${data.name}</h1>
    //     <span>Type: </span>
    //     <p class="card__type">${data.types[0].type.name}</p>
    //   </div>`
    // )
    var n = 5;
    function poke(id) { return `https://pokeapi.co/api/v2/pokemon/${id}`; }
    const body = document.querySelector('body');
    for (var i = 1; i <= n; i++) {

        fetch(poke(i)).then(res => res.json()).then(data => {
            const cardNew = new Object(data);
            console.log(cardNew)
        })
    }
})