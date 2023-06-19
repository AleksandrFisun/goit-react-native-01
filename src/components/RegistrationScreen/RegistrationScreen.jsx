import { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import { styles } from './RegistrationScreenStyles';
import RegistrationInput from './RegistrationInput/RegistrationInput';
import RegistrationButton from './RegistrationButton/RegistrationButton';
import Icon from 'react-native-vector-icons/AntDesign';
import image from '../../../assets/img/HomeBG.jpg';
import userImg from '../../../assets/img/User.jpg';

const RegistrationScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState('hidden');
  const [photo, setPhoto] = useState(null);
  const [userRegData, setUserRegData] = useState({});
  const keyboard = e => {
    setKeyboardStatus(e);
  };

  const handleChoosePhotoPlus = () => {
    setPhoto(userImg);
  };
  const handleChoosePhotoMinus = () => {
    setPhoto(null);
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
                  <Image source={photo} style={styles.photoUser} />
                ) : (
                  <View style={styles.photoUser}></View>
                )}
                {photo ? (
                  <TouchableOpacity
                    onPress={handleChoosePhotoMinus}
                    style={styles.photoUserButton}
                  >
                    <Icon name="closecircleo" size={25} color="#E8E8E8" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={handleChoosePhotoPlus}
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
