import './App.css';
import { useState } from "react";
import { Form } from "./components/Form";
import { GitHubApi } from './components/GitHubApi';

function App() {
 


  return (
    <div>
      <Form label="Username" />
      {/* <GitHubApi /> */}
    </div>
  );
}

export default App;
