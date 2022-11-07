import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React , {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (messgae, type) => {
    setAlert({
      msg : messgae,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#282828';
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtilis - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is A amazing"
      // }, 1000);
      // setInterval(() => {
      //   document.title = "TextUtils is New"
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = "TextUtilis - Light Mode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TestUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
              <Alert alert={alert}/>
      <Routes>
          <Route path="/about" element= {<About />}></Route>
           
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>}> </Route>
          
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
