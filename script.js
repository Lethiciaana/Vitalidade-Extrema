const botao = document.querySelector('.botao');

const imagem = document.querySelector('.seringa')

function trocarImagem() {
  console.log('oi')
  imagem.src = 'seringa.png'

  const img1 =
  'seringa.png';

  const img2 =
  'convite-20.png';


if(estadoImagem == 0){
  console.log(estadoImagem);
  imagem.src = img1;
  estadoImagem++;
} else if(estadoImagem === 1){
  imagem.src = img2;
  estadoImagem ++;
}

}

botao.addEventListener('click', trocarImagem);
