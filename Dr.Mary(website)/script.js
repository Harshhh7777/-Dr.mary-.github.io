// Smooth scrolling function
function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href'); // Use currentTarget instead of target
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const topOffset = targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scroll({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  }

  // Add click event listeners to each navigation link
  document.querySelectorAll('.nav-links').forEach(link => {
    link.addEventListener('click', scrollToSection);
  });

  let prevScrollY = window.pageYOffset || document.documentElement.scrollTop;
  const topBar = document.getElementById("movable-bar");
  const moveHandle = document.getElementById("move-handle");

  // Function to handle the scroll event
  function handleScroll() {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the user is scrolling up
    if (currentScrollY > prevScrollY) {
      topBar.style.top = "-100px"; // Move the bar up
      moveHandle.style.display = "none"; // Optionally hide the handle when scrolling up
    } else {
      topBar.style.top = "0"; // Reset the position when scrolling back down or reaching the top
      moveHandle.style.display = "block"; // Display the handle again
    }

    prevScrollY = currentScrollY; // Update the previous scroll position
  }

  // Attach the scroll event listener to the window
  window.addEventListener("scroll", handleScroll);

  // Function to handle the click event on the social media links
  function handleSocialMediaClick(event) {
    event.preventDefault();
    const linkType = event.currentTarget.getAttribute('id');
    let socialMediaLink;

    switch (linkType) {
      case 'facebook-link':
        socialMediaLink = 'https://www.facebook.com/your_facebook_link/';
        break;
      case 'twitter-link':
        socialMediaLink = 'https://www.twitter.com/your_twitter_link/';
        break;
      case 'instagram-link':
        socialMediaLink = 'https://www.instagram.com/your_instagram_link/';
        break;
      default:
        socialMediaLink = '#';
        break;
    }

    window.open(socialMediaLink, '_blank'); // Opens the social media page in a new tab
  }

  // Attach the click event listeners to the social media links
  const facebookLink = document.getElementById('facebook-link');
  facebookLink.addEventListener('click', handleSocialMediaClick);

  const twitterLink = document.getElementById('twitter-link');
  twitterLink.addEventListener('click', handleSocialMediaClick);

  const instagramLink = document.getElementById('instagram-link');
  instagramLink.addEventListener('click', handleSocialMediaClick);


  // JavaScript code to show/hide blog content
    const blogs = document.querySelectorAll('.blog');
    blogs.forEach(blog => {
    blog.addEventListener('click', () => {
    const blogContent = blog.querySelector('.blog-content');
    blogContent.classList.toggle('active');
});
});

const images = document.querySelectorAll('.slideshow-background img');
let currentImageIndex = 0;
let imagesLoaded = 0; // Counter for loaded images

// Function to check if all images are loaded
function checkImagesLoaded() {
  imagesLoaded++;
  if (imagesLoaded === images.length) {
    startSlideshow();
  }
}

// Preload images and attach event listener for loaded images
images.forEach((image) => {
  const img = new Image();
  img.src = image.src;
  img.onload = checkImagesLoaded;
});

function startSlideshow() {
  setInterval(changeImage, 3000); // Change image every 5 seconds
}

function changeImage() {
  images[currentImageIndex].style.opacity = 0;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = 1;
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});









    
