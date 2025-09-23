import React from "react";
import Hello from "./componenet/Hello";
import HelloProps from "./componenet/HelloProps";
import UseState from "./componenet/UseState";

function App(){

  return (
    <div>
      <Hello/>
      <HelloProps name="Nilesh"/>
      <HelloProps name="Vintech"/>
      <UseState/>
      
    </div>
  );

}

export default App;
