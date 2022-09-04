let amigo = {nome: 'jose', sexo: 'M', pesso:79.5,
engordar(p=0){
    console.log('Engordou')
    this.pesso += p
}}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.pesso}kg`)