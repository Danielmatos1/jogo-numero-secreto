const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak) // exibi de fato o que falo no console

function onSpeak(e) {
  chute = e.results[0][0].transcript
  exibeChuteNaTela(chute)
  verificaSeOChutePossuiUmValorValido(chute) // verifica se o tipo e inteiro se esta dentro do ranger
}
function exibeChuteNaTela(chute) {
  // reconhece a fala
  elementoChute.innerHTML = `
    <div>Voce disse</div>
    <span class= "box">${chute}</span> 
  `
}
