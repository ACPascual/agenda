
import {useState} from "react";

import './App.css';
import Contacts from "./components/Contacts.jsx"

const App = () => {

  const [agenda, setAgenda] = useState ([
    
      {
          "name": "Peponcio",
          "phone": "999999",
          "mail":"Pepon@cio.com"
      },
      {
          "name": "Lucinda",
          "phone": "888888",
          "mail":"Luci@nda.com"
      },
      {
          "name": "Remigia",
          "phone": "777777",
          "mail":"Remi@gia.com"
      }
      ]
  )



  return (
    <div className="App">
      
     <Contacts agenda = {agenda} setAgenda = {setAgenda} />
    

    </div>
  );
}

export default App;
