function luizHf1() {

    alert('O pai chamado Luis H. Altas habilidade técnicas que o ajudam a produzir armas que o assistência durante o combate, pode gerar clones para lutar enquanto ele foge.')
    alert('Cuidado há humanos pronto para ataca-lo')


    var luta = '';

    var luta = prompt('Você esta na primeira etapa, o que pretende fazer? :\n1- fugir \n2- atacar o humano')
    if (luta == 1) {
        alert('Proibido a fulga na primeira etapa!')
    } else if (luta == 2) {

        alert('Voce atacou o humano e o venceu parabéns vá para o proximo cenário')
        return luizHf2()
    }



    //document.getElementById('faseButton').innerHTML = ' <button onclick="luizHf2()">Iniciar fase 2</button>'
    var botao = document.getElementById('faseButton')
    console.log(botao);

}


function luizHf2() {


    var luta = '';

    var luta = prompt('Você vai construir uma arma ou fugir?= :\n1- fugir \n2- atacar o humano')
    if (luta == 1) {
        alert('Pra que fugir você domina o PHP use!')
    } else if (luta == 2) {

        alert('Voce atacou o humano e o venceu parabéns vá para o proximo cenário')
    }
    document.getElementById('faseButton').innerHTML = ' <button onclick="luizHf3()">Iniciar fase 2</button>'
}

function luizHf3() {

    var luta = '';

    var luta = prompt('A vitória está próxima vai desistir? :\n1- fugir \n2- atacar o humano')
    if (luta == 1) {
        document.write('Você venceu parabéns hacker')
    } else if (luta == 2) {

        document.write('Você venceu usando as "boas práticas"')
    } else {
        document.write('Você perdeu pois escolheu uma opção inexistente')
    }
}