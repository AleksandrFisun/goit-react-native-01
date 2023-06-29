import { TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { styles } from './ButtonLogOutStyles';
import { useNavigation } from '@react-navigation/native';
import authOperations from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { removeUserAuth, onUserData } from '../../redux/auth/authSlice';

const ButtonLogOut = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const logOut = () => {
    dispatch(removeUserAuth());
    dispatch(onUserData({ login: null, img: null }));
    dispatch(authOperations.userLogOut());

    navigation.navigate('Login');
  };
  return (
    <TouchableOpacity style={styles.buttonLogOut} onPress={logOut}>
      <IconFeather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};
export default ButtonLogOut;
