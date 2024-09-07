// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector("main")
const backBtn = document.querySelector("back-button")
const themeSwitcher = document.querySelector('#toggle');
let darkMode = localStorage.getItem("dark");
let mode = 'dark';

themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
      mode = 'light';
      document.body.setAttribute('class', 'light');
    }
    // If mode is light, apply dark background
    else {
      mode = 'dark';
      document.body.setAttribute('class', 'dark');
    }
  });
// TODO: Create a function that builds an element and appends it to the DOM
const buildElement = function (element, text, className) {
    const el = document.createElement(element);
    el.textContent = text;
    el.setAttribute('class', className);
    main.appendChild(el);
  };

// TODO: Create a function that handles the case where there are no blog posts to display
const noPosts = function () {
    buildElement('h3', 'No posts yet!', 'no-posts');
  };

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = function () {
    const blogData = readLocalStorage();
    if (blogData.length === 0) {
      noPosts();
    } else {
      blogData.forEach((post) => {
        buildElement('h3', post.title, 'title');
        buildElement('p', post.author, 'author');
        buildElement('p', post.content, 'content');
      });
    }
  };

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};