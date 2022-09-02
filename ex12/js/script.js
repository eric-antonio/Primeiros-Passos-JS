function caregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var sc = window.document.getElementById('sc')
    var data =  new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        sc.style.background = 'antiquewhite'
        imagem.src = 'img/foto-morning.jpg'
        msg.innerHTML = `Bom Dia! <br> Agora são ${hora}h:${minutos}m.`
    }else if(hora >= 12 && hora < 18){
        sc.style.background = ''
        imagem.src = 'img/foto-tarde.jpg'
        msg.innerHTML = `Boa Trade! <br> Agora são ${hora}h:${minutos}m.`
    }else{
        sc.style.background = ''
        imagem.src = 'img/foto-noite.jpg'
        msg.innerHTML = `Boa Noite! <br> Agora são ${hora}h:${minutos}`
    }

}
