import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './component/form/form'
function App() {

  function onSubmit(){
    //console.log(data)
  }

  return (
    <div className="App">
     <Form onSubmit={onSubmit} header="Sign Up form" >
      <input name="userName" type="text"></input>
      <input name="password" type="password"></input>
     </Form>
    </div>
  );
}

export default App;
