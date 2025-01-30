import { SERVICES } from "../config/Config"

export const Services = () => {

    const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close');

    let modal = function (modalClick: any) {
        modalViews[modalClick].classList.add('active-modal');
    };

    modalBtns.forEach((modalBtn, i) => {
        modalBtn.addEventListener('click', () => {
            modal(i);
        })
    });

    modalCloses.forEach(modalClose => {
        modalClose.addEventListener('click', () => {
            modalViews.forEach((modalView) => {
                modalView.classList.remove('active-modal');
            });
        });
    });

    return (
        <div>
        
        </div>
    )
}