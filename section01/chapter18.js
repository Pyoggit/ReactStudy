// 1단계 음식을 주문하는 상황
function orderFood(food, callback){
    console.log(food + "음식주문")
    setTimeout(()=>{
        callback(food);
    },3000);
}

orderFood("떡볶이", (food)=>{
    console.log(food + "음식제작 완성");
});