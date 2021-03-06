import React from 'react';
import { Keyboard, Platform, ToastAndroid, Alert, StatusBar } from 'react-native';
import Picker, { PickerItem } from '../../../components/Picker';

import { Button, Container, Label, MaskInput, TextInput, LoadingContainer } from './styles';
import GeneralContext from '../../../context';

import { user } from '../../../database/functions';

export default function UpdateType({ navigation }) {
  const { currentUser, updateAuthUser } = React.useContext(GeneralContext);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const [cpfField, setCpfField] = React.useState(null);
  const [cnpjField, setCnpjField] = React.useState(null);

  const accountTypes = [
    { value: "pf-aut", label: "Autônomo" },
    { value: "pj-com", label: "Comércio" },
    { value: "pj-ent", label: "Entidade Filantrópica" },
    { value: "pj-ind", label: "Indústria" },
    { value: "pj-ong", label: "ONG" },
    { value: "pf", label: "Pessoa física" },
    { value: "pj", label: "Pessoa jurídica" },
    { value: "pf-pre", label: "Prestador de serviços" },
    { value: "pf-rep", label: "Representante" },
    { value: "pf-out", label: "Outros" }
  ]

  const [update, setUpdate] = React.useState({
    type: currentUser.type || 'pf',
    name: currentUser.name || '',
    fantasy: currentUser.fantasy || '',
    document: {
      cpf: currentUser.document.cpf || '',
      cnpj: currentUser.document.cnpj || '',
    }
  });

  const handleError = (message) => {
    if (Platform.OS === 'android') {
      ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      )
    } else {
      Alert.alert(
        'Erro',
        message,
        [{ text: 'Ok' }],
      )
    }
  }

  const handleDocumentInvalid = () => {
    if (Platform.OS === 'android') {
      ToastAndroid.showWithGravity(
        'Número de documento inválido',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      )
    } else {
      Alert.alert(
        'Erro',
        "Número de documento inválido",
        [{ text: 'Ok' }],
      )
    }
  }

  const onSucess = () => navigation.goBack();

  const onError = () => {
    setIsLoading(false);
    navigation.setOptions({
      headerShown: false
    });
  }

  const onLoading = () => {
    setIsLoading(true);
    navigation.setOptions({
      headerShown: false
    });
  }

  const handleCpf = () => {
    const isCpfValid = cpfField.isValid();

    if (isCpfValid) {
      onLoading();
      user.update({ ...currentUser, ...update }, onSucess, updateAuthUser, onError);
      Keyboard.dismiss();
    } else {
      handleDocumentInvalid();
    }
  }

  const handleCnpj = () => {
    const isCnpjValid = cnpjField.isValid();

    if (isCnpjValid) {
      onLoading();
      user.update({ ...currentUser, ...update }, onSucess, updateAuthUser, onError);
      Keyboard.dismiss();
    } else {
      handleDocumentInvalid();
    }
  }
  
  return (
    <>
      {
        isLoading ? (
          <>
            <StatusBar barStyle="light-content" backgroundColor="#2b7ed7" />
            <LoadingContainer />
          </>
        ) : (
          <Container>
            <Label>Tipo de registro</Label>
            <Picker
              value={accountTypes.find(item  => item.value === update.type).label}
              onValueChange={value => setUpdate({ ...update, type: value })}
              style={{ backgroundColor: '#f4f4f4', height: 50, color: '#333', paddingLeft: 10, marginBottom: 10 }}
            >
              {
                accountTypes.map(({ value, label }) => (
                  <PickerItem key={value} value={value} label={label} />
                ))
              }
            </Picker>
          
            <Label>Nome</Label>
            <TextInput placeholder="Nome" value={update.name} onChangeText={text => setUpdate({...update, name: text})} />
        
            
            {
              update.type.substring(0, 2) === 'pf' ? (
                <>
                  <Label>CPF</Label>
                  <MaskInput
                    placeholder="CPF"
                    type="cpf"
                    value={update.document.cpf}
                    onChangeText={text => setUpdate({...update, fantasy: '', document: {cpf: text, cnpj: ''}})}
                    ref={(ref) => setCpfField(ref)}
                  />
                </>
              ) : (
                <>
                  <Label>Nome fantasia</Label>
                  <TextInput placeholder="Nome fantasia" value={update.fantasy} onChangeText={text => setUpdate({...update, fantasy: text})} />

                  <Label>CNPJ</Label>
                  <MaskInput
                    placeholder="CNPJ"
                    type="cnpj"
                    value={update.document.cnpj}
                    onChangeText={text => setUpdate({...update, document: {cnpj: text, cpf: ''}})}
                    ref={(ref) => setCnpjField(ref)}
                  />
                </>
              )
            }

            <Button
              title="Atualizar"
              onPress={() => {
                if (update.type.substring(0, 2) === 'pf') {
                  if (update.name !== '') {
                    if (update.document.cpf !== '') {
                      if (update.document.cpf.length === 14) {
                        handleCpf();
                      } else {
                        handleDocumentInvalid();
                      }
                    } else {
                      handleDocumentInvalid();
                    }
                  } else {
                    handleError('É necessário um nome.');
                  }
                } else {
                  if (update.name !== '') {
                    if (update.fantasy !== '') {
                      if (update.document.cnpj !== '') {
                        if (update.document.cnpj.length === 18) {
                          handleCnpj();
                        } else {
                          handleDocumentInvalid();
                        }
                      } else {
                        handleDocumentInvalid();
                      }
                    } else {
                      handleError('É necessário um nome fantasia para esse tipo de registro.');
                    }
                  } else {
                    handleError('É necessário um nome.');
                  }
                }

                return false;
              }}
            />
          </Container>
        )
      }
    </>
  );
}
