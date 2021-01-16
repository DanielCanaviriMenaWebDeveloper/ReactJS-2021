import React from 'react';
import ReactDOM from 'react-dom';

const colorTitulo = "blue";
const nombre = "Daniel Alberto Canaviri Mena";
const edad = 37;
const color_verde = "green";
const color_rojo = "red";
const sesion = true;
const pais = "Bolivia";
const skills = ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Python'];

const Usuario = () => {
    return(
        <div style={ {width: '40%', height: '350px', border: '5px solid black', margin:'20px auto', padding:'20px', boxShadow:'5px 5px 10px blue', borderRadius: '10px', textAlign: 'center'} }>
            <h1 className="titulo" style={{color: colorTitulo}}>{ nombre }</h1>
            <p style={ {color: color_verde} }>Soy Web Developer</p>
            <p>Tengo { edad } años y me gusta programar.</p>
            { pais && <p style={{ color: '#FF00FF', fontSize: '32px' }}>Soy de {pais}</p> }
            <ul>
                { skills.map( (skill, index) => <li key={index}> {skill} </li> ) }
            </ul>
        </div>
    );
};

const App = () => {
    return(
        <>
            { sesion === true ? <Usuario /> : <h1 style={ {color: color_rojo} }>No iniciaste sesión.</h1>}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));



