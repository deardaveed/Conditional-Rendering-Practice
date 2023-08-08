import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Form text="Login" /> : <Form text="Register" />}
    </div>
  );
}

export default App;
