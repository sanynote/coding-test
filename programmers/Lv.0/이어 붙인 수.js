// 정수가 담긴 리스트 num_list가 주어집니다. 
// num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 
// return하도록 solution 함수를 완성해주세요.


// const arr = [1,4,3,9]

// function solution () {

//     let even = []
//     let odd = []

//     arr.forEach((item,index)=>{
//         if(item%2 === 0) {
//  even.push(String(item))

//         } else {
//             odd.push(String(item))
//         }
//     })

//    const answer= Number(even.join(''))+Number(odd.join(''))

//    return answer
   
// }

// console.log(solution())

const arr = [1,4,3,9]

function solution () {
    let odd = []
    let even = []

    arr.forEach((item)=>{
        if(item % 2 === 0) even.push(item)
        if(item % 2 === 1) odd.push(item)
    })

    const answer = Number(odd.join("")) + Number(even.join(""))
    return answer
}

console.log(solution())