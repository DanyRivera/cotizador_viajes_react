import React from 'react'

const ParrafoCotizacion = ({label, info}) => {
    return (
        <div className='my-4'>
            <p 
                className='text-white text-xl lg:text-[18px]'
            > <span className='font-bold'>{label}</span> {info}</p>
        </div>
    )
}

export default ParrafoCotizacion
