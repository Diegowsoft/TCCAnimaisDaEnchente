document.getElementById("botaoParaDescer").addEventListener("click", function (e) {
    e.preventDefault(); // Evita comportamento padrão do link
    document.getElementById("form").scrollIntoView({
        behavior: "smooth"
    });
});
