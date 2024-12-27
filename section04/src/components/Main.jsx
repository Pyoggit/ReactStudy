import "./Main.css"

function Main(){

    const number = 9;
    const obj = {name: "jp", age: 27, isLogin: false};

    if(obj.isLogin === true){
        return(<div className="logout">{obj.name} 로그아웃</div>);
    }else{
        return(<div className="login">{obj.name} 로그인</div>);       
    }
  };

  export default Main;