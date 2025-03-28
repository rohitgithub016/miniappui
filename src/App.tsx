import WebApp from "@twa-dev/sdk";
import { useEffect, useRef, useState } from "react";

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
  useEffect(() => {
    console.log((window as any)?.webkit, 'webkit object');
    if ((window as any)?.webkit && ((window as any)?.webkit as any)?.messageHandlers) {
      (window as any).webkit.messageHandlers.iOS.postMessage({ type: "showDoneButton" });
    }
  }, []);

  console.log(firstTime)

  console.log(WebApp?.viewportHeight)

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <input
        inputMode="numeric"
        type="tel"
        ref={inputRef}
        defaultValue="Type here..."
        style={{ textAlign: 'end' }}
        onClick={firstTime ? moveCursorToEnd : () => undefined}
        onKeyDown={() => setTime(false)}
        onBlur={() => {
          setTime(true)
        }}
      />
    </div>
  );
};

export default MoveCursorToEnd;
