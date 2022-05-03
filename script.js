function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique o ano e tente novamente')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'image')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'assets/images/menino.jpg')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'assets/images/homemjovem.jpg')
      } else if (idade < 45) {
        //jovem adulto
        img.setAttribute('src', 'assets/images/jovemadulto.jpg')
      } else if (idade < 60) {
        //adulto
        img.setAttribute('src', 'assets/images/homem.jpg')
      } else {
        //idoso
        img.setAttribute('src', 'assets/images/idoso.jpg')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'assets/images/menina.jpg')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'assets/images/mulher.jpg')
      } else if (idade == 36) {
        //Van

        img.setAttribute('src', 'assets/images/van.jpg')
      } else if (idade < 45) {
        //jovemadulta
        img.setAttribute('src', 'assets/images/mulher2.png')
      } else if (idade < 60) {
        //adulto
        img.setAttribute('src', 'assets/images/mulher3.jpg')
      } else {
        //idoso
        img.setAttribute('src', 'assets/images/idosa.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade`
    res.appendChild(img)
  }
}
