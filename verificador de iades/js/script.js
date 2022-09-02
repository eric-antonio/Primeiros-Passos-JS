function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')


    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique o ano Novamente!')
    }else{
       var radsex = window.document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       res.innerHTML = `Idade calculada: ${idade}`
    }

}