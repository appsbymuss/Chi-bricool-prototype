import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: orange;
`;

const FormWrapper = styled.div`
  width: 400px;
  background-color: #3d1c56;
  border-radius: 10px;
  box-shadow: 50px 50px 2000px 37px rgba(0, 4, 10, 8);
  padding: 50px;
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
  font-size: 20px;
  color : white ;
`;

const Input = styled.input`
padding: 9px;
border: solid white 3px;
color: black;
border-radius: 5px;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
background: white;
width: 350px;

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
const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  margin-left: 20px;
`;

const Update_client = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate()
    const id_client = useParams()
    const [clients, setClients] = useState([])

    const [firstName, setfirstName] = useState()
    const [lastname, setlastName] = useState()
    const [email, setemail] = useState()
    const [address, setaddress] = useState()
    const [city, setcity] = useState()
    const [CIN, setCIN] = useState()
    const [code_verf, setcode_verf] = useState()
    const [password, setpassword] = useState()
    const [passwordconfirmed, setpasswordconfirmed] = useState()
  
    const nextStep = () => {
      setStep(step + 1);
    };
  
    const prevStep = () => {
      setStep(step - 1);
    };



    const update_client = async (e) =>{
        e.preventDefault();
        const client={
            firstName,
            lastname,
            email,
            address,
            city,
            CIN,
            code_verf,
            password ,
            passwordconfirmed
        };
      try {
        await axios.put(`/api/update_client/${id_client}`, client);
        Swal.fire({
            position: 'top-end',
            icon:'success',
            title:'Your post has been update',
            showConfirmButton: false,
            timer: 1500
        })
        console.log('update_client');
        navigate('/profile')
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(()=>{
        fetchclient();
      },[])

    const fetchclient = async () =>{
        try {
            const response = await axios.get(`/api/show_client/${id_client}`);
            setClients(response.data)
            setfirstName(response.data.firstName);
            setlastName(response.data.lastname);
            setemail(response.data.email);
            setaddress(response.data.address);
            setcity(response.data.city);
            setCIN(response.data.CIN);
            setcode_verf(response.data.code_verf);
            setpassword(response.data.password);
            setpasswordconfirmed(response.data.passwordconfirmed);
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
      }
  return (
    <>
          <Container>
    <FormWrapper>
    <FormContainer>
    <FormStep active={step === 1}>
    <InputContainer>
    <Label htmlFor="firstName">First Name</Label>
    <Input type="text" placeholder='Entre un firstName' name="firstName" id="firstName" value={firstName} onChange={(e)=>setfirstName(e.target.value)} required />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="lastName">Last Name</Label>
    <Input type="text" placeholder='Entre un LastName' name="lastName" id="lastName" value={lastname} onChange={(e)=>setlastName(e.target.value)} required />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="email">Email</Label>
    <Input type="email" placeholder='Entre un Email' name="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)} required />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="address">Address</Label>
    <Input type="text" placeholder='Entre un Address' name="address" id="address" value={address} onChange={(e)=>setaddress(e.target.value)} required />
    </InputContainer>
    <ButtonContainer>
    <Button disabled>Previous</Button>
    <Button onClick={nextStep}>Next</Button>
    </ButtonContainer>
    </FormStep>
    <FormStep active={step === 2}>
    <InputContainer>
    <Label htmlFor="city">City</Label>
    <Input type="text" placeholder='Entre un City' name="city" id="city" value={city} onChange={(e)=>setcity(e.target.value)} required />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="CIN">CIN</Label>
    <Input type="text" placeholder='Entre un CIN' name="CIN" id="CIN" value={CIN} onChange={(e)=>setCIN(e.target.value)} required />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="CIN">Code_verf</Label>
    <Input type="text" placeholder='Entre un Code_verf' name="code_verf" id="code_verf" value={code_verf} onChange={(e)=>setcode_verf(e.target.value)} required />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="password">Password</Label>
    <Input type="password" placeholder='Entre un Password' name="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)} required />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="passwordconfirmed">Confirm Password</Label>
    <Input type="password" placeholder='Entre un Password Confirmed' name="passwordconfirmed" id="passwordconfirmed" value={passwordconfirmed} onChange={(e)=>setpasswordconfirmed(e.target.value)} required />
    </InputContainer>
    <ButtonContainer>
    <Button onClick={prevStep} prev>Previous</Button>
    <Button onClick={(e)=>update_client(e)}>Submit</Button>
    </ButtonContainer>
    </FormStep>
    </FormContainer>
    </FormWrapper>
    <Image src="./img/Client.png"  />
    </Container>
    </>
  )
}

export default Update_client
