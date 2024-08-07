var conteudoSemDados = document.querySelector('#saida_sem_dados');
var conteudoComDados = document.querySelector('#saida_com_dados');
var entrada = document.querySelector('#inputMensagem');
var saida = document.querySelector('#resultado_do_texto');

function resultado() {
    conteudoSemDados.style.display = 'none';
    conteudoComDados.style.display = 'block';
}

function botao_criptografar() {
    const textoCriptografado = criptografar(entrada.value);
    console.log('O texto foi criptografado:', textoCriptografado);
    saida.value = textoCriptografado;
    resultado();
}

function botao_descriptografar() {
    const textoDescriptografado = descriptografar(entrada.value);
    console.log('O texto foi descriptografado:', textoDescriptografado);
    saida.value = textoDescriptografado;
    resultado();
}

function criptografar(mensagemACriptografar) {
    let funcionamento = [["e", "enter"], 
        ["i", "imes"], 
        ["o", "ober"], 
        ["a", "ai"], 
        ["u", "ufat"]];

    for (let indice = 0; indice < funcionamento.length; indice++) {
        mensagemACriptografar = mensagemACriptografar.split(funcionamento[indice][0]).join(funcionamento[indice][1]);
        mensagemACriptografar = mensagemACriptografar.toLowerCase();
    }

    return mensagemACriptografar;
}

function descriptografar(textoDescriptografado) {
    textoDescriptografado = textoDescriptografado.toLowerCase();

    let funcionamento = [["enter", "e"], 
        ["imes", "i"], 
        ["ober", "o"], 
        ["ai", "a"], 
        ["ufat", "u"]];

    for (let indice = 0; indice < funcionamento.length; indice++) {
        textoDescriptografado = textoDescriptografado.split(funcionamento[indice][0]).join(funcionamento[indice][1]);
    }

    return textoDescriptografado;
}

function copiar() {
    var textoParaCopiar = saida.value;
    navigator.clipboard.writeText(textoParaCopiar).then(function () {
        console.log('Texto copiado com sucesso!');
    },

        function (erro) {
            console.error('Erro ao copiar texto: ', err);
        });
    
    limparCampo();
}

function limparCampo() {
    entrada.value = "";
}