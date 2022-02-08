import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [token, setToken] = React.useState('');
  const [name, setName] = React.useState('');

  return (
    
    <BrowserRouter>
      <UserContext.Provider value = {{token, setToken, name, setName}}>
        <Routes>
            <Route path="/" element={}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
