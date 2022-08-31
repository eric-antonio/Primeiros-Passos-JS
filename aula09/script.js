//Aqui pegamos um elemento pela sua tag e indicamos o indice do tal elemento
var p1 = window.document.getElementsByTagName('p')[1]
// De seguida usamos o elemento armazenado na variavel p1 para concatenas a outra mensagem!
window.document.write('Esta escrito assim: ' + p1.innerText)

//Tambem é possivel estilizar os componentes das Do HTML
p1.style.color = 'red'

/* 
    É possivel pergarmos um escopo do programa e estilizar!
*/
var corpo = window.document.body
corpo.style.background = 'black'


var d = window.document.getElementById('dv1')
d.style.color = 'blue'
d.style.background = 'cyan'