// 피보나치 수열 출력, 100회까지

var n_1 = 1;
var n_2 = 1;

console.log(n_1);
console.log(n_2);

for (var i = 0 ; i < 100; i++){
    var n = n_1 + n_2;
    console.log(n);
    n_2 = n_1;
    n_1 = n;
}

// 피보나치 수열 출력, while

n_1 = 1;
n_2 = 1;

console.log(n_1);
console.log(n_2);

while(n_1 < 10000){
    var n = n_1 + n_2;
    console.log(n);
    n_2 = n_1;
    n_1 = n;
}