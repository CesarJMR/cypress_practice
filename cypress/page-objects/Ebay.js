/// <reference types="cypress" />

export class BusquedaAvanzada{
       
    navigate(){
        cy.visit('https://ebay.com/sch/ebayadvsearch', {timeout: 10000})
    }

    busquedaPorPalabraYnumero(articulo, como, categoria){
        //articulo: escribir artículo que interesa buscar.
        //como: ver dropdown en página y seleccionar opción por value.
        //categoria: ver dropdown en página y seleccionar opción por value.
        
        cy.get('#_nkw').type(articulo).should('have.value', articulo)
        cy.get('#_in_kw').select(como).should('have.value', como)
        cy.get('#e1-1').select(categoria).should('have.value', categoria)
    }

    busquedaIncluyendo(incluyendo){
        //incluyendo: colocar 2 para primera opción, 4 para la segunda y 6 para la tercera.

        cy.get(`#adv_search_from fieldset:nth-child(3) label:nth-child(${incluyendo}) input`).click().should('be.checked')
    }

    precio(desde, hasta){
        cy.get('#_mPrRngCbx').click()
        cy.get('#adv_search_from fieldset:nth-child(4) input:nth-child(4)').type(desde).should('have.value', desde)
        cy.get('#adv_search_from fieldset:nth-child(4) input:nth-child(5)').type(hasta).should('have.value', hasta)
    }

    formatoDeCompra(formato){
        //formato: 2 para la primera opción y 4 para la segunda.

        cy.get(`#adv_search_from fieldset:nth-child(5) label:nth-child(${formato}) input`).click().should('be.checked')
    }

    estado(estado){
        //estado: 2 para la primera opción, 4 para la segunda y 6 para la tercera.

        cy.get(`#adv_search_from fieldset:nth-child(6) label:nth-child(${estado}) input`).click().should('be.checked')
    }

    mostrarLosResultados1(div, a, b, desde1, hasta1, desde2, hasta2){
        //Div: seleccionar las opciones del switch case para seleccionar una opción.
        //a: mirar primer dropdown de anuncios para ver que opción tomar.
        //b: mirar segundo dropdown de anuncios para ver que opción tomar.

        switch(div){
            case 2:
                cy.get(`#adv_search_from fieldset:nth-child(7) div:nth-child(${div}) input`).click({multiple: true}).should('be.checked')
                cy.get('#adv_search_from fieldset:nth-child(7) div:nth-child(2) select:nth-child(3)').select(a).should('have.value', a)
                cy.get('#adv_search_from fieldset:nth-child(7) div:nth-child(2) select:nth-child(4)').select(b).should('have.value', b)
                break
            
            case 3:
                cy.get(`#adv_search_from fieldset:nth-child(7) div:nth-child(${div}) input`).click({multiple: true}).should('be.checked')
                cy.get('#_sabdlo').type(desde1).should('have.value', desde1)
                cy.get('#_sabdhi').type(hasta1).should('have.value', hasta1)
                break

            case 4:
                cy.get(`#adv_search_from fieldset:nth-child(7) div:nth-child(${div}) input`).click({multiple: true}).should('be.checked')
                cy.get('#_samilow').type(desde2).should('have.value', desde2)
                cy.get('#_samihi').type(hasta2).should('have.value', hasta2)
                break
        }
    }

    mostrarLosResultados2(label){
        //label: seleccionar las opciones del switch case para seleccionar una opción.

        switch(label){
            case 5:
                cy.get(`#adv_search_from fieldset:nth-child(7) label:nth-child(${label}) input`).click({multiple: true}).should('be.checked')
                break

            case 7:
                cy.get(`#adv_search_from fieldset:nth-child(7) label:nth-child(${label}) input`).click({multiple: true}).should('be.checked')
                break

            case 9:
                cy.get(`#adv_search_from fieldset:nth-child(7) label:nth-child(${label}) input`).click({multiple: true}).should('be.checked')
                break

            case 11:
                cy.get(`#adv_search_from fieldset:nth-child(7) label:nth-child(${label}) input`).click({multiple: true}).should('be.checked')
                break
        }
    }

    opcionesDeEnvio(){
        cy.get('#adv_search_from fieldset:nth-child(7) fieldset label input').click().should('be.checked')
    }

    ubicacion(ubicacion, millas, zipcode, continente, pais){
        //ubicacion: seleccionar opciones del switch case para seleccionar una opción.

        switch(ubicacion){
            case 1:
                cy.get('#LH_Located').click().should('be.checked')
                cy.get('#_sadis').select(millas).should('have.value', millas)
                cy.get('#_stpos').type(zipcode).should('have.value', zipcode)
                break
            
            case 2:
                cy.get('#LH_PrefLocRadio').click().should('be.checked')
                cy.get('#_sargnSelect').select(continente).should('have.value', continente)
                break

            case 3:
                cy.get('#LH_LocatedInRadio').click().should('be.checked')
                cy.get('#_salicSelect').select(pais).should('have.value', pais)
                break
        }
    }

    vendedores(opcion, inOex, vendedor){
        //opcion: seleccionar opciones del switch case para seleccionar una opción.
        //inOe: incluído o excluído (1 o 2)

        cy.get('#_fss').click().should('be.checked')
        switch(opcion){
            case 1:
                cy.get('#LH_SpecificSeller_id').click().should('be.checked')
                cy.get('#_saslop').select(inOex).should('have.value', inOex)
                cy.get('#_sasl').type(vendedor).should('have.value', vendedor)
                break

            case 2:
                cy.get('#LH_FavSellers_id').click().should('be.checked')
                break

            case 3:
                cy.get('#LH_SellerWithStore_id').click().should('be.checked')
                break
        }
    }

    ordenarPor(ordenar){
        //ordenar: ver dropdown en página y seleccionar opción por value.

        cy.get('#LH_SORT_BY').select(ordenar).should('have.value', ordenar)
    }

    verResultados(verResultados){
        //verResultados: ver dropdown en página y seleccionar opción por value.

        cy.get('#LH_VIEW_RESULTS_AS').select(verResultados).should('have.value', verResultados)
    }

    resultadosPorPaginas(cantidad){
        //cantidad: ver dropdown en página y seleccionar opción por value.

        cy.get('#LH_IPP').select(cantidad).should('have.value', cantidad)
    }

    buscarOBorrarOpciones(buscarOborrarOpciones){
        //buscarOborrarOpciones: seleccionar 1 para buscar y 2 para borrar opciones.

        switch(buscarOborrarOpciones){
            case 1:
                //"chromeWebSecurity": false
                cy.get('#searchBtnLowerLnk', {timeout:10000}).click()
                break

            case 2:
                cy.visit('https://www.ebay.com/sch/ebayadvsearch?_sofindtype=0', {timeout: 10000})
                break
        }
    }
}