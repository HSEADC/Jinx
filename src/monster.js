import './dictionary.css'

const container = document.querySelector('.C_MonsterCards')

container.addEventListener('wheel', (e) => {
  e.preventDefault()
  container.scrollLeft += e.deltaY
})
