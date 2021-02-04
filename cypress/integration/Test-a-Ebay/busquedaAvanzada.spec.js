/// <reference types="cypress" />

import {BusquedaAvanzada} from "../../page-objects/Ebay"

describe('Búsqueda Avanzada', function(){

    const busquedaAvanzada = new BusquedaAvanzada()

    it('Should hacer una búsqueda avanzada', function(){
        busquedaAvanzada.navigate()
        busquedaAvanzada.busquedaPorPalabraYnumero('tenis','2', '888')
        busquedaAvanzada.busquedaIncluyendo(2)
        busquedaAvanzada.precio(1000, 5000)
        busquedaAvanzada.formatoDeCompra(4)
        busquedaAvanzada.estado(2)
        busquedaAvanzada.mostrarLosResultados1(4, '903', '12', '1000', '10000', '2000', '20000')
        busquedaAvanzada.mostrarLosResultados2(5)
        busquedaAvanzada.opcionesDeEnvio()
        busquedaAvanzada.ubicacion(3, '50', '35750', 'Europe', 'República Dominicana')
        busquedaAvanzada.vendedores(3, 'Excluir', 'Marcos')
        busquedaAvanzada.ordenarPor('Precio + Envío: más bajo primero')
        busquedaAvanzada.verResultados('Galería de imágenes')
        busquedaAvanzada.resultadosPorPaginas('25')
        busquedaAvanzada.buscarOBorrarOpciones(1)
    })
})