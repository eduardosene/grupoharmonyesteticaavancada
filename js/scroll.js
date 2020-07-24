const menuItems = document.querySelectorAll('.navbar-collapse a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref(element){
    const id = element.getAttribute('href')
    return to = document.querySelector(id).offsetTop
}

function scrollToIdOnClick(event){
    event.preventDefault()
    const to = getScrollTopByHref(event.target) - 90

    scrollToPosition(to)
}
function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}

