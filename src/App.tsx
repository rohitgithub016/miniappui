
import WebApp from '@twa-dev/sdk';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    WebApp.BackButton.isVisible = true;
    WebApp.BackButton.show();
    if(location?.pathname === "/about-us"){
      WebApp?.BackButton?.onClick(()=>{
        navigate("/");
      })
    } else {
      WebApp?.BackButton?.onClick(()=>{
        history?.back();
      })
    }
  },[location?.pathname])
  
  return (
    <div>
      <button onClick={()=>navigate("/career")}>HOME PAGE</button>
    </div>
  )
}

export default App