import { useState } from "react";
import { IParser } from './types';

export default function Parser(props:IParser) {
  const [inputValue, setInputValue] = useState<string>(props.url);

  function handelChangeInput(event: { currentTarget: { value: React.SetStateAction<string>; }; }): void {
    console.log(event.currentTarget.value);
    setInputValue(event.currentTarget.value);
  }

  return (
    <>
      <div className="ui input">
        <input type="text" onChange={handelChangeInput} value={inputValue} />
      </div>
      <div>{inputValue}</div>
    </>
  );

}

