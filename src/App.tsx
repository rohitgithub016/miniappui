import WebApp from "@twa-dev/sdk";
import "./style.css";
import { useEffect } from "react";

WebApp.setBackgroundColor("#EFEFF4")
WebApp.expand();
WebApp.disableVerticalSwipes();

export default function App() {

  useEffect(()=>{
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', () => {
        document.body.style.height = (window?.visualViewport?.height) + 'px';
      });
    }
    // This will ensure user never overscroll the page
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) window.scrollTo(0, 0);
    });
    
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