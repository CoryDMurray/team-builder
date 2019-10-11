import React, { useState } from 'react';
import styled from 'styled-components';
import Members from './members'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const FormWrapper = styled.form `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 1.5%;
    background-color white;
    margin-top: 5%;
    margin: 3%;
    width: 60vw;
    height: 90vh;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const FormInput = styled.input `
    width: 60%;
    padding 2%;
    border-radius: 8px;
    border: solid 1px #282c34;
    background-color: whitesmoke;
`;

const FromButton = styled.button `
    padding 3%;
    margin-top: 3.5%
    background-color: translucent;
    border-radius: 8px;
    border: solid 3px #09d3ac;
    color: #09d3ac;
    width: 30%;
    font-size: 25px;
`;

function Form(props) {


    const [teamMembers, setMember] = useState({
        name: '',
        empId: '',
        role: '',
        hireDate: ''
    });

    const handleInput = function(event) {
        setMember({
            teamMembers, [event.target.name]: event.target.value
        })
    };

    const handleSubmit = function(event) {
        event.preventDefault();
            props.addNewMemberForm(teamMembers);
                setMember({
                    name: '',
                    empId: '',
                    role: '',
                    hireDate: ''
                });
                console.log(teamMembers);
    };

    return (
        <FormWrapper onSubmit={handleSubmit}>

            <label htmlFor ="id">
                <h2>
                    ID
                </h2>
            </label>
            <FormInput 
            name="id" 
            type="text"
            value={teamMembers.empId}
            onChange={handleInput}
            ></FormInput>

            <label htmlFor ="name">
                <h2>
                    Name
                </h2>
            </label>
            <FormInput 
            name="name" 
            type="text"
            value={teamMembers.name}
            onChange={handleInput}
            ></FormInput>

            <label htmlFor ="role">
                <h2>
                    Role
                </h2>
            </label>
            <FormInput 
            name="role" 
            type="text"
            value={teamMembers.role}
            onChange={handleInput}
            ></FormInput>

            <label htmlFor ="hiredate">
                <h2>
                    Hire Date
                </h2>
            </label>
            <FormInput 
            name="hiredate" 
            type="text"
            value={teamMembers.hireDate}
            onChange={handleInput}
            ></FormInput>

            <FromButton type="submit">Submit</FromButton>

        </FormWrapper>
    )
};

export default Form;