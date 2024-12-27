//매개변수로 값 할당
function Button({text,color,size,children}){

    //내부 스크립트 함수(선언식,표현식,람다식)
    const onClickButton = (e) =>{
        console.log(e);
        alert(text);
    }

    return(
      <>
        <button onClick = {onClickButton} style={{color: color}}>{text}{children}</button>
      </>
       
    )
  };

Button.defaultProps = {
    text: '게시판',
    color: 'yellow',
};

//구조 분해 할당
// function Button({img,name}){
//     return(
//       <>
//         <h1>푸터</h1>
//       </>
       
//     );
//   }


  export default Button;