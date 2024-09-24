document.getElementById("meuForm").addEventListener("submit", function (event){
    event.preventDefault(); //impede o envio padrão do formulário

    //Cpatura os valores dos campos do formulário
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("msg").value;

    //verificação de campos vazios
    if(nome === "" || email === "" || mensagem === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert("Enviado com sucesso!")
});

function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });

}

    function playSound() {
        let clickSound = document.getElementById('selecionasom');
        clickSound.play();
    };

    function submitQuiz() {
        // Desabilita o botão de envio após ser clicado
        let enviarBtn = document.getElementById('botaoEnvio');
        enviarBtn.disabled = true;
    
        // Habilita o botão de "Responder novamente"
        let resetBtn = document.getElementById('botaoNovo');
        resetBtn.disabled = false;

        let correctAnswers = {
            q1: "D",
            q2: "B",
            q3: "C",
            q4: "B",
            q5: "A",
            q6: "D",
            q7: "A",
            q8: "B",
            q9: "C",
            q10: "C",
        };
    

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswer = form.elements[key].value;
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`;

    if (score === 10) {
        let successSound = document.getElementById('venceusom');
        successSound.play();
    
    } 
    
    else {
        let badSound = document.getElementById('perdeusom');
        badSound.play();
    }
        
}

function resetQuiz() {
    // Reabilita o botão de envio quando o quiz é reiniciado
    let enviarBtn = document.getElementById('botaoEnvio');
    enviarBtn.disabled = false;

    // Desabilita o botão de "Responder novamente" novamente
    let resetBtn = document.getElementById('botaoNovo');
    resetBtn.disabled = true;

    // Limpa as respostas e reseta o formulário
    document.getElementById('quiz-form').reset();

    // Reabilita as opções de resposta
    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled = false);

    // Limpa o resultado
    let result = document.getElementById('result');
    result.innerHTML = "";
}

