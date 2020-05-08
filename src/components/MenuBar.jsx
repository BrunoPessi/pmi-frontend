import React from 'react';
import '../styles/menuBar.css'

function MenuBar() {
  return <div className="menu-bar">
    <ul className="list-menu-bar">

        <li>Inicio</li>
        <li>Produtos</li>
        <li>Buscar</li>
        <li>Entrar/Registrar</li>

    </ul>
  </div>;
}

export default MenuBar;