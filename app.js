const card = document.querySelector('.grid__card')

card.addEventListener('click', () => {
card.classList.toggle('grid__card--flipped')
})