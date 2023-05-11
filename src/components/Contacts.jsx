
import SearchBar from "./SearchBar"
import ContactList from "./ContactList"
import AddContact from "./AddContact"


const Contacts = ({agenda, setAgenda}) =>{
return (
<div>
    <AddContact
    agenda = {agenda}
    setAgenda = {setAgenda}
    />

    <ContactList
    agenda = {agenda}
    setAgenda = {setAgenda}
    /> 
    
    <SearchBar
    agenda = {agenda}
     /> 
</div>

)
}







export default Contacts