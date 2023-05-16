
const ContactDetails = ({contact}) => {
        
    function Details ()  {
        prompt ("Hola, {contact.name}")
    }


    return (
        <div>
            <button onClick= {  Details(contact)}> Details</button>
        </div>
        
       // prompt (" ")
  
   
    )
 
}




export default ContactDetails