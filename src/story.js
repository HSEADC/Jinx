import './dictionary.css'

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
