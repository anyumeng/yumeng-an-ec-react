import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('')
  const [style, setStyle] = useState({
    height: "100px",
    width: "100px",
    border: "1px solid black",
  })
  const [invalidMessage, setInvalidMessage] = useState('')

  function changeColor() {
    const validColors = new Set(['red', 'green', 'blue']);
    if (validColors.has(color.toLocaleLowerCase())) {
      setInvalidMessage('');
      setStyle(style => ({
        ...style,
        backgroundColor: color
      }));
    } else {
        setInvalidMessage(color + ' is not a valid color. Please choose green, blue or red.');
    }
  }

  function onColorInput(event) {
    const colorValue = event.target.value;
    setColor(colorValue);
  }

  return (
    <div className="App">
      <div className="box" style={style}></div>
      <div className="input-button">
        <input type="text" value={color} onInput={onColorInput} />
        <button onClick={changeColor}>Change color</button>
      </div>
      <p id="invalid-message">{invalidMessage}</p>
    </div>
  )
}

export default App
