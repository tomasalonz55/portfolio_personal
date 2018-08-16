window.addEventListener('load',async e=>{
	if('serviceWorker' in navigator){
try{
	navigator.serviceWorker.register('sw.js');
	scope: '.';
	console.log('Registrado');
}catch (error) {
console.log('No registrado');
}

	}
});

//Seleccionar del DOM
const menuBtn= document.querySelector('.menu-btn');
const menu= document.querySelector('.menu');
const menuNav= document.querySelector('.menu-nav');
const menuBranding= document.querySelector('.menu-branding');
const navItems= document.querySelectorAll('.nav-item');

//Estado inicial del menu
let showMenu = false;
 
menuBtn.addEventListener('click',toogleMenu);

function toogleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //estado del menu
        showMenu = true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //estado del menu
        showMenu = false;
    }
}