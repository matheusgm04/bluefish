const btnMobile = document.getElementById('btn-mobile'); /* Linha para selecionar o botão 'btn-mobile'*/

function toggleMenu(event){ /* Verificar o tipo de evento que tá ocorrendo*/
    if(event.type === 'touchstart') event.preventDefault() /* Se o evento for igual ao de touchstart previne o padrão*/
    const nav = document.getElementById('nav'); /* Criando a função*/
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu); /* Ativando a função de toggleMenu que equivale a: adicione caso não tenha, remoca caso tenha*/

/* Quando se utiliza a evento de Click no mobile, esse evento de click emula o evento de touch. Só que ele demora 300 milissegundos para fazer isso. Para melhorar essa pequena demora, adiciona-se o toggleMenu ao evento de touchstart também */

btnMobile.addEventListener('touchstart', toggleMenu); /* Ativando a função de toggleMenu a partir do touch */