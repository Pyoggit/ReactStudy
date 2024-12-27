function Main(){

    const number = 9;
    const obj = {name: "jp", age: 27};

    return(
       <>
       <h1>Main</h1>
       <h2>삼항연산자가능 = {number % 2 === 0? "짝수":"홀수"}</h2>
       <h2>숫자표기가능 = {10}</h2>
       <h2>number = {number}</h2>
       <h2>[1,2,3] = {[1,2,3]}</h2>
       <h2>true = {true}</h2>
       <h2>undefined = {undefined}</h2>
       <h2>null = {null}</h2>
       <h2>obj.name = {obj.name}</h2>
       
       </>
    );
  }

  export default Main;