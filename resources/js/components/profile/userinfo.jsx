import React from 'react';
import styled from 'styled-components';

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #f5f5f5;
`;

const ImageCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url('https://via.placeholder.com/100');
  background-size: cover;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const InfoRectangle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 700px;
  height: 100px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333333;
  margin-top: 50px;
`;

const InfoText = styled.p`
  font-size: 24px;
  color: #666666;
  margin: 10px 0;
`;

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <Title>User Info</Title>
      <ImageCircle />
      <InfoRectangle>
        <InfoText>Name: John Doe</InfoText>
        <InfoText>Email: john.doe@example.com</InfoText>
      </InfoRectangle>
    </UserInfoContainer>
  );
};

export default UserInfo;
