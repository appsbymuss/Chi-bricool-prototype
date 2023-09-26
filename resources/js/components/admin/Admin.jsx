import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Hearderpofile from "../profile/Headerprofile";

import { useTranslation } from "react-i18next";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 70vh;
background-color: white;
`;

const FormWrapper = styled.div`
  width: 600px;
  background-color: #053F5C;
  border-radius: 10px;
  box-shadow: 50px 50px 200px 10px rgba(0, 4, 10, 8);
  padding: 40px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  margin-left: 60px;
  width:170px;
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
  display: ${props => props.active ? 'block' : ''};
`;

const Label = styled.label`
  margin-bottom: 25px;
  color : white ;
  font-size: 2.2rem;
`;


const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  width: 100%;
  background-color: #2d2d2d;
  color: white;

  &:hover {
    background-color: orange;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`;

const Admin = () => {
  const [CHI_BRICOOL, setCHI_BRICOOL] = useState('');
  const [t, il8n] = useTranslation()
  
  return (
    <>
      <Hearderpofile />
  {CHI_BRICOOL=="muss_red"?

<Container>
<FormWrapper>
    <FormContainer>
    <Label htmlFor="ADMIN" style={{"fontWeight":"bold"}}>{t('Admin_label')}</Label>
    </FormContainer>
        <Link to={"/Admin_view_delete_clients"}><Button >{t('Admin_View_Clients')}</Button></Link>
        <Link to={'/Admin_view_delete_bricoleurs'}><Button >{t('Admin_View_Bricoleurs')}</Button></Link>
</FormWrapper>
 </Container>

    :
  
<Container>
<FormWrapper>
    <FormContainer>
    <Label htmlFor="ADMIN" style={{"fontWeight":"bold"}}>{t('Admin_label')}</Label>
      <FormStep>
        <InputContainer>
            <Input type="password" placeholder={t('Admin_View_place')} name="CHI_BRICOOL" id="CHI_BRICOOL" value={CHI_BRICOOL} onChange={(e)=>setCHI_BRICOOL(e.target.value)}  />
        </InputContainer>
      </FormStep>
    </FormContainer>
        <Link to={"/Admin_view_delete_clients"}><Button disabled >{t('Admin_View_Clients')}</Button></Link>
        <Link to={'/Admin_view_delete_bricoleurs'}><Button disabled>{t('Admin_View_Bricoleurs')}</Button></Link>
</FormWrapper>
</Container> 
    
    }
 
    </>
  )
}
  // if(CHI_BRICOOL=='1234'){
  //   return(
  //     <>
  //     <Container>
  //         <FormWrapper>
  //             <FormContainer>
  //             <Label htmlFor="ADMIN" style={{"fontWeight":"bold"}}>ADMIN</Label>
  //               <FormStep>
  //                 <InputContainer>
  //                     <Input type="text" disabled placeholder='Admin code CHI_BRICOOL' name="CHI_BRICOOL" id="CHI_BRICOOL" value={CHI_BRICOOL} onChange={(e)=>setCHI_BRICOOL(e.target.value)} required />
  //                 </InputContainer>
  //               </FormStep>
  //             </FormContainer>
  //                 <Link to={"/Admin_view_delete_clients"}><Button disabled >View Clients</Button></Link>
  //                 <Link to={'/Admin_view_delete_bricoleurs'}><Button disabled>View Bricoleurs</Button></Link>
  //         </FormWrapper>
  //     </Container>
  // </>
  //   )
  // }


export default Admin
