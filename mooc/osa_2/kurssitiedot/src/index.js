import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'

const App = () => {
  const [x, setX] = useState(0)
  console.log(x)
  return (
    <div>
      {x}
      <button onClick={()=>setX(10)}>press</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
