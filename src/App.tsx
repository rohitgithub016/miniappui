import WebApp from "@twa-dev/sdk"
import { useEffect } from "react"


const App = () => {
  useEffect(() => {
    // This is a placeholder for any side effects or initializations  
    WebApp?.expand();
    WebApp?.disableVerticalSwipes();
    WebApp?.requestFullscreen();
  }, [])

  console.log(WebApp?.contentSafeAreaInset);
  console.log(WebApp?.safeAreaInset)
  return (
    <div>App</div>
  )
}

export default App