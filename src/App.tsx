import WebApp from "@twa-dev/sdk";
import { Flex } from "antd";
import { useCallback, useEffect, useRef } from "react";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetContainerFirstElementTopPos = useRef<number | null>(null);

  // Capture the initial top position of the first .translate-to-top element
  useEffect(() => {
    const firstElement = document.querySelector(".translate-to-top");
    if (firstElement) {
      widgetContainerFirstElementTopPos.current =
        firstElement.getBoundingClientRect().top;
    }
  }, []);

  const handleAnimatePosition = useCallback((index: number) => {
    const getAllWidgetContainer = document.querySelectorAll(".translate-to-top");
    const getFirstWidgetInputElement = getAllWidgetContainer[0];
    const getSelectedWidgetInputElement = getAllWidgetContainer[index];
    const containerScrollY = containerRef.current?.scrollTop ?? 0;

    if (!getFirstWidgetInputElement || !getSelectedWidgetInputElement || widgetContainerFirstElementTopPos.current == null) return;

    const translateYVal =
      getSelectedWidgetInputElement.getBoundingClientRect().top +
      containerScrollY -
      widgetContainerFirstElementTopPos.current;

    if (index !== 0) {
      (getFirstWidgetInputElement as HTMLElement).style.transform = `translateY(${translateYVal}px)`;
      (getSelectedWidgetInputElement as HTMLElement).style.transform = `translateY(-${translateYVal}px)`;

      setTimeout(() => {
        const inputField = getSelectedWidgetInputElement.querySelector("input") as HTMLInputElement;
        if (inputField) {
          const inputFieldLength = inputField.value.length;
          inputField.focus();
          inputField.setSelectionRange(inputFieldLength, inputFieldLength);
        }
      }, 0);

      (getSelectedWidgetInputElement as HTMLElement).scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  const handleResetAnimatePosition = useCallback(() => {
    const getAllWidgetContainer = document.querySelectorAll(".translate-to-top");
    getAllWidgetContainer.forEach((element) => {
      (element as HTMLElement).style.transform = "unset";
    });
  }, []);

  useEffect(() => {
    if (Number(WebApp?.version) > 8) {
      WebApp?.ready();
      WebApp?.expand();
      WebApp?.requestFullscreen();
      WebApp?.disableVerticalSwipes();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        overflowY: "scroll",
        padding: "20px",
        boxSizing: "border-box",
        background: "#f9f9f9",
      }}
    >
      <h1>Scroll Down</h1>
      {[...Array(30)].map((_, i) => (
        <p key={i}>This is paragraph #{i + 1}</p>
      ))}

      <Flex vertical>
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="translate-to-top"
            style={{
              transition: "transform 0.3s ease",
              margin: "8px 0",
              background: "#fff",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
            <input
              placeholder={`Input ${i + 1}`}
              style={{ width: "100%", padding: "8px" }}
              onFocus={() => handleAnimatePosition(i)}
              onBlur={handleResetAnimatePosition}
              inputMode="decimal"
            />
          </div>
        ))}
      </Flex>

      <div style={{ position: "fixed", bottom: 20, right: 20 }}>
        <button
          onClick={() => {
            containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{ padding: "10px 20px" }}
        >
          Scroll to Top
        </button>
      </div>
    </div>
  );
}

export default App;
