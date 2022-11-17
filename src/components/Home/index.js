import React from 'react'
import Inputs from "../Inputs/inputs"
import InputValues from "../InputValues/InputValues"
function Home() {
  const [state, setState] = React.useState();
  const [inputsValue, setInputsValue] = React.useState({
    email: "",
    fullname: "",
  });
  const [isShowResult, setIsShowResult] = React.useState(true);

  return (
    <>
      {isShowResult ? (
        <Inputs
          inputsValue={inputsValue}
          setInputsValue={setInputsValue}
          setIsShowResult={setIsShowResult}
        />
      ) : (
        <InputValues
          fullname={inputsValue.fullname}
          email={inputsValue.email}
          setIsShowResult={setIsShowResult}
        />
      )}
    </>
  );
}

export default Home;