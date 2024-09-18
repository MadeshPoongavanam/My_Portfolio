// List of roles to display in running text
const roles = ["Java Programmer", "C Programmer"];

// Initialize the index to keep track of the current role
let index = 0;

// Function to change the role text every 2 seconds
function changeRole() {
    const roleElement = document.getElementById("role");
    if (roleElement) {
        roleElement.textContent = roles[index];
        index = (index + 1) % roles.length; // Loop back to the first role after the last one
    } else {
        console.error('Element with ID "role" not found.');
    }
}

// Run the changeRole function every 2 seconds
setInterval(changeRole, 2000);

// Initialize the first role immediately when the page loads
window.onload = changeRole;
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
