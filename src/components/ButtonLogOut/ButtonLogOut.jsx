import { TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { styles } from './ButtonLogOutStyles';
import { useNavigation } from '@react-navigation/native';
const ButtonLogOut = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonLogOut}
      onPress={() => navigation.navigate('Login')}
    >
      <IconFeather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};
export default ButtonLogOut;
