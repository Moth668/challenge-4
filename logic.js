// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
let mode = localStorage.getItem('mode');
const darkModeCheckbox = document.getElementById("toggle");
const body = document.body;
const root = document.documentElement;

const applyMode = function(mode) {
    if (mode === 'dark') {
      body.classList.add('dark');
      body.classList.remove('light');
      root.style.setProperty('--circle-color', '#000');
      localStorage.setItem('mode', JSON.stringify('mode'));
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
      root.style.setProperty('--circle-color', '#ffb100');
      localStorage.setItem('mode', JSON.stringify('mode'));
    }
  }

  applyMode();

// If mode is dark, apply light background
darkModeCheckbox.addEventListener('click', () => {
    console.log("clicked toggle");
    enableDarkMode();
});

function enableDarkMode() {
    if (mode == 'dark') {
        mode = 'light';
        document.body.setAttribute('class', 'light');
        console.log('light');
    }
    // If mode is light, apply dark background
    else {
        mode = 'dark';
        document.body.setAttribute('class', 'dark');
        console.log('dark');
    }
}



// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
    const blogData = JSON.parse(localStorage.getItem('existingPosts'));
    if (!blogData) {
        return [];
    }
    return blogData;
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(blogData) {
    let blogArray = readLocalStorage(blogData);
    blogArray.push(blogData);
    localStorage.setItem('existingPosts', JSON.stringify(blogArray));
};

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
    console.log('redirected')
};

