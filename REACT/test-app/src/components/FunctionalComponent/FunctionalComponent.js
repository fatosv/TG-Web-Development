export default function FunctionalComponent({inputText, setInputText}) {

  const changeHandler = (e) => {
    setInputText(e.target.value)
  }
  return (
    <div>
      <p>This is a Functional Component {inputText}</p>
      <input onInput={changeHandler} />
    </div>
  );
}
