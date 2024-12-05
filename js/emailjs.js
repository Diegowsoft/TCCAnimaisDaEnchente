// Inicialização do EmailJS
emailjs.init("GscEl68yS5b4lEZDw");

// Lidar com a submissão do formulário
document.getElementById("formReencontro").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obter o formulário
    const formData = new FormData(e.target);
    const files = document.getElementById("uploadFoto").files;

    // Se o usuário enviou imagens
    if (files.length > 0) {
        // Criar um array de FormData para anexar as imagens
        for (let i = 0; i < files.length; i++) {
            formData.append("foto_pet" + i, files[i]);
        }
    }

    // Enviar o formulário com imagens e outros dados usando o EmailJS
    emailjs.sendForm("service_2fj6p6a", "template_muernmb", formData)
        .then(
            function(response) {
                console.log("Success", response);
                // Exibe a mensagem de sucesso
                const successMessage = document.getElementById("successMessage");
                successMessage.style.display = "block"; // Exibe a mensagem
                // Reseta o formulário
                e.target.reset(); 
                // Desloca para a mensagem de sucesso
                successMessage.scrollIntoView({ behavior: 'smooth' });
            },
            function(error) {
                console.log("Error", error);
                alert("Erro ao enviar o e-mail: " + error.text);
            }
        );
});
