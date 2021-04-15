var escolPers = '';

function startGamer() {


    while (true) {
        var escolPers = prompt('Escolha um personagem: \n1- Lucas A.\n2- Ana B.\n3- Luiz H.')
        if (escolPers == 1) {
            alert('Lucas A. escolhido')
            document.getElementById('faseButton').innerHTML = '<h1>Primeira parte</h1><button onclick="lucasAf1()">Iniciar primeira parte</button>'
            document.getElementById('faseButton').innerHTML = '<h1>Primeira parte</h1><button onclick="anaBf1()">Iniciar primeira parte</button>'
            document.getElementById('faseButton').innerHTML = '<h1>Primeira parte</h1><button onclick="luizHf1()">Iniciar primeira parte</button>'

            lucasAf1()
            break;
        } else if (escolPers == 2) {
            alert('Ana B. selecionada')

            anaBf1()
            break;
        } else if (escolPers == 3) {
            alert('Luiz H. selecionado')

            luizHf1()
            break;
        } else {
            alert('Personagem invalido')
        }
    }
}



function fim() {
    alert("Jogo finalizado")
    document.getElementById('demo').innerHTML = 'Inicio de jogo'
    document.getElementById('faseButton').innerHTML = '<button onclick="startGamer()">Iniciar jogo</button>'
}