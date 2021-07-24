import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AddMedidas.css';

const AddMedidas = () => {

   const [medida, setMedida] = useState({
      unidad:'',
      escala:'',
      detalle:'',
      simbolo:'',
      simbologia:''
   });

   const [url] = useState('http://localhost:5000/medidas');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setMedida({
         ...medida,
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
         body: JSON.stringify(medida)
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
   
            <div className="root-container_addmedidas">
         
               <div className="parent-container_addmedidas">
         
                  <div className="search-container_addmedidas">        
                     <div className="search-box_addmedidas">
                        
                        <h1 className="main-title_addmedidas">Información de Unidades de Medida</h1>
         
                        <form id="form" className="form_addmedidas" action="">
                           <label for="unidad">
                              <h2>Unidad</h2>
                              <input type="text" onChange={cambiarValor} name="unidad" id="unidad"/>
                           </label>       
                           <label for="escala">
                              <h2>Escala</h2>
                              <input list="escala" onChange={cambiarValor} name="escala"/>
                              <datalist id="escala">
                                 <option value="1.Escala"></option>
                                 <option value="2.Escala"></option>
                                 <option value="3.Escala"></option>
                              </datalist>
                           </label> 
                           <label for="detalle">
                              <h2>Detalle</h2>
                              <input list="detalle" onChange={cambiarValor} name="detalle"/>
                              <datalist id="detalle">
                                 <option value="1.Detalle"></option>
                                 <option value="2.Detalle"></option>
                                 <option value="3.Detalle"></option>
                              </datalist>
                           </label>               
                        </form>
         
                        <div className="search-buttons-container_addmedidas">
                           <button onClick={limpiarInputs} className="btnclear_addmedidas"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addmedidas"><span></span></button>
                           <Link to="/medidas" className="btnclose_addmedidas"><span></span></Link>
                           {/* <button className="btnImage_addmedidas"><span></span></button> */}
                        </div>
                     </div>
         
                     <div className="medidaImagen_addmedidas">
                        <form id="form2" className="form_addmedidas" action="">
                           <label for="simbolo">
                              <h2>Simbolo</h2>
                              <input type="text" onChange={cambiarValor} name="simbolo" id="simbolo"/>
                           </label>   
                           <label for="simbologia">
                              <h2>Simbologia</h2>
                              <input type="text" onChange={cambiarValor} name="simbologia" id="simbologia"/>
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

export default AddMedidas;