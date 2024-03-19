var solution = 10;
var input = prompt("수를 맞춰주세요.");

console.log(input);

if (input > solution + 2){
    alert('답이 당신이 입력한 값보다 작습니다.');
} else if (input < solution - 2){
    alert('답이 당신이 입력한 값보다 큽니다');
} else{
    if (input == solution){
        alert('정답입니다!');
    } else{
        alert('정답과 가깝습니다.')
    }
}

var gender = prompt('성별을 입력해주세요.')

switch (gender) {
    case '남자' :
        alert("male");
        break;
    case '여자' :
        alert("female");
        break;
    default :
        alert("정확한 성별을 입력해주세요.");
}