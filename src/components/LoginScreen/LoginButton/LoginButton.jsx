import { Pressable, Text, View } from 'react-native';
import { styles } from './LoginButtonStyles';
import { useNavigation } from '@react-navigation/native';

const LoginButton = ({ userLogInData }) => {
  const { email, password } = userLogInData;
  const navigation = useNavigation();

  const onPressSubmitLogIn = () => {
    if (email.length === 0 || password.length === 0) {
      alert('Заполните все поля');
      return;
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.buttonWrapper}>
      <Pressable style={styles.buttonLog} onPress={onPressSubmitLogIn}>
        <Text style={styles.buttonLogText}>Увійти</Text>
      </Pressable>

      <View style={styles.buttonReg}>
        <Text style={styles.buttonRegText}> Немає акаунту? </Text>
        <Pressable onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.buttonRegLink}>Зареєструватися</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default LoginButton;
