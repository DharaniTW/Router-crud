import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalContext, GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
