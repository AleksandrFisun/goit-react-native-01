import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './RegistrationUserPhotoStyles';

const RegistrationUserPhoto = ({ onPhoto, userPhoto }) => {
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState(null);

  useEffect(() => {
    (async () => {
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
    })();
  }, []);

  const editPhotoUser = () => {
    onPhoto(null);
  };
  const uploadPhoto = async () => {
    if (!hasMediaLibraryPermission) {
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.canceled) {
      return;
    } else {
      onPhoto(result.assets[0].uri);
    }
  };

  return (
    <>
      {userPhoto ? (
        <Image source={{ uri: userPhoto }} style={styles.photoUser} />
      ) : (
        <View style={styles.photoUser}></View>
      )}
      {userPhoto ? (
        <TouchableOpacity
          onPress={editPhotoUser}
          style={styles.photoUserButton}
        >
          <Icon name="closecircleo" size={25} color="#E8E8E8" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={uploadPhoto} style={styles.photoUserButton}>
          <Icon name="pluscircleo" size={25} color="#FF6C00" />
        </TouchableOpacity>
      )}
    </>
  );
};

export default RegistrationUserPhoto;
