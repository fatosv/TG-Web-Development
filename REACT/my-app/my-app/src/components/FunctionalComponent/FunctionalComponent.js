import React, { useState }  from "react"

export default function FunctionalComponent() {

  const [inputText, setInputText] = useState(" ");

  const changeHandler = (e) => {
    setInputText(e.target.value)
  }
  return (
    <div>
      <p>this is a function</p>
      <input onInput={changeHandler} />
      <p>{inputText}</p>
    </div>
  );
}
