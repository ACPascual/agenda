
import { useEffect, useState} from "react";



const ContactEdition = ({agenda, setAgenda,idContact, isVisible, setIsVisible}) => {

    const thisContact =  idContact? agenda.filter(elemento => elemento.id === idContact ):null;
 
    const [contactName, setContactName] = useState ("") ;
    const [contactPhone, setContactPhone] = useState ("") ;

    const [editName, setEditName] = useState('')
    const [editPhone, setEditPhone] = useState('')

    const isNameFilled = editName.trim() !== '';
    const isPhoneFilled = editPhone.trim() !== '';

    const getIndexById = (id) => {
        return agenda.findIndex((contact) => contact.id === id);
      };

    const selectedIndex = getIndexById(idContact);  
    const handleEditName = event => setEditName(event.target.value)
    const handleEditPhone = event => setEditPhone(event.target.value)

     const handleSubmitName = (event) =>{
        event.preventDefault();
                   
        // Crea una copia de la matriz "agenda" 
        const updatedAgenda = [...agenda];
      
        // Actualiza el nombre del contacto seleccionado con el nuevo nombre
        updatedAgenda[selectedIndex].name = editName;
              
        // Actualiza el estado con la nueva agenda
        setAgenda(updatedAgenda);
        
        // Restablece los campos
        setEditName('');
        
        // Oculta el componente después de enviar el formulario
        setIsVisible(false);
      }


      const handleSubmitPhone = (event) =>{
        event.preventDefault();
           
        // Crea una copia de la matriz "agenda" 
        const updatedAgenda = [...agenda];
      
        // Actualiza el nombre del contacto seleccionado con el nuevo nombre
        updatedAgenda[selectedIndex].phone = editPhone;
      
        // Actualiza el estado con la nueva agenda
        setAgenda(updatedAgenda);
        
        // Restablece los campos
        setEditPhone('');

        // Oculta el componente después de enviar el formulario
        setIsVisible(false);
      }

      
      function handleCancel() {
        setEditName('');
        setEditPhone('');
        setIsVisible(false);
      }

     useEffect (() => {
            
        setContactName( thisContact? thisContact[0].name : "No hay")
        setContactPhone( thisContact? thisContact[0].phone : "No hay")
       
     }, [thisContact,idContact]);




    return isVisible && (
        <div>
             <p>                  
                <form onSubmit={handleSubmitName}>
                   
                    <input type = "text" value={editName} onChange={handleEditName} placeholder={contactName}></input>
                    {isNameFilled && <button type="submit">Actualizar nombre</button>}
                </form>

                <form onSubmit={handleSubmitPhone}>
                   
                   <input type = "text" value={editPhone} onChange={handleEditPhone} placeholder={contactPhone}></input>
                   {isPhoneFilled && <button type="submit">Actualizar teléfono</button>}
                   <br/>
                   <button type="button" onClick={handleCancel}>Cancelar</button>
               </form>
            </p>          
        </div>
   
    ) 
}




export default ContactEdition