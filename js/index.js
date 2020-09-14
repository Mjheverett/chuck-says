'use strict'

const chuckSays = document.getElementById('chuckSays');
const refreshButton = document.getElementById('refreshQuote');
const submitFormButton = document.getElementById('submitForm');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseButton = document.getElementById('closeModal');
let category = "dev";

const getQuote = async () => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    // getWithAwait(url).then(function(fetchResponse) {
    //     chuckSays.innerHTML = fetchResponse.value;
    //     modalOverlay.classList.toggle('open');
    // });
    const theQuote = await getWithAwait(url);
    chuckSays.innerHTML = theQuote.value;
    modalOverlay.classList.toggle('open');
}

const getCategories = async () => {
    const url = `https://api.chucknorris.io/jokes/categories`;
    const dropdownMenu = document.getElementById('categoryInput');
    // get(url).then(function (categoryArray) {
    //     categoryArray.map(function(category) {
    //         if (category != 'explicit') {
    //             const catOption = document.createElement('option');
    //             catOption.value = category;
    //             catOption.text = category;
    //             dropdownMenu.appendChild(catOption);
    //         }
    //     })
    // });
    const theCategories = await getWithAwait(url);
    theCategories.map(category => {
        if (category != 'explicit') {
            const catOption = document.createElement('option');
            catOption.value = category;
            catOption.text = category;
            dropdownMenu.appendChild(catOption);
        }
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

modalCloseButton.addEventListener('click', function (e) {
    modalOverlay.classList.toggle('open');
});

window.onclick = function(event) {
    if (event.target == modalOverlay) {
        modalOverlay.classList.toggle('open');    
    }
};

(function () {
    getCategories();
    getQuote();
})();