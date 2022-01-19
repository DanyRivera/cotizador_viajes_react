import {useState} from 'react';

const useSelect = (label, opciones, value) => {

    const [state, setState] = useState('');

    const Select = () => (

        <div className='my-7 md:my-0'>
            <label className='block text-white font-bold text-xl'>{label}</label>

            <select
                className='p-3 w-full text-md mt-2 rounded border-0'
                onChange={e => setState(e.target.value)}
                value={value ? value : state}
            >

                <option value="">-- Selecciona --</option>

                {opciones.map(opcion => (

                    <option 
                        value={opcion.value}
                        key={opcion.id}
                    >{opcion.value}</option>

                ))}

            </select>

        </div>

    )

    return [state, Select]
}

export default useSelect

