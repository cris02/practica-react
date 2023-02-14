import React from 'react';
import UserInfo from './components/userInfo';
import Contador from "./components/contador/Contador";
import {Gato} from './components/animales/Animales';

// ENVIAR OPERADOR DE PROPAGACION COMO PROPS

const otrosDatos = {
  raza: 'Pitbul',
  peleasNoc: 300
}


// CONTENEDOR DE COMPONENTES: definir aqui todos los componentes
const App = () => (

    <div>
      {/* <UserInfo name="Fresa" price={20.50} />
      <UserInfo name="Sandia" price={10.00} />
      <UserInfo name="Durazno" price={5.68}  />
      <Contador /> */}
      <Gato
        name='Pepe'
        edad={2} 
        {...otrosDatos} />
    </div>
  );

  // exportar el componente
  export default App;