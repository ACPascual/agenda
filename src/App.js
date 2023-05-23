
import {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom"

import './App.scss';
import Contacts from "./components/Contacts.jsx"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Welcome from "./components/Welcome"
import ContactDetails from "./components/ContactDetails"
import NoMatch from "./components/NoMatch"
import ContactContext from "./contexts/ContactContext"

import Header from "./components/Header"
import AddContact from "./components/AddContact";


const App = () => {

   // Initialize data
  const titleApp = "AGENDOTA"

  const [agenda, setAgenda] = useState ([]);
 
  const [modoDia, setModoDia] = useState (false);

    // Side effect
    useEffect(() => {

      // Retrieve data
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
          const dataFormatted = data.map(person => {
            return {
              id: person.id,
              name: person.name,
              phone: person.phone,
              mail: person.email
            }
          })
  
          setAgenda(dataFormatted)
        })
  
    }, []) // <---------- First render

  return (
         
          <div className={`body ${modoDia? 'modo-noche':'modo-dia'}`}>
             <div id="content">
                    <Header titleApp={titleApp} />
                    <hr />
                    <ContactContext.Provider value={{ modoDia, setModoDia }}>
                        <Menu  />
                    </ContactContext.Provider>
                  <hr />
                    <Routes>
                          <Route path="/" element={ <Home /> } />
                          <Route path="welcome" element={ <Welcome /> } />
                          <Route path="contacts" element={
                            <ContactContext.Provider value={{
                                  agenda,
                                  setAgenda
                                }}>
                                <Contacts />                   
                            </ContactContext.Provider>
                          } />
                        
                          <Route path="addContact" element={
                            <ContactContext.Provider value={{
                                  agenda,
                                  setAgenda
                                }}>
                                <AddContact />
                            </ContactContext.Provider>
                          } />

                          <Route path="contactDetails/:idContacto" element={
                            <ContactContext.Provider value={{
                                  agenda,
                                  setAgenda
                                }}>
                                <ContactDetails />
                            </ContactContext.Provider>
                          } />

                          <Route path="*" element={ <NoMatch /> } />
                      
                    </Routes>
              </div>
          </div>

  );
}

export default App;
