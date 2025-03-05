document.addEventListener("DOMContentLoaded", function () {
  //select all the panels in the story
  const panels = document.querySelectorAll(".panel");

  //this function checks if the panels are in view and then activates them
  function checkPanels() {
    const triggerHeight = window.innerHeight * 0.85; // Activate panels when 85% of the viewport is reached

    panels.forEach((panel) => {
      const panelTop = panel.getBoundingClientRect().top;

      if (panelTop < triggerHeight) {
        panel.classList.add("active"); // Add 'active' class to fade in the panel
      }
    });
  }

  // Function to create a parallax effect on images
  function parallaxEffect() {
    const scrollY = window.scrollY; // Get current scroll position

    document.querySelectorAll(".panel img").forEach((img) => {
      const speed = 0.02;
      img.style.transform = `translateY(${scrollY * speed}px)`; // Move images slightly as the page scrolls
    });
  }

  // Listen for scroll events and trigger animations
  window.addEventListener("scroll", () => {
    checkPanels();
    parallaxEffect();
  });

  checkPanels(); // Run on page load to activate panels in view
});
