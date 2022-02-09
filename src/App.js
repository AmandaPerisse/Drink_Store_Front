import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/TelaLogin/Login';
import Login from './components/TelaCadastro/Cadastro';

function App() {

  const [token, setToken] = React.useState('');
  const [endereco, setEndereco] = React.useState('');
  const [carrinho, setCarrinho] = React.useState([]);

  return (
    
    <BrowserRouter>
      <UserContext.Provider value = {{token, setToken, endereco, setEndereco, carrinho, setCarrinho}}>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/cadastro" element={<Cadastro/>}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
