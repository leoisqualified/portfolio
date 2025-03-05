document.getElementById("menuBtn").addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.toggle("hidden");
});

document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const notification = document.createElement("div");
    notification.className =
      "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg";
    notification.textContent = "Message sent successfully!";

    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);

    e.target.reset();
  });

const navbar = document.getElementById("navbar");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    navbar.classList.remove("shadow-lg");
    return;
  }
  if (currentScroll > lastScroll) {
    navbar.classList.add("-translate-y-full");
  } else {
    navbar.classList.remove("-translate-y-full");
    navbar.classList.add("shadow-lg");
  }
  lastScroll = currentScroll;
});
