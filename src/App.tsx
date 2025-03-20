import { useRef } from "react";

const App = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    console.log("hello");
    if (inputRef.current) {
      if (inputRef.current) {
        inputRef.current.selectionStart = inputRef.current.selectionEnd =
          inputRef.current.value.length;
      }
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        onFocus={handleFocus}
        defaultValue={2343}
        type="number"
        style={{ textAlign: "right" }}
      />
    </div>
  );
};

export default App;
