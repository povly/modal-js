class PovlyModal {
    constructor() {
        this.allModals();
        this.allModalShows();
    }
    allModals(){
        const modals = document.querySelectorAll('.modal');
        modals.forEach((modal) => {
            const close = modal.querySelector('.modal__close');
            close.addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            })
        })
    }
    allModalShows(){
        const modalShows = document.querySelectorAll('.modal__show');
        modalShows.forEach((modal) => {
            modal.addEventListener('click', () => {
                const dataModal = modal.getAttribute('data-modal');
                document.querySelector('.modal__' + dataModal).classList.add('active');
                document.body.style.overflow = 'hidden';
            })
        })
    }
}

new PovlyModal();