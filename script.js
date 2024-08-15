// Função que soma dois números
function soma(a, b) {
    return a + b;
}

// Função que subtrai dois números
function subtrai(a, b) {
    return a - b;
}

// Função que multiplica dois números
function multiplica(a, b) {
    return a * b;
}

// Função que divide dois números
function divide(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero!";
    }
    return a / b;
}

// Vinculando a função ao HTML
document.getElementById("resultado").innerText = soma(5, 3);
