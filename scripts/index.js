const coverOffset = document.querySelector('.cover').offsetTop;
const coverLink = document.querySelector('.cover__link');

document.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;

  if (scrollY >= coverOffset) {
    coverLink.classList.add('pulse');
  } else {
    coverLink.classList.remove('pulse');
  }
});
