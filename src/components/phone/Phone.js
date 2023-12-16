import React, { useState } from 'react';
import AddPeople from "./AddPerson";
import ListPeople from "./ListPeople";

function Phone() {
    const [contacts, setContacts] = useState([]);

  const handleAddPerson = (newPerson) => {
    setContacts([...contacts, newPerson]);
  };
    return (
      <div>
        <h2>Phone</h2>
        <AddPeople onAddPerson={handleAddPerson} />
        <ListPeople contacts={contacts} />
      </div>
    );
  }
  export default Phone;