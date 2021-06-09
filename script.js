document.getElementById('button').addEventListener('click', check)
let age = 0
let date = 'Saturday'

function check () {
  age = document.getElementById('input1').value
  age = parseInt(age)

  date = document.getElementById('input2').value

  if ((date === 'Wednesday' || date === 'Saturday')
  (age > 13 || age < 20)) { 
    document.getElementById('answer').innerHTML = 'You get student pricing.'
  } else {
    document.getElementById('answer').innerHTML = 'You get regular pricing.'
  }
}
