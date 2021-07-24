import "../../Styles/MainPageSeg.css";
import { Link } from "react-router-dom";

/////// Images
import securityIcon from '../../Images/securityLogo.svg';
import reportIcon from '../../Images/reportIcon.svg';

import logoutIcon from '../../Images/logout_icon.svg';
import helpIcon from '../../Images/help_icon.svg';

const MainPageSeg = () => {

   const interfaz = () => {
      return(
         <body>
      
            <div className="root-container_MainPageSeg">

               <div className="parent-container_MainPageSeg">

                  <div className="tittle-buttons_MainPageSeg">
                     <h1 className="main-title_MainPageSeg">Administración Central de los Restaurantes</h1>
                     <Link to="/ayudasistemaseg" className="btnhelp_MainPageSeg"><img src={helpIcon} alt=""/></Link>
                     <Link to="/login" className="btnlogout_MainPageSeg"><img src={logoutIcon} alt=""/></Link>
                  </div>


                  <div className="cards-container_MainPageSeg">

                     <Link to="/seguridad" className="card_MainPageSeg">
                        <h2 className="card-title_MainPageSeg">Seguridad</h2>
                        <img className="card-image_MainPageSeg" src={securityIcon} alt=""/>
                     </Link>

                     {/* Solo puede acceder a los reportes de los clientes */}
                     <Link to="/reportes" className="card_MainPageSeg">                  
                        <h2 className="card-title_MainPageSeg">Reportes</h2>
                        <img className="card-image_MainPageSeg" src={reportIcon} alt=""/>      
                     </Link>  

                     {/* <Link to="/listarestaurante" classNameName="card_MainPageSeg">                  
                        <h2 className="card-title_MainPageSeg">Restaurantes</h2>
                        <img className="card-image_MainPageSeg" src={restaurantIcon} alt=""/>                     
                     </Link> */}

                     {/* <Link to="/login" classNameName="card_MainPageSeg">                  
                        <h2 className="card-title_MainPageSeg">Clientes</h2>
                        <img className="card-image_MainPageSeg" src={clientLogo} alt=""/>                 
                     </Link> */}

                     {/* <Link to="/proveedores" classNameName="card_MainPageSeg">                  
                        <h2 className="card-title_MainPageSeg">Proveedores</h2>
                        <img className="card-image_MainPageSeg" src={proveedorIcon} alt=""/>              
                     </Link> */}

                     {/* <Link to="/administracion" classNameName="card_MainPageSeg">                  
                        <h2 className="card-title_MainPageSeg">Administración</h2>
                        <img className="card-image_MainPageSeg" src={adminIcon} alt=""/>        
                     </Link> */}

                       
                  
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

export default MainPageSeg;