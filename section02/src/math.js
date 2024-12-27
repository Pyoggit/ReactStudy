//common js 모듈 시스템
export function add(a,b){
    return a + b;
}

export function sub(a,b){
    return a - b;
}

export default function multiply(a,b){
    return a * b;
}

// //모듈을 외부로 보낸다
// module.exports = {
//     add,
//     sub,

// };

//ESM 모듈 방식
// export {add, sub, multiply};