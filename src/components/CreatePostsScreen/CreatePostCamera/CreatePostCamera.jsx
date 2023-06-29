import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import { styles } from './CreatePostsCameraStyles';

const CreatePostCamera = ({ keyboardStatus, userPhoto, removePost }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [newPhotoUser, setNewPhotoUser] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasPermission(cameraPermission.status === 'granted');
      setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
    })();
  }, []);
  useEffect(() => {
    setNewPhotoUser(null);
  }, [removePost]);

  const clickPhoto = async () => {
    if (!hasPermission) {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();

      setHasPermission(cameraPermission.status === 'granted');

      return;
    }
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setNewPhotoUser(uri);
      userPhoto(uri);
    }
  };

  const editPhotoUser = () => {
    setNewPhotoUser(null);
    userPhoto(null);
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
      setNewPhotoUser(result.assets[0].uri);
      userPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.createPostPhotoWrapper}>
      <View
        style={
          keyboardStatus ? styles.createPostPhotoMin : styles.createPostPhoto
        }
      >
        {newPhotoUser === null ? (
          <Camera style={styles.camera} type={type} ref={setCameraRef}>
            <View style={styles.photoView}>
              <TouchableOpacity
                style={styles.flipContainer}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <IconIonicons
                  name="camera-reverse-outline"
                  size={24}
                  color="#BDBDBD"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={clickPhoto}>
                <View
                  style={[
                    styles.createPostPhotoIcon,
                    hasPermission
                      ? { backgroundColor: '#F6F6F6' }
                      : { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
                  ]}
                >
                  <Icon name="photo-camera" size={24} color="#BDBDBD" />
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        ) : (
          <View style={styles.photoView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setNewPhotoUser(null);
                userPhoto(null);
              }}
            >
              <View
                style={[
                  styles.createPostPhotoIcon,
                  hasPermission
                    ? { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
                    : { backgroundColor: '#F6F6F6' },
                ]}
              >
                <Icon name="photo-camera" size={24} color="#BDBDBD" />
              </View>
            </TouchableOpacity>
            <Image
              source={{ uri: newPhotoUser }}
              style={[{ width: '100%', height: '100%', borderRadius: 8 }]}
            />
          </View>
        )}
      </View>
      {newPhotoUser ? (
        <TouchableOpacity onPress={editPhotoUser}>
          <Text style={styles.createPostPhotoText}>Редагувати фото</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={uploadPhoto}>
          <Text style={styles.createPostPhotoText}>Завантажте фото</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CreatePostCamera;
