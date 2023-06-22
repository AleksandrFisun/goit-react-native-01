import { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native';
import { styles } from './RegistrationInputStyles';

const RegistrationInput = ({ keyboard, userReg }) => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [keyboardStatus, setKeyboardStatus] = useState('hidden');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('hidden');
      setPasswordVisible(true);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    keyboard(keyboardStatus);
  }, [keyboardStatus]);

  useEffect(() => {
    const data = {
      login: login,
      email: email,
      password: password,
    };
    userReg(data);
  }, [login, email, password]);

  const handleToggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.inputWrapper(keyboardStatus)}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Логін"
          inputMode="text"
          style={styles.input}
          onChangeText={setLogin}
          value={login}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Адреса електронної пошти"
          inputMode="email"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Пароль"
          inputMode="text"
          style={styles.inputPass}
          secureTextEntry={passwordVisible}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          onPress={handleToggleVisibility}
          style={styles.inputButtonPass}
          disabled={!password}
        >
          <Text style={styles.inputButtonPassText}>
            {passwordVisible ? 'Показати' : 'Приховати'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RegistrationInput;
