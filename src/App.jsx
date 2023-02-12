import React from 'react';
import UserInfo from './components/userInfo/UserInfo';

// CONTENEDOR DE COMPONENTES: definir aqui todos los componentes
const App = () => (
    <div>
      <UserInfo name="Fresa" price={20.50} />
      <UserInfo name="Sandia" price={10.00} />
      <UserInfo name="Durazno" price={5.68}  />
    </div>
  );

  // exportar el componente
  export default App;