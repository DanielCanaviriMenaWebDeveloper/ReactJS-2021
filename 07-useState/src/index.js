import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';

const App = () => {

    const [sesion, cambiarEstadoSesion] = useState(true);

    /* let sesion = false; */
    const color_rojo = "red";

    /* const cerrarSesion = () => {
        sesion = false;
        console.log("Valor dentro la funcion cerrarSesion " + sesion)
    }; */
    return(
        <>
            { sesion === true ? 
            <>
                <Usuario /> 
                <button 
                    /* onClick = { cerrarSesion } */ 
                    onClick = { () => cambiarEstadoSesion(false)}
                    style={ 
                        { 
                        backgroundColor : 'blue',
                        color: 'white',
                        padding: '10px',
                        display: 'block',
                        margin: '10px auto',
                        fontSize: '20px',
                        borderRadius: '10px',
                        borderInline: 'none',
                        boxShadow: '3px 3px 5px black',
                        cursor: 'pointer'
                        }    
                    }> 
                    Cerrar Sesión
                </button>
            </>
            :
            <> 
                <h1 style={ {color: color_rojo} }>No iniciaste sesión.</h1>
                <button 
                    /* onClick = { () => {
                        sesion = true;
                        console.log(`Valor de la sesion por false : ${sesion}`)} } */ 
                    
                    onClick = { () => cambiarEstadoSesion(true) }
                    style = { 
                        { 
                        display: 'block',
                        backgroundColor : 'red',
                        color: 'white',
                        padding: '10px',
                        margin: '10px auto',
                        fontSize: '20px',
                        borderRadius: '10px',
                        borderInline: 'none',
                        boxShadow: '3px 3px 5px black',
                        cursor: 'pointer'
                        /* border: '1px solid black' */
                        }
                    }>
                        Abrir Sesión
                </button>
            </>
            }
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));









