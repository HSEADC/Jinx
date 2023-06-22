import './dictionary.css'

// Бургер-меню

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('mp_articles')
  const list = document.getElementById('mp_articles_list')
  const btn_text = document.getElementById('mp_articles_text')
  const mp_list_wrapper = document.getElementById('mp_list_wrapper')
  const menu = document.getElementById('menu')
  const burger = document.getElementById('burger')

  // Бургер-меню в статьях

  burger.addEventListener('click', () => {
    menu.classList.toggle('Opened')
  })

  button.addEventListener('click', () => {
    button.classList.toggle('Opened')
    list.classList.toggle('Opened')
    btn_text.classList.toggle('Opened')
    mp_list_wrapper.classList.toggle('Opened')
  })
})

// Горизонтальный скролл

const container = document.querySelector('.C_StoryCards')

container.addEventListener('wheel', (e) => {
  e.preventDefault()
  container.scrollLeft += e.deltaY
})

// Скролл на середину окна с сюжетом

let cards = document.querySelector('.C_StoryCards')

let screen768 = window.matchMedia(
  '(min-device-width: 463px) and (max-device-width: 768px)'
)

if (screen768.matches) {
  cards.scrollTop = 80
}

let screenmobile = window.matchMedia('(max-device-width: 462px)')

if (screenmobile.matches) {
  cards.scrollTop = 77
}

// Клик по карточкам

// const card01 = document.getElementById('card_01')

// let article01 = document.getElementById('article_01')
