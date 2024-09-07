// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
let mode = localStorage.getItem('dark');
const themeSwitcher = document.querySelector('#toggle');

  // If mode is dark, apply light background
  themeSwitcher.addEventListener('click', () => {
    console.log("clicked toggle");
    enableDarkMode();
  });

function enableDarkMode() {
  if (mode === 'dark') {
    mode = 'light';
    document.body.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    document.body.setAttribute('class', 'dark');
  }
}



// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const blogData = JSON.parse(localStorage.getItem('blogData'));
  if (!blogData) {
    return [];
  }
  return blogData;
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(data) {
  const blogData = readLocalStorage();
  blogData.push(data);
  localStorage.setItem('blogData', JSON.stringify(blogData));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

