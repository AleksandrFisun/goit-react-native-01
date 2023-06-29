import { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native';
import { styles } from './RegistrationInputStyles';

const RegistrationInput = ({ keyboard, onChange, email, password, login }) => {
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

  const handleToggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.inputWrapper(keyboardStatus)}>
      <View style={styles.inputContainer}>
        <TextInput
          name="login"
          placeholder="Логін"
          inputMode="text"
          style={styles.input}
          onChangeText={e => onChange({ value: e, name: 'login' })}
          value={login}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          name="email"
          placeholder="Адреса електронної пошти"
          inputMode="email"
          style={styles.input}
          onChangeText={e => onChange({ value: e, name: 'email' })}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          name="password"
          placeholder="Пароль"
          inputMode="text"
          style={styles.inputPass}
          secureTextEntry={passwordVisible}
          onChangeText={e => onChange({ value: e, name: 'password' })}
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
