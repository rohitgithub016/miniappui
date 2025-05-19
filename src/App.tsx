import { useEffect, useState } from "react";

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
  );
};

export default App;
