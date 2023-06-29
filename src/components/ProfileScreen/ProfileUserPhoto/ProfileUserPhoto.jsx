import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './ProfileUserPhotoStyles';
import fireBaseOperations from '../../../redux/firestore/fireBaseOperations';
import { useDispatch } from 'react-redux';
import { useFireBase } from '../../../hooks/useFireBase';

const ProfileUserPhoto = () => {
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState(null);
  const { userAvatar, userPost, user } = useFireBase();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
    })();
  }, []);

  const editPhotoUser = () => {
    const newPhotoUser = {
      userAvatar: null,
      userEmail: user.userEmail,
      userName: user.userName,
      userPosts: user.userPosts,

    };
    dispatch(fireBaseOperations.updateDataPhotoUser(newPhotoUser));
    dispatch(fireBaseOperations.getDataFromFirestore());
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
      const newPhotoUser = {
        userAvatar: result.assets[0].uri,
        userEmail: user.userEmail,
        userName: user.userName,
        userPosts: user.userPosts,

      };
      dispatch(fireBaseOperations.updateDataPhotoUser(newPhotoUser));
      dispatch(fireBaseOperations.getDataFromFirestore());
    }
  };

  return (
    <>
      {userAvatar ? (
        <Image source={{ uri: userAvatar }} style={styles.photoUser} />
      ) : (
        <View style={styles.photoUser}></View>
      )}
      {userAvatar ? (
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

export default ProfileUserPhoto;
