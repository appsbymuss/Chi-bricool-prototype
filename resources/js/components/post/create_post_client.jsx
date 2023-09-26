import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';


import { useTranslation } from "react-i18next";

const Select = styled.select`
padding: 10px;
border: none;
font-weight: bold;
border-radius: 5px;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
width: 100%;
background-color: white;
color: black;


`;


const Option = styled.option`
padding: 10px;
border: none;
font-weight: bold;
border-radius: 5px;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
width: 100%;
background-color: white;
color: black;
`; 

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: ;
`;

const FormWrapper = styled.div`
  width: 500px;
  width: 400px;
  background-color: #053F5C;
  border-radius: 10px;
  box-shadow: 0px 5px 30px 10px rgba(0, 1, 1, 1);
  padding: 40px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  color : white ;
`;

const Input = styled.input`
  padding: 7px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 100%;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
    transform: translateY(-3px);
    transition: all 0.3s ease;
  }

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  background-color: ${props => props.rev ? 'orange' : 'orange'};
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${props => props.rev ? '#ffdc9e' : '#ef5b3f'};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    width: ${props => props.rev ? 'auto' : '100%'};
  }
`

const FormStep = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  margin-left: 20px;
`;;

const Formpost_Client = () => {
  const [step, setStep] = useState(1);
  const [Metier, setMetier] = useState([]);
  const navigate = useNavigate()
  const {id} = useParams()

  const [t, il8n] = useTranslation()

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };


  useEffect(() => {
    metier();
},[])

  const metier = async ()=>{
    try {
      const respons = await axios.get('/api/all_metier');
      setMetier(respons.data);
      console.log(Metier)
    } catch (error) {
        console.log(error)
    }
}

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    metier: '',
    date : Date(),
    user_id:id
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  }
  
  const createBricoleur = async (e) =>{
    e.preventDefault();
    const client={
      ...formData ,
    };
    console.log(client)
  try {
    await axios.post('/api/create_post_user', client);
    console.log('add post client')
    navigate('/profile')
  } catch (error) {
    console.log(error)
  }
  }
    
    
    return (
    <Container>
    <FormWrapper>
    <FormContainer>
    <FormStep active={step === 1}>
    <InputContainer>
    <Label htmlFor="title">Title</Label>
    <Input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="description">Description</Label>
    <textarea style={{"borderRadius":"10px","width":"320px"}} rows={8} type="text" name="description" id="description" value={formData.description} onChange={handleChange} required />
    </InputContainer>
    <InputContainer>
    <Select name="metier" id="metier" value={formData.metier} onChange={handleChange} required>
          <Option >CHOISER</Option>
            {Metier?.map(m =>(

                <Option value={m.metier}>{m.metier}</Option>
            ))
            }
          </Select>
    </InputContainer>
    <Button onClick={nextStep}>{t('form_button_1')}</Button>
    </FormStep>
    <FormStep active={step === 2}>
    <InputContainer>
    <Label htmlFor="date">Date</Label>
    <Input type="date" name="date" id="date" disabled/>
    </InputContainer>
    <InputContainer>
    <Label htmlFor="image"></Label>
    <Input type="file" name="image" id="image" onChange={handleChange}  disabled/>
    </InputContainer>
    <ButtonContainer>
    <Button onClick={prevStep} prev>{t('form_button_2')}</Button>
    <Button onClick={(e)=>createBricoleur(e)}>Submit</Button>
    </ButtonContainer>
    </FormStep>
    </FormContainer>
    </FormWrapper>
    </Container>
    );
    };
    
    export default Formpost_Client;