
function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

const img = document.querySelector("#profile img")

if (html.classList.contains('light')) {
img.setAttribute('src', './assets/assets/avatar-light.png')
} else {
 img.setAttribute("src", "./assets/assets/avatar.png")
}

}
    //    if(html.classList.contains('light')){
//        html.classList.remove('light')
//    } else {
//        html.classList.add('light')
//    }



// pegar a tag img substituir a imagem.
//se tiver lightmode adicionar a img else, manter.
