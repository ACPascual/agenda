

const ContactDelete = ({contactId, agenda, setAgenda}) => {


  const handleDeleteClick = (contactId, agenda, setAgenda) => {

      // Crea una nueva matriz que excluya el contacto con el ID proporcionado
      const updatedAgenda = agenda.filter((contact) => contact.id !== contactId);

      // Actualiza el estado con la nueva agenda
      setAgenda(updatedAgenda);
  };


    return (
     
        <button onClick={() => handleDeleteClick(contactId,agenda,setAgenda)}>Borrar</button>
      
    )
  }
  
  export default ContactDelete