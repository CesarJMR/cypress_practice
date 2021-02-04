/// <reference types="cypress" />

export class BusquedaAvanzada{
       
    navigate(){
        cy.visit('https://www.ebay.com/sch/ebayadvsearch', {timeout: 10000})
    }

    busquedaPorPalabraYnumero(articulo, como, categoria){
        cy.get('#_nkw').type(articulo)
        cy.get('#_in_kw').select(como)
        cy.get('#e1-1').select(categoria)
    }

    busquedaIncluyendo(incluyendo){
        cy.get(`#adv_search_from fieldset:nth-child(3) label:nth-child(${incluyendo})`).click()
    }

    precio(desde, hasta){
        cy.get('#_mPrRngCbx').click()
        cy.get('#adv_search_from fieldset:nth-child(4) input:nth-child(4)').type(desde)
        cy.get('#adv_search_from fieldset:nth-child(4) input:nth-child(5)').type(hasta)
    }

    formatoDeCompra(formato){
        cy.get(`#adv_search_from fieldset:nth-child(5) label:nth-child(${formato})`).click()
    }

    estado(estado){
        cy.get(`#adv_search_from fieldset:nth-child(6) label:nth-child(${estado})`).click()
    }

    mostrarLosResultados1(div, a, b, desde1, hasta1, desde2, hasta2){
        switch(div){
            case 2:
                cy.get(`#adv_search_from fieldset:nth-child(7) div:nth-child(${div}) input`).click({multiple: true})
                cy.get('#adv_search_from fieldset:nth-child(7) div:nth-child(2) select:nth-child(3)').select(a)
                cy.get('#adv_search_from fieldset:nth-child(7) div:nth-child(2) select:nth-child(4)').select(b)
                break
            
            case 3:
                cy.get(`#adv_search_from fieldset:nth-child(7) div:nth-child(${div}) input`).click({multiple: true})
                cy.get('#_sabdlo').type(desde1)
                cy.get('#_sabdhi').type(hasta1)
                break

            case 4:
                cy.get(`#adv_search_from fieldset:nth-child(7) div:nth-child(${div}) input`).click({multiple: true})
                cy.get('#_samilow').type(desde2)
                cy.get('#_samihi').type(hasta2)
                break
        }
    }

    mostrarLosResultados2(label){
        switch(label){
            case 5:
                cy.get(`#adv_search_from fieldset:nth-child(7) label:nth-child(${label}) input`).click({multiple: true})
                break

            case 7:
                cy.get(`#adv_search_from fieldset:nth-child(7) label:nth-child(${label}) input`).click({multiple: true})
                break

            case 9:
                cy.get(`#adv_search_from fieldset:nth-child(7) label:nth-child(${label}) input`).click({multiple: true})
                break

            case 11:
                cy.get(`#adv_search_from fieldset:nth-child(7) label:nth-child(${label}) input`).click({multiple: true})
                break
        }
    }

    opcionesDeEnvio(){
        cy.get('#adv_search_from fieldset:nth-child(7) fieldset label input').click()
    }

    ubicacion(ubicacion, millas, zipcode, continente, pais){
        switch(ubicacion){
            case 1:
                cy.get('#LH_Located').click()
                cy.get('#_sadis').select(millas)
                cy.get('#_stpos').type(zipcode)
                break
            
            case 2:
                cy.get('#LH_PrefLocRadio').click()
                cy.get('#_sargnSelect').select(continente)
                break

            case 3:
                cy.get('#LH_LocatedInRadio').click()
                cy.get('#_salicSelect').select(pais)
                break
        }
    }

    vendedores(opcion, inOex, vendedor){
        cy.get('#_fss').click()
        switch(opcion){
            case 1:
                cy.get('#LH_SpecificSeller_id').click()
                cy.get('#_saslop').select(inOex)
                cy.get('#_sasl').type(vendedor)
                break

            case 2:
                cy.get('#LH_FavSellers_id').click()
                break

            case 3:
                cy.get('#LH_SellerWithStore_id').click()
                break
        }
    }

    ordenarPor(ordenar){
        cy.get('#LH_SORT_BY').select(ordenar)
    }

    verResultados(verResultados){
        cy.get('#LH_VIEW_RESULTS_AS').select(verResultados)
    }

    resultadosPorPaginas(cantidad){
        cy.get('#LH_IPP').select(cantidad)
    }

    buscarOBorrarOpciones(buscarOBorrarOpciones){
        switch(buscarOBorrarOpciones){
            case 1:
                cy.get('#searchBtnLowerLnk').click()
                break

            case 2:
                cy.visit('https://www.ebay.com/sch/ebayadvsearch?_sofindtype=0', {timeout: 10000})
                break
        }
    }
}