import { useRef, useState } from "react";

const MoveCursorToEnd = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [firstTime, setTime] = useState(true);

  const moveCursorToEnd = () => {
    console.log("asdfasdf")
    if (inputRef.current) {
      const length = inputRef.current.value.length;
      inputRef.current.focus();
      inputRef.current.setSelectionRange(length, length);
    }
  };

  console.log(firstTime)

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <input 
        ref={inputRef} 
        defaultValue="Type here..." 
        style={{textAlign: 'end'}}
        onClick={firstTime ? moveCursorToEnd : () => undefined}
        onKeyDown={()=>setTime(false)} 
        onBlur={()=>{
          setTime(true)
        }}
      />
    </div>
  );
};

export default MoveCursorToEnd;
