

import SearchBar from "./SearchBar"
import ContactList from "./ContactList"

import { Link } from "react-router-dom"


const Contacts = () =>{
   
    return (      
             <div>    
                    <ContactList /> 
                    <SearchBar />
                   
                    <button><Link to="/addContact">Ponme otro</Link></button>
                    
             </div>

)
}







export default Contacts