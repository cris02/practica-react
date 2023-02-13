import React from 'react';
//import './UserInfo.css';
import styles from './UserInfo.module.css';

class UserInfo extends React.Component {
  
    // METODO CON ECMASCRIPT 6 GESTION DE ESTADO (LAS FUNCIONES SE DEBEN DEFINIR EN FORMATO FUNCTION (){})
  /* constructor() {
    super();

    //referenciar el estado con la clase
    //this.agregar = this.agregar.bind(this);
    //this.quitar = this.quitar.bind(this);

    //referenciar el estado con la clase VERSION RECOMENDAD
    const METHODS = [
      //definir aqui los metodos de las clases que gestionen el estado
      "agregar",
      "quitar",
      "limpiar",
    ];

    METHODS.forEach((m) => {
        this[m] = this[m].bind(this)
    })

    //objeto para gestionar el estado
    this.state = {
      cantidad: 15,
    };
  } */

  // METODO 2 DE GESTION DE ESTADO CON ECMASCRIPT 7 (LAS FUNCIONES SE DEBE DEFINIR EN FORMATO ARROW FUNCTION)
  state = {
    cantidad: 0
  }

  //metodo que incremente un numero (settear el estado cantidad)
  agregar = () => {
    this.setState({
      cantidad: this.state.cantidad + 1,
    });
  }

  quitar = () => {
    this.setState({
      cantidad: this.state.cantidad - 1,
    });
  }

  limpiar = () => {
    this.setState({
      cantidad: 0,
    });
  }

  render() {

    //por recomendacion se recomienda refactorizar los estilos lo mas simple que se pueda
    const hasItem = this.state.cantidad > 0;

    //constante que gestionara los estilos
    // const estilos = {
    //     border: 'solid black 1px',
    //     marginBottom: '1em',
    //     borderRadius: '0.5em',
    //     padding: '1em',
    //     background: hasItem ? 'linear-gradient(45deg, black, #4a02f7)' : '#FFF',
    //     color: hasItem ? '#FFF' : '#000',
    //     transition: 'all 400ms ease-out'
    // }

    // version recomendada de como aplicar css 
    //const clases = hasItem ? 'UserInfo-Activo' : 'UserInfo';

    // version 3 recomendada
    //const clases = `UserInfo ${hasItem ? 'UserInfo-Activo' : ''}`;

    // version 4: aplicando modulos css
    const clases = `${styles.card} ${hasItem ? styles['card-active'] : ''}`;

    // operador spreat(operadore de propagacion es decir combina los resultados de 2 o mas objetos en uno solo resultado)
    const perfil = {
      nombre: 'n1',
      infor: {
        direccion: 'Direccion n1'
      }
    };

    const region = {
      pais: 'ESA',
      infor: {
        direccion: 'Direccion de region'
      }
    };

    const social = {
      twitter: 'sdfsfsd',
      nombre: 'red'
    };

    const resultado = {
      ...perfil,
      ...region,
      ...social,
      info: {
        ...perfil.infor,
        ...region.infor
      }
    }

    console.log(resultado);

    return (
        //aplicnado estilo al div style={estilos}
      <div className= { clases } >
        <h1>FRUTA</h1>
        <p>Nombre: {this.props.name}</p>
        <p>Cantidad: {this.state.cantidad} </p>
        <button type="submit" onClick={this.agregar}>
          +
        </button>
        <button type="submit" onClick={this.quitar}>
          -
        </button>
        <button type="submit" onClick={this.limpiar}>
          Limpiar
        </button>
        <hr />
        <p>Precio: ${ this.props.price }</p>
        <p>Total: $ { this.props.price * this.state.cantidad } </p>
      </div>
    );
  }
}

//exportando el componente
export default UserInfo;