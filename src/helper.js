
export const calcularCosto = cotizacion => {

    const { clase, estrellas, habitaciones, noches, servicio, zona } = cotizacion;

    let costo = 1000;

    switch (clase) {

        case 'Economica':
            costo = costo * 1.05
            break;

        case 'Standard':
            costo = costo * 1.10
            break;

        case 'Premium':
            costo = costo * 1.15
            break;

        default:
            break;
    }

    switch (estrellas) {

        case '1':
            costo = costo * 1.05
            break;

        case '2':
            costo = costo * 1.10
            break;

        case '3':
            costo = costo * 1.15
            break;

        case '4':
            costo = costo * 1.25
            break;

        case '5':
            costo = costo * 1.30
            break;

        default:
            break;
    }

    switch (habitaciones) {

        case '1':
            costo = costo * 1.05
            break;

        case '2':
            costo = costo * 1.10
            break;

        case '3':
            costo = costo * 1.15
            break;

        case '4':
            costo = costo * 1.20
            break;

        case '5':
            costo = costo * 1.25
            break;

        default:
            break;
    }

    switch (noches) {

        case '1':
            costo = costo * 1.05
            break;

        case '2':
            costo = costo * 1.10
            break;

        case '3':
            costo = costo * 1.15
            break;

        case '4':
            costo = costo * 1.20
            break;

        case '5':
            costo = costo * 1.25
            break;

        case '6':
            costo = costo * 1.30
            break;

        case '7':
            costo = costo * 1.35
            break;

        case '10':
            costo = costo * 1.40
            break;

        case '14':
            costo = costo * 1.45
            break;

        default:
            break;
    }

    switch (servicio) {

        case 'Completo(comida - experiencias - hospedaje)':
            costo = costo * 1.20
            break;

        case 'Solo hospedaje':
            costo = costo * 1.10
            break;

        default:
            break;
    }

    switch (zona) {

        case 'Ciudad':
            costo = costo * 1.10
            break;

        case 'Playa':
            costo = costo * 1.20
            break;

        case 'Aislada':
            costo = costo * 1.05
            break;

        default:
            break;

    }


    return costo;

}