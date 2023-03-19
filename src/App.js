import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
// import About from './components/About';
import TextFrom from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1400);
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" />
        <Alert alert={alert} />
        <div className="container my-5">
          {/* <Routes> */}
            {/* <Route path="/About" element={<About/>}>
            </Route> */}
          <TextFrom showAlert={showAlert} heading="Enter the text to analyse" />
      

      </div>
      {/* </Routes> */}
      {/* </Router> */}
    </>

  );
}


export default App;
