const menuOpenEl = document.getElementById('search--open')
const menuCloseE1 = document.getElementById('arrow-back')
const searchMenuE1 = document.getElementById('search_menu')

menuOpenEl.addEventListener("click", function() {
    menuOpenEl.style.display = 'none'
    
    search_menu.style.transform = 'translateX(-50%)'
})

menuCloseEl.addEventListener("click", function() {
    menuOpenEl.style.display = 'block'
    search_menu.style.display = 'none'
})