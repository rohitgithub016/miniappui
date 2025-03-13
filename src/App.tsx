import WebApp from "@twa-dev/sdk";

const App = () => {
  const handleDownload = () => {
    WebApp?.openLink(
      "https://hubz-transaction-subscriber.s3.ap-southeast-1.amazonaws.com/csv/subscribers_67d0f6bfe692857b0a53f19d_20250313175147969.csv"
    );
  };

  const handleDownload1 = () => {
    const link = document.createElement("a");
    link.href =
      "https://hubz-transaction-subscriber.s3.ap-southeast-1.amazonaws.com/csv/subscribers_67d0f6bfe692857b0a53f19d_20250313175147969.csv";
    link.setAttribute("download", `GroupMem.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ background: "white" }}>
      <button onClick={handleDownload}>Hello</button>
      <button onClick={handleDownload1}>Hello1</button>
    </div>
  );
};

export default App;
