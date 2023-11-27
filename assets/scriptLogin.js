// JAVASCRIPT DO LOGIN/REGISTRO DA PÁGINA LOGIN

// Espera o DOM estar completamente carregado para executar o código. Isso garante que o código JavaScript seja executado após a página HTML ser carregada evitando bugs.
document.addEventListener('DOMContentLoaded', function() {
    // Captura o elementos HTML com o ID 'container' 'register' 'login'
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    //Adiciona um ouvinte de evento de clique ao botão com ID "register". Quando clicado, ele adiciona a classe "active" ao elemento com ID "container".
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });
    //Adiciona um ouvinte de evento de clique ao botão com ID "login". Quando clicado, ele remove a classe "active" do elemento com ID "container".
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
   
});