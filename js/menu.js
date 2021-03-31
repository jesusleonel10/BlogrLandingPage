const menuContainer = document.querySelector('#container-items');
const button = document.querySelector('#button-menu');

button.addEventListener("click", () => {
        menuContainer.classList.toggle("container-items--mostrar");
        button.classList.toggle("button-menu--open");
    }, false);

        

