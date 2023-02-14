import React, { Component } from 'react';

const styles = {
    height: '200px',
    background: 'gold',
    padding: '1em',
    boxSizing: 'border-box'
}
class App2 extends Component {

    state = {
        x: 0,
        y: 0
    }
    
    manejador = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return (
            <div 
                style={styles}
                onMouseMove={this.manejador}
            >
               <div>
                X: {this.state.x}
               </div>
               <div>
                Y: {this.state.y}
               </div>
            </div>
        )
    }
}

export default App2