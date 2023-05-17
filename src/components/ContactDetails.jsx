
import { useParams } from "react-router-dom"
import {useContext} from "react";

import ContactContext from "../contexts/ContactContext";

const ContactDetails = () => {
        


    const {agenda} = useContext(ContactContext)

    const {idContacto} = useParams();

    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const idContacto = searchParams.get('idContacto');

    return (
        <div>identificador del contacto: {idContacto}</div>
        
       
        
        
        
   
    )
 
}




export default ContactDetails