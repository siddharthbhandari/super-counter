import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [i, setStart] = useState<boolean>(false);

  const [counter, setCounter] = useState(0);
  
  useMemo(async () => {
    console.log("called!!")
    let t = new Promise((res) => setTimeout(res, .00000045));
    await t;
    if (i) {
      setCounter(counter + 1);
      return counter;
    } else {
      return counter;
    }
  }, [counter])

  return (
    <>
      <div className="card">
        <button onClick={() => { setStart(!i);
          setCounter(counter + 1);
         }}>
         Start
        </button>
        <p>{counter}</p>
        <p>{i ? "true": "false"} -- help</p>
      </div>
    </>
  )
}

export default App
