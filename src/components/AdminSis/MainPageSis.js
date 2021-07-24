import "../../Styles/MainPageSis.css";
import { Link } from "react-router-dom";

/////// Images
// import securityIcon from '../../Images';
import restaurantIcon from '../../Images/restaurantIcon.svg';
import clientLogo from '../../Images/clientLogo.svg';
import proveedorIcon from '../../Images/proveedorIcon.svg';
import adminIcon from '../../Images/adminIcon.svg';
import reportIcon from '../../Images/reportIcon.svg';

import logoutIcon from '../../Images/logout_icon.svg';
import helpIcon from '../../Images/help_icon.svg';

const MainPageSis = () => {

      const interfaz = () => {
      return(
         <body>
      
            <div className="root-container_MainPageSis">

               <div className="parent-container_MainPageSis">

                  <div className="tittle-buttons_MainPageSis">
                     <h1 className="main-title_MainPageSis">Administración Central de los Restaurantes</h1>
                     <Link to="/ayudasistemasis" className="btnhelp_MainPageSis"><img src={helpIcon} alt=""/></Link>
                     <Link to="/login" className="btnlogout_MainPageSis"><img src={logoutIcon} alt=""/></Link>
                  </div>

                  <div className="cards-container_MainPageSis">

                     {/* <div className="card">
                        <h2 className="card-title">Seguridad</h2>
                        <img className="card-image" src={securityIcon} alt=""/>
                     </div> */}

                     <Link to="/listarestaurante" className="card_MainPageSis">                  
                        <h2 className="card-title">Restaurantes</h2>
                        <img className="card-image" src={restaurantIcon} alt=""/>                     
                     </Link>

                     <Link to="/clientes" className="card_MainPageSis">                  
                        <h2 className="card-title">Clientes</h2>
                        <img className="card-image" src={clientLogo} alt=""/>                 
                     </Link>

                     <Link to="/proveedores" className="card_MainPageSis">                  
                        <h2 className="card-title">Proveedores</h2>
                        <img className="card-image" src={proveedorIcon} alt=""/>              
                     </Link>

                     <Link to="/administracion" className="card_MainPageSis">                  
                        <h2 className="card-title">Administración</h2>
                        <img className="card-image" src={adminIcon} alt=""/>        
                     </Link>

               {/* Solo puede acceder a los reportes de los clientes */}
                     <Link to="/login" className="card_MainPageSis">                  
                        <h2 className="card-title">Reportes</h2>
                        <img className="card-image" src={reportIcon} alt=""/>      
                     </Link>          
                  
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

export default MainPageSis;