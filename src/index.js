import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('mp_articles')
  const list = document.getElementById('mp_articles_list')
  const btn_text = document.getElementById('mp_articles_text')
  const mp_list_wrapper = document.getElementById('mp_list_wrapper')
  const menu = document.getElementById('menu')
  const burger = document.getElementById('burger')

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
