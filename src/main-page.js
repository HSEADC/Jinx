import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('mp_articles')
  const list = document.getElementById('mp_articles_list')
  const btn_text = document.getElementById('mp_articles_text')
  const mp_list_wrapper = document.getElementById('mp_list_wrapper')
  const menu = document.getElementById('mp_menu')
  const burger = document.getElementById('mp_burger')

  // Бургер-меню на главной странице

  burger.addEventListener('click', () => {
    menu.classList.toggle('Opened')
  })

  button.addEventListener('click', () => {
    button.classList.toggle('Opened')
    list.classList.toggle('Opened')
    btn_text.classList.toggle('Opened')
    mp_list_wrapper.classList.toggle('Opened')
  })

  // Слайдер карточек для мобильной версии

  let screenmobile = window.matchMedia('(max-device-width: 462px)')

  if (screenmobile.matches) {
    const arrowRight = document.getElementById('ArrowRight')
    const arrowLeft = document.getElementById('ArrowLeft')

    arrowRight.addEventListener('click', () => {
      plusSlides(1)
    })
    arrowLeft.addEventListener('click', () => {
      plusSlides(-1)
    })

    let slideIndex = 1
    showSlides(slideIndex)

    function plusSlides(n) {
      showSlides((slideIndex += n))
    }

    function showSlides(n) {
      let i
      let slides = document.getElementsByClassName('A_MenuCardMobile')

      if (n > slides.length) {
        slideIndex = 1
      }

      if (n < 1) {
        slideIndex = slides.length
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }

      slides[slideIndex - 1].style.display = 'block'
    }
  }
})
