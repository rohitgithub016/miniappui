import  { useRef, useEffect, useCallback, useState } from "react";
import "./App.css";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const topOffsetRef = useRef<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  console.log(focusedIndex)

  useEffect(() => {
    const firstElement = document.querySelector(".translate-wrapper");
    if (firstElement) {
      topOffsetRef.current = firstElement.getBoundingClientRect().top;
    }
  }, []);

  const handleFocus = useCallback((index: number) => {
    setFocusedIndex(index);

    const allWrappers = document.querySelectorAll(".translate-wrapper");
    const selectedEl = allWrappers[index] as HTMLElement;
    const firstEl = allWrappers[0] as HTMLElement;

    const containerScrollY = containerRef.current?.scrollTop ?? 0;
    const translateYVal =
      selectedEl.getBoundingClientRect().top +
      containerScrollY -
      (topOffsetRef.current ?? 0);

    if (index !== 0) {
      firstEl.style.transform = `translateY(${translateYVal}px)`;
      selectedEl.style.transform = `translateY(-${translateYVal}px)`;
    }

    // Focus and set cursor to end
    const input = selectedEl.querySelector("input") as HTMLInputElement;
    setTimeout(() => {
      if (input) {
        input.focus();
        const len = input.value.length;
        input.setSelectionRange(len, len);
      }
    }, 0);
  }, []);

  const handleBlur = useCallback(() => {
    setFocusedIndex(null);
    const allWrappers = document.querySelectorAll(".translate-wrapper");
    allWrappers.forEach((el) => {
      (el as HTMLElement).style.transform = "unset";
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        overflowY: "auto",
        padding: "16px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2 style={{ marginBottom: 24 }}>Focus any input</h2>

      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="translate-wrapper"
          style={{
            transition: "transform 0.3s ease",
            background: "#fff",
            borderRadius: 8,
            padding: 12,
            marginBottom: 16,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <input
            type="text"
            placeholder={`Input ${index + 1}`}
            style={{ width: "100%", padding: 8 }}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
