// 제일 작은 수 제거하기


function solution(arr) {
    if(arr.length === 1) return [-1]
    
    const minNum = Math.min(...arr)
    const indexNum = arr.indexOf(minNum)
    arr.splice(indexNum,1)
    // -> 최소값이 찍히고 배열은 바뀌어있다.
    
    return arr
}

const arr = [9,7,2,1,5]
console.log(solution([arr]))