const video = document.querySelector('#video');
const image = document.querySelector('#video__poster');
const button = document.querySelector('.video__play-button');

const onPlayClick = () => {
  if (video && button) {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      video.style.display = 'block';
      image.style.display = 'none';
      button.style.display = 'none';
    });
  }
};

export {onPlayClick};
