import React, { useState } from 'react';
import {
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import image from '../../../assets/img/HomeBG.jpg';
import { styles } from './LoginScreenStyles';
import RegistrationInput from './LoginInput/LoginInput';
import RegistrationButton from './LoginButton/LoginButton';

const LoginScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState('hidden');
  const [userLogInData, setUserLogInData] = useState({});

  const keyboard = e => {
    setKeyboardStatus(e);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          />
          <KeyboardAvoidingView
            style={styles.formWrapper}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <Text style={styles.title}>Увійти</Text>
            <RegistrationInput
              keyboard={keyboard}
              userLogIn={data => setUserLogInData(data)}
            />
            {keyboardStatus === 'hidden' && (
              <RegistrationButton userLogInData={userLogInData} />
            )}
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default LoginScreen;
