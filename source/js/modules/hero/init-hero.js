const heroSlideWrapper = document.querySelector('.hero__slide-wrapper');
const header = document.querySelector('.header');

const checkHeaderHeight = () => {
  function updateHeroPadding() {
    if (window.innerWidth >= 1200) {
      const headerHeight = header.clientHeight;
      heroSlideWrapper.style.paddingTop = (headerHeight + 38 + 'px');
    } else {
      heroSlideWrapper.style.paddingTop = 0;
    }
  }

  updateHeroPadding();
  const observer = new ResizeObserver(updateHeroPadding);
  observer.observe(header);
};

export {checkHeaderHeight};
