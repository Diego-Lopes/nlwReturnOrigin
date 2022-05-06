window.addEventListener('scroll', onScroll);

onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);

}

function showNavOnScroll() {
  if (scrollY === 0) {
    navigation.classList.remove("scroll");
  } else {
    navigation.classList.add("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY <= 400) {
    backToTopButton.classList.remove("show");
  } else {
    backToTopButton.classList.add("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about content`);


// ativar menu quando estiver no certo ponto do scroll.
function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  //verificar se a sessão passou na linha
  //quais dados pegar?
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute('id');

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active');

  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }

}