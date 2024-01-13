function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

   // pegar tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if( html.classList.contains("light")) {
  // se tiver light mode, adicionar a imagem light
img.setAttribute("src", "./assets/avatar-light.png ","alt","Foto de Lucas, com camisa social branca, cabelo preto, com celular na mão")
  } else {
  // se tiver sem light mode, manter a imagem normal
img.setAttribute(
 "src",
  "./assets/avatar.png.png",
  "alt",
  "Foto de Lucas, com camisa preta, cabelo preto, com celular na mão"
)
  }
  
}