window.addEventListener('load', function(){
    clearMessages();

    var formElement = document.querySelector('form');
    formElement.onsubmit = submitForm;

});

function clearMessages(){
    var messages = document.getElementsByClassName('alert-message');
    for (var i = 0; i < messages.length; i++){
        messages[i].style.display = 'none';
    }
}

function showMessage(inputElement, message) {
    var messageElement = inputElement.parentNode.querySelector('span');
    messageElement.style.display = 'inline';
    messageElement.innerText = message;

    inputElement.focus();
}

function submitForm() {
    // 제출마다 오류 메세지 초기화
    clearMessages();
    
    //account info
    var accountInput = document.querySelector('input[name = "account"]');
    var passwordInput = document.querySelector('input[name = "password"]');
    var password2Input = document.querySelector('input[name = "password2"]');

    //select, radio, checkbox
    var selectInput = document.querySelector('select[name="birthmonth"]');
    var radioInput = document.querySelector('input[name="gender"]:checked');
    var checkInput = document.querySelector('input[name="agree"]');
/*
    console.log(accountInput.value);
    console.log(passwordInput.value);
    console.log(password2Input.value);
    console.log(selectInput.value);
    console.log(radioInput.value);
    console.log(checkInput.value);
*/
      var validated = true;

    if (accountInput.value.length < 6){
        showMessage(accountInput, '계정은 6자리 이상이어야 합니다.');
        validated = false;
    }

    if (passwordInput.value.length < 10){
        showMessage(passwordInput, '비밀번호는 10자리 이상이어야 합니다.');
        validated = false;
    }

    if (password2Input.value !== passwordInput.value) {
        showMessage(password2Input, '비밀번호를 동일하게 입력해주세요.');
        validated = false;
    }

    return false;
}