import React, { Component } from 'react';

class Contador extends Component {

    state = {
        clicks: 0,
        video: {
            title: 'Super video',
            likes: 0
        }
    }

    add = () => {
        this.setState((state, props) => ({
            clicks: state.clicks + 1,
            // se actualiza el estado del objeto video (se pierde el title porque no se agrego al nuevo estado)
            video: {
                ...this.state.video, // concatenammos los registros del antigua estado con los registros del nuevo estado
                likes: this.state.video.likes + 1
            }
        }))
    }
    
    render() {

        return (
        <div>
            <h1>{ this.state.video.title }</h1>
            <button onClick={this.add}>
                Click: {this.state.clicks}
            </button>
            <button onClick={this.add}>
                Likes: {this.state.video.likes}
            </button>
        </div>);
    }
}

export default Contador;