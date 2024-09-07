document.addEventListener('DOMContentLoaded', () => {
    // Selecting elements
    // TODO: Create a variable that selects the form element
    const form = document.getElementById('blogForm');
    const usernameInput = document.getElementById('username');
    const titleInput = document.querySelector('#title');
    const contentInput = document.getElementById('content');
    const errorElement = document.getElementById('error');

    // Adding event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Checking if any fields are empty
        function checkEmpty() {
            if (usernameInput.value.trim() === '' || titleInput.value.trim() === '' || contentInput.value.trim() === '') {
                errorElement.textContent = 'Please complete the form.';

            } else {
                    const blogPost = {
                        username: usernameInput.value.trim(),
                        title: titleInput.value.trim(),
                        content: contentInput.value.trim()
                    };
            
                    // Retrieving existing posts from localStorage, if any
                    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
            
                    // Adding the new post to the array
                    existingPosts.push(blogPost);
            
                    // Storing updated array back in localStorage
                    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
            
                    // Redirecting to the blog posts page
                    redirectPage('blog.html');
                }
                return;
            
            }
    });
});
