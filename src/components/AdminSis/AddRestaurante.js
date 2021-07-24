import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddRestaurante.css";

const AddRestaurante = () => {

   const [restaurante, setRestaurante] = useState({
      nombre:'',
      direccion:'',
      especialidad:'',
      telefono:'',
      estado:''
   });

   const [url] = useState('http://localhost:5000/restaurantes');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setRestaurante({
         ...restaurante,
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
         body: JSON.stringify(restaurante)
      })
      .then(response => response.json())
      .catch(error => console.log(error))
   }

   const limpiarInputs = () => {
      document.getElementById("form").reset();
   }


   const interfaz = () => {
      return(

         <body>

            <div className="root-container_addrestaurante">

               <div className="parent-container_addrestaurante">

                  <div className="search-container_addrestaurante">        
                     <div className="search-box_addrestaurante">
                        
                        <h1 className="main-title_addrestaurante">Agregar Restaurante</h1>

                        <form className="form_addrestaurante" id="form_addrestaurante" action="">
                           <label for="nameRestaurante">
                              <h2>Nombre</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nombre" />
                           </label>       
                           <label for="EspecialidadRestaurante">
                              <h2>Especialidad</h2>
                              <input type="text" onChange={cambiarValor} id="especialidad" name="especialidad"/>
                           </label> 
                           <label for="DireccionRestaurante">
                              <h2>Direción</h2>
                              <input type="text" onChange={cambiarValor} id="direccion" name="direccion"/>
                           </label> 
                           <label for="TelRestaurante">
                              <h2>Teléfono</h2>
                              <input type="text" onChange={cambiarValor} id="telefono" name="telefono"/>
                           </label>   
                           <label for="EstadoRestaurante">
                              <h2>Activo</h2>
                              <input type="checkbox" value={true} onChange={cambiarValor} id="estado" name="estado"/>
                           </label>  
                        </form>
                        <div className="search-buttons-container_addrestaurante">
                           <button className="btnclear_addrestaurante" onClick={limpiarInputs}><span></span></button>
                           <button className="btnAdd_addrestaurante" onClick={enviarDatos}><span></span></button>
                           <Link to="/listarestaurante" className="btnclose_addrestaurante"><span></span></Link>
                        </div>
                     </div>
                  
                  </div>
            
               
            
               </div>
            
            </div>
            
         </body>

      )
   }

   return(
      <div>
         {interfaz()}
      </div>
   )
}

export default AddRestaurante;
