
const Estadocuenta = ({props}) => {
  
    if(props?.status == 1)
    {
      return(<div>No existe</div>);
    }

    if(props?.status == 0)
    {
        let facturas = []
        props.data.estado_cuenta.facturas.map((fact) =>{

            let items = []
            for(let [key, val] of Object.entries(fact)) {
                items.push (
                    <p key={key}> <strong>{key}</strong>: {val}</p>
                )
              }

            facturas.push(
                <div key={facturas.length} className="border-b p-2 my-1 rounded text-left text-xs">
                    {items}
                </div>
            )
        });
        

          return(
            <div style={{height:600}} className="container flex flex-col my-10 px-6  overflow-y-auto">
                <h3>{props.data.estado_cuenta.datosCliente.cl_nombres} {props.data.estado_cuenta.datosCliente.cl_apellidos}</h3>
                {facturas}
            </div>
          );
    }


};

export default Estadocuenta;
