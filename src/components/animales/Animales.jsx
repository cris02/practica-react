import React, { Component } from 'react';

export const Gato = (props) => {
    return (<div>
        <h1>Gato</h1>
        <pre>
            {JSON.stringify(props, null, 4)}
        </pre>
    </div>)
}