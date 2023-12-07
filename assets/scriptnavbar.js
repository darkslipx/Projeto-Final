// JAVASCRIPT DA NAVBAR COM DROPDOWN EM TELAS MENORES

// Espera o DOM estar completamente carregado para executar o código. Isso garante que o código JavaScript seja executado após a página HTML ser carregada evitando bugs.
document.addEventListener('DOMContentLoaded', function()  {
  //Captura o primeiro elemento HTML com a classe "toggle_btn". 
  const toggle_btn = document.querySelector('.toggle_btn');
  //Captura o primeiro ícone dentro de um elemento com a classe "toggle_btn".
  const toggleBtnIcon = document.querySelector('.toggle_btn i');
  //Captura o elemento com a classe "dropdown_menu".
  const dropdown_menu = document.querySelector('.dropdown_menu');
  //Adiciona um evento de clique ao elemento com a classe "toggle_btn".
  toggle_btn.onclick = function(){
      //alterna a presença da classe "open" no elemento com a classe "dropdown_menu", criando um efeito de abrir/fechar.
      dropdown_menu.classList.toggle('open');
      //verifica se a classe "open" está presente em "dropdown_menu".
      const isOpen = dropdown_menu.classList.contains('open');
      //altera o ícone do botão dependendo se o menu está aberto ou fechado, trocando entre um ícone de 'X' e um ícone de 'bars' (barras).
      toggleBtnIcon.classList = isOpen
          ? 'fa-solid fa-xmark'
          : 'fa-solid fa-bars';
  };
});


// WHATSAPP - Duas Ações Verificação de URL e abertura do WhatsApp ou Alternância de classe de um elemento HTML.

function actionToggle() {
    // Verifica se a URL atual contém a palavra "download"
    if (document.location.href.includes("download")) {
        // Se a URL contiver "download", abre uma nova janela ou guia do navegador com o link pré-definido para o WhatsApp
        window.open('https://api.whatsapp.com/send/?phone=553299582927&text=Ol%C3%A1&type=phone_number&app_absent=0', '_blank');
    } else {
        // Se a URL não contiver "download", prossegue com a próxima parte do código

        // Captura o primeiro elemento HTML com a classe "action"
        var action = document.querySelector('.action');
        // Alterna a presença da classe "active" no elemento capturado
        action.classList.toggle('active');
    }
    }
 