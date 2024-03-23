let botaoLimite = true;
let numeroMaximo;
let tentativas = 1;
let numeroSecreto;
function exibirTextoNaTela(tag,texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemMaxima(){
exibirTextoNaTela("h1","Numero Secreto!");
exibirTextoNaTela("p","escolha o numero maximo");
exibirTextoNaTela("button","limite")
}
mensagemMaxima();

function mensagemInicial(numeros)
{
    exibirTextoNaTela("h1","Numero Secreto!");
    exibirTextoNaTela("p",`escolha um numero entre 1 e ${numeros}`);
    exibirTextoNaTela("button", "chute");
    console.log(numeros);
}



function GerarNumeroAleatorio()
{
    console.log(numeroMaximo);
    return parseInt(Math.random()*numeroMaximo + 1);
}

function verificarChute()
{
    if(botaoLimite == true)
    {
        numeroMaximo = document.querySelector("input").value;
        mensagemInicial(numeroMaximo);
        botaoLimite = false;
        console.log(numeroMaximo);
        limparCampo();
        numeroSecreto = GerarNumeroAleatorio();
    }
    else
    {

        let chute = document.querySelector("input").value;
        console.log(chute);
        console.log(numeroSecreto);

        if(numeroSecreto == chute)
        {
            let pTentativas = tentativas > 1? "tentativas" : "tentativa"; 
            exibirTextoNaTela("p","Você acertou com ("+tentativas+") "+ pTentativas+ "!!");
            exibirTextoNaTela("h1","Parabenss!!")
            document.getElementById('reiniciar').removeAttribute("disabled");
        }
        else if(numeroSecreto>chute)
        {
            exibirTextoNaTela("p","Porem o numero é maior!");
            exibirTextoNaTela("h1","Errou!!");
            tentativas++
            limparCampo();
        }
        else
        {
            exibirTextoNaTela("p","Porem o numero é menor!");
            exibirTextoNaTela("h1","Errou!!");
            tentativas++
            limparCampo();
        }
     }
    }

    function limparCampo()
    {
        chute = document.querySelector("input");
        chute.value = null;
    }

    function reiniciarJogo()
    {
        numeroSecreto = GerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        mensagemInicial(numeroMaximo);
        document.getElementById('reiniciar').setAttribute('disabled', true);
    }