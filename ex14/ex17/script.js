function tabuada(){
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('stb')
    if( num.value.length == 0 ){
       window.alert('Prencha o espaço!')
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        
    }
    
}