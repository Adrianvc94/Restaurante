import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AddBuffet.css';


import {Username} from '../../Helper/Context';

const AddBuffet = () => {

   
   const {username, setUsername} = useContext(Username)

   const [buffet, setBuffet] = useState({
      nombre:'',
      precio:'',
      tipo:'',
      medida:''
   });

   const [medidas, SetMedidas] = useState([]);

   const [url] = useState('http://localhost:5000/buffet');
   const [urlmedidas] = useState('http://localhost:5000/medidas');
   const [urlbitacora] = useState('http://localhost:5000/bitacora');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setBuffet({
         ...buffet,
         [name] : value
      })
   }

   const traerUnidadMedias = async () => {
      let unidad = await fetch(urlmedidas)
      .then(response => response.json())
      SetMedidas(unidad);
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

      var fecha = new Date();

      var date = fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate();
      var time = fecha.getHours() + ":" + fecha.getMinutes();

      var horaFecha = date + " " + time

      const bitacora = {
         usuario:username.username,
         fechaHora:horaFecha,
         descripcion:"Agregó Buffet"
      }

      await fetch(urlbitacora, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(bitacora)
      })
      .then(response => response.json())
      .catch(error => console.log(error))
   }

   const limpiarInputs = () => {
      document.getElementById("form_addbuffet").reset();
   }

   useEffect(() => {
      traerUnidadMedias();
   },[])


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
                           <label for="tipo">
                              <h2>Tipo</h2>
                              <input list="tipo" onChange={cambiarValor} name="tipo"/>
                              <datalist id="tipo">
                                 <option value="Marina"></option>
                                 <option value="Vegetal"></option>
                                 <option value="Frutas"></option>
                                 <option value="Mediterránea "></option>
                              </datalist>
                           </label> 

                           <label for="medida">
                           <h2>Restaurante</h2>
                           <select onChange={cambiarValor} name="medida" id="medida">
                              <option value="none" selected disabled hidden>
                                 Eliga una opción
                              </option>
                              {medidas.map(m => {
                                    return <option defaultValue={m.unidad} value={m.unidad}>{m.unidad}</option> 
                              })}
                           </select>
                        </label>
                           
                        </form>
         
                        <div className="search-buttons-container_addbuffet">
                           <button className="btnclear_addbuffet" onClick={limpiarInputs}><span></span></button>
                           <button className="btnAdd_addbuffet" onClick={enviarDatos}><span></span></button>
                           <Link to="/buffet" className="btnclose_addbuffet"><span></span></Link>
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

export default AddBuffet;