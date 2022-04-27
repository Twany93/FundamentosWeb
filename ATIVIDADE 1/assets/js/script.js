// JavaScript: Case sensitive
// criação de variáveis:
// var: para escopo global
// let: escopo local (utilizamos mais por boas práticas)
//const: constante

// no JavaScript as variáveis não são tipadas
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

// seletor id é o "#"

// podemos realizar essa procura por :
/*
tag: getElementByTagName()
nome: getElementByName()
por classe: getElementByClassName()
por seletor: querySelector() 
*/

nome.style.width = '100%'
email.style.width = '100%'

// por boa prática sempre utilizar nomes óbvios
// saber o tamanho através de length
function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML ='Nome inválido!'
        txtNome.style.color = 'red'
    }else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOK=true
    }

}

// verificar se o email tem os requisitos básicos
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@')==-1  || email.value.indexOf('.')==-1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color ='red'
    }else{
        txtEmail.innerHTML= 'Email válido'
        txtEmail.style.color ='green'
        emailOK=true
    }

}


function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length>=100){
        txtAssunto.innerHTML = 'Texto deve possuir no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOK = false
    }else{
        txtAssunto.style.display = 'none'
        assuntoOK=true
    }
}

function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true){
      alert('Formulário enviado com sucesso')  
    } else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom(){
    mapa.style.width = '700px' 
    mapa.style.height= '500px' 
}

function mapaNormal(){
    mapa.style.width = '400px' 
    mapa.style.height= '200px' 
}