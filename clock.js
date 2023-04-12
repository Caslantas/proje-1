let userName = prompt('Lütfen Adınızı Giriniz')
let firstName = document.querySelector('#myName')
firstName.innerHTML = `${userName}`

function tarihSaat() {
  let date = new Date().toLocaleString('tr-TR')
  document.getElementById('myClock').innerHTML = date
}
setTimeout(tarihSaat, 1000)
