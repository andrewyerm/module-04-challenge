document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;
        postElement.appendChild(titleElement);
        
        const authorElement = document.createElement('p');
        authorElement.textContent = `by ${post.username}`;
        postElement.appendChild(authorElement);
        
        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
        postElement.appendChild(contentElement);
        
        postsContainer.appendChild(postElement);
    });



    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

