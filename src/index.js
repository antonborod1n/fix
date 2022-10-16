import "./scss/main.scss";

const upBtn = document.querySelector('.arrow-up'); // кнопка 

window.onscroll = () => {
    if (window.scrollY > 350) { // когда опускается на 350px появляется кнопка НАВЕРХ
        upBtn.classList.add('arrow-up--active'); // Добавляем класс
    } else {
        upBtn.classList.remove('arrow-up--active'); // Удаляем класс
    }
};

