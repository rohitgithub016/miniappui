import { useRef } from "react";

const App = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(
          inputRef.current.value.length,
          inputRef.current.value.length
        );
      }
    }, 0);
  };

  return (
    <div>
      <input
        ref={inputRef}
        onFocus={handleFocus}
        defaultValue={2343}
        type="number"
        style={{ width: "100%", textAlign: "right" }}
      />
    </div>
  );
};

export default App;
