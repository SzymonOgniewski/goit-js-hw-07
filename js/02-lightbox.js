import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

galleryItems.forEach((element) => {
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = element.original;
  gallery.append(link);
  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = element.preview;
  image.alt = element.description;
  image.dataset.source = element.original;
  link.append(image);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
