// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector("main")
const backBtn = document.querySelector("back")

function newElement(blogData) {
    const newArticle = document.createElement('article');
    main.appendChild(newArticle);
    const newTitle = document.createElement('h2');
    newTitle.textContent = blogData.blogTitle;
    newTitle.appendChild('h2')
    const newUsername = document.createElement('blockquote');
    newUsername.textContent = blogData.username;
    newUsername.appendChild('blockquote');


    return newElement;
}
// TODO: Create a function that builds an element and appends it to the DOM
// const buildElement = function (article, text, className) {
//     const el = document.createElement(article);
//     el.textContent = text;
//     el.setAttribute('post', className);
//     main.appendChild(el);
//     console.log(article);
// };

// TODO: Create a function that handles the case where there are no blog posts to display
const noPosts = function () {
    buildElement('h1', 'No Blog posts yet...', 'no-posts');
    console.log('No Blog posts yet...');
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renterBlogList() {
    const blogData = readLocalStorage('existingPost');
    if (blogData.length == []) {
        noPosts();
        console.log(blogData);
    } else {
        for (let i = 0; i < blogPost.length; i++) {
            newElement(blogPost[i]);
        }
        newPost = newElement();
        newPost.p.textContent = blogPost.content;
        newPost.blockquote.textContent = blogPost.username;
        newPost.h2.textContent = blogPost.blogTitle;
        blogData.forEach((post) => {
            buildElement('h2', post.title, 'title');
        });
        blogData.forEach((post) => {
            buildElement('p', post.author, 'author');
        });
        blogData.forEach((post) => {
            buildElement('blockquote', post.content, 'content');
        });
        console.log(post.title, post.author, post.content);
    }
};

// TODO: Call the `renderBlogList` function
renderBlogList();

// backBtn.addEventListener('click', (event) => {
//     event.redirectURL('index.html');
// });

// const redirectPage = function (url) {
//     backBtn.addEventListener('click', (event) => {
//         event.redirectURL('index.html');
//         redirectURL = url;
//         location.assign(url);
//         console.log('redirected');
//     });
// };