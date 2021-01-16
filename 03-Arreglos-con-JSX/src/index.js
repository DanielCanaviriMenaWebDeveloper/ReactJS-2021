import React from 'react';
import ReactDOM from 'react-dom';

/* Declarando el array con sus elementos */
const amigos = ['Daniel', 'Carlos', 'Joaquin', 'Jessica', 'Militza'];

const titulo = (   
    <>  
        <div> 
            {/* Distintas formas de mostrar los elementos del array llamado amigos */}

            {/* Muestra todos los elementos del array uno a lado del otro sin espacios, no recomendado. */}
            { amigos }

            {/* Ejemplo para mostrar cada elemento del array en forma de lista, no recomendado. */}
            <ul>
                <li>{amigos[0]}</li>
                <li>{amigos[1]}</li>
                <li>{amigos[2]}</li>
                <li>{amigos[3]}</li>
                <li>{amigos[4]}</li>
            </ul>

            {/* Utilizando la función map, considerar que a cada elemento <li></li> se tiene que asignar 
            el atributo key que permite diferencia de manera unica a cada elemento */}
            <ul>
                { amigos.map( (amigo, index) => <li key={index}> {amigo} </li> ) }
            </ul>

        </div>   
    </>
)

ReactDOM.render(titulo, document.getElementById('root'));

