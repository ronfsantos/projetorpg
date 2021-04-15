function lucasAf1() {

    alert('O filho chamado Lucas A.possui uma grande furtividade e possui um pet que o ajuda durante os combate, Lucas pode controlar quaisquer humanos após tranformá-los em zumbi.')
    alert('Você entrou no shopping destruído para sobreviver')

    var luta = '';

    var luta = prompt('Você esta na primeira etapa, o que pretende fazer? :\n1- fugir \n2- atacar o humano')
    if (luta == 1) {
        alert('Proibido a fulga na primeira etapa!')
    } else if (luta == 2) {

        alert('Voce atacou o humano e o venceu parabéns vá para o proximo cenário')
        return lucasAf2()
    }






    // document.getElementById('faseButton').innerHTML = ' <button onclick="lucasAf2()">Iniciar fase 2</button>'
    var botao = document.getElementById('faseButton')
    console.log(botao);


}


function lucasAf2() {


    var luta = '';

    var luta = prompt('Vai desistir ou seguir em frente? :\n1- fugir \n2- atacar o humano')
    if (luta == 1) {
        alert('Você é novo mais aprende !')
    } else if (luta == 2) {

        alert('Voce atacou o humano e o venceu parabéns vá para o proximo cenário')
        return lucasAf3()
    }
}

function lucasAf3() {


    var luta = '';

    var luta = prompt('A vida não é fácil mas você consegue :\n1- fugir \n2- atacar o humano')
    if (luta == 1) {
        document.write('Você perdeu game over')
    } else if (luta == 2) {

        document.write('Você perdeu game over')
    } else {
        document.write('Você perdeu!!')
    }
}