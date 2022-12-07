import React from 'react';
import QRCode from 'qrcode.react';
import './App.css'

function App() {
  const [url, setUrl] = React.useState('');

  function handleChange(e) {
    setUrl(e.target.value);
    setUrl('')
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      setUrl(e.target.value)
      setUrl('')
  }

  return (
    <div className="App">
      <input type="text"
       value={url}
      //  hidden = {true}
       onChange={handleChange}
       onSubmit = {handleSubmit}
      
      />
      <QRCode value={url} />
    </div>
  );
}

export default App;
