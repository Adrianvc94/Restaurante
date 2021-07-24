import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AddBuffet.css';

const AddBuffet = () => {

   const [buffet, setBuffet] = useState({
      nombre:'',
      precio:'',
      tipo:'',
      medida:''
   });

   const [url] = useState('http://localhost:5000/buffet');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setBuffet({
         ...buffet,
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
         body: JSON.stringify(buffet)
      })
      .then(response => response.json())
      .catch(error => console.log(error))
   }

   const limpiarInputs = () => {
      document.getElementById("form_addbuffet").reset();
   }


   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_addbuffet">
         
               <div className="parent-container_addbuffet">
         
                  <div className="search-container_addbuffet">        
                     <div className="search-box_addbuffet">
                        
                        <h1 className="main-title_addbuffet">Información de la comida tipo Buffet</h1>
         
                        <form className="form_addbuffet" id="form_addbuffet" action="">
                           <label for="nameBuff">
                              <h2>Nombre</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nameBuff"/>
                           </label>       
                           <label for="precioBuff">
                              <h2>Precio</h2>
                              <input type="text" onChange={cambiarValor} name="precio" id="precioBuff"/>
                           </label> 
                           <label for="tipoBuff">
                              <h2>Tipo</h2>
                              <input list="tipoBuff" onChange={cambiarValor} name="tipo"/>
                              <datalist id="tipoBuff">
                                 <option value="Marina"></option>
                                 <option value="Vegetal"></option>
                                 <option value="Frutas"></option>
                                 <option value="Mediterránea "></option>
                              </datalist>
                           </label> 
                           <label for="medidaBuff">
                              <h2>Unidad de Medida</h2>
                              <input list="medidaBuff" onChange={cambiarValor} name="medida"/>
                              <datalist id="medidaBuff">
                                 <option value="Unidades de capacidad"></option>
                                 <option value="Unidades de densidad"></option>
                                 <option value="Unidades de energía"></option>
                                 <option value="Unidades de fuerza "></option>
                              </datalist>
                           </label> 
                           
                        </form>
         
                        <div className="search-buttons-container_addbuffet">
                           <button className="btnclear_addbuffet" onClick={limpiarInputs}><span></span></button>
                           <button className="btnAdd_addbuffet" onClick={enviarDatos}><span></span></button>
                           <Link to="/buffet" className="btnclose_addbuffet"><span></span></Link>
                           <button className="btnImage_addbuffet"><span></span></button>
                        </div>
                     </div>
         
                     <div className="buffetImage_addbuffet">
                        <h2>Foto del Platillo</h2>
                        <picture>
                           <img src="https://us.123rf.com/450wm/mosaymay/mosaymay1609/mosaymay160900152/65435258-buffet-de-l%C3%ADnea-para-el-almuerzo-en-el-restaurante-la-comida.jpg?ver=6" alt=""/>
                        </picture>
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

export default AddBuffet;