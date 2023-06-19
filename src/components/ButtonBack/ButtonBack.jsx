import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './ButtonBackStyles';
import { useNavigation } from '@react-navigation/native';

const ButtonBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonLogOut}
      onPress={() =>
        navigation.navigate('Home', {
          screen: 'Posts',
          // params: { userId: 'e2ee4' },
        })
      }
    >
      <MaterialIcons
        name="keyboard-backspace"
        size={24}
        color="rgba(33, 33, 33, 0.8)"
      />
    </TouchableOpacity>
  );
};
export default ButtonBack;
