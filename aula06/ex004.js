var nome = window.prompt('Digite o seu Nome: ')
document.write(`Ola <strong>${nome}</strong> seu nome tem ${nome.length} letras `)
// para quebrar linhas podemos usar o <br> dentro di js ou writeln
document.writeln(`Seu nome em maiusculas ${nome.toLocaleUpperCase()}`)
//alert(`Ola ${nome}`)