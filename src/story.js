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

const card01 = document.getElementById('story_card_01')
const card02 = document.getElementById('story_card_02')
const card03 = document.getElementById('story_card_03')

const card04 = document.getElementById('story_card_04')
const card05 = document.getElementById('story_card_05')
const card06 = document.getElementById('story_card_06')
const card07 = document.getElementById('story_card_07')
const card08 = document.getElementById('story_card_08')
const card09 = document.getElementById('story_card_09')
const card10 = document.getElementById('story_card_10')
const card11 = document.getElementById('story_card_11')

let article01 = document.getElementById('article_01')
let article02 = document.getElementById('article_02')
let article03 = document.getElementById('article_03')
let article04 = document.getElementById('article_04')
let article05 = document.getElementById('article_05')
let article06 = document.getElementById('article_06')
let article07 = document.getElementById('article_07')
let article08 = document.getElementById('article_08')
let article09 = document.getElementById('article_09')
let article10 = document.getElementById('article_10')
let article11 = document.getElementById('article_11')

card01.addEventListener('click', (e) => {
  article01.style.display = 'block'
  article02.style.display = 'none'
  article03.style.display = 'none'
  article04.style.display = 'none'
  article05.style.display = 'none'
  article06.style.display = 'none'
  article07.style.display = 'none'
  article08.style.display = 'none'
  article09.style.display = 'none'
  article10.style.display = 'none'
  article11.style.display = 'none'
})

card02.addEventListener('click', (e) => {
  article01.style.display = 'none'
  article02.style.display = 'block'
  article03.style.display = 'none'
  article04.style.display = 'none'
  article05.style.display = 'none'
  article06.style.display = 'none'
  article07.style.display = 'none'
  article08.style.display = 'none'
  article09.style.display = 'none'
  article10.style.display = 'none'
  article11.style.display = 'none'
})

card03.addEventListener('click', (e) => {
  article01.style.display = 'none'
  article02.style.display = 'none'
  article03.style.display = 'block'
  article04.style.display = 'none'
  article05.style.display = 'none'
  article06.style.display = 'none'
  article07.style.display = 'none'
  article08.style.display = 'none'
  article09.style.display = 'none'
  article10.style.display = 'none'
  article11.style.display = 'none'
})

card04.addEventListener('click', (e) => {
  article01.style.display = 'none'
  article02.style.display = 'none'
  article03.style.display = 'none'
  article04.style.display = 'block'
  article05.style.display = 'none'
  article06.style.display = 'none'
  article07.style.display = 'none'
  article08.style.display = 'none'
  article09.style.display = 'none'
  article10.style.display = 'none'
  article11.style.display = 'none'
})

card05.addEventListener('click', (e) => {
  article01.style.display = 'none'
  article02.style.display = 'none'
  article03.style.display = 'none'
  article04.style.display = 'none'
  article05.style.display = 'block'
  article06.style.display = 'none'
  article07.style.display = 'none'
  article08.style.display = 'none'
  article09.style.display = 'none'
  article10.style.display = 'none'
  article11.style.display = 'none'
})

card06.addEventListener('click', (e) => {
  article01.style.display = 'none'
  article02.style.display = 'none'
  article03.style.display = 'none'
  article04.style.display = 'none'
  article05.style.display = 'none'
  article06.style.display = 'block'
  article07.style.display = 'none'
  article08.style.display = 'none'
  article09.style.display = 'none'
  article10.style.display = 'none'
  article11.style.display = 'none'
})

card07.addEventListener('click', (e) => {
  article01.style.display = 'none'
  article02.style.display = 'none'
  article03.style.display = 'none'
  article04.style.display = 'none'
  article05.style.display = 'none'
  article06.style.display = 'none'
  article07.style.display = 'block'
  article08.style.display = 'none'
  article09.style.display = 'none'
  article10.style.display = 'none'
  article11.style.display = 'none'
})

card08.addEventListener('click', (e) => {
  article01.style.display = 'none'
  article02.style.display = 'none'
  article03.style.display = 'none'
  article04.style.display = 'none'
  article05.style.display = 'none'
  article06.style.display = 'none'
  article07.style.display = 'none'
  article08.style.display = 'block'
  article09.style.display = 'none'
  article10.style.display = 'none'
  article11.style.display = 'none'
})

card09.addEventListener('click', (e) => {
  article01.style.display = 'none'
  article02.style.display = 'none'
  article03.style.display = 'none'
  article04.style.display = 'none'
  article05.style.display = 'none'
  article06.style.display = 'none'
  article07.style.display = 'none'
  article08.style.display = 'none'
  article09.style.display = 'block'
  article10.style.display = 'none'
  article11.style.display = 'none'
})

card10.addEventListener('click', (e) => {
  article01.style.display = 'none'
  article02.style.display = 'none'
  article03.style.display = 'none'
  article04.style.display = 'none'
  article05.style.display = 'none'
  article06.style.display = 'none'
  article07.style.display = 'none'
  article08.style.display = 'none'
  article09.style.display = 'none'
  article10.style.display = 'block'
  article11.style.display = 'none'
})

card11.addEventListener('click', (e) => {
  article01.style.display = 'none'
  article02.style.display = 'none'
  article03.style.display = 'none'
  article04.style.display = 'none'
  article05.style.display = 'none'
  article06.style.display = 'none'
  article07.style.display = 'none'
  article08.style.display = 'none'
  article09.style.display = 'none'
  article10.style.display = 'none'
  article11.style.display = 'block'
})
