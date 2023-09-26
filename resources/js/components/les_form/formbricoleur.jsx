import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import Hearderpofile from "../profile/Headerprofile";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import { useTranslation } from "react-i18next";


const Container = styled.div`
margin-top: 30px;
margin-right: -60px;
height: 530px;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
margin-left: 180px;

@media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;

const FormWrapper = styled.div`
  width: 400px;
  background-color: #053F5C;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 7px rgba(0, 2, 1, 2);
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

`

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
const FormBricoleur = () => {
  const [step, setStep] = useState(1);
  const [Metier, setMetier] = useState([]);
  const [E, setE] = useState('');
  const [EE, setEE] = useState('');
  const navigate = useNavigate()

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
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    CIN: '',
    role:'bricoleur',
    metier: '',
    password :'',

  });


  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  }


  
  const createBricoleur = async (e) =>{
    const bricoleur={
      ...formData ,
    };

       let status = await axios.post('/api/register', bricoleur);
      console.log(status);
        navigate('/login')


  }
    
    
    return (
      <>
      <Hearderpofile />
    <Container>
    <FormWrapper>
    <FormContainer>
    <FormStep active={step === 1}>
    <InputContainer>
    <Label htmlFor="firstName">{t('form_FirstName')}</Label>
    <Input type="text" placeholder={t('form_FirstName_plceH')} name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="lastName">{t('form_LastName')}</Label>
    <Input type="text" placeholder={t('form_LastName_plceH')}  name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="email">{t('form_Email')}</Label>
    <Input type="email" placeholder={t('form_Email_plceH')} name="email" id="email" value={formData.email} onChange={handleChange} required />
    </InputContainer>
    <InputContainer>
    <Label htmlFor="address">{t('form_Address')}</Label>
    <Input type="text" placeholder={t('form_Address_plceH')} name="address" id="address" value={formData.address} onChange={handleChange} required />
    </InputContainer>
    <ButtonContainer>
    <Button disabled>{t('form_button_2')}</Button>
    <Button onClick={nextStep}>{t('form_button_1')}</Button>
    </ButtonContainer>
    </FormStep>
    <FormStep active={step === 2}>
    <InputContainer>
    <Label htmlFor="city">{t('form_City')}</Label>
    <Input type="text" placeholder={t('form_City_plceH')} name="city" id="city" value={formData.city} onChange={handleChange} required />
    </InputContainer>
    <InputContainer>    
    <InputContainer>
    <Label htmlFor="CIN">{t('form_CIN')}</Label>
    <Input type="text" placeholder={t('form_CIN_plceH')} name="CIN" id="CIN" value={formData.CIN} onChange={handleChange} required />
    </InputContainer>
    {/* <InputContainer>
    <Label htmlFor="CIN">{t('form_Code_verf')}</Label>
    <Input type="text" placeholder={t('form_Code_verf_plceH')} name="code_verf" id="code_verf" value={formData.code_verf} onChange={handleChange} required />
    </InputContainer> */}
    <Label htmlFor="metier">{t('form_Metier')}</Label>


    {/* <Input type="text" placeholder={t('form_Metier_plceH')} name="metier" id="metier" value={formData.metier} onChange={handleChange} required /> */}
      <Select name="metier" id="metier" value={formData.metier} onChange={handleChange} required>
            
        {Metier?.map(m =>(
            <Option value={m.metier}>{m.metier}</Option>
        ))
        }
      </Select>

    </InputContainer>
    <ButtonContainer>
    <Button onClick={prevStep} prev>{t('form_button_2')}</Button>
    <Button onClick={nextStep}>{t('form_button_1')}</Button>
    </ButtonContainer>
    </FormStep>
    <FormStep active={step === 3}>
    <InputContainer>
    <Label htmlFor="attestationDeMetier">{t('form_Attestation')}</Label>
    <Input type="file" name="attestationDeMetier" id="attestationDeMetier" onChange={handleChange}  disabled/>
    </InputContainer>
    <InputContainer>
    <Label htmlFor="password">{t('form_password')}</Label>
    <Input type="password" placeholder={t('form_password_plceH')}  name="password" id="password" value={formData.password} onChange={handleChange} required />
    </InputContainer>
    {/* <InputContainer>
    <Label htmlFor="passwordconfirmed">{t('form_password_confirmed')}</Label>
    <Input type="password" placeholder={t('form_password_confirmed_plceH')} name="passwordconfirmed" id="passwordconfirmed" value={formData.passwordconfirmed} onChange={handleChange} required />
    </InputContainer> */}
    <span style={{'color':'red','fontWeight':'bold','fontSize':'16px'}}>{E}</span><br/>
    <span style={{'color':'red','fontWeight':'bold','fontSize':'16px'}}>{EE}</span>
    <ButtonContainer>
    <Button onClick={prevStep} prev>{t('form_button_2')}</Button>
    <Button onClick={createBricoleur}>{t('form_button_3')}</Button>
    </ButtonContainer>
    </FormStep>
    </FormContainer>
    </FormWrapper>
    <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#053F5C"
                  attach="material"
                  distort={0.6}
                  speed={1}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Image src="./img/Handyman.png"  />
        </Right>
    </Container>
    </>
    );
    };
    
    export default FormBricoleur;



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

const Right = styled.div`
flex: 3;
position: relative;
@media only screen and (max-width: 768px) {
  flex: 1;
  width: 100%;
}
`;

const Image = styled.img`
width: 400px;
height: 850px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;


@media only screen and (max-width: 768px) {
  width: 300px;
  height: 300px;
}

`;



