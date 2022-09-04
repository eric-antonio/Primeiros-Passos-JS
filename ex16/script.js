/*function adicionar(){
    let lista = []
    var  res = window.document.getElementById('st')
    
    var num =  window.document.getElementById('num')
    if(num.value.length == 0){
        window.alert('escreve crl!')
    }else{
        valor = Number(num.value)
        lista.push(valor)
        let item = document.createElement('option')
        item.text=`Numero ${value} adicionado!`
        item.value =`res`
        res.appendChild(item)
    }
}*/

let num = window.document.getElementById('num')
let lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

function inLista(n, l){

    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text=`Numero ${num.value} adicionado!`
        lista.appendChild(item)
        
    }else{
        window.alert('Valaor ivalido ou ja ADD!')
    }
    num.value = ''
    num.focus()
}

 function finalizar(){
    
    if(valores.length == 0){
        alert('ADIONE ALGO CRL')
    }else{
        let tot  = valores.length
        var  maior =  valores[0]
        var menor =  valores[0]

        var soma =0
        var media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma / valores.length
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }


        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos:  ${tot}</p>`
        res.innerHTML += `<p> O maior foi :  ${maior}</p>`
        res.innerHTML += `<p> O menor foi:  ${menor}</p>`
        res.innerHTML += `<p> A soma deu:  ${soma}</p>`
        res.innerHTML += `<p> A media é :  ${media}</p>`
    }
}