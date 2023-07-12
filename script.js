const menu = document.querySelector('#menu');
const header = document.querySelector('header');

menu.addEventListener('click', fecharHeader);

function fecharHeader(){
    header.classList.toggle('close');
}
