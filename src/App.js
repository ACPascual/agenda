
import {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom"

import './App.css';
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
    // <div className="App">
      
    //  <Contacts agenda = {agenda} setAgenda = {setAgenda} />
    

    // </div>

<div>
    <Header
      titleApp={titleApp}
    />

    <hr />

    <Menu />

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





      {/* <Route path="character/:id" element={ <CharacterDetail /> } /> */}
      <Route path="*" element={ <NoMatch /> } />
      
    </Routes>
</div>

  );
}

export default App;
