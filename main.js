const navigation = document.querySelector('#navigation')
const corpo = document.querySelector('#body')
const back_top = document.querySelector('#backToTopButton')

window.addEventListener('scroll', onScroll)
function onScroll() {
  mostrarNav()
  backToTopButton()
  ativarMenu(home)
  ativarMenu(services)
  ativarMenu(about)
  ativarMenu(contact)
}

function ativarMenu(section) {
  //Linha Alvo
  const targeline = scrollY + innerHeight / 2

  //Pegando altura total e do topo
  const sectionTop = section.offsetTop
  const sectionHeigt = section.offsetHeight

  //verifica se a linha esta acima da linha alvo
  const sectionTopReachOrPassedTargetline = targeline >= sectionTop

  //verifica se a linha esta abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeigt
  const sectionEndPassedTargetLine = sectionEndsAt <= targeline

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function mostrarNav() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function backToTopButton() {
  if (scrollY > 500) {
    back_top.classList.add('show')
  } else {
    back_top.classList.remove('show')
  }
}
function openMenu() {
  document.body.classList.add('menu-mobile')
}
function closeMenu() {
  document.body.classList.remove('menu-mobile')
}

ScrollReveal({
  origin: 'top',
  distance: '40px',
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
#about .container,
#about img
`)
