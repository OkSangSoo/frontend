var list = [
    {questions : "이 중 가장 좋아하는 과일을 선택해주세요.", options:["사과", "복숭아", "포도", "바나나", "수박"]},
    {questions : "이 중 가장 좋아하는 음식을 선택해주세요.", options:["피자", "짜장면", "햄버거", "떡볶이", "파스타"]},
    {questions : "이 중 가장 좋아하는 동물을 선택해주세요.", options:["강아지", "고양이", "토끼", "여우", "곰"]}
]

console.log(list);

// 질문에 대한 답변 수집, 숫자로 답변 받아야 함
for (var i = 0; i < list.length; i++){
    var questionMessage = list[i].questions + '\n';
    for (var j = 0; j < list[i].options.length; j++){
        questionMessage += (j+1) + '. ' + list[i].options[j] + ' ';
    }
    list[i].answer = prompt(questionMessage);

}

console.log(list);

// 질문에 대한 답변 출력, 숫자로 받은 답변을 답변 내용으로 해석해서 출력
for (var i = 0; i < list.length; i++){
    var index = parseInt(list[i].answer);
    alert(list[i].questions + '\n당신의 선택 : ' + list[i].options[index-1]);
}