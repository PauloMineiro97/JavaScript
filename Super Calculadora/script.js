function tabuada(){
    var num = document.getElementById('txtn')
    var tab =  document.getElementById('seltab')

    if (num.value.length ==0) {
        window.alert('Por Favor! Digite um número')
    
   

    } else {
        var n = Number(num.value)

        var c = 1
        tab.innerHTML =' ' 
        
        while ( c <= 10){
            // Para criar elemento no JS, é necessário criar uma variável, que é o VAR ITEM e o ELEMENTO OPTION// 
            var item =document.createElement('option')
            // Aqui está o será a multiplicação da tabuada dentro do item//
            item.text = `${n} x ${c} = ${n*c}`
            // Para fazer aparecer a tabuada dentro do item, é necessário criar um APPENDCHILD, 
            tab.appendChild(item)
            c++
        }
   

    }



}