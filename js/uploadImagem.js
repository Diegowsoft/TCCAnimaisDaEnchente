document.getElementById("uploadFoto").addEventListener("change", function (event) {
    var files = event.target.files;
    
    // Limpa a visualização anterior
    document.getElementById("previewContainer").innerHTML = "";
    
    // Verifica se o número de imagens selecionadas é maior que 10
    if (files.length > 10) {
        alert("Você pode selecionar no máximo 10 imagens.");
        return;
    }

    // Exibe as imagens selecionadas
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();

        reader.onload = function (e) {
            // Cria o contêiner para a imagem
            var imagePreview = document.createElement("div");
            imagePreview.classList.add("image-preview");

            // Cria a tag de imagem
            var imgElement = document.createElement("img");
            imgElement.src = e.target.result;
            imgElement.classList.add("preview-img");

            // Cria o botão de remover a imagem
            var removeButton = document.createElement("span");
            removeButton.classList.add("remove-image");
            removeButton.textContent = "×";

            // Remove a imagem com animação quando clicada
            removeButton.addEventListener("click", function () {
                // Adiciona a classe de animação ao contêiner da imagem
                imagePreview.classList.add("fade-out");

                // Remove o elemento após a animação
                setTimeout(function() {
                    imagePreview.remove();
                }, 500); // O tempo da animação é de 500ms
            });

            // Adiciona a imagem e o botão de remoção ao contêiner
            imagePreview.appendChild(imgElement);
            imagePreview.appendChild(removeButton);
            document.getElementById("previewContainer").appendChild(imagePreview);
        };

        reader.readAsDataURL(file);
    }

    // Exibe o contêiner de pré-visualização com grid
    document.getElementById("previewContainer").style.display = "grid";
});

document.getElementById("formReencontro").addEventListener("submit", function(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();
    
    // Exibe a mensagem no console
    console.log("O e-mail foi enviado com sucesso e entraremos em contato em breve!");
});