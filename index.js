const dropdownMenu = document.querySelector('.dropdown-title');
const dropdownContent = document.querySelector('.dropdown-content'); 


const showMenu = () => {
    dropdownContent.classList.toggle('visible');
}

const hideMenu = (e) => {
    if (e.target !== dropdownMenu) {
        dropdownContent.classList.remove('visible');
    }
}

dropdownMenu.addEventListener('click', showMenu);
window.addEventListener('click', hideMenu);