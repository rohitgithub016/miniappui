import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./component/NavBar";
import AnimatedRoutes from "./component/AnimatedRoutes";

const App = () => {

  return (
    <Router>
      <NavBar />
      <AnimatedRoutes/>
    </Router>
  );
};

export default App;
