//==================================================================
export const initSuccessModal = () => {
    const openModalBtn = document.querySelector('[data-action="open-modal"]');
    const closeModalBtn = document.querySelector('[data-action="close-modal"]');
    const backdrop = document.querySelector('[data-modal-backdrop]');
    
    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', handlebackdropClick);
    
    
    function openModal() {
        document.body.classList.add('show-modal');
        window.addEventListener('keydown', handleKeyPress);
    }
    
    function closeModal() {
        document.body.classList.remove('show-modal');
        window.removeEventListener('keydown', handleKeyPress);
    }
    
    function handlebackdropClick(event) {
        if(event.target !== event.currentTarget) {
            return;
        }
    
        closeModal();
    }
    
    function handleKeyPress(event) {
        if(event.code !== 'Escape') {
            return;
        }
    
        closeModal();
    }
}