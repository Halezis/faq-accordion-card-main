const accordionList = document.querySelectorAll('.accordion-item')

accordionList.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    closeOpenAcc()
    accordion.classList.toggle('open')
  })
})

function closeOpenAcc() {
  accordionList.forEach((accordion) => {
    accordion.classList.remove('open')
  })
}
