import { Pressable, Text, View } from 'react-native';
import { styles } from './RegistrationButtonStyles';
import { useNavigation } from '@react-navigation/native';
const RegistrationButton = ({ userRegData }) => {
  const navigation = useNavigation();
  const onPressSubmitRegistration = () => {
    if (login.length === 0 || email.length === 0 || password.length === 0) {
      alert('Заполните все поля');
      return;
    }
    navigation.navigate('Home');
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

      <View style={styles.textFooterWrapper}>
        <Text style={styles.buttonLoginText}>Вже є акаунт?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonLoginTextLink}>Увійти</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default RegistrationButton;
