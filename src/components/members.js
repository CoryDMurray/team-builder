import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './form'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const TeamWrapper = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1em;
  margin: 3%;
`;

const MemberCard = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 1.5%;
  width: 25vw;
  height: 35vh;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const FormLink = styled.span `
  position: absolute;
  top: 0%;
  right: 0%;
  margin: 3.5%;
  cursor: alias;
`;


function Members(props) {  
  
    return (
      <div className="Members">
          <TeamWrapper>
          {props.teamMembersList.map((teamMembers) => (
              <MemberCard key ={teamMembers.empId}>
                <h2>{teamMembers.name}</h2>
                <b><p>{teamMembers.role}</p></b>
                <span>{teamMembers.hireDate}</span>
              </MemberCard>
          ))}
          </TeamWrapper>
      </div>
    );
  }
  
  export default Members;
  