import { useEffect, useState, useContext } from "react";
import AppContext from "../context/AppContext";
import useSelect from "../hooks/useSelect";
import { aerolineas, horarios, clases } from "../data";
import Btn from "./Btn";
import axios from "axios";

const VuelosSeccion = () => {

    //https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city
    //https://rapidapi.com/blog/most-popular-api/?utm_source=google&utm_medium=cpc&utm_campaign=Beta&utm_term=%2Bapi_b

    const { setValues, vuelo, values } = useContext(AppContext);

    const [paises, setPaises] = useState([]);
    const [estadosOrigen, setEstadosOrigen] = useState([]);
    const [estadosDestino, setEstadosDestino] = useState([]);


    //Todos los selects
    const [origen, SelectOrigen] = useSelect('Selecciona el Origen', paises, values.origen || vuelo.origen);
    const [estadoOrigen, SelectEstadoOrigen] = useSelect('Selecciona el Estado de Origen', estadosOrigen, values.estadoOrigen || vuelo.estadoOrigen);
    const [destino, SelectDestino] = useSelect('Selecciona el Destino', paises, values.destino || vuelo.destino);
    const [estadoDestino, SelectEstadoDestino] = useSelect('Selecciona el Estado de Destino', estadosDestino, values.estadoDestino || vuelo.estadoDestino);
    const [aerolinea, SelectAerolinea] = useSelect('Selecciona la Aerolínea', aerolineas, values.aerolinea || vuelo.aerolinea);
    const [horario, SelectHorarios] = useSelect('Selecciona el Horario', horarios, values.horario || vuelo.horario);
    const [clase, SelectClase] = useSelect('Selecciona la Clase', clases, values.clase || vuelo.clase);



    useEffect(() => {

        //Obetener la info para llenar el obj de vuelo
        setValues({
            origen: origen ? origen : vuelo.origen,
            estadoOrigen: estadoOrigen ? estadoOrigen : vuelo.estadoOrigen,
            destino: destino ? destino : vuelo.destino,
            estadoDestino: estadoDestino ? estadoDestino : vuelo.estadoDestino,
            aerolinea: aerolinea ? aerolinea : vuelo.aerolinea,
            horario: horario ? horario : vuelo.horario,
            clase: clase ? clase : vuelo.clase
        });

    }, [origen, estadoOrigen, destino, estadoDestino, aerolinea, horario, clase]);

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

            const url = `https://www.universal-tutorial.com/api/states/${origen ? origen : vuelo.origen}`;

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

        if (origen || vuelo.origen) {
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

            const url = `https://www.universal-tutorial.com/api/states/${destino ? destino : vuelo.destino}`;

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

            setEstadosDestino(arrayEstados);

        }

        if (destino || vuelo.destino) {
            consultarEstadoDestino();
        }

        setEstadosDestino([]);

    }, [destino]);


    return (
        <>
            <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-10">
                <SelectOrigen />
                {origen || vuelo.origen ? <SelectEstadoOrigen /> : ''}
                <SelectDestino />
                {destino || vuelo.origen ? <SelectEstadoDestino /> : ''}
                <SelectAerolinea />
                <SelectHorarios />
                <SelectClase />
            </div>

            <Btn texto='Continuar' />
        </>
    )
}

export default VuelosSeccion
