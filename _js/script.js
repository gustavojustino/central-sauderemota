/* - @Gustavo - FrontEnd Developer
- Projeto realizado a título de estudos e entrega do Projeto Integrado Multidisciplnar VII da Universidade Paulista.
- Os dados tratados nesse projeto não são salvos em db mas em váriaveis temporárias, ficam visíveis apenas durante a permanencia na página. */

//  -------------- INICIO  ----------------
step1()

//  -------------------- VARIAVEIS ------------------------- //
var reciveName, reciveAge, reciveWeight, reciveHeight, textSymptoms, imc;

//  -------------------- FUNÇÕES ------------------------- //

// Primeira etapa - Solicita nome do usuário dinamicamente.
function step1() {
    var labelName, inputName, submitName  = document.createElement;
    labelName = `<label for="setName">Por favor, diga o seu nome completo:</label>`
    inputName = `<input type="text"  id="setName" placeholder="ex: Luis Gustavo..." required>`

    submitName = `<input type="submit" value="Prosseguir" onclick="setName()" id="submitInputs"></br>`

    // adicionam na div result através dos placeholders os elementos que solicitam o nome.
    return document.getElementById('result').innerHTML += `${labelName} ${inputName} ${submitName}`;
}

// Função que ao clicar no submit 'prosseguir' é chamada, salva e válida o nome do usuário de step1()
setName = () => {
    reciveName = document.querySelector('#setName').value;
    if (reciveName.length <= 1 || reciveName.length > 64 || reciveName === Number) {
        alert('Por favor, digite um nome válido!');
    }
    else {
        document.getElementById('result').innerHTML = `Certo, ${reciveName.toUpperCase()}! Vamos precisar de mais algumas informações, elas servem para auxiliar o seu teleatendimento.</br>` + step2()
    }
}

// Segunda etapa - Solicita idade do usuário dinamicamente.
function step2() {
    var labelAge, inputAge, submitAge = document.createElement;
    labelAge = '<label for="setAge">Por favor, informe a sua idade:</label>'
    inputAge = '<input type="number"  id="setAge" placeholder="ex: 23..." required>'

    submitAge = '<input type="submit" value="Prosseguir" onclick="setAge()" id="submitInputs"></br>'

    // adicionam na div result através dos placeholders os elementos que solicitam a idade.
    return document.getElementById('result').innerHTML = `${labelAge} ${inputAge} ${submitAge}`;
}

// Função que ao clicar no submit 'prosseguir' é chamada, salva e válida a idade do usuário step2()
setAge = () => {
    reciveAge = document.querySelector('#setAge').value;
    if (reciveAge < 0 || reciveAge > 120) {
        alert('Por favor, digite uma idade válida!');
    }
    else {
        document.getElementById('result').innerHTML = `Muito bem! Agora precisamos saber seu peso e altura:</br>` + step3()
    }
}

// Terceira etapa - Solicita altura e peso do usuário dinamicamente.
function step3() {
    
    var labelWeight, inputWeight, labelHeight, inputHeight, submitWeightAndHeight = document.createElement;
    labelWeight = `<label>Peso:</label>`
    inputWeight = `<input type="text" id="setWeight" placeholder="ex 76..." required>`
 
    labelHeight = `<label>Altura:</label>`
    inputHeight = `<input type="text" id="setHeight" placeholder="ex 1.80..." required></br>`

    submitWeightAndHeight = `<input type="submit" value="Prosseguir" onclick="setSymptoms()"  id="submitInputs"></br>`
    return document.getElementById('result').innerHTML = `${labelWeight} ${inputWeight} ${labelHeight} ${inputHeight} ${submitWeightAndHeight}`;
}

// Função que irá validar peso, altura, gerar imc e pedir informações sobre sintomas e retornar stepfinal().
const setSymptoms = () => {
    reciveWeight = document.querySelector('#setWeight').value;
    reciveHeight = document.querySelector('#setHeight').value;

    imc = reciveWeight/ Math.pow(reciveHeight, 2);
    if (reciveWeight < 0 || reciveHeight < 0) {
        alert('Não é possível inserir valores negativos.')
    } else
    if (reciveWeight.length == 0 && reciveHeight.length == 0 || reciveWeight == undefined || reciveHeight == undefined) {
        alert('Por favor, insira seu peso e altura.');
    } else
    if (reciveWeight.length == 0 && reciveHeight.length > 0 || reciveWeight.length > 0 && reciveHeight.length == 0) {
        alert('Peso ou altura está em branco, por favor preencha o campo vazio.');
    } else {
        if (imc > 30.0 ) {
            document.getElementById('result').innerHTML = `${reciveName.toUpperCase()}, seu imc é ${imc.toFixed(2)}. Neste caso,
            seu peso é classificado(a) como obesidade e você deve inserir </br> essa informação a seguir.</br>`    
        } 
        
        var labelGenre, selectGenre, labelClassification, selectClassification, labelSmoker, selectSmoker, labelSymptoms, submitSymptoms = document.createElement;

        labelGenre = `<label for="">Genêro:</label>`
        selectGenre = 
        `<select id="genre" name="genre">
            <option value="default" selected="selected">Selecione seu gênero</option>
            <option value="masculine">Masculino</option>
            <option value="female">Feminino</option>
        </select></br>`

        labelClassification = `<label for="">Classificação:</label>`
        selectClassification = 
        `<select id="classification" name="classification">
            <option value="default" selected="selected">Selecione sua classificação</option>
            <option value="hypertensive">Hipertenso</option>
            <option value="obesity">Obesidade</option>
            <option value="allergic">Alérgico</option>
            <option value="others">Outros</option>
        </select></br>`

        labelSmoker = `<label for="">Fumante?</label>`
        selectSmoker = 
        `<select id="smoker" name="smoker">
            <option value="default" selected="selected">Selecione uma opção</option>
            <option value="yes">Sim, sou fumante.</option>
            <option value="no">Não sou fumante.</option>
        </select></br>`

        labelSymptoms = `<label>Por favor, agora descreva brevemente seus sintomas,
        a partir de agora, você será conectado com um médico ou o nosso sistema irá processar sua prescrição
        e retornar às recomendações de acordo com a legislação e as normas médicas.</label></br>`
        textSymptoms = `<input type="text" id="symptoms" name='symptoms' required></br> `

        submitSymptoms = `<input type="submit" value="Enviar" onClick="location.href='attendance.html'"   id="submitInputs">`

        return document.getElementById('result').innerHTML += `${labelGenre} ${selectGenre} ${labelSmoker} ${selectSmoker}
        ${labelClassification} ${selectClassification} ${labelSymptoms} ${textSymptoms} ${submitSymptoms}`;  
    }
}

const finalStep = () => {
    document.getElementById('attendance').innerHTML +=  `${reciveName.toUpperCase()}, neste momento não é possível conecta-lo com um médico.
    entretanto, separamos algumas orientações para você. Veja a seguir:`
}
 