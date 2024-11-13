// Função para salvar o usuário no localStorage
function cadastrarUsuario(username, password) {
    if (username && password) {
        localStorage.setItem(username, password);
        alert('Usuário cadastrado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos para cadastro.');
    }
}

// Função de login para verificar o usuário e senha
document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se o usuário e a senha estão no localStorage
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('orderSystem').style.display = 'block';
    } else {
        document.getElementById('loginMessage').innerText = 'Nome de usuário ou senha incorretos.';
    }
});

// Função de cadastro de usuário
document.getElementById('registerButton').addEventListener('click', function() {
    const username = prompt("Digite o nome de usuário para cadastro:");
    const password = prompt("Digite a senha para cadastro:");
    cadastrarUsuario(username, password);
});
