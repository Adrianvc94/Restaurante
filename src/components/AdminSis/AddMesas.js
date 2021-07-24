import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddMesas.css";

const AddMesas = () => {

   
   const [mesa, setMesa] = useState({
      nombre:'',
      numero:'',
      sillas:'',
      restaurante:''
   });

   const [url] = useState('http://localhost:5000/mesas');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setMesa({
         ...mesa,
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
         body: JSON.stringify(mesa)
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

            <div className="root-container_addmesa">
         
               <div className="parent-container_addmesa">
         
                  <div className="search-container_addmesa">        
                     <div className="search-box_addmesa">
                        
                        <h1 className="main-title_addmesa">Información de la Mesa</h1>
         
                        <form className="form_addmesa" id="form" action="">
                           <label for="nameRestaurante">
                              <h2>Nombre</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nameRestaurante"/>
                           </label>       
                           <label for="numero">
                              <h2>Numero</h2>
                              <input type="text" onChange={cambiarValor} name="numero" id="numero"/>
                           </label> 
                           <label for="cantidad">
                              <h2>Cantidad de Sillas</h2>
                              <input type="text" onChange={cambiarValor} name="cantidad" id="cantidad"/>
                           </label> 
                           <label for="restaurante">
                              <h2>Nombre del Restaurante</h2>
                              <input list="restaurante" onChange={cambiarValor} name="restaurante"/>
                              <datalist id="restaurante">
                                 <option value="1. Restaurante"></option>
                                 <option value="2. Restaurante"></option>
                                 <option value="3. Restaurante"></option>
                              </datalist>
                           </label> 
                        </form>
                        <div className="search-buttons-container_addmesa">
                           <button className="btnclear_addmesa" onClick={limpiarInputs}><span></span></button>
                           <button className="btnAdd_addmesa" onClick={enviarDatos}><span></span></button>
                           <Link to="/mesas" className="btnclose_addmesa"><span></span></Link>
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

export default AddMesas;

