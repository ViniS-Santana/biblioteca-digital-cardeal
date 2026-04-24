// Função para filtrar os livros na tela
function filtrarLivros(categoria) {
    // 1. Pegar todos os botões e remover a classe 'ativo'
    const botoes = document.querySelectorAll('.btn-filtro');
    botoes.forEach(botao => botao.classList.remove('ativo'));

    // 2. Adicionar a classe 'ativo' apenas no botão clicado (usando o evento atual)
    // O event.target funciona aqui porque a função é chamada por um clique (onclick)
    if(event) {
       event.target.classList.add('ativo');
    }

    // 3. Pegar todos os artigos (livros)
    const livros = document.querySelectorAll('.livro');

    // 4. Mostrar ou esconder baseado na categoria
    livros.forEach(livro => {
        // Pega a categoria do livro que está escrita no HTML (ex: data-categoria="cordel")
        const categoriaDoLivro = livro.getAttribute('data-categoria');

        // Se o usuário clicou em "todos" ou se a categoria do livro bate com o clique
        if (categoria === 'todos' || categoriaDoLivro === categoria) {
            livro.style.display = 'flex'; // Mostra o livro
        } else {
            livro.style.display = 'none'; // Esconde o livro
        }
    });
}