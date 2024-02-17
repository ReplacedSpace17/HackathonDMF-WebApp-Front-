import './infoCultivo.css';
import React from 'react';

import IconTitle from '../../assets/Components/Icons/ajustes.svg';
import Iluminacion from '../../assets/Components/Icons/iluminacion.svg';
import Temp from '../../assets/Components/Icons/temperatura.svg';
import Ph from '../../assets/Components/Icons/ph.svg';

function CardBottomParametros({iluminacion, temperatura, ph}) {
   return (
      <div className="containerParameters">
         <div className="contentTop">
            <p className='TitleCardPequeña'>Parámetros</p>
            <img src={IconTitle} className="iconCultivoCard" />
         </div>
         <div className="contentCenter">

            <div className="infoCultivo">
               <div className="containerIconText">
                  <img src={Iluminacion} className="iconParametroCard" />
                  <div className="containerText">
                     <p className='titleCardEspecie'>Iluminación</p>
                     <p className='valueCardEspecie'>{iluminacion}</p>
                  </div>
               </div>
               <div className="containerIconText">
                  <img src={Temp} className="iconParametroCard" />
                  <div className="containerText">
                     <p className='titleCardEspecie'>Temperatura</p>
                     <p className='valueCardEspecie'>{temperatura}</p>
                  </div>
               </div>
               <div className="containerIconText">
                  <img src={Ph} className="iconParametroCard" />
                  <div className="containerText">
                     <p className='titleCardEspecie'>pH del medio</p>
                     <p className='valueCardEspecie'>{ph}</p>
                  </div>
               </div>


            </div>
         </div>
         <div className="contentBottom">
            <button className='btnCardBottom'>Modificar ajustes</button>
         </div>
      </div>
   )
}

export default CardBottomParametros;
