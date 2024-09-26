document.addEventListener('DOMContentLoaded', () => {
    // Wait for 1 second before starting the star animation
    setTimeout(() => {
        const stars = document.querySelectorAll('.star');

        stars.forEach((star, index) => {
            setTimeout(() => {
                star.style.animation = 'flyIn 0.8s ease-out forwards'; // Trigger the fly-in animation
                setTimeout(() => {
                    star.classList.add('filled'); // Add the filled class after the animation
                }, 800); // Wait for the animation to finish before filling
            }, index * 300); // Delay for each star's animation
        });
    }, 700); // 1-second delay before the animation starts

    const backToHomeBtn = document.getElementById('backToHome');

    // Scroll event listener to show/hide the back to home button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { // Show when scrolled down 100px
            backToHomeBtn.classList.add('show');
        } else { // Hide when near top (home section)
            backToHomeBtn.classList.remove('show');
        }
    });

    // Smooth scroll to the top when button is clicked
    backToHomeBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter-number');
    const counterCards = document.querySelectorAll('.counter-card'); // Select all counter cards
    let hasAnimated = new Array(counters.length).fill(false); // Track which counters have animated

    const animateCounter = (counter, index) => {
        if (hasAnimated[index]) return; // Prevent running the animation multiple times for the same card
        hasAnimated[index] = true; // Mark this counter as animated

        // Delay the animations based on the index (staggered)
        setTimeout(() => {
            // Animate the specific card with fade and move effect
            counterCards[index].classList.add('visible'); // Add the visible class for the specific card
            
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                // Determine the increment value based on the target
                const increment = Math.ceil(target / 100); // Adjust increment for smooth animation

                // If count is less than the target, keep updating
                if (count < target) {
                    counter.innerText = count + increment > target ? target : count + increment;
                    setTimeout(updateCount, 20); // Adjust delay for speed
                } else {
                    counter.innerText = target; // Ensure it reaches the target
                }
            };
            updateCount(); // Start the counter
        }, index * 500); // 500 milliseconds delay based on index for staggered effect
    };

    // Set up the Intersection Observer for each card
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(counterCards).indexOf(entry.target); // Get the index of the card
                animateCounter(entry.target.querySelector('.counter-number'), index); // Animate the corresponding counter
                observer.unobserve(entry.target); // Stop observing this card after it has animated
            }
        });
    });

    // Observe each counter card
    counterCards.forEach(card => {
        observer.observe(card);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelectorAll('details');
  
    details.forEach(detail => {
      detail.addEventListener('toggle', (event) => {
        // Close all other details when one is opened
        if (detail.open) {
          details.forEach(otherDetail => {
            if (otherDetail !== detail && otherDetail.open) {
              otherDetail.removeAttribute('open'); // Close other open details
            }
          });
        }
      });
  
      // Smooth transition for opening and closing the details
      detail.addEventListener('toggle', () => {
        const answer = detail.querySelector('.answer');
        if (detail.open) {
          answer.style.maxHeight = answer.scrollHeight + "px"; // Expand smoothly
        } else {
          answer.style.maxHeight = "0"; // Collapse smoothly
        }
      });
    });
  });

  var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    // Check if the user is on a mobile device
    if (isMobileDevice()) {
        // Prompt the user to switch to a PC
        alert("يرجى فتح الموقع من جهاز كمبيوتر للوصول إلى المحتوى.");
    }
