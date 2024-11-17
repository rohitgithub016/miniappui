import WebApp from "@twa-dev/sdk";
import "./style.css";
import { useEffect } from "react";

export default function App() {
  WebApp.setBackgroundColor("#EFEFF4")

  useEffect(()=>{
    window.addEventListener("focus", () => {
      window.scrollTo(0, 0);
    })
  },[])
  
  return (
    <div className="App" style={{height:'100vh', overflow: 'scroll'}}>
      <div className="fix-bottom-button" onClick={()=>alert("hello")}>I am fix at bottom</div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
      <input type="number"></input>
      <input type="number"></input>
      <input type="number"></input>
      <input type="number"></input>
      <input type="number"></input>
      <input type="number"></input>
      <input type="number"></input>
      <input type="number"></input>
      <input type="number"></input>
      </div>

      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <h2>Start editing to see some magic happen!</h2>
      <br />
    </div>
  );
}