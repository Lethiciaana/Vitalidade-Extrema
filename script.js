const botao = document.querySelector('.botao');
const imagem = document.querySelector('.seringa')
let estadoImagem = 0


function trocarImagem() {
  console.log('oi')

  const img1 =
  'seringa.png';

  const img2 =
  'convite-20.png';

  const img3 =
  'boneca1.png';

  const img4 =
  'seringaVerde.png'


if(estadoImagem === 0){
  console.log(estadoImagem);
  imagem.src = img1;
  estadoImagem++;
} else if(estadoImagem === 1){
  imagem.src = img2;
  estadoImagem++;
}else if(estadoImagem === 2){
  imagem.src = img3;
  estadoImagem ++;
}else if(estadoImagem === 3){
  imagem.src = img4;
  estadoImagem ++;
}
}

botao.addEventListener('click', trocarImagem);
