import { useEffect, useState, useContext } from "react";
import AppContext from "../context/AppContext";
import useSelect from "../hooks/useSelect";
import { aerolineas, horarios, clases } from "../data";
import Btn from "./Btn";
import axios from "axios";

const VuelosSeccion = () => {

    //https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city
    //https://rapidapi.com/blog/most-popular-api/?utm_source=google&utm_medium=cpc&utm_campaign=Beta&utm_term=%2Bapi_b

    const { vuelo, setVuelo } = useContext(AppContext);

    const [paises, setPaises] = useState([]);
    const [estadosOrigen, setEstadosOrigen] = useState([]);
    const [estadosDestino, seEstadosDestino] = useState([]);

    //Objeto de vuelo info
    const [vueloObj, setVueloObj] = useState({});

    //Todos los selects
    const [origen, SelectOrigen] = useSelect('Selecciona el Origen', paises);
    const [estadoOrigen, SelectEstadoOrigen] = useSelect('Selecciona el Estado de Origen', estadosOrigen);
    const [destino, SelectDestino] = useSelect('Selecciona el Destino', paises);
    const [estadoDestino, SelectEstadoDestino] = useSelect('Selecciona el Estado de Destino', estadosDestino);
    const [aerolinea, SelectAerolinea] = useSelect('Selecciona la Aerolínea', aerolineas);
    const [horario, SelectHorarios] = useSelect('Selecciona el Horario', horarios);
    const [clase, SelectClase] = useSelect('Selecciona la Clase', clases);


    useEffect(() => {

        setVuelo({
            origen,
            estadoOrigen,
            destino,
            estadoDestino,
            aerolinea,
            horario,
            clase
        })

    }, [origen, estadoOrigen, destino, estadoDestino, aerolinea, horario, clase])

    useEffect(() => {

        const consultaPaises = async () => {

            const authUrl = 'https://www.universal-tutorial.com/api/getaccesstoken';

            const req = await axios.get(authUrl, {
                headers: {
                    "Accept": "application/json",
                    "api-token": "xtGegmCSrsvOVGwrDImyqRslSfcrBtkbKCvc7D3aQC4bHMNdE46_L_WHWCCPX82pwL4",
                    "user-email": "luisdanrg10@gmail.com"
                }
            });

            const auth_token = req.data.auth_token;

            const url = 'https://www.universal-tutorial.com/api/countries/';

            const resultado = await axios.get(url, {
                headers: {
                    "Authorization": `Bearer ${auth_token}`,
                    "Accept": "application/json"
                }
            })

            const arrayPaises = resultado.data.map(paisApi => {

                const pais = {
                    value: paisApi.country_name,
                    id: paisApi.country_short_name
                };

                return pais;
            })

            setPaises(arrayPaises);

        }
        consultaPaises();

    }, []);

    useEffect(() => {

        const consultarEstadoOrigen = async () => {

            const authUrl = 'https://www.universal-tutorial.com/api/getaccesstoken';

            const req = await axios.get(authUrl, {
                headers: {
                    "Accept": "application/json",
                    "api-token": "xtGegmCSrsvOVGwrDImyqRslSfcrBtkbKCvc7D3aQC4bHMNdE46_L_WHWCCPX82pwL4",
                    "user-email": "luisdanrg10@gmail.com"
                }
            });

            const auth_token = req.data.auth_token;

            const url = `https://www.universal-tutorial.com/api/states/${origen}`;

            const resultado = await axios.get(url, {
                headers: {
                    "Authorization": `Bearer ${auth_token}`,
                    "Accept": "application/json"
                }
            })

            const arrayEstados = resultado.data.map(estadosApi => {

                const estado = {
                    value: estadosApi.state_name,
                    id: estadosApi.state_name
                };

                return estado;
            })

            setEstadosOrigen(arrayEstados);

        }

        if (origen) {
            consultarEstadoOrigen();
        }

        setEstadosOrigen([]);


    }, [origen])

    useEffect(() => {

        const consultarEstadoDestino = async () => {

            const authUrl = 'https://www.universal-tutorial.com/api/getaccesstoken';

            const req = await axios.get(authUrl, {
                headers: {
                    "Accept": "application/json",
                    "api-token": "xtGegmCSrsvOVGwrDImyqRslSfcrBtkbKCvc7D3aQC4bHMNdE46_L_WHWCCPX82pwL4",
                    "user-email": "luisdanrg10@gmail.com"
                }
            });

            const auth_token = req.data.auth_token;

            const url = `https://www.universal-tutorial.com/api/states/${destino}`;

            const resultado = await axios.get(url, {
                headers: {
                    "Authorization": `Bearer ${auth_token}`,
                    "Accept": "application/json"
                }
            })

            const arrayEstados = resultado.data.map(estadosApi => {

                const estado = {
                    value: estadosApi.state_name,
                    id: estadosApi.state_name
                };

                return estado;
            })

            seEstadosDestino(arrayEstados);

        }

        if (destino) {
            consultarEstadoDestino();
        }

        seEstadosDestino([]);

    }, [destino]);

    return (
        <>
            <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-10">
                <SelectOrigen />
                {origen && <SelectEstadoOrigen />}
                <SelectDestino />
                {destino && <SelectEstadoDestino />}
                <SelectAerolinea />
                <SelectHorarios />
                <SelectClase />
            </div>

            <Btn vuelo={vueloObj} texto='Continuar' />
        </>
    )
}

export default VuelosSeccion
