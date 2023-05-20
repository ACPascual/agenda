
import { useParams } from "react-router-dom"
import {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom"

import ContactContext from "../contexts/ContactContext";

const ContactDetails = () => {

    const {agenda} = useContext(ContactContext)

    const {idContacto} = useParams();

    const thisContact =  idContacto? agenda.filter(elemento => elemento.id === parseInt(idContacto) ):null;

    
    const [contactName, setContactName] = useState ("") ;
    const [contactPhone, setContactPhone] = useState ("") ;
    const [contactMail, setContactMail] = useState ("") ;

     useEffect (() => {
        setContactName( thisContact? thisContact[0].name : "No hay")
        setContactPhone( thisContact? thisContact[0].phone : "No hay")
        setContactMail( thisContact? thisContact[0].mail : "No hay")
         }, [thisContact]);


    return (
        <div>
                <h2>{contactName}</h2>
                <p>{contactPhone}</p>
                <p>{contactMail}</p>
        
                <button><Link to="/contacts">P'atrás</Link></button>
                      
        </div>
   
    ) 
}




export default ContactDetails