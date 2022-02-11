import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from './components/contexts/UserContext';
import './styles/reset.css';
import './styles/style.css';

import Login from './components/TelaLogin/Login';
import Cadastro from './components/TelaCadastro/Cadastro';
import Inicio from './components/TelaInicial/Inicio';
import PedidosAnteriores from './components/TelaPedidosAnteriores/PedidosAnteriores';
import Carrinho from './components/TelaCarrinho/Carrinho';
import Pesquisar from './components/TelaPesquisar/Pesquisar';
import Header from './global/Header/Header';
import Footer from './global/Footer/Footer';

export const caminhosSemHeaderFooter = ['/', '/cadastro']

function App() {
  const [token, setToken] = React.useState('');
  const [endereco, setEndereco] = React.useState('');
  const [carrinho, setCarrinho] = React.useState([]);

  return (
    
    <BrowserRouter>
      <UserContext.Provider value = {{token, setToken, endereco, setEndereco, carrinho, setCarrinho}}>
        <Header/>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/cadastro" element={<Cadastro/>}></Route>
            <Route path="/pesquisar" element={<Pesquisar/>}></Route>
            <Route path="/bebidas" element={<Inicio/>}></Route>
            <Route path="/carrinho" element={<Carrinho/>}></Route>
            <Route path="/pedidos-anteriores" element={<PedidosAnteriores/>}></Route>
        </Routes>
        <Footer/>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
