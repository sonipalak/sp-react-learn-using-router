import React, { useState } from "react";


export default function AddPerson({onAddPerson}) {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleAddPerson = () => {
    if (!name || !phoneNumber || !email) {
      alert('All fields must be filled.');
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      alert('Phone number must be a 10-digit number.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Enter a valid email address.');
    } else {
      const newPerson = {
        name,
        phoneNumber,
        email,
      };
      onAddPerson(newPerson);
      alert('Person added successfully!');
      setName('');
      setPhoneNumber('');
      setEmail('');
    }
  };

  return (
    <div className="contact-form">
        <div className="form-field">
            <label className="field-label">Name:</label>
            <input className="input-field" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
       
       <div className="form-field">
            <label className="field-label"> Phone Number:</label>
            <input className="input-field" type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
       </div>
       
       <div className="form-field">
            <label className="field-label">Email:</label>
            <input className="input-field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
       </div>
       
       <button onClick={handleAddPerson}>Add Person</button>
    </div>
  );
}
