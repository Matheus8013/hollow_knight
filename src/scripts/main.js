document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 3000,
        once: true,
    });

    setTimeout(() => {
        AOS.refresh()
    }, 3000)

    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (botao) => {
            const abaAlvo = botao.target.dataset.tabButton;
            console.log(abaAlvo);
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            escondeTodasAbas();
            if (aba) { // Verifique se o elemento aba foi encontrado
                aba.classList.add('personagens__list--is-active');
            }
            removeButtonActive();
            botao.target.classList.add('personagens__tab__button--is-active');
        });

        for (let i = 0; i < questions.length; i++) {
            questions[i].addEventListener('click' , abreOuFechaResposta)
        };
    }

    function removeButtonActive() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('personagens__tab__button--is-active');
        }
    }

    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('personagens__list--is-active');
        }
    }
});

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe)
};

