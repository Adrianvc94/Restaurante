import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddDesechables.css";

const AddDesechables = () => {

   
   const [desechable, setDesechable] = useState({
      restaurante:'',
      nombre:'',
      marca:'',
      cantidad:'',
      descripcion:''
   });

   const [url] = useState('http://localhost:5000/desechables');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setDesechable({
         ...desechable,
         [name] : value
      })
   }

   const enviarDatos = async () =>{
      let respuesta = await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(desechable)
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
   }

   const limpiarInputs = () => {
      document.getElementById("form").reset();
   }

   const interfaz = () => {
      return(

         <body>

            <div className="root-container_adddesechables">
         
               <div className="parent-container_adddesechables">
         
                  <div className="search-container_adddesechables">        
                     <div className="search-box_adddesechables">
                        
                        <h1 className="main-title_adddesechables">Información de los Desechables y Empaques</h1>
         
                        <form id="form" className="form_adddesechables" action=""> 
                           <label for="restaurante">
                              <h2>Restaurante</h2>
                              <input list="restaurante" onChange={cambiarValor} name="restaurante"/>
                              <datalist id="restaurante">
                                 <option value="1. Restaurante"></option>
                                 <option value="2. Restaurante"></option>
                                 <option value="3. Restaurante"></option>
                              </datalist>
                           </label> 
                           <label for="nombre">
                              <h2>Nombre</h2>
                              <input type="text" id="nombre" onChange={cambiarValor} name="nombre"/>
                           </label> 
                           <label for="marca">
                              <h2>Marca</h2>
                              <input list="marca" onChange={cambiarValor} name="marca"/>
                              <datalist id="marca">
                                 <option value="1. Marca"></option>
                                 <option value="2. Marca"></option>
                                 <option value="3. Marca"></option>
                              </datalist>
                           </label> 
                           
                           <label for="cantidad">
                              <h2>Cantidad</h2>
                              <input type="text" id="cantidad" onChange={cambiarValor} name="cantidad"/>
                           </label> 
                           <label for="descripcion">
                              <h2>Descripcion</h2>
                              <input type="text" id="descripcion" onChange={cambiarValor} name="descripcion"/>
                           </label> 
                        
                        </form>
                        <div className="search-buttons-container_adddesechables">
                           <button onClick={limpiarInputs} className="btnclear_adddesechables"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_adddesechables"><span></span></button>
                           <Link to="/desechables" className="btnclose_adddesechables"><span></span></Link>
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

export default AddDesechables;

