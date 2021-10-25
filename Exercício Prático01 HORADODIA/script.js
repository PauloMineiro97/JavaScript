function carregar () {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas. `

    if (hora >=0 && hora < 12) {
        img.src = 'images/manha1.png'
        document.body.style.background =' lightblue'
       
  
  
    }else if (hora >=12 && hora <18) {
        img.src = 'images/tarde1.png'
        document.body.style.background ='orange'
  
  
  
    } else {
  
      img.src = 'images/night1.png'
      document.body.style.background ='grey'
  
    }
  }