// 순서 바꾸기

// 정수 리스트 num_list와 정수 n이 주어질 때, 
// num_list를 n 번째 원소 이후의 원소들과
// n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 
// n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.

// 예시 num_list = [5, 2, 1, 7, 5]
// 정수 n = 3
// result = [7, 5, 5, 2, 1]


let list = [5, 2, 1, 7, 5]
const n = 3

function solution (a,b) {

    const c = a.slice(b)
    const d = a.slice(0,b)
    return [...c,...d]
}

console.log(solution(list,n),'result')