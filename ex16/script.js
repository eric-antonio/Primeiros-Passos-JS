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
let list = document.getElementById('flista')
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
        window.alert('Td Ok')
    }else{
        window.alert('Valaor ivalido ou ja ADD!')
    }
}