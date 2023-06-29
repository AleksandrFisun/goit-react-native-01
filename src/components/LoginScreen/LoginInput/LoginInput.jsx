import { useState, useEffect } from 'react';
import { styles } from './LoginInputStyles';
import {
  TextInput,
  Keyboard,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const LoginInput = ({ keyboard, onChange, email, password }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [focusStyle, setFocusStyle] = useState({
    name: '',
    style: styles.inputPrimaryColor,
  });
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
  const customOnFocus = name => {
    setFocusStyle({ name, style: styles.inputAccentColor });
  };
  const customOnBlur = () => {
    setFocusStyle({ name: '', style: '' });
  };

  return (
    <View style={styles.inputWrapper(keyboardStatus)}>
      <View style={styles.inputContainer}>
        <TextInput
          name="email"
          placeholder="Адреса електронної пошти"
          inputMode="email"
          value={email}
          style={[
            styles.input,
            focusStyle.name === 'email' && focusStyle.style,
          ]}
          onFocus={() => customOnFocus('email')}
          onBlur={() => customOnBlur()}
          onChangeText={e => onChange({ value: e, name: 'email' })}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          name="password"
          placeholder="Пароль"
          inputMode="text"
          value={password}
          secureTextEntry={passwordVisible}
          style={[
            styles.input,
            focusStyle.name === 'password' && focusStyle.style,
          ]}
          onFocus={() => customOnFocus('password')}
          onBlur={() => customOnBlur()}
          onChangeText={e => onChange({ value: e, name: 'password' })}
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
export default LoginInput;
