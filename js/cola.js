// Função para copiar o texto
document.getElementById('copiarBtn').addEventListener('click', function() {
    var texto = document.getElementById('texto');
    texto.select();  // Seleciona o texto
    texto.setSelectionRange(0, 99999);  // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand('copy');

    // Exibe a mensagem de confirmação
    document.getElementById('mensagem').textContent = 'Texto copiado com sucesso!';
});
