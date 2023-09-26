import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: orange;
`;

const FormWrapper = styled.div`
  width: 500px;
  width: 400px;
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

const FormStep = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
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
`;

const Formpost_bricoleur = () => {
  const navigate=useNavigate();
  const [title, setTitle]=useState('');
  const [description, setDescription]=useState('');
  const [date, setDate]=useState(Date());
  const {id_post} = useParams();

  useEffect(()=>{
    fetchPost();
  },[])

  const updatepostBricoleur = async (e) =>{
    e.preventDefault();
    const post_bricoleur={
      title,
      description,
      date,
    };
  try {
    await axios.put(`/api/update_post_bricoleur/${id_post}`, post_bricoleur);
    Swal.fire({
        position: 'top-end',
        icon:'success',
        title:'Your post has been update',
        showConfirmButton: false,
        timer: 1500
    })
    console.log('update_post_bricoleur');
    navigate('/profile_bricoleur')
  } catch (error) {
    console.log(error)
  }
}

  const fetchPost = async () =>{
    try {
        const response = await axios.get(`/api/show_post_bricoleur/${id_post}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDate(response.data.date);
    } catch (error) {
        console.log(error);
    }
  }
    
    
    return (
    <Container>
    <FormWrapper>
    <FormContainer>
    <InputContainer>
    <Label htmlFor="title">Title</Label>
    <Input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="description">Description</Label>
    <Input type="text" name="description" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} required />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="date">Date</Label>
    <Input type="date" name="date" id="date"  required disabled/>
    </InputContainer>
    <InputContainer>
    <Label htmlFor="image"></Label>
    <Input type="file" name="image" id="image"  disabled/>
    </InputContainer>
    <ButtonContainer>
    <Button type='submit' onClick={(e)=>updatepostBricoleur(e)}>Submit</Button>
    </ButtonContainer>
    </FormContainer>
    </FormWrapper>
    </Container>
    );
    };
    
    export default Formpost_bricoleur;


// import React, { useEffect, useState } from 'react';
// // import styled from 'styled-components';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import Swal from 'sweetalert2';


// const Update_post_bricoleur = () => {

//   const navigate=useNavigate();
//   const [title, setTitle]=useState('');
//   const [description, setDescription]=useState('');
//   const [image, setImage]=useState('');
//   const {id_post} = useParams();

//   useEffect(()=>{
//     fetchPost();
//   },[])

//   const updatepostBricoleur = async (e) =>{
//     e.preventDefault();
//     const post_client={
//       title,
//       description,
//       image,
//     };
//   try {
//     await axios.put(`/api/update_post_bricoleur/${id_post}`, post_client);
//     Swal.fire({
//         position: 'top-end',
//         icon:'success',
//         title:'Your post has been update',
//         showConfirmButton: false,
//         timer: 1500
//     })
//     console.log('update_post_bricoleurt');
//     navigate('/')
//   } catch (error) {
//     console.log(error)
//   }
// }

//   const fetchPost = async () =>{
//     try {
//         const response = await axios.get(`/api/show_post_bricoleur/${id_post}`);
//         setTitle(response.data.title);
//         setDescription(response.data.description);
//         setImage(response.data.image);
//     } catch (error) {
//         console.log(error);
//     }
//   }

//   return (

//     <form onSubmit={(e)=>updatepostBricoleur(e)}>
//       <label htmlFor="">Title</label><input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/><br/>
//       <label htmlFor="">Description</label><input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/><br/>
//       <label htmlFor="">image</label><input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/><br/>
//       <button type='submit'>submit</button>
//     </form>

//   );
// };

// export default Update_post_bricoleur;


