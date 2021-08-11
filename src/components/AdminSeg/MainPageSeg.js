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

                     {/* Solo puede acceder a la bitacora */}
                     <Link to="/reportesseg" className="card_MainPageSeg">                  
                        <h2 className="card-title_MainPageSeg">Reportes</h2>
                        <img className="card-image_MainPageSeg" src={reportIcon} alt=""/>      
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

export default MainPageSeg;