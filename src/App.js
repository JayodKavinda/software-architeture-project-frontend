import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import SensorsList from "./components/SensorsList";


function App() {
  return (
    <div>
      <Header />
      <SensorsList />      
    </div>
   
  );
}

export default App;

