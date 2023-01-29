const i_menu = document.querySelector('.menu');
const menu = document.querySelector('.menu-desplegable');

console.log(i_menu)
console.log(menu)

i_menu.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener("click", e=>{
    if(menu.classList.contains('spread')
        && e.target != menu  && e.target != i_menu ){
            menu.classList.toggle("spread")
    }
})