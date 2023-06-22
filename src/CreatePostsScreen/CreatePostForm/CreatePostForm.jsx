import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import IconFeather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from './CreatePostFormStyles';

const CreatePostForm = ({ newStatusKeybord, postPhoto }) => {
  const [namePost, setNamePost] = useState('');
  const [locationPost, setLocationPost] = useState('');
  const [dataPost, setDataPost] = useState([]);
  const [location, setLocation] = useState(null);
  const [locationTextCreatePostStyle, setLocationTextCreatePostStyle] =
    useState({});

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [buttonCreatePostStyle, setButtonCreatePostStyle] = useState(
    styles.buttonCreatePostDisabled
  );
  const [buttonTextCreatePostStyle, setButtonTextCreatePostStyle] = useState(
    styles.buttonCreatePostTextDisabled
  );

  const navigation = useNavigation();
  let apiKey = 'AIzaSyDeYH8S_mg3oSJnzH89fIwlWvNu1mNulCg';

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      Location.setGoogleApiKey(apiKey);
      let location = await Location.getCurrentPositionAsync();
      let regionName = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      const cityName = {
        city: regionName[0].city,
        country: regionName[0].country,
      };
      setLocationTextCreatePostStyle(cityName);
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (
      namePost.length === 0 ||
      locationPost.length === 0 ||
      postPhoto === null
    ) {
      setButtonCreatePostStyle(styles.buttonCreatePostDisabled);
      setButtonTextCreatePostStyle(styles.buttonCreatePostTextDisabled);
      return;
    }
    setButtonCreatePostStyle(styles.buttonCreatePostActive);
    setButtonTextCreatePostStyle(styles.buttonCreatePostText);
  }, [namePost, locationPost, postPhoto]);

  useEffect(() => {
    newStatusKeybord(keyboardStatus);
  }, [keyboardStatus]);
  //
  useEffect(() => {
    const data = {
      namePost,
      locationPost,
      postPhoto,
      location,
    };
    setDataPost(data);
  }, [namePost, locationPost, postPhoto, location]);

  //
  const onKeyboard = () => {
    setKeyboardStatus(true);
  };
  const onBlur = () => {
    setKeyboardStatus(false);
  };
  const createPost = () => {
    if (
      namePost.length === 0 ||
      locationPost.length === 0 ||
      postPhoto === null
    ) {
      alert('Заполните все поля');
      return;
    }

    navigation.navigate('Posts', { dataPost });
  };
  const onPressPinLocation = () => {
    if (locationTextCreatePostStyle) {
      setLocationPost(
        `${locationTextCreatePostStyle.city}, ${locationTextCreatePostStyle.country}`
      );
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.createPostKeyboar}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.createPostInputWrapper}>
        <TextInput
          placeholder="Назва..."
          inputMode="text"
          onFocus={onKeyboard}
          onBlur={onBlur}
          style={styles.createPostInput}
          onChangeText={setNamePost}
          value={namePost}
        />
        <View>
          <Pressable
            onPress={onPressPinLocation}
            style={{ position: 'relative', zIndex: 100 }}
          >
            <IconFeather name="map-pin" style={styles.createPostInputIcon} />
          </Pressable>

          <TextInput
            placeholder={'Місцевість...'}
            inputMode="text"
            onFocus={onKeyboard}
            onBlur={onBlur}
            style={styles.createPostInputLocation}
            onChangeText={setLocationPost}
            value={locationPost}
          />
        </View>
      </View>
      <Pressable
        style={buttonCreatePostStyle}
        disabled={
          namePost.length === 0 ||
          locationPost.length === 0 ||
          postPhoto === null
        }
        onPress={createPost}
      >
        <Text style={buttonTextCreatePostStyle}>Опубліковати</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default CreatePostForm;
