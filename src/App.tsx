import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

function App() {
  const { address, isConnected } = useAccount();
  console.log(address);
  console.log(isConnected);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: 12,
      }}
    >
      <ConnectButton />
    </div>
  );
}

export default App;
