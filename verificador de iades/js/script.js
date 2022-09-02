function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')


    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique o ano Novamente!')
    }else{
        window.alert('Tudo Ok!')
    }

}