const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");
const arena = document.getElementById("arena");
const mensagem = document.getElementById("mensagem");
 
let tentativa = 0;
 
botaoNao.addEventListener("mouseenter", function(){
    tentativa++;
 
    const largura = arena.clientWidth - botaoNao.offsetWidth;
    const altura = arena.clientHeight - botaoNao.offsetHeight;
 
    const x = Math.random() * largura
    const y = Math.random() * altura
 
    botaoNao.style.left = x + 'px';
    botaoSim.style.top = y + 'px';
 
    mensagem.textContent = "Tentativas de clicar no Não: " + tentativa;
})
 
botaoSim.addEventListener("click", function(){
    mensagem.textContent = "Parabéns! Agora você vai sofrer com os bugs!";
})
 