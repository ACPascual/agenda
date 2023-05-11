import AddContactForm from "./AddContactForm"
import {useState} from "react";

const AddContact = ({setAgenda}) => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")

   

    const setContact = () => {
        setAgenda((prevAgenda) => [...prevAgenda, { name, phone, mail }]);
        resetValues();
    };

    const resetValues = ()=>{
        setName("");
        setPhone("");
        setMail("");
    }

    return (
        <div>
   
            <AddContactForm
                setName = {setName}
                setPhone  = {setPhone}
                setMail = {setMail}
                
            />
            <button onClick={setContact}>Añadir contacto</button>
        </div>
    )



}







export default AddContact