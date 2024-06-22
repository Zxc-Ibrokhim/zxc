let first = prompt('Выберите цвет фона')
let second = prompt('Выберите цвет текста')

let Body = document.querySelector('body')
let text = document.querySelector('.paragraf')

Body.style.backgroundColor = first
text.style.color = second