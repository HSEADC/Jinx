import './dictionary.css'

const container = document.querySelector('.C_StoryCards')

container.addEventListener('wheel', (e) => {
  e.preventDefault()
  container.scrollLeft += e.deltaY
})
