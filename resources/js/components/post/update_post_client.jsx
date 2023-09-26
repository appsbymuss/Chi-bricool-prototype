import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';


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

const Formpost_client = () => {
  const navigate=useNavigate();
  const [Metier, setMMetier] = useState([]);
  const [title, setTitle]=useState('');
  const [description, setDescription]=useState('');
  const [metier, setMetier]=useState('');
  const [date, setDate]=useState(Date());
  const {id_post} = useParams();

  useEffect(() => {
    mMetier();
},[])

  const mMetier = async ()=>{
    try {
      const respons = await axios.get('/api/all_metier');
      setMMetier(respons.data);
      console.log(Metier)
    } catch (error) {
        console.log(error)
    }
}

  useEffect(()=>{
    fetchPost();
  },[])

  const updatepostClient = async (e) =>{
    e.preventDefault();
    const post_client={
      title,
      description,
      metier,
      date,

    };
  try {
    await axios.put(`/api/update_post_client/${id_post}`, post_client);
    Swal.fire({
        position: 'top-end',
        icon:'success',
        title:'Your post has been update',
        showConfirmButton: false,
        timer: 1500
    })
    console.log('update_post_client');
    navigate('/profile')
  } catch (error) {
    console.log(error)
  }
}

  const fetchPost = async () =>{
    try {
        const response = await axios.get(`/api/show_post_client/${id_post}`);
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
    <Input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}  />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="description">Description</Label>
    <textarea style={{"borderRadius":"10px","width":"320px"}} value={description} rows={8} type="text" name="description" id="description" onChange={(e)=>setDescription(e.target.value)}  />
    </InputContainer>
    <InputContainer>
    <Select name="metier" id="metier" value={metier} onChange={(e)=>setMetier(e.target.value)}>
            
            {Metier?.map(m =>(
                <Option value={m.metier}>{m.metier}</Option>
            ))
            }
          </Select>
    </InputContainer>
    <InputContainer>
    <Label htmlFor="date">Date</Label>
    <Input type="date" name="date" id="date"   disabled/>
    </InputContainer>
    <InputContainer>
    <Label htmlFor="image"></Label>
    <Input type="file" name="image" id="image"  disabled/>
    </InputContainer>
    <ButtonContainer>
    <Button type='submit' onClick={(e)=>updatepostClient(e)}>Submit</Button>
    </ButtonContainer>
    </FormContainer>
    </FormWrapper>
    </Container>
    );
    };
    
    export default Formpost_client;
