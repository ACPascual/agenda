
import React, { useContext} from 'react';
import ContactContext from "../contexts/ContactContext.js"
import '../App.scss';  


function BotonModo() {
  
  const { modoDia, setModoDia } = useContext(ContactContext);
 

  const handleClick = () => {
    setModoDia(!modoDia);
  };


  const botonClaseDia = modoDia?  'modo-noche' : 'modo-dia';

  return (
    
    <button className={`button ${botonClaseDia}`} onClick={handleClick}>
      {modoDia ? 'Día' : 'Noche'}
    </button>
  );
}

export default BotonModo;