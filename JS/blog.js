// Blog post data
const blogPosts = {
  'post-1': {
      title: 'Blog Post Title 1',
      date: 'January 1, 2025',
      content: `
          <p>This is the full content for Blog Post 1. Here you can add detailed information about the blog post, including paragraphs, images, or any other HTML content you want to display.</p>
          <p>You can include multiple paragraphs, formatting, and even embed media if desired.</p>
      `
  },
  'post-2': {
      title: 'Blog Post Title 2',
      date: 'February 15, 2025',
      content: `
          <p>This is the full content for Blog Post 2. Each blog post can have its own unique content and formatting.</p>
          <p>Feel free to customize the text, add images, or include any additional details you want to share.</p>
      `
  },
  'post-3': {
      title: 'Blog Post Title 3',
      date: 'March 10, 2025',
      content: `
          <p>Welcome to Blog Post 3! This demonstrates how you can have different content for each blog post.</p>
          <p>The modal will dynamically update its content based on which "Read More" link is clicked.</p>
      `
  },
  'post-4': {
      title: 'Blog Post Title 4',
      date: 'April 5, 2025',
      content: `
          <p>This is the content for Blog Post 4. You can easily add as much detail as you want.</p>
          <p>The system allows for flexible and easy content management.</p>
      `
  }
};

// Select the modal elements
const modal = document.getElementById("blogModal");
const modalTitle = modal.querySelector("h3");
const modalDate = modal.querySelector(".post-date");
const modalContent = modal.querySelector(".full-content");
const closeModal = modal.querySelector(".close");

// Add click event listeners to all "read-more" links
document.querySelectorAll('.read-more').forEach((btn, index) => {
  btn.setAttribute('data-post', `post-${index + 1}`);
  btn.addEventListener('click', function(e) {
      e.preventDefault();
      const postId = this.dataset.post;
      const post = blogPosts[postId];
      
      // Update modal content
      modalTitle.textContent = post.title;
      modalDate.textContent = post.date;
      modalContent.innerHTML = post.content;
      
      // Display the modal
      modal.style.display = "block";
  });
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the modal if user clicks outside the modal content
window.addEventListener("click", function(e) {
  if (e.target == modal) {
      modal.style.display = "none";
  }
});