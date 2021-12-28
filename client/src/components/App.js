import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../context/ContactsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashBoard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  );

  return id ? dashBoard : <Login onIdSubmit={setId} />;
}

export default App;
