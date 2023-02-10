import { galleryItems } from './gallery-items.js';


const galleryWrapper = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryWrapper.insertAdjacentHTML('beforeend', itemsMarkup);


function createGalleryItemsMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  }).join('');
}


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionDelay: 250
});