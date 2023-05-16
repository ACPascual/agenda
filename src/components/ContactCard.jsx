

const ContactCard = ({contact, index}) => {

    return (
        
        <li id={contact.id}> {contact.name} 
            <button>Details</button> 
            <button>Edit</button>
            <button>Delete</button>
         </li>
   
    )
 
}




export default ContactCard