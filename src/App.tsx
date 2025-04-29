const App = () => {
  return (
    <div style={{width: "100vw", height: "100vh", overflow: "hidden"}}>
      <video style={{objectFit: 'cover'}} src="./bg.mp4" autoPlay width={"100%"} height={"100%"} loop muted></video>
    </div>
  );
};

export default App;
