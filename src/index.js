import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));


const ShowlocalTime = ()=>{
  return <p>
    {" "}
    It is {new Date().toLocaleTimeString()}.
    <HeadingComponentbyclass title="Hello hoomans"/>
    {" "}</p>
}

  root.render(
    <React.StrictMode>
      <h1>Hello world</h1>
      <ShowlocalTime/>
      <Counter/>
    </React.StrictMode>
  );


