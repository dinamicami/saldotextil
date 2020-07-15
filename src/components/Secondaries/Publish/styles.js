import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-native-elements';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  padding: 20px;
`;

export const FlexView = styled.SafeAreaView`
  flex: 1;
`;

export const PickDocument = ({ iconName, title, onPress }) => (
  <PickDocumentButton onPress={onPress}>
    <Icon name={iconName || 'home'} type="material-community" color="#F0F6FC" />
    <PickDocumentButtonText>{ title }</PickDocumentButtonText>
  </PickDocumentButton>
);

export const Button = ({ onPress, title }) => (
  <ButtonContainer onPress={onPress} >
    <ButtonText>
      { title }
    </ButtonText>
  </ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  background-color: #2b7ed7;
  border-radius: 4px;
  height: 40px;
  justify-content: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-family: Poppins Medium;
  font-size: 16px;
  margin-top: 6px;
`;


export const Description = styled.TextInput.attrs({
  multiline: true
})`
  background-color: #ddd;
  border-radius: 4px;
  font-size: 16px;
  height: 300px;
  text-align-vertical: top;
  padding: 10px;
`;

export const Label = styled.Text`
  color: #333;
  font-family: Poppins SemiBold;
  font-size: 16px;
  margin-top: 20px;
`;

const PickDocumentButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #87B6E8;
  border-radius: 10px;
  flex-direction: row;
  height: 50px;
  justify-content: center;
  padding: 0px 10px;
`;

const PickDocumentButtonText = styled.Text`
  color: #F0F6FC;
  font-family: Poppins Medium;
  font-size: 16px;
  margin-left: 5px;
  margin-top: 4px;
`;
