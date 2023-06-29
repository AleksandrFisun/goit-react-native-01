import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from 'react-native';

import RegistrationInput from './RegistrationInput/RegistrationInput';
import RegistrationUserPhoto from './RegistrationUserPhoto/RegistrationUserPhoto';
import authOperations from '../../redux/auth/authOperations';
import { onUserData } from '../../redux/auth/authSlice';

import { styles } from './RegistrationScreenStyles';

import image from '../../../assets/img/HomeBG.jpg';
import { useAuth } from '../../hooks/useAuth';

const RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userPhoto, setUserPhoto] = useState(null);

  const [keyboardStatus, setKeyboardStatus] = useState('hidden');
  const { isLoggedIn, userAuth, messageErrorReg } = useAuth();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn && userAuth !== null) {
      navigation.navigate('Home');
      setEmail('');
      setPassword('');
    }
  }, [userAuth]);

  const keyboard = e => {
    setKeyboardStatus(e);
  };
  const onPressSubmitRegistration = async () => {
    if (login.length === 0 || email.length === 0 || password.length === 0) {
      alert('Заполните все поля');
      return;
    }

    dispatch(authOperations.registerDB({ email, password }));
    dispatch(onUserData({ login: login, img: userPhoto }));
  };

  const changeInput = ({ value, name }) => {
    switch (name) {
      case 'email':
        setEmail(value.toLowerCase().trim());
        break;
      case 'password':
        setPassword(value.trim());
        break;
      case 'login':
        setLogin(value);
        break;
      default:
    }
  };
  const onUserPhoto = e => {
    setUserPhoto(e);
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
            <View style={styles.photoWrapper}>
              <View style={styles.photoUser}>
                <RegistrationUserPhoto
                  onPhoto={onUserPhoto}
                  userPhoto={userPhoto}
                />
              </View>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            {messageErrorReg && (
              <View style={styles.loginErrorWrapper}>
                <Text style={styles.loginErrorText}>
                  Check if the fields are filled in correctly
                </Text>
              </View>
            )}
            <RegistrationInput
              keyboard={keyboard}
              onChange={changeInput}
              email={email}
              password={password}
              login={login}
            />
            {keyboardStatus === 'hidden' && (
              <View style={styles.buttonWrapper}>
                <Pressable
                  style={styles.buttonRegistrations}
                  onPress={onPressSubmitRegistration}
                >
                  <Text style={styles.buttonRegistrationsText}>
                    Зареєстуватися
                  </Text>
                </Pressable>

                <View style={styles.textFooterWrapper}>
                  <Text style={styles.buttonLoginText}>Вже є акаунт?</Text>
                  <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonLoginTextLink}>Увійти</Text>
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

export default RegistrationScreen;
