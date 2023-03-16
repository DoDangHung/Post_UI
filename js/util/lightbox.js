export function registerLightBox({ modalId, imgSelector, prevSelector, nextSelector }) {
  const modalElement = document.getElementById(modalId);
  if (!modalElement) return;

  document.addEventListener('click', (event) => {
    const { target } = event;
    if (target.tagName !== 'IMG' || !target.dataset.album) return;

    const imgList = document.querySelectorAll(`img[data-album="${target.dataset.album}"]`);
    const index = [...imgList].findIndex((x) => x === target);
    console.log('album imange click', { target, index, imgList });
  });
}
