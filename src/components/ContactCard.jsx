
import { Link } from "react-router-dom"
import { useState } from "react";
import ContactEdition from "./ContactEdition"

const ContactCard = ({agenda, setAgenda, contact, index}) => {

    const [editingContactId, setEditingContactId] = useState(null);

    const handleEditClick = (id) => {
      setEditingContactId(id);
    };
    
 
    return (
        <div>

                <li id={contact.id}> {contact.name} 
                    <button><Link to={`/contactDetails/${contact.id}`} >Detallitos</Link></button>
                    <button onClick={() => handleEditClick(contact.id)}>Editar</button>

                    <button >Delete</button>
                    
                </li>

                {editingContactId && (
                    <ContactEdition agenda={agenda} setAgenda ={setAgenda} idContact={contact.id}  />
                )}
        </div>
        
        
   
    )
 
}




export default ContactCard