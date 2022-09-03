function contar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0|| passo.value.length == 0){

        window.alert('PRECHE AI CRL')
    }else{
        res.innerHTML= 'Contando....'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p<=0){
            window.alert('Passo sera considerado = 1')
            p = 1
        }

        if(i<f){
            //Crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{27A1} `
            }
        }else{
            //Regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{27A1} `
            }
        }
        
    }

}