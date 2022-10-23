import { ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {

  const Add = () => {
    if (filled < 100) {
      setTimeout(() => setFilled(prev => prev += 1))
    } else {
      alert("Full")
    }
  }
  const Subsract = () => {
    if (filled > 0) {
      setTimeout(() => setFilled(prev => prev -= 1))
    } else {
      alert("Empty")
    }
  }
  const [filled, setFilled] = useState(50);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 2), 50)
		}
	},[filled, isRunning])

    return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-2/5 h-3/5 bg-slate-300 rounded-tr-3xl rounded-br-3xl rounded-tl-3xl rounded-bl-3xl flex flex-col justify-evenly items-center'>
          <div>
            <div className="progressbar">
              <div style={{
                height: "100%",
                width: `${filled}%`,
                backgroundColor: "#a66cff",
                transition:"width 0.5s"
              }}></div>
              <span className="progressPercent">{ filled }%</span>
            </div>
            <button className="btn" onClick={() => {setIsRunning(true)}}></button>
          </div>
          <h1 className='flex justify-center items-center w-full h-1/3 text-8xl bold bg-emerald-600'>
            {filled}
          </h1>
          <div className='buttons flex justify-around'>
            <button onClick={Add} className='button1' >Add</button>
            <button onClick={Subsract} className='button2'>Subsract</button>
          </div>
        </div>
      </div>
    );
}
ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
};

ProgressBar.defaultProps = {
  max: 100,
  color: 'lightBlue',
  width: '250px',
};

export default App;
