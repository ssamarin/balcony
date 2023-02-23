const modals = () => {

    function closeModal(modal) {
        modal.classList.add('hide');
        modal.classList.remove('show');
    }

    function openModal(modal) {
        modal.classList.add('show');
        modal.classList.remove('hide');
    }

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                openModal(modal);
            });
        });

        close.addEventListener('click', () => {
            closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains('show')) { 
                closeModal(modal);
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "";
        }, time);
    }
        
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);
};

export default modals;
