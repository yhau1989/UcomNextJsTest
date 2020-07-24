import Container from "../components/Container";
import React, { useState } from 'react';
import {getUrlEstadoCuenta, getUrlPago} from "../libraries/env"
import Estadocuenta from "../components/Estadocuenta"
import {LoadingIndigo, LoadingWhite} from "../components/Loadings"


const Index = () => {
     const [inpCed, inpCedValue] = useState('');
     const [loadinConsulta, setloadinConsulta] = useState('');
     const [loadinPago, setloadinPago] = useState('');
     const [inpIdFact, setinpIdFact] = useState('');
     const [inpPago, setinpPago] = useState('');
     const [estadoCta, setEstadoCta] = useState(null);

     async function getEstadoCuenta(e){
        e.preventDefault();
        if(inpCed.length > 0)
        {
            setEstadoCta(null);
            let proc = {
              method: 'POST',
              body: JSON.stringify({
                cliente : inpCed
              }), 
              headers:{
                'Content-Type': 'application/json',
              }
            };
            
            fetch(getUrlEstadoCuenta(), proc)
            .then(setloadinConsulta(<LoadingIndigo></LoadingIndigo>))
            .then(result => { 
              return result.json()
            })
            .then(data => {
                setloadinConsulta('')
                setEstadoCta(data);
            })
            .catch(error => {
              console.log(error);
              setloadinConsulta('errores...');
             })
        }
      }



      async function PagarFactura(e){
        e.preventDefault();
        if(inpPago.length > 0 && inpIdFact.length > 0) 
        {
            setloadinPago('')
            let proc = {
              method: 'POST',
              body: JSON.stringify({
                secuencial : inpIdFact,
                val_pagado : inpPago
              }), 
              headers:{
                'Content-Type': 'application/json',
              }
            };
            
            fetch(getUrlPago(), proc)
            .then(setloadinPago(<LoadingWhite></LoadingWhite>))
            .then(result => { 
              return result.json()
            })
            .then(data => {

                if(data.status == 0)
                {
                    setloadinPago(
                        <div className="text-white">
                            <p>Pago realizado con exito</p>
                            <p>{data.data.idtrx}</p>
                        </div>
                    )
                }
                else{
                    setloadinPago(
                        <div className="text-white">
                            <p>Error en el proceso de pago</p>
                            <p>{data.msg}</p>
                        </div>
                    )
                }
            })
            .catch(error => {
              console.log(error);
              setloadinPago('errores...');
             })
        }
      }


 return(

  <Container>
    <div>
      <div className="flex flex-wrap">
        <div className="flex-1 text-center h-screen">
          <h1 className="pt-10 text-3xl font-semibold">Estado de cuenta</h1>
          <div className="container flex flex-wrap my-10 px-6 justify-center">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 text-left pr-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 ml-1" htmlFor="imp_ced">
                cedula
              </label>
              <input
                id="imp_ced"
                className="block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none"
                type="text"
                placeholder="0926327917"
                value={inpCed} onChange={(e) => inpCedValue(e.target.value)}
                />
            </div>

            <div className="flex content-end flex-wrap ">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-sm border-4 text-white py-2 px-2 rounded"
              type="button"
              onClick={e => getEstadoCuenta(e)}
            >
              Consultar
            </button>
            </div>
          </div>

          <p>{loadinConsulta}</p>
         {estadoCta && <Estadocuenta props={estadoCta}></Estadocuenta>}


        </div>



        <div className="flex-1 bg-indigo-600 text-center bg-gray-400 h-screen">
          <h1 className="pt-10 text-3xl font-semibold text-white">Realizar Pagos</h1>
          <div className=" flex flex-wrap my-10 px-6 justify-center">
              <div className="flex-1 text-left px-2">
                <label
                    className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-1 ml-1" htmlFor="imp_idfact">
                    Id Factura
                </label>
                <input
                id="imp_idfact"
                className="block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none"
                type="number"
                value={inpIdFact} onChange={(e) => setinpIdFact(e.target.value)}
                />
              </div>
              <div className="flex-1 text-left px-2">
                <label
                    className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-1 ml-1" htmlFor="imp_idfact">
                    Valor a pagar
                </label>
                <input
                id="imp_val"
                className="block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none"
                type="text"
                value={inpPago} onChange={(e) => setinpPago(e.target.value)}
                />
              </div>
              <div className="flex content-end flex-wrap  text-left px-2">
                <button
                className="bg-indigo-300 hover:bg-indigo-800 border-indigo-300 hover:border-indigo-800 hover:text-white text-sm border-4 text-indigo-900 font-medium  py-2 px-6 rounded" type="button"
                onClick={e => PagarFactura(e)}
                >
                Pagar
                </button>
              </div>
          </div>
          <p>{loadinPago}</p>
        </div>
      </div>
    </div>
  </Container>

    );




 }

export default Index;
