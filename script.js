var n = document.querySelector('#txtn')         // PEGANDO NUMERO
var sel = document.querySelector('#selista')    // PEGANDO SELECT
var info = document.querySelector('#info')      // PEGANDO INFORMAÇÕES

var vetor = []

function adicionar(){

    if (n.value.length == 0 || n.value < 1 || n.value > 100){
        alert('[ERRO] Insira um número válido!')
        n.value = ''
    } else {

        if (vetor.indexOf(n.value) == -1){
            vetor.push(n.value)

            // criando option pra colocar no select
            let item  = document.createElement('option')
            item.text = `Item ${n.value} adicionado`
            sel.appendChild(item)


            info.innerHTML = '' //limpar lista de informações
        } else {
            alert('Esse número já foi inserido na lista')
        }
        n.value = '' //limpar caixa de texto dando certo ou errado
        n.focus()
    }

}

function finalizar() {

    if(vetor.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else{
        // Número de elementos no vetor
        info.innerHTML = `Ao todo temos ${vetor.length} números cadastrados<br>`

        // Qual o maior e menor dos elementos
        var maior = 0
        var menor = 0

        for (let i in vetor){

            if (i == 0){
                maior = vetor[i]
                menor = vetor[i]
            }else if (vetor[i]>=maior){
                maior = vetor[i]
            }else if (vetor[i]<=menor){
                menor = vetor[i]
            }
        }
        info.innerHTML += `O maior valor informado foi ${maior}<br>`
        info.innerHTML += `O menor valor informado foi ${menor}<br>`

        // A soma de todos os elementos
        var soma = 0
        for (let i in vetor){
            soma = soma + Number(vetor[i])
        }
        info.innerHTML += `Somando todos os valores, temos ${soma}<br>`

        // A média de todos os elementos
        var media = 0
        media = soma/vetor.length
        info.innerHTML += `A média dos valores digitados é ${media}<br>`

    }
}