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

let pedidos = [];

document.getElementById('registrarPedido').addEventListener('click', function() {
    const nomeCliente = document.getElementById('nomeCliente').value;
    const checkboxes = document.querySelectorAll('#produtos input[type="checkbox"]');
    let produtosSelecionados = [];
    let total = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            produtosSelecionados.push(checkbox.value);
            total += parseInt(checkbox.value.split('- R$ ')[1]); // Assume que o valor está após '- R$ '
        }
    });

    if (nomeCliente === "" || produtosSelecionados.length === 0) {
        alert('Por favor, preencha o nome do cliente e selecione pelo menos um produto.');
    } else {
        pedidos.push({ cliente: nomeCliente, produtos: produtosSelecionados, total: total });
        document.getElementById('resultado').innerHTML = `
            <h2>Pedido Registrado</h2>
            <p>Cliente: ${nomeCliente}</p>
            <p>Produtos: ${produtosSelecionados.join(', ')}</p>
            <p>Total: R$ ${total}</p>
        `;
    }
});

document.getElementById('calcularTroco').addEventListener('click', function() {
    const valorRecebido = parseFloat(document.getElementById('valorRecebido').value);
    const totalPedido = pedidos.length > 0 ? pedidos[pedidos.length - 1].total : 0;

    if (valorRecebido < totalPedido) {
        document.getElementById('trocoResultado').innerText = 'Valor recebido insuficiente.';
    } else {
        const troco = valorRecebido - totalPedido;
        document.getElementById('trocoResultado').innerText = `Troco a ser devolvido: R$ ${troco.toFixed(2)}`;
    }
});