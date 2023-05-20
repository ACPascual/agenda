import ContactContext from "../contexts/ContactContext";
import ContactCard from "./ContactCard"

import {useContext} from "react";


const ContactList = () => {
    
    const {agenda, setAgenda} = useContext(ContactContext)

    return (
        <div>
            <h1> Agenda Molona </h1>

            <ul> {
                agenda.map((contact, index) => 
                    <ContactCard  agenda = {agenda} setAgenda = {setAgenda} contact={contact}  key = {index} />
                    )
                }
            </ul>
  
        </div>       
      )
    }
 



export default ContactList;