let btn = document.querySelectorAll('.btn')
let chevron = document.querySelectorAll('.fa-chevron-down')
let times = document.querySelectorAll('.fa-times')
let faq = document.querySelectorAll('.faq')

btn.forEach(x=>{
    x.addEventListener('click', ()=>{
        x.parentNode.classList.toggle('active')
    })
})