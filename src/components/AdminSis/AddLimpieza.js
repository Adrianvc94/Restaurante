import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AddLimpieza.css';

const AddLimpieza = () => {

   const [limpieza, setLimpieza] = useState({
      restaurante:'',
      nombre:'',
      marca:'',
      cantidad:'',
      descripcion:'',
      tipo:'',
      cantidad_medida:'',
      unidad_medida:'',
      liquido:''
   });

   const [url] = useState('http://localhost:5000/limpieza');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setLimpieza({
         ...limpieza,
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
         body: JSON.stringify(limpieza)
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

            <div className="root-container_addlimpieza">
         
               <div className="parent-container_addlimpieza">
         
                  <div className="search-container_addlimpieza">        
                     <div className="search-box_addlimpieza">
                        
                        <h1 className="main-title_addlimpieza">Información de los Artículos</h1>
         
                        <form id="form" className="form_addlimpieza" action="">
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
                              <input type="text" onChange={cambiarValor} name="nombre" id="nombre"/>
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
                              <input type="text" onChange={cambiarValor} name="cantidad" id="cantidad"/>
                           </label>   
                           <label for="description">
                              <h2>Descripcion</h2>
                              <input type="text" onChange={cambiarValor} name="description" id="description"/>
                           </label>   
                           <label for="liquido">
                              <h2>Artículo Líquido</h2>
                              <select name="liquido" onChange={cambiarValor} name="liquido" id="liquido">
                                 <option value="si">Sí</option>
                                 <option value="no">No</option>
                              </select>
                           </label>
                     
                        </form>
         
                        <div className="search-buttons-container_addlimpieza">
                           <button onClick={limpiarInputs} className="btnclear_addlimpieza"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addlimpieza"><span></span></button>
                           <Link to="/limpieza" className="btnclose_addlimpieza"><span></span></Link>
                           <button className="btnImage_addlimpieza"><span></span></button>
                        </div>
                     </div>
         
                     <div className="infocuenta_addlimpieza">
                        <form id="form2" className="form_addlimpieza" action="">
                           <label for="tipo">
                              <h2>Tipo</h2>
                              <input type="text" onChange={cambiarValor} name="tipo" id="tipo"/>
                           </label> 
                           <label for="cantidad_medida">
                              <h2>Cantidad de Medida</h2>
                              <input type="text" onChange={cambiarValor} name="cantidad_medida" id="cantidad_medida"/>
                           </label>   
                           <label for="unidad_medida">
                              <h2>Unidad de Medida</h2>
                              <input type="text" id="unidad_medida" onChange={cambiarValor} name="unidad_medida"/>
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

export default AddLimpieza;