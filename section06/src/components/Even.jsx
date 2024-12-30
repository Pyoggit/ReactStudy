import { useEffect } from "react";

const Even = () => {
  //마운트와 언마운트 작동
  useEffect(() => {
    //마운트
    console.log(`Even Mount`);
    return () => {
      //언마운트
      console.log(`Even unmount`);
    };
  }, []);

  return (
    <>
      <h1>Even</h1>
    </>
  );
};

export default Even;
