import React from 'react';
import ReactDOM from 'react-dom';

const nombre = "Daniel";
const edad = 37;
const color_verde = "green";
const color_rojo = "red";
const sesion = true;
const pais = "Bolivia";

const titulo = (
     
    <>{/* Fragmentos */}
        {   
            sesion === true ? 
                <div>
                    <h1 className="titulo">{ nombre } Alberto Canaviri Mena</h1>
                    <p style={ {color: color_verde} }>Soy Web Developer</p>
                    <p>Tengo { edad } años y me gusta programar.</p>
                    {/* Si existe un valor en la variable pais imprime el codigo jsx */}
                    { pais && <p style={{ color: '#FF00FF', fontSize: '32px' }}>Soy de {pais}</p> }
                    
                </div>
            :
                <h1 style={ {color: color_rojo} }>No iniciaste sesión.</h1>
        }
    </>
)
/* Esta sección de código es una forma de retornar código JSX dentro una funcion con condicionales. */
// Funcion que retorna código JSX
/* const verificarSesion = ( sesion ) => {
    if( sesion === true ) {
        return titulo;
    } else {
        return <h1 style={ {color: color_rojo} }>No iniciaste sesión.</h1>
    }
} */

// ReactDOM.render(verificarSesion(sesion), document.getElementById('root'));
ReactDOM.render(titulo, document.getElementById('root'));

