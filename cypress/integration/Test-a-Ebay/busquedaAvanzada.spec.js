/// <reference types="cypress" />

import {BusquedaAvanzada} from "../../page-objects/Ebay"

describe('Búsqueda Avanzada', function(){

    //Hacer esta prueba con la página de búsqueda avanzada de Ebay abierta

    const busquedaAvanzada = new BusquedaAvanzada()

    it('Should hacer una búsqueda avanzada', function(){
        busquedaAvanzada.navigate()
        busquedaAvanzada.busquedaPorPalabraYnumero('tenis','2', '888')
        busquedaAvanzada.busquedaIncluyendo(6)
        busquedaAvanzada.precio(1000, 5000)
        busquedaAvanzada.formatoDeCompra(4)
        busquedaAvanzada.estado(6)
        busquedaAvanzada.mostrarLosResultados1(4, '903', '12', '1000', '10000', '2000', '20000')
        busquedaAvanzada.mostrarLosResultados2(11)
        busquedaAvanzada.opcionesDeEnvio()
        busquedaAvanzada.ubicacion(1, '50', '35750', '-1&saslc=2', '60')
        busquedaAvanzada.vendedores(1, '2', 'Marcos')
        busquedaAvanzada.ordenarPor('15')
        busquedaAvanzada.verResultados('2')
        busquedaAvanzada.resultadosPorPaginas('25')
        busquedaAvanzada.buscarOBorrarOpciones(2)
    })
})