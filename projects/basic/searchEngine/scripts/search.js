window.addEventListener('load', function(){

});

var headerButtons = document.querySelectorAll('header div');

for (var i = 0; i < headerButtons.length; i++){
    controlHeaderButton(headerButtons[i]);
}

function controlHeaderButton (headerButton) {
    var buttonSelector = headerButton.querySelector('button');

    if (headerButton.className.includes('text')){
        
    } else{
        buttonSelector.addEventListener("click", () => controlModal(headerButton));
    }

}

function controlModal (headerButton){
    if (headerButton.className.includes('userprofile')){
        var selectedButton = headerButton.querySelector('img');
        selectedButton.classList.toggle('imgClicked');
    }

    var modal = headerButton.querySelector('iframe');
    modal.classList.toggle('show');

}