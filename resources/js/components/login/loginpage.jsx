import React, { useState } from 'react';
import styled from 'styled-components';
import Hearderpofile from "../profile/Headerprofile";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [select, setSelect] = useState('');
  const [E, setE] = useState('');

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post('/api/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        console.log(response.data.role);
        localStorage.setItem('token', token);
        navigate('/profile');
      })
      .catch((error) => {
        console.log(error);
        setE('The Provided Credentials are incorrect');
      });
 
  }

  return (
    <>
      <Hearderpofile />
      <Container>
        <FormWrapper>
          <Title>{t('Login_title')}</Title>
          <FormContainer>
            <form onSubmit={handleLogin}>
              <InputContainer>
                <Label>{t('Login_Email')}</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('Login_placeholder_email')}
                />
              </InputContainer>
              <InputContainer>
                <Label>{t('Login_Password')}</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('Login_placeholder_password')}
                />
              </InputContainer>
              {/* <InputContainer>
                <Label>{t('Login_Role')}</Label>
                <Select value={select} onChange={(e) => setSelect(e.target.value)}>
                  <Option value="" disabled>
                    {t('Login_opstion_choise')}
                  </Option>
                  <Option value="Client">{t('Login_opstion_client')}</Option>
                  <Option value="Bricoleur">{t('Login_opstion_bricoleur')}</Option>
                </Select>
              </InputContainer> */}
              <ButtonContainer>
                <Button type="submit">{t('Login_button')}</Button>
              </ButtonContainer>
              <span style={{ fontWeight: 'bold', color: 'red', fontSize: '17px' }}>{E}</span>
            </form>
          </FormContainer>
        </FormWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: white;
`;

const FormWrapper = styled.div`
  width: 460px;
  background-color: orange;
  border-radius: 20px;
  box-shadow: 10px 10px 50px 7px rgba(0, 4, 10, 8);
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
  font-weight: bold;
  font-size: 16px;
  color: white;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  width: 350px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const Option = styled.option``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #2d6cdf;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

export default LoginPage;
