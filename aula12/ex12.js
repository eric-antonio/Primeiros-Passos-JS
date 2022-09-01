var hora = 20
console.log(`Agora são extamente ${hora} horas.`)
if(hora < 6 ){
    console.log(`São :${hora} da Madrugada!`)
}else if(hora >= 6 && hora < 12){
    console.log(`São : ${hora} da Manhã!`)
}else if(hora >= 12 && hora <18){
    console.log(`São: ${hora} da Tarde!`)
}else if(hora >= 18){
    console.log(`São : ${hora} da Noite!`)
}