import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import authOperations from '../../redux//auth/authOperations';
import RegistrationInput from './LoginInput/LoginInput';
import image from '../../../assets/img/HomeBG.jpg';
import { useAuth } from '../../hooks/useAuth';
import { styles } from './LoginScreenStyles';
import {
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Pressable,
} from 'react-native';

const LoginScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState('hidden');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { isLoggedIn, userAuth, messageErrorLogIn } = useAuth();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn && userAuth !== null) {
      navigation.navigate('Home');
      setEmail('');
      setPassword('');
    }
  }, [userAuth]);

  const changeInput = ({ value, name }) => {
    switch (name) {
      case 'email':
        setEmail(value.toLowerCase().trim());
        break;
      case 'password':
        setPassword(value.trim());
        break;
      default:
    }
  };

  const onPressSubmitLogIn = async () => {
    if (email.length === 0 || password.length === 0) {
      alert('Заполните все поля');
      return;
    }
    dispatch(authOperations.loginDB({ email, password }));
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
            {messageErrorLogIn && (
              <View style={styles.loginErrorWrapper}>
                <Text style={styles.loginErrorText}>
                  Wrong email or password
                </Text>
              </View>
            )}
            <RegistrationInput
              keyboard={setKeyboardStatus}
              onChange={changeInput}
              email={email}
              password={password}
            />

            {keyboardStatus === 'hidden' && (
              <View style={styles.buttonWrapper}>
                <Pressable
                  style={styles.buttonLog}
                  onPress={onPressSubmitLogIn}
                >
                  <Text style={styles.buttonLogText}>Увійти</Text>
                </Pressable>

                <View style={styles.buttonReg}>
                  <Text style={styles.buttonRegText}> Немає акаунту? </Text>
                  <Pressable
                    onPress={() => navigation.navigate('Registration')}
                  >
                    <Text style={styles.buttonRegLink}>Зареєструватися</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default LoginScreen;
