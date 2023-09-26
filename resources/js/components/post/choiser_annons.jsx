import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Hearderpofile from "../profile/Headerprofile";

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


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 27px;
  width:220px;
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
const Label = styled.label`
  margin-bottom: 25px;
  color : white ;
  font-size: 2.2rem;
`;

const Div = styled.div`
    display: flex
`

const Choiser_annons = () => {
  return (
    <>
       <Hearderpofile />
      <Container>
        <FormWrapper>
            <FormContainer>
            <Label htmlFor="ADMIN" style={{"fontWeight":"bold"}}>Choiser les Announce</Label>
            </FormContainer>
                <Div>
                <Link to={"/view_post_client"}><Button >View_Posts_Clients</Button></Link>
                <Link to={'/view_post_bricoleur'}><Button >View_Posts_Bricoleurs</Button></Link>
                </Div>
        </FormWrapper>
      </Container>
    </>
  )
}

export default Choiser_annons
