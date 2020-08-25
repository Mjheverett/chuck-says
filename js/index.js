'use strict'

const chuckSays = document.getElementById('chuckSays');
const refreshButton = document.getElementById('refreshQuote');
const submitFormButton = document.getElementById('submitForm');
const defaultCategory = "dev";

const getQuote = (category) => {
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
            const catOption = document.createElement('option');
            if (category != 'explicit') {
                catOption.value = category;
                catOption.text = category;
                dropdownMenu.appendChild(catOption);
            }
        })
    });
}

refreshButton.addEventListener('click', function (e) {
    e.preventDefault();
    getQuote(defaultCategory);
});

submitFormButton.addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = document.getElementById('categoryInput');
    const category = userInput.value;
    getQuote(category);
});

(function () {
    getCategories();
    getQuote(defaultCategory);
})();