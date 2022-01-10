import {useState} from 'react';

const useSelect = (label, opciones) => {

    const [state, setState] = useState('');

    const Select = () => (

        <div>
            <label className='block text-white font-bold text-xl'>{label}</label>

            <select
                className='p-3 w-full text-md mt-2 rounded border-0'
            >

                <option value="">-- Selecciona --</option>

                {opciones.map(opcion => (

                    <option 
                        value={opcion.id}
                        key={opcion.id}
                    >{opcion.nombre}</option>

                ))}

            </select>

        </div>

    )

    return [state, Select]
}

export default useSelect

