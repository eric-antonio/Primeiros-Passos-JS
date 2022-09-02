function caregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var p = window.document.getElementById('p')
    var data =  new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        window.document.body.style.background = 'antiquewhite'
        p.style.color='black'
        imagem.src = 'img/foto-morning.jpg'
        msg.innerHTML = `Bom Dia! <br> Agora são ${hora}h:${minutos}m.`

    }else if(hora >= 12 && hora < 18){

        window.document.body.style.background = 'rgba(255, 105, 5, 0.637)'
        p.style.color = ''
        imagem.src = 'img/foto-tarde.jpg'
        msg.innerHTML = `Boa Trade! <br> Agora são ${hora}h:${minutos}m.`

    }else{

        window.document.body.style.background = 'grey'
        p.style.color = ''
        sc.style.background = ''
        imagem.src = 'img/foto-noite.jpg'
        msg.innerHTML = `Boa Noite! <br> Agora são ${hora}h:${minutos}`

    }

}
