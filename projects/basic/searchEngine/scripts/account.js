
var closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => closeModal());


function closeModal() {
    window.parent.postMessage("closeAccountModal", "*");
}