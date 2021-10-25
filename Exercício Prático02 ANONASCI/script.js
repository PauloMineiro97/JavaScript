function verificar() {
  var data =new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if(fano.value.length == 0 || fano.value > ano) {
    window.alert('[Erro] Verifique os dados e tente novamente!.')
  } else {
    var fsex= document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML = `Idade calculada: ${idade}`
    var genero = ""
    var img = document.createElement('img')
    

    if(fsex [0].checked) {
      genero ='Homem'

      if(idade >=0 && idade < 21){
        
        img.setAttribute('src', 'menino.png')


      }else if (idade >21) {
       
        img.setAttribute('src', 'homem.png')



      }else if (idade  >50) {
        
        img.setAttribute('src', 'velho.png')


      }
      
      
      
      
     } else if (fsex[1].checked){
      genero ='Mulher'
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

  }


}