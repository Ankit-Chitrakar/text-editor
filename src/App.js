// import logo from './logo.svg';
import './App.css';
import Navbar from './Componenets/Navbar';
import Textform from './Componenets/Textform';
import React, {useState} from 'react'
import Alert from './Componenets/Alert';

function App() {
  // state
  const [mode, setmode] = useState('light')
  const [modeText, setmodeText] = useState('Enable Dark Mode')
  const [alert, setalert] = useState(null)
  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      setmodeText('Back to Light Mode')
      document.body.style.backgroundColor = 'rgb(1, 1, 38)'
      showAlert('Dark Mode Enabled!', 'success')
    }
    else{
      setmode('light')
      setmodeText('Enable Dark Mode')
      document.body.style.backgroundColor = '#ffffff'
      showAlert('Light Mode Enabled!', 'success')
    }
  }

  return (
  <>
  <Navbar title ='Text Editor Pro🚀' home='Home' btntitle={modeText} mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <Textform heading='Enter Text to Analyze ✍' mode={mode} showAlert={showAlert} />
  
  </>
  );
}

export default App;
