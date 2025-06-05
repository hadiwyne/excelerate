let lastScrollPosition = window.pageYOffset;
const titleContainer = document.querySelector('.title-container');
const nav = document.querySelector('.side-nav');
const titleHeight = window.innerHeight; 

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  
  if (currentScrollPosition === 0) {
    titleContainer.classList.remove('hide');
  } else {
    titleContainer.classList.add('hide');
  }

  
  if (currentScrollPosition > titleHeight * 0.4) {
    nav.classList.remove('hidden');
  } else {
    nav.classList.add('hidden');
  }

  lastScrollPosition = currentScrollPosition;
});
