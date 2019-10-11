import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Members from './components/members';
import Form from './components/form'

function App() {

  const [teamMembers, setMember] = useState([
   
  ]);

  const addNewMember =  function(teamMembers) {
    const newMember = {
      name: teamMembers.name,
      empId: teamMembers.empId,
      role: teamMembers.role,
      hireDate: teamMembers.hireDate
    };

    setMember([teamMembers, newMember]);
  };

  console.log(teamMembers);
  return (
    <div className="App">
      <header className="App-header">
        <Members teamMembersList= {teamMembers}/>
        <Form addNewMemberForm={addNewMember}/>
      </header>
    </div>
  );
}

export default App;
