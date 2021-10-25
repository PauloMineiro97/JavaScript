function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pass = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if ( ini.value.length ==0 || fim.value.length ==0 || pass.value.length ==0 ) {

        window.alert('[ERROR] Faltam dados!')
      
    } else {
        res.innerHTML = `Contando:  <br> ` 
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)

        if (p<=0){
            window.alert('Passo inválido! Considerando passo = 1')
            p = 1
        }    

        if (i < f )  {

          for(var c = i; c <= f; c+=p){
              res.innerHTML += `${c} \u{1F603}`
            }
        }else {
            for (var c  = i; c>= f ; c-=p) {
                res.innerHTML += `${c} \u{1F603}`
             }

         
        }
        res.innerHTML += `\u{1F3C1}`
    }   

      




}