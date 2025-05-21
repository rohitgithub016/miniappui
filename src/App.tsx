import WebApp from "@twa-dev/sdk";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
    console.log((window as any)?.webkit, 'webkit object', ((window as any)?.webkit as any)?.messageHandlers);
    if ((window as any)?.webkit && ((window as any)?.webkit as any)?.messageHandlers) {
      console.log(((window as any)?.webkit.messageHandlers as any)?.iOS);
    }
  }, []);

  console.log(firstTime)

  console.log(WebApp?.viewportHeight)

  return (
    <div className="flex flex-col items-center gap-4 p-4 h-screen">
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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
      <Link to={'/home'}>Home</Link>
      <Link to={'/about-us'}>About Us</Link>

      </div>

    </div>
  );
};

export default MoveCursorToEnd;
