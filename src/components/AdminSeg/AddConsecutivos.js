import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AddConsecutivos.css';

const AddConsecutivos = () => {

   const [consecutivo, setConsecutivo] = useState({
      tipo:'',
      descripcion:'',
      valor:'',
      prefijo:''
   });

   const [url] = useState('http://localhost:5000/consecutivos');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setConsecutivo({
         ...consecutivo,
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
         body: JSON.stringify(consecutivo)
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

            <div className="root-container_addconsecutivos">
         
               <div className="parent-container_addconsecutivos">
         
                  <div className="search-container_addconsecutivos">        
                     <div className="search-box_addconsecutivos">
                        
                        <h1 className="main-title_addconsecutivos">Información de Consecutivos</h1>
         
                        <form id="form" className="form_addconsecutivos" action="">
                           <label for="tipo">
                              <h2>Tipo de Consecutivo</h2>
                              <input list="tipo" onChange={cambiarValor} name="tipo"/>
                              <datalist id="tipo">
                                 <option value="1. consecutivo"></option>
                                 <option value="2. consecutivo"></option>
                                 <option value="3. consecutivo"></option>
                              </datalist>
                           </label> 
                           <label for="descripcion">
                              <h2>Descripcion</h2>
                              <input type="text" id="descripcion" onChange={cambiarValor} name="descripcion"/>
                           </label>       
                           <label for="valor">
                              <h2>Valor Consecutivo</h2>
                              <input type="text" id="valor" onChange={cambiarValor} name="valor"/>
                           </label> 
                           {/* <label for="poseePrefijo">
                              <h2>El Consecutivo posee Prefijo</h2>
                              <input type="checkbox" id="poseePrefijo" name="nombre"/>
                           </label>  */}
                           <label for="prefijo">
                              <h2>Prefijo</h2>
                              <input type="text" id="prefijo" onChange={cambiarValor} name="prefijo"/>
                           </label> 
                           
                        </form>
                        <div className="search-buttons-container_addconsecutivos">
                           <button onClick={limpiarInputs} className="btnclear_addconsecutivos"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addconsecutivos"><span></span></button>
                           <Link to="/consecutivos" className="btnclose_addconsecutivos"><span></span></Link>
                        </div>
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

export default AddConsecutivos;