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
      menuBtn.classList.remove("hidden");
    }
  }

  function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    menuBtn.classList.add("hidden");
  }

  function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.classList.remove("hidden");
  }

  // Listen for window resize
  window.addEventListener("resize", checkWindowSize);

  // Open sidebar
  menuBtn.addEventListener("click", openSidebar);

  // Close sidebar
  closeBtn.addEventListener("click", closeSidebar);

  // Click overlay to close
  overlay.addEventListener("click", closeSidebar);

  // Handle escape key to close sidebar
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("active")) {
      closeSidebar();
    }
  });

  // Initial check
  checkWindowSize();
});
