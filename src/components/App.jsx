import React from "react";
import Login from "./Login";
import Register from "./Register";
import Input from "./Input";

let userIsRegistered = false;

function App() {
  return (
    <div className="container">
    
    {userIsRegistered ? <Login /> : <Register />}

    {/* <form className="form">
        <Input 
            type="text"
            placeholder="Username"
        />
        <Input 
            type="password"
            placeholder="Password"
        />
        {!userIsRegistered && <Input
          type="password"
          placeholder="Confirm Password"
          />}
        <button type="submit">{userIsRegistered ? "Login" : "Register"}</button>
    </form> */}
  
      
    </div>
  );
}

export default App;