const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <a href="https://example.com" target="_self">
        Open in Same Tab
      </a>

      <a href="https://example.com" target="_blank">
        Open in New Tab
      </a>

      <a href="https://example.com" target="_parent">
        Open in Parent Frame
      </a>

      <a href="https://example.com" target="_top">
        Open in Full Window
      </a>

      <iframe name="myFrame" width="400" height="300"></iframe>
      <a href="https://example.com" target="myFrame">
        Open in Named Iframe
      </a>
    </div>
  );
};

export default App;
