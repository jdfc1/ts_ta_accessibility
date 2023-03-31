// Seleciona todos os botões de abas
const botoes = document.querySelectorAll('.abas button');

// Seleciona todos os conteúdos das abas
const conteudos = document.querySelectorAll('.conteudo');


// Adiciona um ouvão de clique a cada botão
botoes.forEach((botao, index) => {
     botao.addEventListener('click', () => {
     // Remove a classe "active" de todos os botões
     botoes.forEach((botao) => botao.classList.remove('active'));
     // Adiciona a classe "active" somente no botão clicado
     botao.classList.add('active');
     // Oculta todos os conteúdos das abas
     conteudos.forEach((conteudo) => conteudo.style.display = 'none');
     // Exibe somente o conteúdo correspondente à aba clicada
     conteudos[index].style.display = 'block';
     });
 });