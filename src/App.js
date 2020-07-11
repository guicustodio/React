import React from 'react'

import './App.css';
import Primeiro from './components/Primeiro'
import Card from './components/Layout/Card'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

export default (props) => (
  <div className="App"> 
      <Card titulo="#01 - Componente com filhos">
      <ComFilhos>      
      <ul>
          <li>Ana</li>
          <li>Maria</li>
          <li>Zé</li>
      </ul>
      </ComFilhos> 
      </Card>

      <Card titulo="#02 - Componente com parâmetro">
      <ComParametro título = "Título"
         subtitulo = "Subtítulo"/>
      </Card>

      <Card titulo="#03 - Primeiro Componente">
        <Primeiro/>
      </Card> 
  </div>
  );
