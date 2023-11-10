import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Home'
import Login from "./Components/Login";

export default function App() {

  return (

    <Router>

      <Route path="/home" component={Home} />

      <Route path="/login" component={Login} />

    </Router>

  );

}

