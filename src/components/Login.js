
import React, {useState, useContext} from 'react';
import { Redirect, Link } from 'react-router-dom';
import '../Styles/Login.css';

import {Username} from '../Helper/Context';


const Login = () => {


   const {username, setUsername} = useContext(Username)


   // const [puestos, setPuestos] = useState([]);
   const [role, setRole] = useState({
      privilegios: ''
   });
   const [login, setLogin] = useState({
      username:'',
      password:''
   });

   const [url] = useState('http://localhost:5000/login');

   // const traerDatosPuesto = async () => {
   //    let datos = await fetch(url)
   //    .then(response => response.json())
   //    setPuestos(datos);
   // }

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setLogin({
         ...login,
         [name] : value
      })
   }

   var i = 0;

   const enviarDatos = async () =>{
      let rol = await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(login)
      })
      .then(response => response.json())
      .catch(error => console.log(error))  
      setUsername(rol)
      // if(i === 1){
      //    setRole(rol)
      // }
      // i++;
   }

   const limpiarInputs = () => {
      document.getElementById("form").reset();
   }


   const interfaz = () => {

      return (
         <main>

            <section className="background_login">
      
               <section className="main-container_login">
                  <section className="login-container_login">
                     <section className="login-box_login">
                        <h1 className="h1_login">Login</h1>
      
                        <form id="form" className="form-login_login" action="">
                           <label for="user">
                              <h2 className="h2_login">Usuario</h2>
                              <input type="text" onChange={cambiarValor} id="username" name="username" placeholder="Nombre de usuario"/>
                           </label>  
                           <label for="password">
                              <h2 className="h2_login">Contraseña</h2>
                              <input type="password" onChange={cambiarValor} id="password" name="password" placeholder="Contraseña"/>
                           </label>         
                        </form>
      
                        <button className="btnLogin_login" onClick={enviarDatos}>Iniciar Sesion </button>


                        <button className="btnCancel_login" onClick={limpiarInputs}>Cancelar</button>
      
                     </section>
                  </section>
               </section>
         
               <section>
         
               </section>
      
            </section>   
      
         </main>
      )
   }

   const validar = () => {
      if(username.privilegios === "sistema"){
         return <Redirect to="/mainpagesis" />
      }else if(username.privilegios === "seguridad"){
         return <Redirect to="/mainpageseg" />
      }
   }

   return(
         <div>
            {interfaz()}
            {validar()}
         </div>
   )
}

export default Login;