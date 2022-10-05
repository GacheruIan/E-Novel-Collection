import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import About from "./components/About";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  const [page, setPage] = useState("/")

  return (

    <div className="App">
      <NavBar onChangePage = {setPage}/>
      <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/form">
            <Form />
        </Route>
        <Route exact path="/">
            <Main />
        </Route>
      </Switch>
    
    </div>
  );
}

export default App;
