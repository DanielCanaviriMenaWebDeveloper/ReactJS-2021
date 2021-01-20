import React from 'react';

/* Destructurando el objeto props y colocando valores por defecto */
const Titulo = ( {usuario = 'usuario', color = 'grey'}) => {

    console.log(usuario);
    console.log(color);

    return ( 
        <h1 className="titulo" style={{color: color}}>{ usuario }</h1>
    );
}

export { Titulo } 
