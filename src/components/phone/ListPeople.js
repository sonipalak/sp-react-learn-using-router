import React from "react";

export default function ListPeople({contacts}) {
  return (
    <div className="table-of-phone">
      <table cellPadding="0" cellSpacing="0" className="table">
       <thead>
         <tr>
           <th>ID</th>
           <th>Name</th>
           <th>Phone Number</th>
           <th>Email</th>
         </tr>
       </thead>
       <tbody>
         {contacts.map((person, index) => (
           <tr key={index} data-testid="person">
             <td data-testid="person-id">{index + 1}</td>
             <td data-testid="person-name">{person.name}</td>
             <td data-testid="person-number">{person.phoneNumber}</td>
             <td data-testid="person-email">{person.email}</td>
           </tr>
         ))}
       </tbody>
     </table>
    </div>
  );
}