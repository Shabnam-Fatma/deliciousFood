document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  // Check window width and show/hide elements accordingly
  function checkWindowSize() {
    if (window.innerWidth > 786) {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    }
  }

  // Listen for window resize
  window.addEventListener("resize", checkWindowSize);

  // Open sidebar
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  });

  // Close sidebar
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Click overlay to close
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Initial check
  checkWindowSize();
});
