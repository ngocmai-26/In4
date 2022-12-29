const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const changeColorBrown = $('.color-brown')
const changeColorBlue = $('.color-blue')
const changeColorPink = $('.color-pink')
const changeColorSlogan = $('.text-slogan')
const changeColorName = $('.my-name')
const checkMainBrown = $('.color-check-brown')
const checkMainBlue = $('.color-check-blue')
const checkMainPink = $('.color-check-pink')

changeColorBrown.onclick = function() {
    checkMainBlue.classList.remove('color-main')
    checkMainBrown.classList.add('color-main')
    checkMainPink.classList.remove('color-main')
    changeColorSlogan.classList.add('text-brown')
    changeColorName.classList.add('text-brown')
    changeColorSlogan.classList.remove('text-pink')
    changeColorName.classList.remove('text-pink')
}


changeColorBlue.onclick = function() {
    changeColorSlogan.classList.remove('text-brown')
    changeColorSlogan.classList.remove('text-pink')
    checkMainBlue.classList.add('color-main')
    checkMainBrown.classList.remove('color-main')
    checkMainPink.classList.remove('color-main')
    changeColorName.classList.remove('text-brown')
    changeColorName.classList.remove('text-pink')
}


changeColorPink.onclick = function() {
    changeColorSlogan.classList.add('text-pink')
    checkMainBlue.classList.remove('color-main')
    checkMainBrown.classList.remove('color-main')
    checkMainPink.classList.add('color-main')
    changeColorName.classList.add('text-pink')
}


//Dark-light
const btn = document.querySelector('.box-item-light')
const btn_dark = document.querySelector('.box-item-dark')
const lightmode = document.querySelector('.light_mode')
const darkmode = document.querySelector('.dark_mode')
const light_mode = document.querySelector('.light_mode')
const dark_mode = document.querySelector('.dark_mode')

// Lắng nghe sự kiện click vào button
btn.addEventListener('click', function () {
    document.body.classList.add('dark-theme')
    btn.classList.add('hidden')
    btn_dark.classList.remove('hidden')
})

btn_dark.addEventListener('click', function () {
  // Thêm hoặc xóa class dark-theme ở body
  document.body.classList.toggle('dark-theme')
  btn.classList.remove('hidden')
 btn_dark.classList.add('hidden')
})

