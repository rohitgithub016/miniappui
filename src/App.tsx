import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TabCarousel from "./Components/CaroselAnimation";

const App = () => {
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);
  const [initialHeight, setInitialHeight] = useState<number | null>(null);
  console.log(viewportHeight);

  useEffect(() => {
    const handleResize = () => {
      const height = window.visualViewport?.height || window.innerHeight;

      if (!initialHeight) {
        setInitialHeight(height);
        setViewportHeight(height);
        return;
      }

      setViewportHeight(height);
    };

    window.visualViewport?.addEventListener("resize", handleResize);
    handleResize(); // initial call

    return () => {
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, [initialHeight]);

  return (
    <>
      <div className="flex flex-col items-center gap-4 p-4 h-screen">
        <TabCarousel />
        <input
          inputMode="numeric"
          type="tel"
          defaultValue="Type here..."
          style={{ textAlign: 'end' }}
          // onClick={firstTime ? moveCursorToEnd : () => undefined}
          // onKeyDown={() => setTime(false)}
          // onBlur={() => {
          //   setTime(true)
          // }}
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
      <video
        id="splash-screen-video"
        src="./bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
        preload="auto"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          pointerEvents: "none",
        }}
      ></video>
    </>
  );
};

export default App;
