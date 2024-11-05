import './Appa.css';
import React, {useState} from 'react';
import TextForm from './components/TextForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/About';
import NavBar from './components/NavBar';
import Alert from './components/NavBar';

function App() {

  const [mode, setMode] = useState("light") //whether dark mode is enabled or not
  const [alert, setAlert] = useState({msg : "This is an alert", type : "success"})

  const showAlert = (message,alertType) =>{
    setAlert({
      msg : message,
      type : alertType
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  const removeBodyClasses =() =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
  }
  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been enabled!","success")
    }else {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled!","success")
    }
  }

  return (
    <>
     <BrowserRouter>
      <NavBar title='TextUtils' mode={mode} aboutText='About' toggleMode={toggleMode}/>
      {/* /users --> Component1
      /users/home --> Component2  If exact not used /users/home can render component 1  */}
      
      <Routes>
      <Route exact path='/' element={<TextForm heading="Enter the text to analyze." mode={mode}/>}></Route>
      <Route exact path='/about' element={<About mode = {mode} />}> </Route>   
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
