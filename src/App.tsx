import { useRef } from "react";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    containerRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    console.log("Input clicked");
  };

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
      <input onClick={handleClick}/>
      <input onClick={handleClick}/>
      <input onClick={handleClick}/>
      <input onClick={handleClick}/>
      <input onClick={handleClick}/>
      <input onClick={handleClick}/>
      <input onClick={handleClick}/>
      <input onClick={handleClick}/>
      <input onClick={handleClick}/>


      <div style={{ position: "fixed", bottom: 20, right: 20 }}>
        <button onClick={scrollToTop} style={{ padding: "10px 20px" }}>
          Scroll to Top
        </button>
      </div>
    </div>
  );
}

export default App;
