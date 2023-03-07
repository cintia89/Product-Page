// Slider - comando carrosel
const caixasImagem = document.querySelectorAll('.caixa-img');

caixasImagem.forEach(function(caixa){
    const imagens = caixa.querySelectorAll('img');
    let index = 0;

    function carrosel(){
        index++;

        if(index > imagens.length -1){ //se percorrertodas as imagens volta para primeira
            index = 0
        }
        caixa.style.transform = `translatex(${-index * 310}px)` //310 tamnho da imagem, X => imagem gira na horizontal
    }
    setInterval(carrosel,2500) //2500 segundos
})

// cores

let botoes = document.querySelectorAll('.colors div');

botoes.forEach(function(botao){
    botao.addEventListener('click', function(){
        botoes.forEach(function(outroBotao){
            outroBotao.classList.remove('selecionado')

        })
        botao.classList.add('selecionado')
    })
})
