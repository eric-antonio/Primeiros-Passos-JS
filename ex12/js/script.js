function caregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data =  new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        imagem.src = 'img/foto-morning.jpg'
        msg.innerHTML = `Bom Dia! <br> Agora são ${hora}h:${minutos}m.`
    }else if(hora >= 12 && hora < 18){
        imagem.src = 'img/foto-tarde.jpg'
        msg.innerHTML = `Boa Trade! <br> Agora são ${hora}h:${minutos}m.`
    }else{
        imagem.src = 'img/foto-noite.jpg'
        msg.innerHTML = `Boa Noite! <br> Agora são ${hora}h:${minutos}`
    }

}
