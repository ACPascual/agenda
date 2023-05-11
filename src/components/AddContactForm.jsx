
const AddContactForm = ({ setName, setPhone, setMail}) => {
   
    const handlerName = (event) => {setName(event.target.value);}; 
    const handlerPhone = (event) => {setPhone(event.target.value);};
    const handlerMail = (event) => {setMail(event.target.value);};
   
    

    return (
        <div>
            <h2>Formulario de Contacto</h2>
            <div>
                <p> Nombre: <input type="text" onChange={handlerName} /> </p>
                <p> Teléfono: <input type="text" onChange={handlerPhone} /> </p>
                <p> Mail: <input type="text" onChange={handlerMail} /> </p>
            </div>

            <div>
    </div>
        </div>
    )
}
export default AddContactForm