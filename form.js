document.addEventListener('DOMContentLoaded', () => {
    // Selecting elements
    // TODO: Create a variable that selects the form element
    const form = document.getElementById('blogForm');
    const usernameInput = document.getElementById('username');
    const titleInput = document.querySelector('#title');
    const contentInput = document.getElementById('content');
    const errorElement = document.getElementById('error');


    // Checking if any fields are empty
    function checkEmpty() {
        const blogPosts = {
            username: usernameInput.value.trim(),
            title: titleInput.value.trim(),
            content: contentInput.value.trim(),
        };

        if (usernameInput.value.trim() === '' || titleInput.value.trim() === '' || contentInput.value.trim() === '') {
            errorElement.textContent = 'Please complete the form.';
            console.log(errorElement);
        } else {

            // Retrieving existing posts from localStorage
            const existingPosts = JSON.parse(localStorage.getItem('existingPosts')) || [];

            // Adding the new post to the array
            existingPosts.push(blogPosts);
            console.log(existingPosts);

            // Storing updated array back in localStorage
            localStorage.setItem('existingPosts', JSON.stringify(existingPosts));

            // Redirecting to the blog posts page
            redirectPage('blog.html');
        }
        return;
    }

    // Adding event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        checkEmpty();
    });


    let redirectURL = 'blog.html';
    const redirectPage = function (url) {
        redirectURL = url;
        location.assign(url);
        console.log('redirected')
    };
});
