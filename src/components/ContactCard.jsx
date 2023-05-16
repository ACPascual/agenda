
import { Link } from "react-router-dom"

const ContactCard = ({contact, index}) => {

    return (
        
        <li id={contact.id}> {contact.name} 
            <button><Link to="/contactDetails">Detallitos</Link></button>
            <button>Edit</button>
            <button>Delete</button>
         </li>
   
    )
 
}




export default ContactCard