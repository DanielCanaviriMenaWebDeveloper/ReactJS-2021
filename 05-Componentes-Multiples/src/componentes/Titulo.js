import React from 'react';

/* sfc + tab */
const TituloRojo = () => {

    const colorTitulo = "red";
    const nombre = "Daniel Alberto Canaviri Mena";

    return ( 
        <h1 className="titulo" style={{color: colorTitulo}}>{ nombre }</h1>
    );
}

const TituloAzul = () => {

    const colorTitulo = "blue";
    const nombre = "Daniel Alberto Canaviri Mena";

    return ( 
        <h1 className="titulo" style={{color: colorTitulo}}>{ nombre }</h1>
    );
}

/* export default Titulo; */

export { TituloRojo, TituloAzul} /* Exportamos 2 componentes */
