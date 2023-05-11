import ContactCard from "./ContactCard"

const ContactList = ({agenda}) => {
    


    return (
        <div>
            <h1> Agenda Molona </h1>

            <ul> {
                agenda.map((contact, index) => 
                <ContactCard  contact={contact}  key = {index} />
                )
                
                }
            </ul>

        
      
        </div>
        
      )
    }
 








export default ContactList