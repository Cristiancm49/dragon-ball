import React from 'react'
import './CardTransformacion.css'

const CardTransformacion = ({id, name, nameTransformation, imgTransformation, kiTransformation }) => {
    return (
        <div className='containerTransformation'>
            <div className='contaiterTitle'><h1 className='titleTransformations'>Transformations {id}</h1></div>
            <div>
                <img
                    className='imgTransformation'
                    src={imgTransformation}
                    alt={`Foto de la transformacion ${nameTransformation} del personaje ${name}`} />
            </div>
            <div>
                <h2 className='nombreTransformation'>{nameTransformation}</h2>
                <div>
                    <h3 className='labelTrans'>ki:</h3>
                    <h3 className='valorTrans'>{kiTransformation}</h3>
                </div>
            </div>
        </div>
    )
}

export default CardTransformacion