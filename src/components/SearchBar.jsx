
import {useState} from "react";
import ContactList from "./ContactList";



const SearchBar = ({agenda}) => {

    const [search, setSearch] = useState("");
    
    const handlerSearch = event => {setSearch(event.target.value);};

    

return (

    <div>
        {
        agenda.length > 0
        ?
          <div>
            <p>Filtrar por: <input type="text" onChange={handlerSearch} /></p>

            <ul>
              {
                agenda
                  .filter(agenda =>
                    agenda.name.length > 0 &&
                    agenda.name.startsWith(search)
                  )
                  .map((agenda, index) => 
                  <li> {agenda.name}: {agenda.phone} : {agenda.mail} </li>
                  )
              }
               

            </ul>

            
          </div>
        :
          <p>No hay personajes cargados</p>
      }


        
    </div>


)


}

export default SearchBar