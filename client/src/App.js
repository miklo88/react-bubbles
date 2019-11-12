import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// importing bubble page/login and connecting the private route.
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  // const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path='/bubbles' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
