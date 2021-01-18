import React from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';

const sesion = true;
const color_rojo = "red";

const App = () => {
    return(
        <>
            { sesion === true ? <Usuario /> : <h1 style={ {color: color_rojo} }>No iniciaste sesión.</h1>}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));









