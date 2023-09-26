import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

import { useTranslation } from "react-i18next";



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #4169e1;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [t, il8n] = useTranslation()
  const [success, setSuccess] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();

  
    emailjs
      .sendForm(
        "service_7kqd95b",
        "template_pgz9t81",
        ref.current,
        "TVGp3nWigkT-q8n4e"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  }
  
  return (
    <>
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>{t('contact_title')}</Title>
            <Input placeholder={t('contact_input_name')} name="name" />
            <Input placeholder={t('contact_input_email')} name="email" />
            <TextArea
              placeholder={t('contact_input_message')}
              name="message"
              rows={10} 
            />
            <Button style={{"background":"#3d1c56"}} type="submit">{t('contact_button')}</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
    </>
  );
};

export default Contact;
