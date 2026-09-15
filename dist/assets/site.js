const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelectorAll(".gallery-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    lightboxImage.src = trigger.dataset.image;
    lightboxImage.alt = trigger.dataset.alt;
    lightbox.showModal();
  });
});

document.querySelector(".close-lightbox").addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
