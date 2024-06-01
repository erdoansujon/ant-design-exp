
import React, { useState } from 'react';
import { Button } from 'antd';

function App(){
  const [loading, setLoading] = useState(false)
  const onButtonClick =(e)=>{
    console.log('Button Clicked')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }
  return( <div className="App">
  <header className='App-header text-center'>
  <Button type="primary" className='font-bold'
  block
  loading={loading}
  onClick={onButtonClick}
  >Button Click</Button>
  </header>
 </div>);
 
}

export default App;