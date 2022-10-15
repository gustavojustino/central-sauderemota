//  -------------------- FUNÇÕES ------------------------- //



// Primeira etapa - Solicita nome do usuário dinamicamente.
function step1() {
    var labelName = document.createElement;
    labelName = '<label for="sendName">Por favor, diga o seu nome completo:</label>'

    var inputName = document.createElement;
    inputName = '<input type="text"  id="sendName" placeholder="ex: Luis Gustavo..." required>'

    var submitName = document.createElement;
    submitName = '<input type="submit" value="Prosseguir" onclick="setName()" id="submitInputs"></br>'

    // adiciona na div result os elementos que solicitam o nome.
    return document.getElementById('result').innerHTML += `${labelName} ${inputName} ${submitName}`
}

// Função que ao clicar no submit 'prosseguir' é chamada, salva e válida o nome do usuário de step1
setName = () => {
    var reciveName = document.querySelector('#sendName').value;
    if (reciveName.length == 0 || reciveName.length > 64) {
        alert('Por favor, digite um nome válido!');
    }
    else {
        document.getElementById('result').innerHTML = `Certo, ${reciveName.toUpperCase()}! Vamos precisar de mais algumas informações, elas servem para auxiliar o seu teleatendimento.</br>` + step2()
    }
}

// Segunda etapa - Solicita idade do usuário dinamicamente.
function step2() {
    var labelAge = document.createElement;
    labelAge = '<label for="sendAge">Por favor, diga a sua idade:</label>'

    var inputAge = document.createElement;
    inputAge = '<input type="number"  id="sendAge" placeholder="ex: 23..." required="">'

    var submitAge = document.createElement;
    submitAge = '<input type="submit" value="Prosseguir" onclick="setAge()" id="submitInputs"></br>'

    // adicionar na div result os elementos que solicitam a idade.
    return document.getElementById('result').innerHTML = `${labelAge} ${inputAge} ${submitAge}`;
}

// Função que ao no submit 'prosseguir' é chamada, salva e válida a idade do usuário step2
setAge = () => {
    var reciveAge = document.querySelector('#sendAge').value;
    if (reciveAge < 0 || reciveAge > 120) {
        alert('Por favor, digite uma idade válida!');
    }
    else {
        document.getElementById('result').innerHTML += `Muito bem! Agora precisamos saber seu peso e altura:</br>` + step3()
    }
}

// Terceira etapa - Solicita altura e peso do usuário dinamicamente.
function step3() {
    var inputWeight = document.createElement;
    inputWeight = '<input type="text" id="sendWeight" placeholder="ex 76kg..." required="">'

    var inputHeight = document.createElement;
    inputHeight = '<input type="text" id="sendHeight" placeholder="ex 1,80..." required=""></br>'

    var submitWeightAndHeight = document.createElement;
    submitWeightAndHeight = '<a href="./attendance.html"><input type="submit" value="Iniciar atendimento"  id="submitInputs"></a></br>'
    return document.getElementById('result').innerHTML = `${inputWeight} ${inputHeight} ${submitWeightAndHeight}`;
}




//  -------------- INICIO  ----------------
step1()