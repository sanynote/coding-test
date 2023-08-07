// 문자열을 정수로 바꾸기

function solution(s) {

    let a = s.slice(0,1)
    let b = s.slice(1)
    if(a === "+"){
        return Number(b)
        
    } else if(a === "-"){
        return -1 * Number(b)
    }
    else{
        return Number(s)
    }
}