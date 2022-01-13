import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ListComponent = () => {
  const [numbers, setNumbers] = useState([]);

  const handleInputNumber = () => {
    let input = document.querySelector("input").value;
    setNumbers((prevState) => {
      let state = [...prevState];
      const item = {
        value: input,
        key: uuidv4(),
      };
      state.unshift(item);
      console.log(item.value);
      console.log(state);
      return state;
    });
  };

  return (
    <div>
      <input id="input"></input>
      <button onClick={handleInputNumber}>Submit</button>
      <ul>
        {numbers.map((item) => (
          <li key={item.key}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
