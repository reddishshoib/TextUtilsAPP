import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {useState} from "react";
import Alert from "./Alert";
import About from "./components/About";


import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


function App() {
    const [mode, setMode] = useState('light');//wether dark mode is enabled or not

    const toggleMode= ()=>{
        if (mode ==='light') {
            setMode('dark')
            document.body.style.backgroundColor = '#72818f'
            showAlert("Dark mode has been enabled ", "success")
        }else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            showAlert("Light mode has been enabled ", "success")
        }
    }

    const [alert,setAlert] = useState(null)

    const showAlert = (message, type)=>{
        setAlert({
            msg : message,
            type: type
        })
        setTimeout(()=>{
            setAlert(null)
        },1000)
    }

    return (
        <>


            {/*<TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode} />*/}
            {/*<About />*/}
            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
                <Alert alert={alert}  />


                <Routes>
                    <Route  path="/home"  element={<TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode} />} />
                    <Route  path="/"  element={<TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode} />} />
                </Routes>
                <div className="container my-3">
                    <Routes>
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>

            </Router>

        </>
    );
}

export default App;
