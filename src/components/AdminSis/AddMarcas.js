import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AddMarcas.css';

const AddMarcas = () => {

   const [marca, setMarca] = useState({
      nombre:'',
      nacionalidad:'',
      descripcion:'',
      cedula:'',
      empresa:'',
      detalle:'',
      telefono:''
   });

   const [url] = useState('http://localhost:5000/marcas');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setMarca({
         ...marca,
         [name] : value
      })
   }

   const enviarDatos = async () =>{
      await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(marca)
      })
      .then(response => response.json())
      .catch(error => console.log(error))
   }

   const limpiarInputs = () => {
      document.getElementById("form").reset();
      document.getElementById("form2").reset();
   }

   

   const interfaz = () => {

      return(

         <body>

            <div className="root-container_addmarcas">
         
               <div className="parent-container_addmarcas">
         
                  <div className="search-container_addmarcas">        
                     <div className="search-box_addmarcas">
                        
                        <h1 className="main-title_addmarcas">Informacion de la Marca</h1>
         
                        <form id="form" className="form_addmarcas" action="">
                           <label for="nombre">
                              <h2>Nombre</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nombre"/>
                           </label>  
                           <label for="nacionalidad">
                              <h2>Nacionalidad</h2>
                              <input type="text" onChange={cambiarValor} name="nacionalidad" id="nacionalidad"/>
                           </label>       
                        
                           <label for="descripcion">
                              <h2>Descripcion</h2>
                              <input type="text" onChange={cambiarValor} name="descripcion" id="descripcion"/>
                           </label>   
                           {/* <label for="telefono_uno">
                              <h2>Telefono 1</h2>
                              <input type="text" onChange={cambiarValor} name="telefono_uno" id="telefono_uno"/>
                           </label>   */}
                     
                        </form>
         
                        <div className="search-buttons-container_addmarcas">
                           <button onClick={limpiarInputs} className="btnclear_addmarcas"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addmarcas"><span></span></button>
                           <Link to="/marcas" className="btnclose_addmarcas"><span></span></Link>
                        </div>
                     </div>
         
                     <div className="infocuenta_addmarcas">
                        <form id="form2" className="form_addmarcas" action="">
                        <h1 className="main-title2_addmarcas">Informacion de la Marca</h1>
                           <label for="cedula">
                              <h2>Cédula Jurídica</h2>
                              <input type="text" onChange={cambiarValor} name="cedula" id="cedula"/>
                           </label> 
                           <label for="empresa">
                              <h2>Nombre de la Empresa</h2>
                              <input type="text" onChange={cambiarValor} name="empresa" id="empresa"/>
                           </label>   
                           <label for="detalle_empresa">
                              <h2>Detalle de la Empresa</h2>
                              <input type="text" onChange={cambiarValor} name="detalle_empresa" id="detalle_empresa"/>
                           </label>
                           <label for="telefono">
                              <h2>Teléfono</h2>
                              <input type="text" onChange={cambiarValor} name="telefono" id="telefono"/>
                           </label> 
                        </form>
                     </div>
                  
                  </div>     
            
               </div>
            
            </div>
            
         </body>
       
      )    
   }

   return (
      <div>
         {interfaz()}
      </div>
   )
}

export default AddMarcas;