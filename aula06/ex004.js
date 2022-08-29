var nome = window.prompt('Digite o seu Nome: ')
document.write(`Ola <strong>${nome}</strong> seu nome tem ${nome.length} letras `)
// para quebrar linhas podemos usar o <br> dentro di js ou writeln
document.writeln(`Seu nome em maiusculas ${nome.toLocaleUpperCase()}`)
var n = 433434.3434
//n.toLocaleString('pt-BR',{style: 'currency', currency: 'MZN'})- no node mostra 
//document.write(`${n}`)
//alert(`Ola ${nome}`)