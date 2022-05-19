let windowScrollY = window.scrollY;
const header = document.querySelector('.main-header');

function setStickyHeader(bool) {
  if(bool) {
    !header.classList.contains('js-sticky') ?
    header.classList.add('js-sticky') : null
  } else {
    header.classList.contains('js-sticky') ?
    header.classList.remove('js-sticky') : null
  }
}

if(windowScrollY > 50) {
  setStickyHeader(true);
} else {
  setStickyHeader(false);
}


const onScrollSetWindowScrollY = () => {
  windowScrollY = window.scrollY;

  if(windowScrollY > 50) {
    setStickyHeader(true);
  } else {
    setStickyHeader(false);
  }
}

window.addEventListener('scroll', onScrollSetWindowScrollY);
