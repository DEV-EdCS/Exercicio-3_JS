//Questão 01
/*const centrais = document.getElementsByClassName('centralizar')
let nome = prompt("Qual o seu nome?")

const nome = document.createElement('h1')
nome_place.innerHTML = nome
document.querySelector('body').appendChild(nome_place)*/



//Questão 02
let btn = document.querySelector('.eye')
btn.addEventListener('click', function () {
  let input = document.querySelector('#input-password-wrapper')
  if (input.getAttribute('type') == 'password') {
    input.setAttribute('type', 'text')
  } else {
    input.setAttribute('type', 'password')
  }
})

const senha = document.querySelector('.senha')
const botao = document.querySelector('.botao')
const visualzacao = document.querySelector('.visualizacao')

let visivel = false

visualzacao.addEventListener('click', () => {
    if(visivel) {
        senha.type ='password'
        botao.buttom = 'Mostrar'
        visivel = false
    } else {
        senha.type ='text'
        botao.buttom = 'Esconder'
        visivel = true
    }
})