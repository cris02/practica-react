import React from 'react';
import UserInfo from './components/userInfo';
import Contador from "./components/contador/Contador";

// CONTENEDOR DE COMPONENTES: definir aqui todos los componentes
const App = () => (
    <div>
      <UserInfo name="Fresa" price={20.50} />
      <UserInfo name="Sandia" price={10.00} />
      <UserInfo name="Durazno" price={5.68}  />
      <Contador />
    </div>
  );

  // exportar el componente
  export default App;