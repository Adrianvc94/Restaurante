import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Buffet.css';

const Buffet = () => {

   const [buffets, setBuffets] = useState([]);
   const [buffet, setBuffet] = useState({
      nombre:'',
      precio:'',
      tipo:'',
      medida:''
   });

   const [url] = useState('http://localhost:5000/buffet');

   const traerDatosBuffet = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setBuffets(datos);
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(buffet)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosBuffet();
   }, [])

   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_buffet">

               <div className="parent-container_buffet">

                  <div className="search-container_buffet">        
                     <div className="search-buttons-container_buffet">
                        <button className="btnrefresh_buffet"><span></span></button>
                        <Link to="/especiales" className="btnclose_buffet"><span></span></Link>
                        <button className="btnclear_buffet"><span></span></button>
                        <button className="btnsearch_buffet"><span></span></button>
                     </div>
                     <div className="search-box_buffet">
                        <h2>Solo busqueda</h2>
                        <form className="form_buffet" id="form_buffet" action="">
                           <label for="idrestaurante">
                              <h2>Código de la Comida</h2>
                              <input type="text" id="idrestaurante"/>
                           </label>  
                           <label for="nameRestaurante">
                              <h2>Nombre de la Comida</h2>
                              <input type="text" id="nameRestaurante"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_buffet">
                        <Link to="/addbuffet" className="btnAdd_buffet"><span></span></Link>
                        <button className="btnDelete_buffet"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_buffet"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Precio</th>
                           <th>Tipo</th>
                           <th>Unidad de Medida</th>
                        </tr>

                        {buffets.map(b => {
                           return <tr>
                           <td>{b._id}</td>
                           <td>{b.nombre}</td>
                           <td>{b.precio}</td>
                           <td>{b.tipo}</td>
                           <td>{b.medida}</td>
                        </tr>
                        })}
                     </table>
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

export default Buffet;