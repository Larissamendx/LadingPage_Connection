let formOpen = false

function clickButton() {
    let wrapper = document.querySelector(".fundo .container .col-6")
    let form = wrapper.querySelector(".Form")
    
    wrapper.classList.toggle("form-mobile-open")

    formOpen = !formOpen
    console.log('click', formOpen)
}