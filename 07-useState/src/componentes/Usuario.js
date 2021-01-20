import React from 'react';
import { Titulo } from './Titulo'; 

const Usuario = () => {

    const color_verde = "green";
    const edad = 37;
    const pais = "Bolivia";
    const skills = ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Python'];

    return(
        <div style={ {width: '40%', height: 'auto', border: '5px solid black', margin:'20px auto', padding:'20px', boxShadow:'5px 5px 10px blue', borderRadius: '10px', textAlign: 'center'} }>
            <Titulo usuario="Daniel Alberto Canaviri Mena" color="blue"/>
            <p style={ {color: color_verde} }>Soy Web Developer</p>
            <p>Tengo { edad } años y me gusta programar.</p>
            { pais && <p style={{ color: '#FF00FF', fontSize: '32px' }}>Soy de {pais}</p> }
            <ul>
                { skills.map( (skill, index) => <li key={index}> {skill} </li> ) }
            </ul>
            <p>Que tengas buen dia Saludos!!!</p>
        </div>
    );
};

export default Usuario;