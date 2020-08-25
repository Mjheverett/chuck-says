'use strict'

const chuckSays = document.getElementById('chuckSays');
const refreshButton = document.getElementById('refreshQuote');
const submitFormButton = document.getElementById('submitForm');
let category = "dev";

const getQuote = () => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    get(url).then(function(fetchResponse) {
        chuckSays.innerHTML = fetchResponse.value;
    });
}

const getCategories = () => {
    const url = `https://api.chucknorris.io/jokes/categories`;
    const dropdownMenu = document.getElementById('categoryInput');
    get(url).then(function (categoryArray) {
        categoryArray.map(function(category) {
            if (category != 'explicit') {
                const catOption = document.createElement('option');
                catOption.value = category;
                catOption.text = category;
                dropdownMenu.appendChild(catOption);
            }
        })
    });
}

refreshButton.addEventListener('click', e => {
    e.preventDefault();
    getQuote();
});

const getChuckQuotes = document.getElementById('getChuckQuotes');

getChuckQuotes.addEventListener('submit', e => {
    e.preventDefault();
    const userInput = document.getElementById('categoryInput');
    category = userInput.value;
    getQuote();
});

(function () {
    getCategories();
    getQuote();
})();