let curtidas = 0;

const botao = document.getElementById("curtir");
const texto = document.getElementById("likes");

if(botao){

botao.addEventListener("click",function(){

curtidas++;

texto.innerHTML = "Curtidas: " + curtidas;

});

}
