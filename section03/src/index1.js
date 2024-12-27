//외부의 모듈 가져오기
// const {add,sub} = require('./math');
// console.log(add(20,20));
// console.log(sub(10,20));

//ESM 모듈 방식
import {add,sub} from './math.js';
import multiply from './math.js';
console.log(add(30,20));
console.log(sub(10,20));
console.log(multiply(10,20));