const videoContainer = document.querySelector('#video');
const videoWrapper = document.querySelector('.video');
const videoPlayer = document.querySelector('.video__player');
const image = document.querySelector('#video__poster');
const button = document.querySelector('.video__play-button');

const onPlayClick = () => {
  if (videoWrapper && button) {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      videoPlayer.style.display = 'block';
      videoWrapper.style.display = 'block';
      videoWrapper.style.zIndex = '3';
      image.style.display = 'none';
      button.style.display = 'none';
      videoContainer.innerHTML = '<iframe id="video" width="482" height="317" src="https://www.youtube.com/embed/9TZXsZItgdw??enablejsapi=1&rel=0&autoplay=1" allow="autoplay; encrypted-media;" allowfullscreen loading="lazy"></iframe>';
    });
  }
};

export {onPlayClick, videoContainer, image, button};
