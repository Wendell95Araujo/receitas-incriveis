document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("contact-content");

  window.addEventListener("load", () => {
    loader.classList.add("hidden");
    content.classList.remove("hidden");
  });
});
