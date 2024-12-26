//1. promise pending 상태
const promise = new Promise(()=>{
    //2초동안 작업 처리
    setTimeout(()=>{
        console.log("Hello");
    },2000);
});

console.log(promise);

const promise2 = new Promise((resolve, reject)=>{
    //2초동안 작업 처리
    setTimeout(()=>{
        const num = "십";
        if(typeof num === 'number'){
            resolve(num + 10);
        }else{
            reject(`${num}은 숫자가 아닙니다.`);
        }
    },2000);
});

/*
//성공했을때 결과
promise2.then((value)=>{
    console.log(value);
});
//실패했을때 결과
promise2.catch((value)=>{
    console.log(value);
});
*/

// 성공했을때와 실패했을때 처리
promise2.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
});


//선언적인 함수를 통해서 promise 실행
function add(num){
    const promise3 = new Promise((resolve, reject)=>{
        //2초동안 작업 처리
        setTimeout(()=>{
            const num = "십";
            if(typeof num === 'number'){
                resolve(num + 10);
            }else{
                reject(`${num}은 숫자가 아닙니다.`);
            }
        },2000);
    });

    return promise3
}

const promise4 = add(10);

promise4.then((value)=>{
    console.log("promise4" + value);
    return add(20);
}).then((result)=>{
    console.log("promise5" + result)
    return add(30);
}).then((data)=>{
    console.log("promise6" + data)
}).catch((error)=>{
    console.log("promise4~6" + error);
});;


function orderFood(food){
    const promise = new Promise((resolve,reject)=>{
        console.log(food + "음식주문");
        setTimeout(()=>{
            let flag = true;
            if(flag === true){
                resolve(food + "음식 완료");
            }else{
                reject(food + "음식 실패")
            }
        }, 3000);
    });
    return promise;
}

const promise6 = orderFood("떡볶이");


