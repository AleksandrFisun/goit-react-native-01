import { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { styles } from './RegistrationScreenStyles';
import RegistrationInput from './RegistrationInput/RegistrationInput';
import RegistrationButton from './RegistrationButton/RegistrationButton';
import Icon from 'react-native-vector-icons/AntDesign';
import image from '../../../assets/img/HomeBG.jpg';

const RegistrationScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState('hidden');
  const [photo, setPhoto] = useState(null);
  const [userRegData, setUserRegData] = useState({});
  const keyboard = e => {
    setKeyboardStatus(e);
  };

  const handleChoosePhoto = () => {
    alert('Click photo...');
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          />

          <KeyboardAvoidingView
            style={styles.formWrapper}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <View style={styles.photoWrapper}>
              <View style={styles.photoUser}>
                {photo ? (
                  <Image source={{ uri: photo }} style={styles.photoUser} />
                ) : (
                  <TouchableOpacity
                    onPress={handleChoosePhoto}
                    style={styles.photoUserButton}
                  >
                    <Icon name="pluscircleo" size={25} color="#FF6C00" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <RegistrationInput
              keyboard={keyboard}
              userReg={data => setUserRegData(data)}
            />
            {keyboardStatus === 'hidden' && (
              <RegistrationButton userRegData={userRegData} />
            )}
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default RegistrationScreen;
