import './dictionary.css'

// Горизонтальный скролл

const container = document.querySelector('.C_MonsterCards')

container.addEventListener('wheel', (e) => {
  e.preventDefault()
  container.scrollLeft += e.deltaY
})

// Клик по карточкам

const card = document.getElementById('card_01')

card.addEventListener('click', (e) => {
  console.log('click')
})
