
import { useEffect, useState} from "react";


//import ContactContext from "../contexts/ContactContext";

const ContactEdition = ({agenda, setAgenda,idContact}) => {

    const [isVisible, setIsVisible] = useState(true);

    const thisContact =  idContact? agenda.filter(elemento => elemento.id === idContact ):null;
 
    const [contactName, setContactName] = useState ("") ;
    const [contactPhone, setContactPhone] = useState ("") ;


    const [editName, setEditName] = useState('')
    const [editPhone, setEditPhone] = useState('')

    const handleEditName = event => setEditName(event.target.value)
    const handleEditPhone = event => setEditPhone(event.target.value)

     const handleSubmit = (event) =>{
        event.preventDefault();
      
        // Encuentra el índice del contacto seleccionado en la matriz "agenda"
        const selectedIndex = idContact-1;
      
        // Crea una copia de la matriz "agenda" 
        const updatedAgenda = [...agenda];
      
        // Actualiza el nombre del contacto seleccionado con el nuevo nombre
        updatedAgenda[selectedIndex].name = editName;
        updatedAgenda[selectedIndex].phone = editPhone;
      
        // Actualiza el estado con la nueva agenda
        setAgenda(updatedAgenda);
        
        // Restablece los campos
        setEditName('');
        setEditPhone('');

        // Oculta el componente después de enviar el formulario
        setIsVisible(false);
      }

      function handleCancel() {
        setIsVisible(false);
      }

     useEffect (() => {
        
    
        setContactName( thisContact? thisContact[0].name : "No hay")
        setContactPhone( thisContact? thisContact[0].phone : "No hay")
        // setContactMail( thisContact? thisContact[0].mail : "No hay")
         }, [thisContact,idContact]);


    return isVisible && (
        <div>
             <p>                  
                <form onSubmit={handleSubmit}>
                   
                    <tag>Nuevo nombre:  </tag>
                    <input type = "text" value={editName} onChange={handleEditName} placeholder={contactName}></input>
                    <br/> 
                    <tag> Nuevo teléfono:</tag>
                    <input type = "text" value={editPhone} onChange={handleEditPhone} placeholder={contactPhone}></input>
                    <br/> 
                    <button type="submit">Actualizar</button>
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                </form>
            </p>          
        </div>
   
    ) 
}




export default ContactEdition