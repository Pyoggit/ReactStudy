//비동기 처리 작업 진행
function task(){
    setTimeout(()=>{
        console.log("Hello")
    },3000)

}
function task2(callback){
    setTimeout(callback(),3000);

}


//task();
task2(()=>{
    console.log("hello2");
});

//비동기 처리 작업진행 2
function add(a,b){
    const sum = a + b;
    setTimeout(()=>{
        console.log(sum);
    },3000)

}

function add2(a,b,callback2){
    setTimeout(callback2,3000)
}

add2(10,20, (a,b)=>{
    const sum = a+b;
    console.log(sum);
})


function add3(a,b,callback3){
    setTimeout(()=>{
        const sum = a + b;
        callback3(sum);
    },3000)

}
add3(100,200, (sum)=>{
    console.log(sum);
})
