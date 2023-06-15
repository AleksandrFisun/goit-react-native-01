import { Pressable, Text, View } from 'react-native';
import { styles } from './LoginButtonStyles';

const LoginButton = ({ userLogInData }) => {
  const { email, password } = userLogInData;
  const onPressSubmitLogIn = () => {
    if (email.length === 0 || password.length === 0) {
      alert('Заполните все поля');
      return;
    }
    console.log('LogIn', userLogInData);
    alert('Submit');
  };
  const onPressGoToRegistration = () => {
    alert('Немає акаунту? Зареєструватися');
  };

  return (
    <View style={styles.buttonWrapper}>
      <Pressable style={styles.buttonLog} onPress={onPressSubmitLogIn}>
        <Text style={styles.buttonLogText}>Увійти</Text>
      </Pressable>

      <Pressable style={styles.buttonReg} onPress={onPressGoToRegistration}>
        <Text style={styles.buttonRegText}>
          Немає акаунту?
          <Text style={styles.buttonRegLink}>Зареєструватися</Text>
        </Text>
      </Pressable>
    </View>
  );
};
export default LoginButton;
