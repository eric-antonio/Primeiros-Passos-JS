var a = window.document.querySelector('div#area')
function clicar(){
    //Acontece quando clicar no mousse
    a.innerText = 'Clicou!'
    a.style.background = 'orange'
}

function entrar(){
    // quando o mouse entra ele  fica cinzento!
    a.innerText = 'Entrou!'
    a.style.background = 'green'
}

function sair(){
    var b = window.document.getElementById('area')
    b.innerText = 'Saiu!'
    b.style.background = 'red'
}