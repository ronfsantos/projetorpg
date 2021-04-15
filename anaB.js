function anaBf1() {

    alert('A mãe chamada Ana B. com fortes vínculos familiares, pratica Ioga todos os dias, tem um bom diálogo , uma flexibilidade e adaptação muito contundente')
    alert('Você entrou no shopping destruído para sobreviver')

    var luta = '';

    var luta = prompt('Você esta na primeira etapa, o que pretende fazer? :\n1- fugir \n2- atacar o humano')
    if (luta == 1) {
        alert('Proibido a fulga na primeira etapa!')
    } else if (luta == 2) {

        alert('Voce atacou o humano e o venceu parabéns vá para o proximo cenário')
        return anaBf2()
    }



    //document.getElementById('faseButton').innerHTML = ' <button onclick="lucasAf2()">Iniciar fase 2</button>'
    var botao = document.getElementById('faseButton')
    console.log(botao);
}


function anaBf2() {


    var luta = '';

    var luta = prompt('Você esta enrascada, o que pretende fazer? :\n1- fugir \n2- atacar o humano')
    if (luta == 1) {
        alert('Você esquivou mas não está segura')
    } else if (luta == 2) {

        alert('Voce atacou o humano e o venceu parabéns vá para o proximo cenário')
        return anaBf3()
    }
}

function anaBf3() {

    var luta = '';

    var luta = prompt('Falta pouco para superar, :\n1- fugir \n2- atacar o humano')
    if (luta == 1) {
        document.write('Você venceu parabéns guerreira')
    } else if (luta == 2) {

        document.write('Você perdeu game over')
    } else {
        document.write('Você perdeu!!')
    }
}