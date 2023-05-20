
import { Link } from "react-router-dom"
import { useState } from "react";
import ContactEdition from "./ContactEdition"
import ContactDelete from "./ContactDelete"

const ContactCard = ({agenda, setAgenda, contact, index}) => {

    const [editingContactId, setEditingContactId] = useState(null);

    const [isVisible, setIsVisible] = useState(false);

    const handleEditClick = (id) => {
      setEditingContactId(id);
      setIsVisible(true)
    };
    
 
    return (
        <div>

                <li id={contact.id}> {contact.name}  
                    
                        <button><Link to={`/contactDetails/${contact.id}`} >Detallitos</Link></button>
                        <button onClick={() => handleEditClick(contact.id)}>Editar</button>
                        <ContactDelete contactId = {contact.id} agenda = {agenda} setAgenda = {setAgenda} />                
                    
                </li>

                {editingContactId && (
                    <ContactEdition 
                        agenda={agenda} setAgenda ={setAgenda} 
                        idContact={contact.id} 
                        isVisible={isVisible} setIsVisible= {setIsVisible}/>
                )}
        </div>    
   
    )
 
}




export default ContactCard