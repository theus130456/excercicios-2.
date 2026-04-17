function contarLetras() {
    let nome = document.getElementById("nome").value
    if (nome.trim() === "") {
        document.getElementById("resultado").innerText = "Digite o nome valido!"
        return;
    }
}