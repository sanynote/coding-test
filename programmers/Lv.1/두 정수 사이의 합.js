// 두 정수 사이의 합

function solution(a, b) {
    let answer = 0;
    if(a>=b){ 
        for(let i=b; i<=a; i++) { 
            answer = answer+=i;
        }
    } else if(a<b) { 
        for(let i=a; a<=b; i++) {
            answer = answer+=i;
        }
    }
    return answer;
}

console.log(solution(3,6),'f루루')
