import './dictionary.css'
import anime from 'animejs/lib/anime.es.js'

const linePath =
  'M33 143V142C20.5278 141.285 17.0734 141.601 17.0012 111L17 33C17.0676 2.39859 20.3065 1.71766 33 1V0H0V1C12.4722 1.71545 15.9266 2.39854 15.9988 33C15.9988 33 16.0067 111 15.9989 111C15.9313 141.601 12.6935 141.282 0 142V143H33Z'

const linePathHuge =
  'M33.9922 633V632C21.5199 631.285 18.0656 631.601 17.9934 601L17.9922 33C18.0598 2.39859 21.2986 1.71766 33.9922 1V0H0.992188V1C13.4644 1.71545 16.9188 2.39854 16.991 33C16.991 33 16.9989 601 16.9911 601C16.9235 631.601 13.6857 631.282 0.992188 632V633H33.9922Z'

const frating = document.querySelector('#fearLines')
let toggle = false

frating.addEventListener('mouseenter', () => {
  const timeline = anime.timeline({
    duration: 500,
    easing: 'easeOutExpo'
  })
  timeline.add({
    targets: ['.hugeLine', '.svg_anim'],
    d: [{ value: toggle ? linePath : linePathHuge }],
    height: [{ value: toggle ? 143 : 633 }],
    viewBox: [{ value: toggle ? '0 0 33 143' : '0 0 33 633' }]
  })
})

frating.addEventListener('mouseleave', () => {
  const timeline = anime.timeline({
    duration: 500,
    easing: 'easeOutExpo'
  })
  timeline.add({
    targets: ['.hugeLine', '.svg_anim'],
    d: [{ value: toggle ? linePathHuge : linePath }],
    height: [{ value: toggle ? 633 : 143 }],
    viewBox: [{ value: toggle ? '0 0 33 633' : '0 0 33 143' }]
  })
})
