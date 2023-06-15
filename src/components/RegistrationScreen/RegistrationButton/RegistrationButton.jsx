import { Pressable, Text, View } from 'react-native';
import { styles } from './RegistrationButtonStyles';
const RegistrationButton = ({ userRegData }) => {
  const onPressSubmitRegistration = () => {
    if (login.length === 0 || email.length === 0 || password.length === 0) {
      alert('Заполните все поля');
      return;
    }
    console.log('Registration', userRegData);
    alert('Submit');
  };
  const { login, email, password } = userRegData;

  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        style={styles.buttonRegistrations}
        onPress={onPressSubmitRegistration}
      >
        <Text style={styles.buttonRegistrationsText}>Зареєстуватися</Text>
      </Pressable>

      <Pressable
        style={styles.buttonLogin}
        // onPress={onPressLearnMore}
      >
        <Text style={styles.buttonLoginText}>Вже є акаунт? Увійти</Text>
      </Pressable>
    </View>
  );
};
export default RegistrationButton;
