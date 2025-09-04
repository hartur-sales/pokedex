const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const btnPrevious = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    console.log(APIResponse.status);

    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '._.';

    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        searchPokemon = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not found';
        pokemonNumber.innerHTML = ':(';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(input.value);

    renderPokemon(input.value.toLowerCase());
});

btnNext.addEventListener('click', () => {
    searchPokemon++;
    renderPokemon(searchPokemon);
});

btnPrevious.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon--;
        renderPokemon(searchPokemon);
    }
});

renderPokemon(searchPokemon);
